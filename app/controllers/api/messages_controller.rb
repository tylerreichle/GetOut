class Api::MessagesController < ApplicationController
  def index
    @messages = current_user.chatrooms.messages
  end


  def create
    @message = Message.new(message_params)
    # @message.user_id = current_user.id
    @message.user_id = 1
    if @message.save
      # broadcast message after save to DB
      Pusher.trigger('my-channel', 'my-event', {
        message: @message.body
      })
    else
      render json: @message.errors.full_messages
    end
  end

  def destroy
  end

  private

  def message_params
    params.require(:message).permit(:body, :chatroom_id)
  end
end
