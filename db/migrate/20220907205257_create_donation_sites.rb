class CreateDonationSites < ActiveRecord::Migration[6.1]
  def change
    create_table :donation_sites do |t|
      t.string :name
      t.string :address
      t.integer :number
      t.integer :zipcode
      t.string :notes

      t.timestamps
    end
  end
end
