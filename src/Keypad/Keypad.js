import './keypad.css'

const Keyboard = () => {
  return (
    <div className="calculator-keypad">
      <div className="input-keys">
        <div className="function-keys">
          <button className="calculator-key key-clear">C</button>
          <button className="calculator-key key-less">&#60;</button>
          <button className="calculator-key key-division">/</button>
        </div>
        <div className="digit-keys">
          <button className="calculator-key key-0">0</button>
          <button className="calculator-key key-dot">&#8901;</button>
          <button className="calculator-key key-1">1</button>
          <button className="calculator-key key-2">2</button>
          <button className="calculator-key key-3">3</button>
          <button className="calculator-key key-4">4</button>
          <button className="calculator-key key-5">5</button>
          <button className="calculator-key key-6">6</button>
          <button className="calculator-key key-7">7</button>
          <button className="calculator-key key-8">8</button>
          <button className="calculator-key key-9">9</button>
        </div>
      </div>
      <div className="operator-keys">
        <button className="calculator-key key-multiply">×</button>
        <button className="calculator-key key-subtract">-</button>
        <button className="calculator-key key-add">+</button>
        <button className="calculator-key key-equals">=</button>
      </div>
    </div>
  );
};

export default Keyboard;
