class Api::CommentsController < ApplicationController
  before_action :set_user
  before_action :set_post
  
  def index
    comments = Comment.plus
    render json: comments
  end

  def show
    render json: @comment
  end

  def create 
    @comment = Comment.new(comment_params)
    if(@comment.save)
      render json: @comment
    else
      render json: {errors: @comment.errors.full_messages}, status: 422
    end
  end

  def update 
    
  end

  def destroy

  end

  private

    def set_user
      @user = User.find(params[:user_id])
    end

    def set_post
      @post = Post.find(params[:post_id])
    end

    def set_comment
      @comment = Comment.find(params[:id])
    end

    def comment_params
      params.require(:comment).permit(:id, :user_id, :post_id, :text, :image)
    end
end
