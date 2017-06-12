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
    img_url: 'https://avatars1.githubusercontent.com/u/25959584?v=3&s=400',
    latitude: 37.759773,
    longitude: -122.427063,
    description: "Prior to programming, I was living and working in Taipei, Taiwan. I enjoy exploring new places, experiencing new cultures and learning new languages."
)

tyler = User.create(
    username: 'treichle',
    first_name: 'Tyler',
    last_name: 'Reichle',
    email: 'treichle@email.com',
    password: 'password',
    img_url: 'https://avatars2.githubusercontent.com/u/8896924?v=3&s=400',
    latitude: 37.774446,
    longitude: -122.443914,
    description: "Dedicated bug squasher and Golden Doodle owner with a talent for belly rubs and finding the toughest bugs. The only thing more diverse than my skillset is my Spotify playlist."
)

jill = User.create(
    username: 'jilldela',
    first_name: 'Jill',
    last_name: 'de los Angeles',
    email: 'jilldela@email.com',
    password: 'password',
    img_url: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA0DAAAAJDRiNDc3NDgwLWVmZWEtNDllYy05NTM2LTcxOGUyN2E2MGVmOQ.jpg',
    latitude: 37.785834,
    longitude: -122.406417,
    description: "I'm a Jill of all trades. Master of whatever I choose to be."
)

aaron = User.create(
    username: 'awayne',
    first_name: 'Aaron',
    last_name: 'Wayne',
    email: 'aaronwayne@email.com',
    password: 'password',
    img_url: 'https://avatars0.githubusercontent.com/u/8084693?v=3&s=400',
    latitude: 37.765834,
    longitude: -122.406417,
    description: "TA at App Academy with a background in Neuroscience. Let's grab a coffee!"
)

allen = User.create(
    username: 'achen',
    first_name: 'Allen',
    last_name: 'Chen',
    email: 'achen@email.com',
    password: 'password',
    img_url: 'https://avatars2.githubusercontent.com/u/25633172?v=3&s=400',
    latitude: 37.738141,
    longitude: -122.415761,
    description: "I'm a huge techie! Technically a nerd if you want to be specific, and I absolutely love getting my hands dirty. Of course, I'm talking about coding."
)

brandon = User.create(
    username: 'btat',
    first_name: 'Brandon',
    last_name: 'Tat',
    email: 'btat@email.com',
    password: 'password',
    img_url: 'https://avatars1.githubusercontent.com/u/26292622?v=3&s=400',
    latitude: 37.745200,
    longitude: -122.490091,
    description: "I'm currently pursuing a career as a software engineer. I'm an easy-going person and patient communicator who loves learning and building things."
)

brandon = User.create(
    username: 'btat',
    first_name: 'Brandon',
    last_name: 'Tat',
    email: 'btat@email.com',
    password: 'password',
    img_url: 'https://avatars1.githubusercontent.com/u/26292622?v=3&s=400',
    latitude: 37.745200,
    longitude: -122.490091,
    description: "I'm currently pursuing a career as a software engineer. I'm an easy-going person and patient communicator who loves learning and building things."
)

dave = User.create(
    username: 'ddobrynin',
    first_name: 'Dave',
    last_name: 'Dobrynin',
    email: 'ddobrynin@email.com',
    password: 'password',
    img_url: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/048/1c9/38f5761.jpg',
    latitude: 37.694144,
    longitude: -122.490777,
    description: "TA at App Academy. I enjoy programming, good music and exploring new places. Hit me up!"
)

eric2 = User.create(
    username: 'ewindmill',
    first_name: 'Eric',
    last_name: 'Windmill',
    email: 'ewindmill@email.com',
    password: 'password',
    img_url: 'https://avatars1.githubusercontent.com/u/21140344?v=3&s=400',
    latitude: 37.761622,
    longitude: -122.390527,
    description: "I have a penchant for making the web a more beautiful and accessible place. I'm a big fan of working on the front end of apps, where I can make sure the user experience is intuitive and the design is beautiful."
)

gary = User.create(
    username: 'gyeh',
    first_name: 'Gary',
    last_name: 'Yeh',
    email: 'gyeh@email.com',
    password: 'password',
    img_url: 'https://avatars1.githubusercontent.com/u/17277949?v=3&s=400',
    latitude: 37.819548,
    longitude: -122.265729,
    description: "Writing quality code is my passion and expertise. My innate curiosity and hunger to tackle complex problems led me to software development as a career and I've loved it ever since."
)

john = User.create(
    username: 'jballon',
    first_name: 'John',
    last_name: 'Ballon',
    email: 'jballon@email.com',
    password: 'password',
    img_url: 'https://avatars3.githubusercontent.com/u/19981639?v=3&s=400',
    latitude: 37.782112,
    longitude: -122.418336,
    description: "I'm a Software Engineer by day AND night. I fell in love with the act of creating something new with nothing but a keyboard and a little curiosity."
)

