class Outfit < ApplicationRecord
    belongs_to :user
    has_many :clothing_articles, through: :users
end
