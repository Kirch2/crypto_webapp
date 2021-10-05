import * as React from "react";
export interface Cryptocurrency {
  label: string;
  desciption: string;
  marketCap: number;
  symbol: string;
  logoUrl: string;
  change_24h: number;
  change_7d: number;
}
export function CryptoCard(props: { crypto: Cryptocurrency }) {
  const { crypto } = props;
  return (
    <div className="col">
      <div className="card">
        <img
          className="card-img-top"
          src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=014"
          alt="bitcoin"
        />
      </div>
    </div>
  );
}
