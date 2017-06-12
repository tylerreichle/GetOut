@chatrooms.each do |chatroom|
  json.set! chatroom.id do
    json.extract! chatroom, :id, :user_id, :user_two_id
    json.otherUser @otherUsers[chatroom.id]
  end
end
