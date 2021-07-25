import { createStore } from 'restoa';
import { Count } from './Count';

export const [useCount, setCount, getCount] = createStore<Count>(0);

export function increaseOneCount() {
  setCount(count => count + 1);
}
export function decreaseOneCount() {
  setCount(count => count - 1);
}
export function alertCurrentCount() {
  alert(`Current Count: ${getCount()}`);
}
