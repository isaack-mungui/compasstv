class CreateCreators < ActiveRecord::Migration[7.0]
  def change
    create_table :creators do |t|
      t.string :name
      t.string :alias
      t.string :avatar
      t.text :bio
      t.string :social_handles

      t.timestamps
    end
  end
end
