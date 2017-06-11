@chatrooms.each do |chatroom|
  json.set! chatroom.id do
    json.partial! 'chatroom', chatroom: chatroom
    json.otherUser @otherUsers[chatroom.id]
  end
end
