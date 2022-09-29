class OutfitSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :clothing_article_1_id, :clothing_article_2_id
end