john2 = User.create(
    username: 'jjaffe',
    first_name: 'John',
    last_name: 'Jaffe',
    email: 'jjaffe@email.com',
    password: 'password',
    img_url: 'https://avatars3.githubusercontent.com/u/24883187?v=3&s=400',
    latitude: 37.658003,
    longitude: -122.417993,
    description: "Your every day, run of the mill software engineer/standup comedian."
)

jules = User.create(
    username: 'jcosta',
    first_name: 'Jules',
    last_name: 'Costa',
    email: 'jcosta@email.com',
    password: 'password',
    img_url: 'https://avatars2.githubusercontent.com/u/24462575?v=3&s=400',
    latitude: 37.777634,
    longitude: -122.424173,
    description: "I'm a full stack software engineer with a passion for conscious technologies. I thrive in innovative environments, especially those fueled by the desire to change peoples' lives."
)

miles = User.create(
    username: 'mhobby',
    first_name: 'Miles',
    last_name: 'Hobby',
    email: 'mhobby@email.com',
    password: 'password',
    img_url: 'https://avatars0.githubusercontent.com/u/25272896?v=3&s=400',
    latitude: 37.856422,
    longitude: -122.483568,
    description: "I am passionate about programming because I get to solve puzzles and learn new skills all day. Programming also has become my creative outlet."
)

sam = User.create(
    username: 'swang',
    first_name: 'Sam',
    last_name: 'Wang',
    email: 'swang@email.com',
    password: 'password',
    img_url: 'https://avatars2.githubusercontent.com/u/9100297?v=3&s=400',
    latitude: 37.875395,
    longitude: -122.280321,
    description: "Inspired and driven by technology and its intersection with society, I decided to pursue software engineering to build products and services that impart a positive influence on our world."
)

sean = User.create(
    username: 'sperfecto',
    first_name: 'Sean',
    last_name: 'Perfecto',
    email: 'sperfecto@email.com',
    password: 'password',
    img_url: 'https://avatars0.githubusercontent.com/u/25450843?v=3&s=400',
    latitude: 37.756872,
    longitude: -122.506055,
    description: "My love for programming was not at first sight, but rather at first bug."
)

stephen = User.create(
    username: 'sachurra',
    first_name: 'Stephen',
    last_name: 'Achurra',
    email: 'sachurra@email.com',
    password: 'password',
    img_url: 'https://avatars3.githubusercontent.com/u/24886100?v=3&s=400',
    latitude: 37.715738,
    longitude: -122.465372,
    description: "I’ve been fortunate to have experienced many different aspects of business from differing roles and perspectives."
)

tony = User.create(
    username: 'tweng',
    first_name: 'Tony',
    last_name: 'Wang',
    email: 'tweng@email.com',
    password: 'password',
    img_url: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA1LAAAAJGE5YzA4NmNmLTMzNWEtNDg1OS1hZTZlLTgxOWVlZDk4YmNlZQ.jpg',
    latitude: 37.566759,
    longitude: -122.334566,
    description: "Prior to coding, I worked as a Property Manager for 3 years. In my free time, I love eating at new restaurants and gaming."
)

vilya = User.create(
    username: 'vlevitskiy',
    first_name: 'Vilya',
    last_name: 'Levitskiy',
    email: 'vlevitskiy@email.com',
    password: 'password',
    img_url: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/1/000/273/1db/1b13697.jpg',
    latitude: 37.586350,
    longitude: -122.379198,
    description: "Flexible and self-motivated team player. Experience in cross-platform testing of web and mobile applications."
)

yong = User.create(
    username: 'ylin',
    first_name: 'Yong',
    last_name: 'Lin',
    email: 'ylin@email.com',
    password: 'password',
    img_url: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAA2iAAAAJDMyMGZkNWJjLWFkZTktNGExNS1iYzQ3LWMyOWRmOTY1ZTE4Nw.jpg',
    latitude: 37.947446,
    longitude: -122.351303,
    description: "The rewards from collaboration, and experiencing (somewhat cliché, yet very true saying) that the whole is greater than the sum of its parts. These are the reasons I am a software engineer."
)

Category.destroy_all

tech = Category.create(title: 'Technology', img_url: 'https://res.cloudinary.com/explorewanderlust/image/upload/v1497223490/tech_grpthk.png')
movies = Category.create(title: 'Movies & TV', img_url: 'https://res.cloudinary.com/explorewanderlust/image/upload/v1497225166/movies_tv_vddkul.png')
music = Category.create(title: 'Music', img_url: 'https://res.cloudinary.com/explorewanderlust/image/upload/v1497225166/music_ryngux.png')
sports = Category.create(title: 'Sports', img_url: 'https://res.cloudinary.com/explorewanderlust/image/upload/v1497225166/sports_z51wqc.png')
food = Category.create(title: 'Food', img_url: 'https://res.cloudinary.com/explorewanderlust/image/upload/v1497225166/food_etzz7k.png')
travel = Category.create(title: 'Travel', img_url: 'https://res.cloudinary.com/explorewanderlust/image/upload/v1497225166/travel_am4tsn.png')
art = Category.create(title: 'Art', img_url: 'https://res.cloudinary.com/explorewanderlust/image/upload/v1497225166/art_xzcjyz.png')

