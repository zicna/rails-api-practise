class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.integer :author_id
      t.integer :category_id
      t.string :title
      t.string :invt
      t.string :description
      t.decimal :price

      t.timestamps
    end
  end
end
