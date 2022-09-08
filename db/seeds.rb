# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#destroy everything for the replant
User.destroy_all
ClothingArticle.destroy_all
DonationSite.destroy_all
WishlistItem.destroy_all

puts "DESTROYED EVERYTHING REPLANTING"

puts "initializing seeds..."
ashley = User.create(
    :name => "Ashley",
    :username => "Tofu",
    :password => "123",
    :location => "New York, New York"
)
puts "created users"

puts "seeding donation sites..."

DonationSite.create([
    {:name => "None",
        :address => "None",
        :number => 0,
        :zipcode => 0,
        :notes => ""},
    {
    :name => "City Opera Thrift Shop",
    :address => "513 W 26th St
    ",
    :number => 2126845344,
    :zipcode => 10001,
    :notes => ""
},
{
:name => "The Salvation Army Thrift Store & Donation Center",
:address => "208 E 23rd St, New York, NY 10010",
:number => 8007287825,
:zipcode => 10010,
:notes => ""
},
{
    :name => "The Sharing Place Thrift Store",
    :address => "33 E 115th St, New York, NY 10029",
    :zipcode => 10029,
    :notes => ""}
])

puts "seeded donation sites!"

c1 = ClothingArticle.create(user_id: 1, donation_site_id: 1, name: "Aritzia School Girl Skirt", image: "https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F000%2F264%2F200%2Facb.jpg", 
    category: "skirt",
    color: "navy blue",
    last_worn_date: 0,
    notes: ""
    )
    # byebug
c2 = ClothingArticle.create(:user_id => 1,
    :name => "Aritiza Blouse",
    :image => "https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F000%2F264%2F200%2Facb.jpg",
    :donation_site_id => 1,
    :category => "top",
    :color => "white",
    :last_worn_date => 0,
    :notes => ""
    )
c3 = ClothingArticle.create(:user_id => 1,
    :name => "Aritiza Sandrine Dress",
    :donation_site_id => 1,
    :image => "https://aritzia.scene7.com/is/image/Aritzia/f22_02_a08_100973_27373_off_a?wid=1500",
    :category => "dress",
    :color => "orange",
    :last_worn_date => 0,
    :notes => "")
# byebug
puts "Created clothes"
puts "seeding wishlist items lol"


# 5.times do 
#     WishlistItem.create(
#         user_id: User.all.sample.id,
#         clothing_article_id: "",
#         notes: ""
#     )
# end

w1 = WishlistItem.create(user_id: 1, clothing_article_id: 1, notes:"")
# byebug


# puts "wishlist items seeded!"
puts "done, mofo"
