@chatrooms.each do |chatroom|
  json.set! chatroom.id do
    json.extract! chatroom, :id, :user_id, :user_two_id
    json.otherUsername @otherUsers[chatroom.id][0]
    json.otherProfile @otherUsers[chatroom.id][1]
  end
end
