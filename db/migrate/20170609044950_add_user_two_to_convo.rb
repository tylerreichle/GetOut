class AddUserTwoToConvo < ActiveRecord::Migration[5.0]
  def change
    add_column(:chatrooms, :user_two_id, :integer, null: false)
  end
end
