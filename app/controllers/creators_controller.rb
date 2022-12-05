class CreatorsController < ApplicationController
    def index
        creators = Creator.all
        render json: creators
    end

    def show
        creator = Creator.find_by(id: params[:id])
        if creator
            render json: creator
        else
            render json: { error: "Creator not found" }, status: :not_found
        end
    end

    def create
        creator = Creator.create!(creator_params)
        if creator
            render json: creator
        else
            render json: { error: e.record.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        creator = Creator.find_by(id: params[:id])
        if creator
            creator.update(creator_params)
            render json: creator
        else
            render json: { error: "Creator not found" }, status: :not_found
        end
    end

    private

    def creator_params
        params.permit(:name, :alias, :avatar, :bio, :facebook_handle, :instagram_handle, :twitter_handle)
    end
end
