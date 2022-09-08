class WishlistItemSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :clothing_article_id, :notes
end
