import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
const ReactCreditCardDemo = () => {
  const [number, setNumber] = useState("");
  const [name, setname] = useState("");
  const [expiry, setexpiry] = useState("");
  const [cvc, setcvc] = useState("");
  const [focus, setfocus] = useState("");
  return (
    <div>
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <form>
        <input
          type="text"
          name="number"
          placeholder="Card Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setfocus(e.target.name)}
        />

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          onFocus={(e) => setfocus(e.target.name)}
        />

        <input
          type="text"
          name="expiry"
          placeholder="MM/YY Expiry"
          value={expiry}
          onChange={(e) => setexpiry(e.target.value)}
          onFocus={(e) => setfocus(e.target.name)}
        />

        <input
          type="text"
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => setcvc(e.target.value)}
          onFocus={(e) => setfocus(e.target.name)}
        />
      </form>
    </div>
  );
};

export default ReactCreditCardDemo;
