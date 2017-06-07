class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid username and/or password"], status: 422 #unprocessable identity
    end
  end

  def destroy
    logout
    render "api/users/show"
  end

  def verify_access_token
    @user = User.find_by(session_token: params[:user][:session_token])

    if @user
      render 'Valid access token', status: 200
    else
      render 'Verification failed :(', status: 422
    end
  end
end
