(() => {
  const dialog = document.getElementById("steward-contact");
  const form = document.getElementById("steward-contact-form");
  const error = dialog.querySelector(".formError");
  const success = dialog.querySelector(".formSuccess");
  const submit = form.querySelector('[type="submit"]');
  let opener;
  let previousOverflow;

  document.querySelectorAll("[data-contact]").forEach((button) => {
    button.addEventListener("click", () => {
      opener = button;
      form.hidden = false;
      success.hidden = true;
      error.hidden = true;
      form.elements.interest.value = button.dataset.contact;
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      dialog.showModal();
    });
  });
  dialog.querySelector(".contactClose").addEventListener("click", () => dialog.close());
  document.getElementById("contact-done").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
  });
  dialog.addEventListener("close", () => {
    document.body.style.overflow = previousOverflow;
    opener?.focus();
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (submit.disabled) return;
    error.hidden = true;
    const data = Object.fromEntries(new FormData(form));
    if (!data.name.trim()) {
      form.elements.name.setCustomValidity("Please enter your name.");
      form.elements.name.reportValidity();
      return;
    }
    submit.disabled = true;
    submit.textContent = "Sending…";
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          name: data.name.trim(),
          email: data.email.trim(),
          organization: data.organization.trim() || null,
          interest: `Steward — ${data.interest}`,
          message: data.message.trim() || null,
          source: "steward",
        }),
      });
      if (response.status !== 201) throw new Error("Contact submission failed");
      form.reset();
      form.hidden = true;
      success.hidden = false;
      document.getElementById("contact-done").focus();
    } catch {
      error.hidden = false;
    } finally {
      clearTimeout(timeout);
      submit.disabled = false;
      submit.textContent = "Send message";
    }
  });
  form.elements.name.addEventListener("input", () => form.elements.name.setCustomValidity(""));
})();
