class ClothingArticle < ApplicationRecord
    belongs_to :user
    # belongs_to :wishlist_item
    belongs_to :donation_site

    validates :name, uniqueness: true
    validates :last_worn_date, numericality: true;
    validates :last_worn_date, length: {is: 8 }

end
