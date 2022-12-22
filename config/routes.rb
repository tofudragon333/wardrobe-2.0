Rails.application.routes.draw do
  resources :outfits
  resources :donation_sites
  resources :clothing_articles

  # get "/clothing_articles/:id", to: "clothing_articles#show"

  resources :wishlist_items
  resources :users

  # Login route
  post "/login", to: "sessions#create"

  #stay logged in
  get "/me", to: "users#show"

  #logout route
  delete "/logout", to: "sessions#destroy"

  #signup route


end
