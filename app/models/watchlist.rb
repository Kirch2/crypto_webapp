class Watchlist < ApplicationRecord
  belongs_to :user
  has_many :watchlist_entry
  validates :label, :description, presence: true
end
