# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_08_11_195829) do

  create_table "authors", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "image"
    t.date "birth_date"
    t.date "death_date"
    t.string "wiki_page"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "created_by"
  end

  create_table "books", force: :cascade do |t|
    t.integer "author_id"
    t.integer "category_id"
    t.string "title"
    t.string "invt"
    t.text "description"
    t.decimal "price"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "wiki_page"
    t.integer "created_by"
    t.index ["author_id"], name: "index_books_on_author_id"
    t.index ["category_id"], name: "index_books_on_category_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "description"
    t.integer "created_by"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "book_id", null: false
    t.integer "user_id", null: false
    t.text "content"
    t.integer "mark"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["book_id"], name: "index_reviews_on_book_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.boolean "admin", default: false
    t.date "birth_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "uid"
    t.string "provider"
  end

  add_foreign_key "books", "authors"
  add_foreign_key "books", "categories"
  add_foreign_key "reviews", "books"
  add_foreign_key "reviews", "users"
end


seed file
authors = [
    {
        first_name: "Fyodor",
        last_name: "Dostojevski",
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Vasily_Perov_-_%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%A4.%D0%9C.%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_-_Google_Art_Project.jpg/440px-Vasily_Perov_-_%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%A4.%D0%9C.%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_-_Google_Art_Project.jpg', 
        birth_date: "11-11-1821",
        death_date: "9-2-1881",
        wiki_page: "https://en.wikipedia.org/wiki/Fyodor_Dostoevsky"
    },
    {
        first_name: "Anton",
        last_name: "Chekhov",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Anton_Chekhov_1889.jpg",
        birth_date: "29-1-1860",
        death_date: "15-7-1904",
        wiki_page: "https://en.wikipedia.org/wiki/Anton_Chekhov"
    },
    {
        first_name: "Alexander",
        last_name: "Pushkin",
        image: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcS1WXwIHuugPi3XCCEc-lppk5YSfvffhh8RNh4WN0WylfWPUmaBmvdHmWTyuVuv",
        birth_date: "29-5-1799",
        death_date: "29-1-1837",
        wiki_page: "https://en.wikipedia.org/wiki/Alexander_Pushkin"
    },
    {
        first_name: "Leo" ,
        last_name: "Tolstoy",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/L.N.Tolstoy_Prokudin-Gorsky.jpg/1200px-L.N.Tolstoy_Prokudin-Gorsky.jpg",
        birth_date: "9-9-1828",
        death_date: "20-11-1910",
        wiki_page: "https://en.wikipedia.org/wiki/Leo_Tolstoy"
        
    }
]

books = [
    {
        author_id: 1,
        category_id: 1,
        title: "The Goblin",
        invt: "fd01",
        description: "Lorem ipsum...",
        price: 10.99
    },
    {
        author_id: 1,
        category_id: 1,
        title: "Crime and Punishment",
        invt: "fd02",
        description: "Lorem ipsum...",
        price: 14.99

    },
    {
        author_id: 1,
        category_id: 1,
        title: "The Brothers Karamszov",
        invt: "fd03",
        description: "Lorem ipsum...",
        price: 13.99

    },
    {
        author_id: 1,
        category_id: 1,
        title: "The Gambler",
        invt: "fd04",
        description: "Lorem ipsum...",
        price: 9.99

    },
    {
        author_id: 1,
        category_id: 2,
        title: "Note of the fatherland",
        invt: "fd05",
        description: "Lorem ipsum...",
        price: 5.99

    },
    {
        author_id: 1,
        category_id: 2,
        title: "The Contemporary",
        invt: "fd06",
        description: "Lorem ipsum...",
        price: 4.99

    },
    {
        author_id: 2,
        category_id: 1,
        title: "My life",
        invt: "ac01",
        description: "Lorem ipsum...",
        price: 11.99

    },
    {
        author_id: 2,
        category_id: 1,
        title: "The Duel",
        invt: "ac02",
        description: "Lorem ipsum...",
        price: 12.99

    },
    {
        author_id: 2,
        category_id: 2,
        title: "At Dusk",
        invt: "ac03",
        description: "Lorem ipsum...",
        price: 8.99

    },
    {
        author_id: 2,
        category_id: 2,
        title: "Gloomy People",
        invt: "ac04",
        description: "Lorem ipsum...",
        price: 9.99

    },
    {
        author_id: 3,
        category_id: 1,
        title: "The Captain's Daughter",
        invt: "ap01",
        description: "Lorem ipsum...",
        price: 7.99

    },
    {
        author_id: 3,
        category_id: 2,
        title: "The Blizzard",
        invt: "ap02",
        description: "Lorem ipsum...",
        price: 12.99

    },
    {
        author_id: 3,
        category_id: 3,
        title: "Ruslan and Ludmila",
        invt: "ap03",
        description: "Lorem ipsum...",
        price: 5.99

    },
    {
        author_id: 3,
        category_id: 3,
        title: "The Gypsies",
        invt: "ap04",
        description: "Lorem ipsum...",
        price: 4.99

    },
    {
        author_id: 4,
        category_id: 1,
        title: "The Cossacks",
        invt: "lt01",
        description: "Lorem ipsum...",
        price: 14.99

    },
    {
        author_id: 4,
        category_id: 1,
        title: "War and Peace",
        invt: "lt06",
        description: "Lorem ipsum...",
        price: 20.99

    },
    {
        author_id: 4,
        category_id: 1,
        title: "Anna Karenina",
        invt: "lt07",
        description: "Lorem ipsum...",
        price: 12.99

    },
    {
        author_id: 4,
        category_id: 1,
        title: "The Death of Ivan Ilyich",
        invt: "lt02",
        description: "Lorem ipsum...",
        price: 11.99

    },
    {
        author_id: 4,
        category_id: 1,
        title: "The Autobiographical Trilogy",
        invt: "lt03",
        description: "Lorem ipsum...",
        price: 19.99

    },
    {
        author_id: 4,
        category_id: 2,
        title: "Work, Death, and Sickness",
        invt: "lt04",
        description: "Lorem ipsum...",
        price: 11.99

    },
    {
        author_id: 4,
        category_id: 2,
        title: "Sevastopol Sketches",
        invt: "lt05",
        description: "Lorem ipsum...",
        price: 9.99

    }
]

categories = [
    {name: "Novel", description: "A novel is a relatively long work of narrative fiction, typically written in prose and published as a book. A novel is a long, fictional narrative which describes intimate human experiences. The novel in the modern era usually makes use of a literary prose style. The development of the prose novel at this time was encouraged by innovations in printing, and the introduction of cheap paper in the 15th century."},
    {name: "Short story", description: "A short story is a piece of prose fiction that typically can be read in one sitting and focuses on a self-contained incident or series of linked incidents, with the intent of evoking a single effect or mood. The short story is one of the oldest types of literature and has existed in the form of legends, mythic tales, folk tales, fairy tales, fables and anecdotes in various ancient communities across the world. The modern short story developed in the early 19th century."},
    {name: "Narrative poem", description: "Narrative poetry tells stories through verse. Like a novel or a short story, a narrative poem has plot, characters, and setting. Using a range of poetic techniques such as rhyme and meter, narrative poetry presents a series of events, often including action and dialogue."}
]

