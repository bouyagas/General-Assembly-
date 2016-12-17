class CommentsController < ApplicationController
   def index
      @comments = Comment.all
      render json: @comments
    end

    def show
      @comments = Comment.find_by_id(params[:id])
      render json: @comments
    end
end
