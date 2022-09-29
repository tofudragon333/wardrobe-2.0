class User < ApplicationRecord
    has_many :clothing_articles
    has_many :outfits
    has_many :wishlist_items, through: :clothing_articles
    has_secure_password

    # validates :username, uniqueness: true
end
