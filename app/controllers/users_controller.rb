class UsersController < ApplicationController
    # GET/keeps user logged in
    def show
      # byebug
        user = User.find_by(id: session[:user_id])
        # byebug - this works
        if user
        # byebug - this works too
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end
    #sign-up/POST
    def create
        user = User.create(user_params)
        byebug
        if user.valid?
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    #PATCH/update user information
    def update
        user = User.find_by(id: session[:user_id])
        if user
            user.update(update_user_params)
        end
    end

    private
    # strong params for sign-up
    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
    # strong params for updating user info
    def update_user_params
        params.permit(:name, :username, :password, :location)
    end
    
end
