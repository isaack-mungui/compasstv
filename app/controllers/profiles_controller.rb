class ProfilesController < ApplicationController
    def index
        profiles = Profile.all
        render json: profiles
    end

    def show
        profile = Profile.find_by(id: params[:id])
        if profile
            render json: profile
        else
            render json: { error: "User profile not found" }, status: :not_found
        end
    end

    def create
        profile = Profile.create!(profile_params)
        if profile
            render json: profile
        else
            render json: { error: e.record.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        profile = Profile.find_by(id: params[:id])
        if profile
            profile.update(profile_params)
            render json: profile
        else
            render json: { error: "User profile not found" }, status: :not_found
        end
    end

    private

    def profile_params
        params.permit(:name, :alias, :avatar, :bio, :location, :user_id)
    end
end
