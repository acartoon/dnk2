import { openModal, closeModal } from "./utils";

export class Modal {
  constructor(modal, removeСhoice) {
    this._modal = modal;
    this._closeBtn = null;
    this._body = null;
    this._close = this._close.bind(this);
    this._removeСhoice = removeСhoice;
  }

  init() {
    this._closeBtn = this._modal.querySelector(`[type='filter']`);
    this._modal.classList.add(`open`);
    openModal()
    this._closeBtn.addEventListener(`click`, this._close);
  }

  _close() {
    this._modal.classList.remove(`open`);
    this._removeСhoice();
    closeModal();
    this._closeBtn.removeEventListener(`click`, this._close)
  }
}