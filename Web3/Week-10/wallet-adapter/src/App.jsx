import { useEffect, useMemo, useState } from "react";
import {
  ConnectionProvider,
  useConnection,
  useWallet,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";

// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";

function App() {
  //const endpoint = "https://api.mainnet-beta.solana.com";
  const endpoint = "https://api.devnet.solana.com";
  //const wallets = useMemo(() => [new UnsafeBurnerWalletAdapter(), new PhantomWalletAdapter()], [endpoint]); // in old code need to specify user to which wallet to support e.g => new PhantomWalletAdapter()

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <TopBar />
          <Portfolio />
          <SendSol />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
function TopBar() {
  const { publicKey } = useWallet();
  return (
    <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
      {!publicKey && <WalletMultiButton />}
      {publicKey && <WalletDisconnectButton />}
    </div>
  );
}

function Portfolio() {
  const { publicKey } = useWallet();
  const { connection } = useConnection(); // const conncetion = new connection("url")
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    if (publicKey) {
      connection
        .getBalance(publicKey)
        .then((bal) => setBalance(bal / 1_000_000_000));
    }
  }, [publicKey]);

  return (
    <>
      {publicKey && (
        <>
          <h2>Address : {publicKey?.toString()}</h2>
          <h2>Balance : {balance} SOL</h2>
        </>
      )}
    </>
  );
}

function SendSol() {
  //const wallet = useWallet();
  const { publicKey, sendTransaction } = useWallet();
  const { connection } = useConnection();

  async function sendTokens() {
    let to = document.getElementById("address").value;
    let amount = document.getElementById("amount").value;
    const transaction = new Transaction();
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: new PublicKey(to),
        lamports: amount * LAMPORTS_PER_SOL,
      }),
    );

    //await wallet.sendTransaction(transaction, connection);
    await sendTransaction(transaction, connection);
    alert("Sent " + amount + " SOL to " + to);
  }

  return (
    <>
      <input
        type="text"
        name="address"
        id="address"
        placeholder="Wallet Address"
      />
      <br />
      <input type="text" name="amount" id="amount" placeholder="Sol Amount" />
      <br />
      <br />
      <button onClick={sendTokens}>Send SOL</button>
    </>
  );
}
export default App;
