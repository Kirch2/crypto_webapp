import { CryptoCard } from "../components/CryptoCard";
import { Cryptocurrency } from "../components/CryptoCard";

const btc: Cryptocurrency = {
  label: "bitcoin",
  desciption: "cryptocurrency",
  marketCap: 47000,
  symbol: "BTC",
  logoUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=014",
  change_24h: 2000,
  change_7d: 4000,
};
export function CryptoList() {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
      <CryptoCard crypto={btc} />
    </div>
  );
}
