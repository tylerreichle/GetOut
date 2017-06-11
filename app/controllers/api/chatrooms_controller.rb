class Api::ChatroomsController < ApplicationController
  def index
    @chatrooms = Chatroom.where(
      "chatrooms.user_id = ? OR chatrooms.user_two_id = ?",
      current_user.id,
      current_user.id,
    )

    @otherUsers = {}

    @chatrooms.each do |chatroom|
      if chatroom.user_id == current_user.id
        otherUsername = User.find_by_id(chatroom.user_two_id).username
      else
        otherUsername = User.find_by_id(chatroom.user_id).username
      end

      @otherUsers[chatroom.id] = otherUsername
    end
  end

  def show
    @chatroom = Chatroom.find_by(id: params[:id])

    if @chatroom.user_id == current_user.id || @chatroom.user_two_id == current_user.id
      render 'api/chatrooms/show'
    else
      render json: 'Cannot view private chat', status: 403
    end
  end

  def create
    @chatroom = Chatroom.new(chatroom_params)
    @chatroom.user_id = current_user.id

    if @chatroom.save
      # subscribe to chat
      render 'api/chatrooms/show'
    else
      render json: 'Chat already exists!', status: 422
    end
  end

  def destroy
    @chatroom = Chatroom.find_by(id: params[:id])

    if @chatroom.user_id == current_user.id || @chatroom.user_two_id == current_user.id
      @chatroom.delete
      render 'api/chatrooms/show'
    else
      render json: 'Cannot remove another person\'s chat', status: 403
    end
  end

  private

  def chatroom_params
    params.require(:chatroom).permit(:user_two_id)
  end
end

