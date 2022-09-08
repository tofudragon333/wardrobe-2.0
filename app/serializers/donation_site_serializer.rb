class DonationSiteSerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :number, :zipcode, :notes
end
