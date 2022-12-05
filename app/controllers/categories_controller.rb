class CategoriesController < ApplicationController
    def index
        categories = Category.all
        render json: categories
    end

    def show
        category = Category.find_by(id: params[:id])
        if category
            render json: category, include: :content
        else
            render json: { error: "Category not found" }, status: :not_found
        end
    end

    def create
        category = Category.create!(category_params)
        if category
            render json: category
        else
            render json: { error: e.record.error.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        category = Category.find_by(id: params[:id])
        if category
            category.update(category_params)
            render json: category
        else
            render json: { error: "Category" }, status: :not_found
        end
    end

    private

    def category_params
        params.permit(:name, :genre, :content_id)
    end
end
