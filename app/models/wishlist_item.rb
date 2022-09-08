class WishlistItem < ApplicationRecord
    belongs_to :user
    belongs_to :clothing_article
end
