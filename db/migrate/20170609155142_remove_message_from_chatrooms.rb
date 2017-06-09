class RemoveMessageFromChatrooms < ActiveRecord::Migration[5.0]
  def change
    remove_column :chatrooms, :message_id
  end
end