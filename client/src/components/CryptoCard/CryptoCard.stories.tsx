import React from "react";
import { CryptoCard, Cryptocurrency } from "./index";

export default {
  title: "Example/CryptoCard",
  component: CryptoCard,
};
const btc: Cryptocurrency = {
  label: "bitcoin",
  desciption: "cryptocurrency",
  marketCap: 47000,
  symbol: "BTC",
  logoUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=014",
  change_24h: 2000,
  change_7d: 4000,
};
//@ts-ignore
const Template = (args) => <CryptoCard {...args} />;

export const Renders = Template.bind({});
//@ts-ignore
Renders.args = {
  crypto: btc,
};
