class AddUserColumnToMessages < ActiveRecord::Migration[5.0]
  def change
    add_column :messages, :users, :string
  end
end
