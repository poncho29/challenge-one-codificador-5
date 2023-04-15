import { createCard } from "./functions.js";
import { valideText, encryptText } from "./utils.js";

// Obteniendo elementos del DOM
const textarea = document.querySelector('#text');
const btnEncrypt = document.querySelector('#encrypt');
const btnDecrypt = document.querySelector('#decrypt');
const emptyList = document.querySelector('#empty-list');
const textList = document.querySelector('#text-list');

const encryptedTexts = [];

// Verifica si hay textos al momento de iniciar
document.addEventListener('DOMContentLoaded', () => {
  // const list = localStorage.getItem('listText');

  // if (list) {
  //   emptyList.style.display = 'none';
  // }

  if (encryptedTexts.length > 0) {
    emptyList.style.display = 'none';
  }
});

// Encritptar texto y agregarlo a la lista
const addEncryptedText = () => {
  const text = textarea.value;
  if (valideText(text)) return;

  const encryptedText = encryptText(text);
  const newCard = createCard(encryptedText);
  textList.appendChild(newCard);

  textarea.value = '';

  if (encryptedTexts.length <= 1) {
    emptyList.style.display = 'none';
  }
}

btnEncrypt.addEventListener('click', addEncryptedText);