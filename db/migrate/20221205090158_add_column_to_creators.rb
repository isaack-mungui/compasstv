class AddColumnToCreators < ActiveRecord::Migration[7.0]
  def change
    add_column :creators, :instagram_handle, :string
    add_column :creators, :twitter_handle, :string
  end
end
