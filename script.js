document.addEventListener('DOMContentLoaded', () => {
  const BODY = document.querySelector('body');
  BODY.classList.add('body');
  const HEADER = document.createElement('header');
  HEADER.classList.add('header');
  const MAIN = document.createElement('main');
  const HEADER_CONTENT_WRAPPER = document.createElement('div');
  const MAIN_CONTENT_WRAPPER = document.createElement('div');
  HEADER_CONTENT_WRAPPER.classList.add('content-wrapper');
  MAIN_CONTENT_WRAPPER.classList.add('content-wrapper');
  BODY.prepend(HEADER);
  HEADER.after(MAIN);

  HEADER.append(HEADER_CONTENT_WRAPPER);

  let title = document.createElement('h1');
  title.classList.add('title', 'text');
  title.innerText = "Virtual Keyboard";
  HEADER_CONTENT_WRAPPER.append(title);

  let description = document.createElement('h2');
  description.classList.add('description', 'text');
  description.innerText = "Created for Windows operating system";
  HEADER_CONTENT_WRAPPER.append(description);

  MAIN.append(MAIN_CONTENT_WRAPPER);

  let textArea = document.createElement('textarea');
  textArea.id = 'textarea';
  textArea.setAttribute('autofocus', true);
  textArea.classList.add('textarea');
  MAIN_CONTENT_WRAPPER.append(textArea);

  let keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  MAIN_CONTENT_WRAPPER.append(keyboard);

  let keysRowOne = document.createElement('div');
  keysRowOne.classList.add('keyboard__rows');

  let keysRowTwo = document.createElement('div');
  keysRowTwo.classList.add('keyboard__rows');

  let keysRowThree = document.createElement('div');
  keysRowThree.classList.add('keyboard__rows');

  let keysRowFour = document.createElement('div');
  keysRowFour.classList.add('keyboard__rows');

  let keysRowFive = document.createElement('div');
  keysRowFive.classList.add('keyboard__rows');

  keyboard.append(keysRowOne, keysRowTwo, keysRowThree, keysRowFour, keysRowFive);



});