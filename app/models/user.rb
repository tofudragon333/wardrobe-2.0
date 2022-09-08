class User < ApplicationRecord
    has_many :clothing_article
    has_many :wishlist_items, through: :clothing_article
    has_secure_password

    # validates :username, uniqueness: true
end
