const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

buttonEl.addEventListener('click', () => {
    const value = inputEl.value;
    const listItemEl = document.createElement('li');
    listItemEl.textContent = value;
    listEl.append(listItemEl);
    inputEl.value = '';
})
