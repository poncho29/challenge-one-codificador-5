const warningText = document.querySelector('#text-warning');
const warningIcon = document.querySelector('#icon-warning');

// Valida que el texto
export const valideText = (text) => {
  if (!text) return;

  const regex = new RegExp(/^[a-z ]+$/);
  if (!regex.test(text)) {
    warningIcon.style.fill = '#FF0000';
    warningText.style.color = '#FF0000';
    warningText.style.fontSize = '16px';
    return true;
  } else {
    warningIcon.style.fill = null;
    warningText.style.color = null;
    warningText.style.fontSize = null;
    return false;
  }
}

// Capturando el texto para encriptar
export const encryptText = (text) => {
  if (!text) return;

  const regex = new RegExp(/[aeiou]/, 'g');
  const newText = text.replace(regex, (e) => {
    if (e === 'a') return 'ai';
    if (e === 'e') return 'enter';
    if (e === 'i') return 'imes';
    if (e === 'o') return 'ober';
    if (e === 'u') return 'ufat';
  });

  return newText;
}