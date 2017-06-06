class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:signin],
      params[:user][:password])

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid username and/or password"], status: 404 #not found
    end
  end

  def destroy
    @user = current_user

    if @user
      logout
      render "api/users/show"
    else
      render json: ["Please sign in."], status: 404 #not found
    end
  end
end
