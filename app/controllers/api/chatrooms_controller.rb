class Api::ChatroomsController < ApplicationController
  def index
    @chatrooms = User.chatrooms
  end

  def create
    
  end

  def show
    @chatroom = Chatroom.find_by(id: params[:id])
    @message = Message.new
    
    if @chatroom.user_id === current_user.id
      render 'api/chatrooms/show'
    else
      render json: 'Cannot view another person\'s chat', status: 422
    end
  end
  
  def delete
  end

  private

  def chatroom_params
    params.require(:chatroom).permit(:message_id, )
  end
  
end
