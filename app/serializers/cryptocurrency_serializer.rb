class CryptocurrencySerializer < ActiveModel::Serializer
  attributes :id, :label, :description, :marketCap, :symbol, :logoUrl, :change_24h, :change_7d
end
