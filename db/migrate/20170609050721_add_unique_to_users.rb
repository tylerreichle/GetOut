class AddUniqueToUsers < ActiveRecord::Migration[5.0]
  def change
    add_index :chatrooms, [:user_id, :user_two_id], unique: true
  end
end
