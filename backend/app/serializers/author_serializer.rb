class AuthorSerializer
  include FastJsonapi::ObjectSerializer
  attributes :first_name, :last_name, :image, :birth_date, :death_date, :wiki_page
  has_many :books
end
