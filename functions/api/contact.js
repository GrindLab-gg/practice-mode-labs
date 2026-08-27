const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { "Content-Type": "application/json; charset=utf-8" },
});

export async function onRequestPost({ request, env }) {
  if (!request.headers.get("content-type")?.includes("application/json")) {
    return json({ error: "Send this form as JSON." }, 415);
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 5000) return json({ error: "That message is too long." }, 413);

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "That submission could not be read." }, 400);
  }

  const email = String(body.email || "").trim().toLowerCase();
  const message = String(body.message || "").trim();
  const website = String(body.website || "").trim();

  if (website) return json({ ok: true });
  if (!emailPattern.test(email) || email.length > 254) return json({ error: "Enter a valid email address." }, 400);
  if (message.length < 12 || message.length > 1800) return json({ error: "Tell us a little more about the workflow." }, 400);
  if (!env.CONTACT_EMAIL?.send) return json({ error: "Email delivery is still being connected. Please try again soon." }, 503);

  try {
    await env.CONTACT_EMAIL.send({
      to: "team@dynastycentral.gg",
      from: { email: "website@practicemodelabs.com", name: "Practice Mode Labs" },
      replyTo: email,
      subject: "New game workflow from Practice Mode Labs",
      text: `From: ${email}\n\n${message}`,
      html: `<p><strong>From:</strong> ${escapeHtml(email)}</p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    });
    return json({ ok: true });
  } catch {
    return json({ error: "We couldn’t deliver that message. Please try again." }, 502);
  }
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[character]);
}
