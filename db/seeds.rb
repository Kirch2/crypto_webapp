# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# cryptos
btc = Cryptocurrency.create({
    label: "Bitcoin",
    description: "#1 crypto",
    marketCap: 966492536879,
    price:,
    symbol: "BTC",
    logoUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=014",
    change_24h: 2241.5,
    change_7d: 9264.5,
})

eth = Cryptocurrency.create({
    label: "Ethereum",
    description: "#2 crypto",
    marketCap: 413941442906,
    price:,
    symbol: "ETH",
    logoUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
    change_24h: 133.26,
    change_7d: 521.05,
})

bnb = Cryptocurrency.create({
    label: "Binance Coin",
    description: "#3 crypto",
    marketCap: 74368033088,
    price:,
    symbol: "BNB",
    logoUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
    change_24h: 16.06 ,
    change_7d: 46.50,
})