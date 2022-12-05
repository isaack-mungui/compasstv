class ChangeColumnName < ActiveRecord::Migration[7.0]
  def change
    rename_column :creators, :social_handles, :facebook_handle
  end
end
