class Api::PostsController < ApplicationController
  before_action :set_user
  before_action :set_post, only: [:update, :destroy]
  
  def index
    posts = @user.posts.all
    render json: posts
  end

  # def show
  #   render json: @user
  # end

  def update 
    @post.update(post_params)
  end

  def destroy
    @post.destroy
    render json: @post
  end

  private

    def set_post
      @post = @user.post.find(params[:id])
    end

    def set_user
      @user = User.find(params[:user_id])
    end

    def post_params
      params.require(:posts).permit(:user_id, :text, :mood, :likes, :id, :image)
    end

end
