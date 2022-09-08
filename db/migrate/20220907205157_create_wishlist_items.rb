class CreateWishlistItems < ActiveRecord::Migration[6.1]
  def change
    create_table :wishlist_items do |t|
      t.integer :user_id
      t.integer :clothing_article_id
      t.string :notes

      t.timestamps
    end
  end
end
