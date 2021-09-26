class Api::UsersController < ApplicationController
  before_action :set_user, only: [:show, :destroy, :update,]
  
    def index
      user = User.all
      render json: user
    end
  
    def show
      render json: @user
    end

    def update 
      current_user.update(user_params)
    end

    def destroy
      @user.destroy
      render json: @user.destroy
    end

    def friends 
      render json: current_user.friends
    end

    def create_friend
      current_user.friends << params[:id].to_i
      current_user.save
      render json: current_user
    end


  
    private
      def set_user
        @user = User.find(params[:id])
      end
  
      def user_params
        params.require(:user).permit(:email, :name, :image, :id, :nickname, :friends)
      end
end
