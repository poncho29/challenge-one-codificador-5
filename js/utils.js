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

export const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Error al copiar al portapapeles:', err);
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

// Capturando el texto para encriptar
export const decryptText = (text) => {
  if (!text) return;

  const regex = new RegExp(/ai|enter|imes|ober|ufat/, 'g');
  const newText = text.replace(regex, (e) => {
    if (e === 'ai') return 'a';
    if (e === 'enter') return 'e';
    if (e === 'imes') return 'i';
    if (e === 'ober') return 'o';
    if (e === 'ufat') return 'u';
  });

  return newText;
}

// Crear la card con el texto ecriptado
export const createCard = (text) => {
  const div = document.createElement('div');
  const span = document.createElement('span');
  const button  = document.createElement('button');

  div.classList.add('card-text');
  span.classList.add('encrypted-text');
  button.classList.add('btn-secondary');
  span.textContent = text || '';
  button.textContent = 'Copiar';
  span.id = 'text-card';
  button.id = 'btn-copy';

  div.appendChild(span);
  div.appendChild(button);
  return div;
}