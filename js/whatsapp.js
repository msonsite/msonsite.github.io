const WHATSAPP_PHONE = "32491150887";

/**
 * Bouwt een gestructureerd WhatsApp-bericht op
 */
const buildWhatsAppURL = (name, project, message) => {
  // Eventueel kan je extra velden toevoegen als je wilt
  const encodedMessage = encodeURIComponent(
    `📩 *Nieuw contactformulier ontvangen!*\n\n` +
    `──────────────────────────\n` +
    `👤 *Naam:* ${name}\n` +
    `📝 *Onderwerp:* ${project}\n` +
    `💬 *Bericht:*\n${message}\n` +
    `──────────────────────────\n` +
    `⏱️ *Verzonden op:* ${new Date().toLocaleString()}`
  );
  
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodedMessage}`;
};

/**
 * Handler voor het submitten van het formulier
 */
const handleWhatsAppFormSubmit = (e) => {
  e.preventDefault();

  const name    = document.getElementById("name").value.trim();
  const project = document.getElementById("project").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !project || !message) {
    alert("Vul alle verplichte velden in: Naam, Onderwerp, Bericht!");
    return;
  }

  const url = buildWhatsAppURL(name, project, message);
  window.open(url, "_blank");
};

// Event listener koppelen
document
  .getElementById("whatsappForm")
  .addEventListener("submit", handleWhatsAppFormSubmit);
