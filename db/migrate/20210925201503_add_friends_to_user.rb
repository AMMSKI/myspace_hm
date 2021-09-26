class AddFriendsToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :friends, :text
  end
end
