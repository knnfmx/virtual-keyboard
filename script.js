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

  HEADER.appendChild(HEADER_CONTENT_WRAPPER);
  let title = document.createElement('h1');
  title.classList.add('title', 'text');
  title.innerText = "Virtual Keyboard";
  HEADER_CONTENT_WRAPPER.appendChild(title);
  let description = document.createElement('h2');
  description.classList.add('description', 'text');
  description.innerText = "Created for Windows operating system";
  HEADER_CONTENT_WRAPPER.appendChild(description);



});