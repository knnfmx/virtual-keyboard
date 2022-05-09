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

  
  let keyboardKeys = {
    firstKeysRow: ['`', '1', '2','3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace'],
    firstKeysRowShift: ['~', '!', '@','#', '$', '%', '^', '&', '*', '(', ')', '_', '+', ''],
    secondKeysRow: ['tab', 'q', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'del', 'enter'],
    secondKeysRowShift: ['', 'Q', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '', ''],
    thirdKeysRow: ['caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', '\\'],
    thirdKeysRowShift: ['', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '\"', '|'],
    fourthKeysRow: ['shiftLeft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑','shiftRight'],
    fourthKeysRowShift: ['', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '',''],
    fifthKeysRow: ['ctrl', 'start', 'alt', 'whitespace', 'alt', 'fn', '←', '↓', '→', 'ctrl'],
    // fifthKeysRowShift: ['ctrl', 'start', 'alt', 'whitespace', 'alt', 'fn', 'left', 'down', 'right', 'ctrl'],
  };

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

  function init(arr, row, arrShift) {
    let out = '';
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == 'backspace') {
        out += `<div class="rows__key backspace">
                <span class="key__lang_active">${arr[i]}</span>
              </div>`;
      } else if (arr[i] == 'del') {
        out += `<div class="rows__key del">
                <span class="key__lang_active">${arr[i]}</span>
              </div>`;
      } else if (arr[i] == 'whitespace') {
        out += `<div class="rows__key whitespace">
              </div>`;
      } else if (arr[i] == 'enter') {
        out += `<div class="rows__key enter">
                <span class="key__lang_active">${arr[i]}</span>
              </div>`;
      } else if (arr[i] == 'shiftLeft') {
        out += `<div class="rows__key shift-left">
                <span class="key__lang_active">shift</span>
              </div>`;
      } else if (arr[i] == 'shiftRight') {
        out += `<div class="rows__key shift-right">
                <span class="key__lang_active">shift</span>
              </div>`;
      } else if (arr[i] == 'caps') {
        out += `<div class="rows__key capslock">
                <span class="key__lang_active">${arr[i]}</span>
              </div>`;
      } else if (arr[i] == 'tab') {
        out += `<div class="rows__key tab">
                <span class="key__lang_active">${arr[i]}</span>
              </div>`;
      } else if (arr[i] == 'ctrl') {
        out += `<div class="rows__key ctrl">
                <span class="key__lang_active">${arr[i]}</span>
              </div>`;
      } else if (arr[i] == 'alt') {
        out += `<div class="rows__key alt">
                <span class="key__lang_active">${arr[i]}</span>
              </div>`;
      } else if (arr[i] == 'start') {
        out += `<div class="rows__key start">
                <span class="key__lang_active">${arr[i]}</span>
              </div>`;
      } else if (arr[i] == 'fn') {
        out += `<div class="rows__key fn">
                <span class="key__lang_active">${arr[i]}</span>
              </div>`;
      } else if (arr[i] == '↑' || arr[i] == '←' || arr[i] == '↓' || arr[i] == '→') {
        out += `<div class="rows__key arrows">
                <span class="key__lang_active">${arr[i]}</span>
              </div>`;
      } else {
        out += `<div class="rows__key">
                  <sup class="key__lang_shift">${arrShift[i]}</sup>
                  <span class="key__lang_active">${arr[i]}</span>
                </div>`;
      }
    }
    row.innerHTML = out;
  }
  // TODO ADD CLASSES for other btns 
  function createKey() {
    for (let key in keyboardKeys) { 
      console.log(key);
      if (key == 'firstKeysRow') {
        init(keyboardKeys[key], keysRowOne, keyboardKeys.firstKeysRowShift);
      }
      if (key == 'secondKeysRow') {
        init(keyboardKeys[key], keysRowTwo, keyboardKeys.secondKeysRowShift);
      }
      if (key == 'thirdKeysRow') {
        init(keyboardKeys[key], keysRowThree, keyboardKeys.thirdKeysRowShift);
      }
      if (key == 'fourthKeysRow') {
        init(keyboardKeys[key], keysRowFour, keyboardKeys.fourthKeysRowShift);
      }
      if (key == 'fifthKeysRow') {
        init(keyboardKeys[key], keysRowFive, );
      }
    }
  }
  createKey();
  document.onkeydown= function (ev) {
    console.log(ev.code);
  }
});