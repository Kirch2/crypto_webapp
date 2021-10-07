import * as React from "react";
import { Cryptocurrency } from "../CryptoFetcher";

export function CryptoCard(props: { crypto: Cryptocurrency }) {
  const { crypto } = props;
  let priceBadgeCss = "badge bg-success";
  if (crypto.change_24h < 0) {
    priceBadgeCss = "badge bg-danger";
  }
  return (
    <div className="list-group-item d-flex align-items-center">
      <img
        width="50"
        className="d-flex"
        src={crypto.logoUrl}
        alt={crypto.label}
      />
      <p className="fs-3 px-3 mb-0">{crypto.label} </p>
      <div className="badge bg-dark mx-3">{crypto.symbol}</div>
      <div className={priceBadgeCss}>{crypto.price}</div>
    </div>
  );
}
