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