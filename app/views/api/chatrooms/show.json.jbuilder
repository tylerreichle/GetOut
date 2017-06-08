json.chatroom do
  json.parial! 'chatroom', chatroom: @chatroom
end

json.messages do
  @chatroom.messages.each do |message|
    json.set! message.id do
      json.parial! 'api/messages/message', message: message
    end
  end
end