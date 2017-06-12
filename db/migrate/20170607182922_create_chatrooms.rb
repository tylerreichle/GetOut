class CreateChatrooms < ActiveRecord::Migration[5.0]
  def change
    create_table :chatrooms do |t|
      t.integer :message_id, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :chatrooms, [:message_id, :user_id]
  end
end
