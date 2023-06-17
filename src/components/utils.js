export function setStatusButton({ buttonEl, text, disabled }) {
  if (disabled) {
    buttonEl.disabled = true;
  } else buttonEl.disabled = false;
  buttonEl.textContent = text;
}
