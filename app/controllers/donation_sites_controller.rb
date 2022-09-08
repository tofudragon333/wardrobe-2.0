class DonationSitesController < ApplicationController
    #GET all donation sites
    def index
        id = session[:user_id]
        # byebug
        sites = DonationSite.all
        # byebug
        if sites
            render json: sites, status: :ok
        else
            render json: { error: "not found" }, status: :not_found
        end
    end
end
