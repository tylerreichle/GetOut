class Api::ChatroomsController < ApplicationController
  def index
    @chatrooms = Chatroom.where(
      :user_id == current_user.id,
      :user_two_id == current_user.id
    )
  end

  def show
    @chatroom = Chatroom.find_by(id: params[:id])
    
    if @chatroom.user_id == current_user.id || @chatroom.user_two_id == current_user.id
      @message = Message.new
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
      render json: @chatroom.errors.full_messages
    end
  end
  
  def destroy
    @chatroom = Chatroom.find_by(id: params[:id])

    if @chatroom.user_id == current_user.id || @chatroom.user_two_id == current_user.id
      @chatroom.delete
    else
      render json: 'Cannot remove another person\'s chat', status: 403
    end
  end

  private

  def chatroom_params
    params.require(:chatroom).permit(:message_id, :user_two_id)
  end
  
end