UserCategory.destroy_all

UserCategory.create(user_id: eric.id, category_id: tech.id)
UserCategory.create(user_id: jill.id, category_id: tech.id)
UserCategory.create(user_id: tyler.id, category_id: tech.id)
UserCategory.create(user_id: aaron.id, category_id: tech.id)
UserCategory.create(user_id: allen.id, category_id: tech.id)
UserCategory.create(user_id: brandon.id, category_id: tech.id)
UserCategory.create(user_id: dave.id, category_id: tech.id)
UserCategory.create(user_id: eric2.id, category_id: tech.id)
UserCategory.create(user_id: gary.id, category_id: tech.id)
UserCategory.create(user_id: john.id, category_id: tech.id)
UserCategory.create(user_id: john2.id, category_id: tech.id)
UserCategory.create(user_id: jules.id, category_id: tech.id)
UserCategory.create(user_id: miles.id, category_id: tech.id)
UserCategory.create(user_id: sam.id, category_id: tech.id)
UserCategory.create(user_id: sean.id, category_id: tech.id)
UserCategory.create(user_id: stephen.id, category_id: tech.id)
UserCategory.create(user_id: tony.id, category_id: tech.id)
UserCategory.create(user_id: vilya.id, category_id: tech.id)
UserCategory.create(user_id: yong.id, category_id: tech.id)
UserCategory.create(user_id: jill.id, category_id: movies.id)
UserCategory.create(user_id: tyler.id, category_id: movies.id)
UserCategory.create(user_id: brandon.id, category_id: movies.id)
UserCategory.create(user_id: jules.id, category_id: movies.id)
UserCategory.create(user_id: miles.id, category_id: movies.id)
UserCategory.create(user_id: sam.id, category_id: movies.id)
UserCategory.create(user_id: stephen.id, category_id: movies.id)
UserCategory.create(user_id: tony.id, category_id: movies.id)
UserCategory.create(user_id: vilya.id, category_id: movies.id)
UserCategory.create(user_id: eric.id, category_id: music.id)
UserCategory.create(user_id: aaron.id, category_id: music.id)
UserCategory.create(user_id: allen.id, category_id: music.id)
UserCategory.create(user_id: dave.id, category_id: music.id)
UserCategory.create(user_id: eric2.id, category_id: music.id)
UserCategory.create(user_id: sean.id, category_id: music.id)
UserCategory.create(user_id: vilya.id, category_id: music.id)
UserCategory.create(user_id: yong.id, category_id: music.id)
UserCategory.create(user_id: jill.id, category_id: sports.id)
UserCategory.create(user_id: john2.id, category_id: sports.id)
UserCategory.create(user_id: miles.id, category_id: sports.id)
UserCategory.create(user_id: sam.id, category_id: sports.id)
UserCategory.create(user_id: sean.id, category_id: sports.id)
UserCategory.create(user_id: yong.id, category_id: sports.id)
UserCategory.create(user_id: jill.id, category_id: food.id)
UserCategory.create(user_id: eric.id, category_id: food.id)
UserCategory.create(user_id: brandon.id, category_id: food.id)
UserCategory.create(user_id: gary.id, category_id: food.id)
UserCategory.create(user_id: miles.id, category_id: food.id)
UserCategory.create(user_id: stephen.id, category_id: food.id)
UserCategory.create(user_id: tony.id, category_id: food.id)
UserCategory.create(user_id: yong.id, category_id: food.id)
UserCategory.create(user_id: eric.id, category_id: travel.id)
UserCategory.create(user_id: jill.id, category_id: travel.id)
UserCategory.create(user_id: tyler.id, category_id: travel.id)
UserCategory.create(user_id: dave.id, category_id: travel.id)
UserCategory.create(user_id: john.id, category_id: travel.id)
UserCategory.create(user_id: vilya.id, category_id: travel.id)
UserCategory.create(user_id: yong.id, category_id: travel.id)
UserCategory.create(user_id: tyler.id, category_id: art.id)
UserCategory.create(user_id: eric.id, category_id: art.id)
UserCategory.create(user_id: aaron.id, category_id: art.id)
UserCategory.create(user_id: eric2.id, category_id: art.id)
UserCategory.create(user_id: jules.id, category_id: art.id)
UserCategory.create(user_id: sean.id, category_id: art.id)
UserCategory.create(user_id: tony.id, category_id: art.id)
