class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.text :body, null: false
      t.integer :user_id, null: false
      t.integer :chatroom_id, null: false

      t.timestamps
    end
    add_index :messages, :user_id
    add_index :messages, :chatroom_id
  end
end
