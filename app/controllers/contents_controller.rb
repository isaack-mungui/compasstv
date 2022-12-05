class ContentsController < ApplicationController
    def index
        contents = Content.all
        render json: contents
    end

    def show
        content = Content.find_by(id: params[:id])
        if content
            render json: content, include: :creator
        else
            render json: { error: "Content not found" }, status: :not_found
        end
    end

    def create
        content = Content.create!(content_params)
        if content
            render json: content
        else
            render json: { error: e.record.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        content = Content.find_by(id: params[:id])
        if content
            content.update(content_params)
            render json: content
        else
            render json: { errors: "Content not found" }, status: :not_found
        end
    end

    def destroy
        content = Content.find_by(id: params[:id])
        if content
            content.destroy
            head :no_content
        else
            render json: { error: "Content not found" }, status: :not_found
        end
    end

    private

    def content_params
        params.permit(:title, :duration, :creator_id)
    end
end
