import keyboardKeys from "./modules/keyboardKeys";
import "./assets/stylesheets/reset.css";
import "./assets/stylesheets/style.css";

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

  function init(arr, row, arrShift, arrCode) {
    let out = '';
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == 'backspace') {
        out += `<div class="rows__key backspace" data-key="${arrCode[i]}">
                <span class="key__lang_active">${arr[i]}</span>
              </div>`;
      } else if (arr[i] == 'del') {
        out += `<div class="rows__key del" data-key="${arrCode[i]}">
                <span class="key__lang_active">${arr[i]}</span>
              </div>`;
      } else if (arr[i] == 'whitespace') {
        out += `<div class="rows__key whitespace" data-key="${arrCode[i]}"></div>`;
      } else if (arr[i] == 'enter') {
        out += `<div class="rows__key enter" data-key="${arrCode[i]}">
                <span class="key__lang_active">${arr[i]}</span>
              </div>`;
      } else if (arr[i] == 'shiftLeft') {
        out += `<div class="rows__key shift-left" data-key="${arrCode[i]}">
                <span class="key__lang_active">shift</span>
              </div>`;
      } else if (arr[i] == 'shiftRight') {
        out += `<div class="rows__key shift-right" data-key="${arrCode[i]}">
                <span class="key__lang_active">shift</span>
              </div>`;
      } else if (arr[i] == 'caps') {
        out += `<div class="rows__key capslock" data-key="${arrCode[i]}">
                <span class="key__lang_active">${arr[i]}</span>
              </div>`;
      } else if (arr[i] == 'tab') {
        out += `<div class="rows__key tab" data-key="${arrCode[i]}">
                <span class="key__lang_active">${arr[i]}</span>
              </div>`;
      } else if (arr[i] == 'ctrl') {
        out += `<div class="rows__key ctrl" data-key="${arrCode[i]}">
                <span class="key__lang_active">${arr[i]}</span>
              </div>`;
      } else if (arr[i] == 'alt') {
        out += `<div class="rows__key alt" data-key="${arrCode[i]}">
                <span class="key__lang_active">${arr[i]}</span>
              </div>`;
      } else if (arr[i] == 'start') {
        out += `<div class="rows__key start" data-key="${arrCode[i]}">
                <span class="key__lang_active">${arr[i]}</span>
              </div>`;
      } else if (arr[i] == 'fn') {
        out += `<div class="rows__key fn" data-key="${arrCode[i]}">
                <span class="key__lang_active">${arr[i]}</span>
              </div>`;
      } else if (arr[i] == '↑' || arr[i] == '←' || arr[i] == '↓' || arr[i] == '→') {
        out += `<div class="rows__key arrows" data-key="${arrCode[i]}">
                <span class="key__lang_active">${arr[i]}</span>
              </div>`;
      } else {
        out += `<div class="rows__key key-letters" data-key="${arrCode[i]}">
                  <sup class="key__lang_shift">${arrShift[i]}</sup>
                  <span class="key__lang_active">${arr[i]}</span>
                </div>`;
      }
    }
    row.innerHTML = out;
  }

  function createKey() {
    for (let key in keyboardKeys) { 
      if (key == 'firstKeysRow') {
        init(keyboardKeys[key], keysRowOne, keyboardKeys.firstKeysRowShift, keyboardKeys.firstKeysRowCode);
      }
      if (key == 'secondKeysRow') {
        init(keyboardKeys[key], keysRowTwo, keyboardKeys.secondKeysRowShift, keyboardKeys.secondKeysRowCode);
      }
      if (key == 'thirdKeysRow') {
        init(keyboardKeys[key], keysRowThree, keyboardKeys.thirdKeysRowShift, keyboardKeys.thirdKeysRowCode);
      }
      if (key == 'fourthKeysRow') {
        init(keyboardKeys[key], keysRowFour, keyboardKeys.fourthKeysRowShift, keyboardKeys.fourthKeysRowCode);
      }
      if (key == 'fifthKeysRow') {
        init(keyboardKeys[key], keysRowFive, null, keyboardKeys.fifthKeysRowCode);
      }
    }
  }
  createKey();

  let keys = document.querySelectorAll('.rows__key');

  //Mouse event

  function writeText(code) {
    textArea.value += code;
  }

  keys.forEach(el => {
    if (el.classList.contains('capslock')) {
      el.addEventListener('mousedown', ev => {
        if (ev.currentTarget.classList.contains('_active')) {
          ev.currentTarget.classList.remove('_active');
          keys.forEach(el => el.classList.remove('capslock_active'));
        } else {
          ev.currentTarget.classList.add('_active');
          keys.forEach(el => {
            if (el.classList.contains('key-letters')) {
              el.classList.add('capslock_active');
            }
          });
        }
        ev.currentTarget.classList.add('key_active');
      });
      el.addEventListener('mouseup', ev => {
        ev.currentTarget.classList.remove('key_active');
      });
    } else {
      el.addEventListener('mousedown', ev => {
        ev.currentTarget.classList.add('key_active');
      });
      el.addEventListener('mouseup', ev => {
        ev.currentTarget.classList.remove('key_active');
      });
    }
  });

  // Keyboard event

  document.onkeydown = function (ev) {
    let key = document.querySelector(`.rows__key[data-key="${ev.code}"]`);
    console.log(key);
    writeText(key);
    if (key.classList.contains('capslock')) {
      key.classList.toggle('_active');
      key.querySelector('.key__lang_active').style.color = 'var(--btn-active)';
      keys.forEach(el => {
            if (el.classList.contains('key-letters')) {
              el.classList.toggle('capslock_active');
            }
          });
    } else if (key.classList.contains('whitespace')) {
      key.classList.add('key_active');
    } else {
      key.classList.add('key_active');
      key.querySelector('.key__lang_active').style.color = 'var(--btn-active)';
    }
    if (key.classList.contains('tab')) {
      ev.preventDefault();
    }
  };

  document.onkeyup = function (ev) {
    let key = document.querySelector(`.rows__key[data-key="${ev.code}"]`);
    if (key.classList.contains('whitespace')) {
      key.classList.remove('key_active');
    } else {
      key.classList.remove('key_active');
      key.querySelector('.key__lang_active').style.color = 'var(--font-color-light)';
    }
  };

});
