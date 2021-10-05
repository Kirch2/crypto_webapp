class Watchlist < ApplicationRecord
  belongs_to :user
  has_many :watchlist_entry
  validates :name, :description, presence: true
end
