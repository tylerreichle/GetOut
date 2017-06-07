# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
eric = User.create(
    username: 'eadams',
    first_name: 'Eric',
    last_name: 'Adams',
    email: 'eadams@email.com',
    password: 'password'
)

tyler = User.create(
    username: 'treichle',
    first_name: 'Tyler',
    last_name: 'Reichle',
    email: 'treichle@email.com',
    password: 'password'
)

jill = User.create(
    username: 'jilldela',
    first_name: 'Jill',
    last_name: 'de los Angeles',
    email: 'jilldela@email.com',
    password: 'password'
)

Category.destroy_all
tech = Category.create(title: 'tech')
movies = Category.create(title: 'movies')
music = Category.create(title: 'music')
sports = Category.create(title: 'sports')
food = Category.create(title: 'food')
travel = Category.create(title: 'travel')
art = Category.create(title: 'art')

UserCategory.destroy_all

uc1 = UserCategory.create(user_id: eric.id, category_id: tech.id)
uc2 = UserCategory.create(user_id: jill.id, category_id: tech.id)
uc3 = UserCategory.create(user_id: tyler.id, category_id: tech.id)
uc4 = UserCategory.create(user_id: jill.id, category_id: movies.id)
uc5 = UserCategory.create(user_id: tyler.id, category_id: movies.id)
uc6 = UserCategory.create(user_id: eric.id, category_id: music.id)
uc7 = UserCategory.create(user_id: jill.id, category_id: sports.id)
uc8 = UserCategory.create(user_id: jill.id, category_id: food.id)
uc9 = UserCategory.create(user_id: eric.id, category_id: food.id)
uc10 = UserCategory.create(user_id: eric.id, category_id: travel.id)
uc11 = UserCategory.create(user_id: jill.id, category_id: travel.id)
uc12 = UserCategory.create(user_id: tyler.id, category_id: travel.id)
uc13 = UserCategory.create(user_id: tyler.id, category_id: art.id)
uc14 = UserCategory.create(user_id: eric.id, category_id: art.id)
