class ClothingArticle < ApplicationRecord
    belongs_to :user
    # belongs_to :wishlist_item
    belongs_to :donation_site

    validates :name, uniqueness: true
end
