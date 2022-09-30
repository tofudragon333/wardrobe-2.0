class CreateOutfits < ActiveRecord::Migration[6.1]
  def change
    create_table :outfits do |t|
      t.integer :user_id, :default => 0
      t.integer :top, :default => 0
      t.integer :bottom, :default => 0
      t.integer :shoes, :default => 0
      t.integer :accessory, :default => 0

      t.timestamps
    end
  end
end
