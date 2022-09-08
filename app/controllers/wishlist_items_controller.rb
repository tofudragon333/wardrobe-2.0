class WishlistItemsController < ApplicationController
    #GET all wishlist items belonging to a certain user
    def index
       clothes = WishlistItem.find_by(user_id: session[:user_id])
       if clothes
           render json: clothes, status: :ok
       else
           render json: { error: "not found" }, status: :not_found
       end
   end

   #GET one wishlist item
   def show
       item = WishlistItem.find(params[:id])
       if item 
           render json: item, status: :ok
       else
           render json: { error: "not found" }, status: :not_found
       end
   end

   # POST/add a wishlist item
   def create
       item = WishlistItem.create(wishlist_params)
       if item
           render json: item, status: :created
       else
           render json: {error: "data not entered correctly"}, status: :unprocessable_entity
       end
   end

   # DELETE wishlist item (problematic)
   def destroy
       item = WishlistItem.find(wishlist_params)
       if item
           item.destroy
           head :no_content
       else
           render json: {error: "item not found"}, status: :not_found
       end
   end

   #UPDATE wishlist item/PATCH
   def update
       item = WishlistItem.find_by(id: params[:id])
       if item
           item.update(wishlist_params)
       else
           render json: {error: "item not found"}, status: :not_found
       end
   end

   private
   def wishlist_params
       params.permit(:user_id, :name, :image, :category, :color, :clothing_article_id, :notes)
   end
end
