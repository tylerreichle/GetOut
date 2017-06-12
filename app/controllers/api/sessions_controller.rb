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

  def verify_session_token
    @user = User.find_by(session_token: params[:session][:session_token])
    if @user
      render json: 'Valid session token', status: 200
    else
      render json: 'Verification failed :(', status: 422
    end
  end
end
