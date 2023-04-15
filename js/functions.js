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
  button.id = 'btn-copy';

  div.appendChild(span);
  div.appendChild(button);
  return div;
}