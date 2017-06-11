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
    password: 'password',
    img_url: 'https://avatars1.githubusercontent.com/u/25959584?v=3&s=400'
)

tyler = User.create(
    username: 'treichle',
    first_name: 'Tyler',
    last_name: 'Reichle',
    email: 'treichle@email.com',
    password: 'password',
    img_url: 'https://avatars2.githubusercontent.com/u/8896924?v=3&s=400'
)

jill = User.create(
    username: 'jilldela',
    first_name: 'Jill',
    last_name: 'de los Angeles',
    email: 'jilldela@email.com',
    password: 'password',
    img_url: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Default-avatar.jpg'
)

Category.destroy_all
tech = Category.create(title: 'Technology')
movies = Category.create(title: 'Movies & Television')
music = Category.create(title: 'Music')
sports = Category.create(title: 'Sports')
food = Category.create(title: 'Food')
travel = Category.create(title: 'Travel')
art = Category.create(title: 'Art')

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
