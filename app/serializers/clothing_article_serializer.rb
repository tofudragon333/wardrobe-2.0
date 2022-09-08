class ClothingArticleSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :donation_site_id, :name, :image, :category, :color, :last_worn_date, :notes
end
