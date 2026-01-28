const MAIL = "ufuk.sevinc@outlook.de";

// aktuelles Jahr im Footer setzen
document.getElementById("year").textContent = new Date().getFullYear();

// E-Mail kopieren Button
const copyBtn = document.getElementById("copyMail");
const statusEl = document.getElementById("copyStatus");

copyBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(MAIL);
    statusEl.textContent = "E-Mail wurde kopiert ✅";
  } catch (e) {
    statusEl.textContent = "Kopieren nicht möglich – bitte manuell markieren.";
  }
});
