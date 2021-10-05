import * as React from "react";

export interface Cryptocurrency {
  id: number;
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
        <img className="card-img-top" src={crypto.logoUrl} alt={crypto.label} />
        <p>{crypto.label}</p>
        <p>{crypto.symbol}</p>
      </div>
    </div>
  );
}
