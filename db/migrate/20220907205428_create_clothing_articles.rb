class CreateClothingArticles < ActiveRecord::Migration[6.1]
  def change
    create_table :clothing_articles do |t|
      t.integer :user_id
      t.integer :donation_site_id
      t.string :name
      t.string :image
      t.string :category
      t.string :color
      t.date :last_worn_date
      t.string :notes

      t.timestamps
    end
  end
end
