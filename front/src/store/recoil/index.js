import { atom } from 'recoil';

export const searchToggleState = atom({
  key: 'searchToggleState',
  default: false,
});
export const chatModalToggleState = atom({
  key: 'chatModalToggleState',
  default: false,
});
export const friendModalToggleState = atom({
  key: 'friendModalToggleState',
  default: false,
});
