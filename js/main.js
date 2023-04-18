import { valideText, encryptText, copyText, createCard, decryptText } from "./utils.js";

// Obteniendo elementos del DOM
const textarea = document.querySelector('#text');
const btnEncrypt = document.querySelector('#encrypt');
const btnDecrypt = document.querySelector('#decrypt');
const emptyList = document.querySelector('#empty-list');
const textList = document.querySelector('#text-list');

// Encritptar texto y agregarlo a la lista
const addEncryptedText = () => {
  const text = textarea.value;
  if (valideText(text)) return;

  const result = encryptText(text);
  const card = createCard(result);
  textList.innerHTML = "";
  textList.appendChild(card);

  textarea.value = '';
  emptyList.style.display = 'none';

  const textCard = document.querySelector('#text-card');
  const copyBtn = document.querySelector('#btn-copy');

  // Agregar un controlador de eventos de clic al botón
  copyBtn.addEventListener('click', async() => {
    const copied = await copyText(textCard.textContent);

    if (copied) {
      copyBtn.textContent = 'Copiado!';
      setTimeout(() => {
        copyBtn.textContent = 'Copiar';
      }, 1000);
    }
  });
}

const addDecryptedText = () => {
  const text = textarea.value;
  if (valideText(text)) return;

  const result = decryptText(text);
  const card = createCard(result);
  textList.innerHTML = "";
  textList.appendChild(card);

  textarea.value = '';
  emptyList.style.display = 'none';

  const textCard = document.querySelector('#text-card');
  const copyBtn = document.querySelector('#btn-copy');

  // Agregar un controlador de eventos de clic al botón
  copyBtn.addEventListener('click', async() => {
    const copied = await copyText(textCard.textContent);

    if (copied) {
      copyBtn.textContent = 'Copiado!';
      setTimeout(() => {
        copyBtn.textContent = 'Copiar';
      }, 1000);
    }
  });
}

btnEncrypt.addEventListener('click', addEncryptedText);
btnDecrypt.addEventListener('click', addDecryptedText);