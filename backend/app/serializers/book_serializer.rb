class BookSerializer
  include FastJsonapi::ObjectSerializer
  attributes :author_id, :category_id, :title, :invt, :description, :price
  belongs_to :category
  belongs_to :author
end
