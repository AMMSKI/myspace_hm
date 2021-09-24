class AddForceAlignmentToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :force_alignment, :string
  end
end
