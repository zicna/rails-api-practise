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

    def destroy
        author = Author.find_by(id: params[:id])
        author.destroy
        render json: {notice: "Author #{author.full_name} has been deleted"}
    end

    private

    def author_params
        params.require(:author).permit(:first_name, :last_name)
    end

end


