'use babel';
const io = require('socket.io-client');

export default class TrueautomationAtomView {

  constructor(serializedState) {
    // Create root element
    this.element = document.createElement('div');
    this.element.classList.add('ta-modal');

    // Create message element
    this.message = document.createElement('div');
    this.message.textContent = 'NO TEXT';
    this.message.classList.add('ta-modal-message');

    const ideServerUrl = 'http://localhost:9898';
    const socket = io(ideServerUrl);
    socket.on('taElementSelected', () => {
      this.doneCallback();
    });
    this.element.appendChild(this.message);
  }

  setDoneCallback(callback) {
    this.doneCallback = callback;
  }

  setText(text) {
    this.message.textContent = text;
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
