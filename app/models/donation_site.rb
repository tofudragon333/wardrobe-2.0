class DonationSite < ApplicationRecord
    has_many :clothing_articles
    has_many :users, through: :clothing_articles
    # validates :address, uniqueness: true
end
