class ChangeIntegersToFloatsInUsersTable < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :longitude, :float
    change_column :users, :latitude, :float
  end
end
