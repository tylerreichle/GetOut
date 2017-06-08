class Api::ChatroomsController < ApplicationController
  def index
    @chatrooms = User.chatrooms
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

  def show
    @chatroom = Chatroom.find_by(id: params[:id])
    @message = Message.new
    
    if @chatroom.user_id == current_user.id
      render 'api/chatrooms/show'
    else
      render json: 'Cannot view another person\'s chat', status: 403
    end
  end
  
  def delete
    @chatroom = Chatroom.find_by(id: params[:id])

    if @chatroom.user_id == current_user.id 
      @chatroom.delete
    else
      render json: 'Cannot remove another person\'s chat', status: 403
    end
  end

  private

  def chatroom_params
    params.require(:chatroom).permit(:message_id, :user_id)
  end
  
end
