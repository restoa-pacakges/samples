import {
  alertCurrentCount,
  decreaseOneCount,
  increaseOneCount,
  useCount,
} from './count.services';

export function CountView() {
  const count = useCount();

  return (
    <div>
      <button onClick={increaseOneCount}>Increase 1 Count</button>
      <button onClick={decreaseOneCount}>Decrease 1 Count</button>
      <button onClick={alertCurrentCount}>Alert Current Count</button>
      <br />
      <span>{`Count: ${count}`}</span>
    </div>
  );
}
