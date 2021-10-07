# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# # # # # 
# Seed Cryptocurrency Data

btc = Cryptocurrency.create({
    label: "Bitcoin",
    description: "#1 crypto",
    marketCap: 966492,
    price: 51510.55,
    symbol: "BTC",
    logoUrl: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=014",
    change_24h: 2241.5,
    change_7d: 9264.5,
})

eth = Cryptocurrency.create({
    label: "Ethereum",
    description: "#2 crypto",
    marketCap: 413941,
    price: 3524.56,
    symbol: "ETH",
    logoUrl: "https://ethereum.org/static/4b5288012dc4b32ae7ff21fccac98de1/31987/eth-diamond-black-gray.png",
    change_24h: 133.26,
    change_7d: 521.05,
})

bnb = Cryptocurrency.create({
    label: "Binance Coin",
    description: "#3 crypto",
    marketCap: 74368,
    price: 441.91,
    symbol: "BNB",
    logoUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
    change_24h: 16.06,
    change_7d: 46.50,
})

# # # # # 
# Seed User data
user01 = User.create({
    username: "aeksco",
    email: "aeksco@gmail.com"
})

user02 = User.create({
    username: "ckirch",
    email: "ckirch@gmail.com"
})


# # # # # 
# Seed Watchlist data
watchlist01 = Watchlist.create({
    label: "My first watchlist",
    description: "#4 crypto",
    private: true,
    dailyPerformance: 5.5,
    user_id: 1

})

watchlist02 = Watchlist.create({
    label: "My second watchlist",
    description: "#5 crypto",
    private: false,
    dailyPerformance: 2.5,
    user_id: 2
})

# # # # # 
# Seed WatchlistEntry Data
WatchlistEntry.create({
    watchlist_id: 1,
    cryptocurrency_id: 1
})

WatchlistEntry.create({
    watchlist_id: 1,
    cryptocurrency_id: 2
})

WatchlistEntry.create({
    watchlist_id: 2,
    cryptocurrency_id: 1
})
