class SessionsController < ApplicationController
    # for session and cookie management
    # skip_before_action :authorize, only: [:create]

    # POST/login information for username
    def create
        user = User.find_by(username: params[:username])
        # byebug
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            # byebug
            render json: user, status: :created
        else
            render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end

    #DELETE/log out feature
    def destroy
        session.delete :user_id
        head :no_content
    end
      
end