class Author < ApplicationRecord
    has_many :books
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :first_name, uniqueness: {scope: :last_name}

    def full_name
        self.first_name + " " + self.last_name
    end
    
end
