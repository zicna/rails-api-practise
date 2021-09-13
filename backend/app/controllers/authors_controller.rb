class AuthorsController < ApplicationController

    def index
        authors = Author.all

        render json: AuthorSerializer.new(authors, {:include => [:books]})
    end

    def create
        # byebug
        author = Author.new(author_params)
        if author.save
            render json: AuthorSerializer.new(author)
        else
            render json: {error: "Author not created"}
        end
    end

    private

    def author_params
        params.require(:author).permit(:first_name, :last_name)
    end

end


