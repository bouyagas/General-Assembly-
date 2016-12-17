# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user_1 = User.create(name:Faker::Name.name)
user_2 = User.create(name:Faker::Name.name)


4.times do
 post = user_1.posts.create(
   title:[Faker::Hacker.adjective, Faker::Hacker.noun].join(' '),
   body: Faker::Hacker.say_something_smart
   )
 post.comments.create(body: Faker::Hipster.sentence, user: user_2)
end
