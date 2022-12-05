class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find_by(id: params[:id])
        if user
            render json: user, include: :profile
        else
            render json: { error: "User not found" }, status: :not_found
        end
    end

    def create
        user = User.create!(user_params)
        if user
            render json: user, status: :created
        else
            render json: { error: e.record.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        user = User.find_by(id: params[:id])
        if user
            user.update(user_params)
            render json: user
        else
            render json: { error: "User not found" }, status: :not_found
        end
    end

    private

    def user_params
        params.permit(:email_address, :password)
    end
end
