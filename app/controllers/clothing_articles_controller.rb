class ClothingArticlesController < ApplicationController
    # skip_before_action :authorize, only: [:index]
    #GET all clothing items belonging to a certain user
    def index
        id = session[:user_id]
        # byebug
        clothes = ClothingArticle.where(user_id: id)
        # byebug
        if clothes
            render json: clothes, status: :ok
        else
            render json: { error: "not found" }, status: :not_found
        end
    end

    #GET one clothing item
    def show
        item = ClothingArticle.find_by(params[:id])
        # byebug
        if item 
            render json: item, status: :ok
        else
            render json: { error: "not found" }, status: :not_found
        end
    end

    # POST/add an item
    def create
        item = ClothingArticle.create(clothing_params)
        # byebug
        if item
            render json: item, status: :created
        else
            render json: {error: "data not entered correctly"}, status: :unprocessable_entity
        end
    end

    # DELETE item (problematic)
    def destroy
        item = ClothingArticle.find_by(id: params[:id])
        if item
            item.destroy
            head :no_content
        else
            render json: {error: "item not found"}, status: :not_found
        end
    end

    #update item/PATCH
    def update
        # byebug
        item = ClothingArticle.find_by(id: params[:id])
        # byebug
        if item
            item.update(clothing_params)
            # item.update(:user_id => 0)
        else
            render json: {error: "item not found"}, status: :not_found
        end
    end


    private
    def clothing_params
        params.require(:clothing_article).permit(:id, :donation_site_id, :user_id, :name, :image, :category, :color, :last_worn_date, :notes, :_json)
    end
end
