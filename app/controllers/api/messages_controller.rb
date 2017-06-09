class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    @message.user_id = current_user.id

    if @message.save
      # broadcast message after save to DB
      Pusher.trigger('my-channel'), 'my-event', {
        message: 'hello'
      }
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
