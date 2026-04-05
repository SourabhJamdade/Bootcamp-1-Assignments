import { useState } from "react";

function DetectWallets() {
  const [wallets, setWallets] = useState([]);

  function handleClick() {
    const detected = [];
    if (window.phantom) {
      detected.push("phantom");
    }
    if (window.backpack) {
      detected.push("backpack");
    }
    if (window.solflare) {
      detected.push("solflare");
    }

    setWallets(detected);
  }
  return (
    <>
      <h1>Hello Wallet</h1>
      <button onClick={handleClick}>Connet Wallet</button>

      <ul>
        {wallets.map((wallet, index) => (
          <button key={index}>{wallet}</button>
        ))}
      </ul>
    </>
  );
}
export default DetectWallets;
