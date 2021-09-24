class Api::UsersController < ApplicationController

  before_action :set_user, only: [:show, :destroy, :update]
  
    def index
      user = User.all
      render json: user
    end
  
    def show
      render json: @user
    end
  
    # def create
    #   @user = User.new(user_params)
  
    #   if @user.save
    #     render json: @user
    #   else
    #     render json: {error: @user.errors}, status: 422
    #   end
    # end

    def update 
      current_user.update(user_params)
    end


    def destroy
      @user.destroy
      render json: @user
    end
  
    private
      def set_user
        @user = User.find(params[:id])
      end
  
      def user_params
        params.require(:user).permit(:email, :name, :image, :id)
      end
end
