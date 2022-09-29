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
    :location => "New York, New York",
    :joy_time => 3,
)
puts "created users"

puts "seeding donation sites..."

DonationSite.create([
    {:name => "Just Kidding! I'm keeping this!",
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

c1 = ClothingArticle.create(user_id: 1, donation_site_id: 1, name: "Aritzia School Girl Skirt", image: "https://aritzia.scene7.com/is/image/Aritzia/large/f22_02_a07_103953_28063_on_a.jpg", 
    category: "skirt",
    color: "tan",
    last_worn_date: 20200908,
    notes: ""
    )
    # byebug
c2 = ClothingArticle.create(:user_id => 1,
    :name => "Aritiza Blouse",
    :image => "https://aritzia.scene7.com/is/image/Aritzia/f22_01_a02_92287_1564_on_a?wid=1200",
    :donation_site_id => 1,
    :category => "top",
    :color => "white",
    :last_worn_date => 20220908,
    :notes => ""
    )
c3 = ClothingArticle.create(:user_id => 1,
    :name => "Aritiza Sandrine Dress",
    :donation_site_id => 1,
    :image => "https://aritzia.scene7.com/is/image/Aritzia/f22_02_a08_100973_27373_off_a?wid=1500",
    :category => "dress",
    :color => "orange",
    :last_worn_date => 20210408,
    :notes => "")
c4 = ClothingArticle.create(:user_id => 1,
    :name => "Croc Heels",
    :donation_site_id => 1,
    :image => "https://www.highsnobiety.com/static-assets/thumbor/Ke2Jm4mphgSyf16sRYJWaM0DECs=/1600x1065/www.highsnobiety.com/static-assets/wp-content/uploads/2021/10/27162228/balenciaga-crocs-heel-madame-0-2.jpg",
    :category => "shoes",
    :color => "green",
    :last_worn_date => 20220908,
    :notes => "")

c5= ClothingArticle.create(user_id: 1, :name => "Meat Dress by Lady Gaga",
    :donation_site_id => 1,
    :image => "https://hips.hearstapps.com/cosmouk.cdnds.net/15/36/1441283156-gettyimages-139184262-master.jpg",
    :category => "dress",
    :color => "red",
    :last_worn_date => 20220908,
    :notes => "")

c6= ClothingArticle.create(user_id: 1,:name => "World's Ugliest Pants",
    :donation_site_id => 1,
    :image => "https://i.pinimg.com/474x/97/61/fd/9761fda478558323feee3a62d5d08f7e--fashion-fail-harem-pants.jpg",
    :category => "pants",
    :color => "beige",
    :last_worn_date => 20220908,
    :notes => "")

c7 = ClothingArticle.create(user_id: 1,:name => "Shrek Shirt",
    :donation_site_id => 1,
    :image => "https://m.media-amazon.com/images/I/71LI5rb9uwL._AC_UX679_.jpg",
    :category => "shirt",
    :color => "off-white",
    :last_worn_date => 20220420,
    :notes => "")

c8=ClothingArticle.create(user_id: 1,:name => "Jean Flip Flop Leg Warmers",
    :donation_site_id => 1,
    :image => "https://www.thesun.co.uk/wp-content/uploads/2018/07/NINTCHDBPICT000419155915.jpg",
    :category => "shoes",
    :color => "blue",
    :last_worn_date => 20220908,
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
