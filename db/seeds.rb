# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.destroy_all
Post.destroy_all

mood = [
  "mindful of my feelings",
  "fear",
  "anger",
  "hate",
  "suffering"
]

wookiemood = [
  "wrrRAAAArgh",
  "rooawrgh",
  "gwaaarghh",
  "muuwwaa wwwaarahhg",
  "hrrr"
]

  leia = User.create(
    name: "Leia Organa",
    nickname: "Your Highness",
    email: "leia_organa@email.com",
    password: "123456", 
    force_alignment: "light",
    image: "https://s3.amazonaws.com/libapps/accounts/81381/images/leia.jpg",
  )
  4.times do |i|
    leia.posts.create(text: Faker::Movies::StarWars.quote(character: "leia_organa"), mood: mood[rand(5)], likes: rand(1..100))
  end

  leia.posts.create(text: "I love you.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSLvD78P9WF_iXXGfxQvCN2_vwnc0oDAiS-w&usqp=CAU", mood: mood[0], likes: rand(1..100))

  3.times do |i|
    leia.posts.create(text: Faker::Movies::StarWars.quote(character: "leia_organa"), mood: mood[rand(5)], likes: rand(1..100))
  end

  leia.posts.create(text: "#spacesurvivor", image: "https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2019/12/leia-space-scene.jpeg", mood: mood[0], likes: rand(1..100))

  dv = User.create(
    name: "Anakin Skywalker",
    nickname: "Darth Vader",
    email: "darth_vader@email.com",
    password: "123456", 
    force_alignment: "dark",
    image: "https://lumiere-a.akamaihd.net/v1/images/607598d0230e6a00018e21b2-image_354b1b56.jpeg?region=0%2C48%2C1536%2C768&width=960"
  )
  4.times do |i|
    dv.posts.create(text: Faker::Movies::StarWars.quote(character: "anakin_skywalker"), mood: mood[rand(5)], likes: rand(1..100))
  end
  4.times do |i|
    dv.posts.create(text: Faker::Movies::StarWars.quote(character: "darth_vader"), mood: mood[rand(5)], likes: rand(1..100))
  end


  kylo = User.create(
    name: "Ben Solo",
    nickname: "Kylo Ren",
    email: "kylo_ren@email.com",
    password: "123456", 
    force_alignment: "dark",
    image: "https://i.pinimg.com/474x/d7/e8/41/d7e8412fe59717013f104236dbf7144f.jpg"
  )
  6.times do |i|
    kylo.posts.create(text: Faker::Movies::StarWars.quote(character: "kylo_ren"), mood: mood[rand(5)], likes: rand(1..100))
  end

  han = User.create(
    name: "Han Solo",
    nickname: "Scruffy Nerf-Herder",
    email: "han_solo@email.com",
    password: "123456",
    force_alignment: "grey",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSLvD78P9WF_iXXGfxQvCN2_vwnc0oDAiS-w&usqp=CAU"
  )
  8.times do |i|
    han.posts.create(text: Faker::Movies::StarWars.quote(character: "han_solo"), mood: mood[rand(5)], likes: rand(1..100))
  end

  thrawn = User.create(
    name: "Mitth'raw'nuruodo",
    nickname: "Thrawn",
    email: "mitthrawnuruodo@email.com",
    password: "123456",
    force_alignment: "grey",
    image: "https://pbs.twimg.com/profile_images/1011376574250344448/YhbpS7KX_400x400.jpg"
  )
  1.times do |i|
    thrawn.posts.create(text: Faker::Movies::StarWars.quote(character: "grand_admiral_thrawn"), mood: mood[rand(5)], likes: rand(1..100))
  end

  obi = User.create(
    name: "Obi Wan Kenobi",
    nickname: "Old Ben",
    email: "obi_wan_kenobi@email.com",
    password: "123456",
    force_alignment: "light",
    image: "https://s.yimg.com/os/creatr-uploaded-images/2021-03/dfc70410-9099-11eb-bfbb-d294b801cc89"
  )
  2.times do |i|
    obi.posts.create(text: Faker::Movies::StarWars.quote(character: "obi_wan_kenobi"), mood: mood[rand(4)], likes: rand(1..100))
  end

  yoda = User.create(
    name: "Yoda",
    nickname: "My Little Green Friend",
    email: "yoda@email.com",
    password: "123456",
    force_alignment: "light",
    image: "https://starwarsblog.starwars.com/wp-content/uploads/2015/11/yoda-the-empire-strikes-back-1536x864-349144518002.jpg",
  )
  4.times do |i|
    yoda.posts.create(text: Faker::Movies::StarWars.quote(character: "yoda"), mood: mood[rand(5)], likes: rand(1..100))
  end

  palp = User.create(
    name: "Sheev Palpatine",
    nickname: "Darth Sidious",
    email: "sheev_palpatine@email.com",
    password: "123456",
    force_alignment: "dark",
    image: "https://www.moviemaker.com/wp-content/uploads/2019/12/emperor-palpatine.jpg",
  )
  4.times do |i|
    palp.posts.create(text: Faker::Movies::StarWars.quote(character: "emperor_palpatine"), mood: mood[rand(5)], likes: rand(1..100))
  end


  ezra = User.create(
    name: "Ezra Bridger",
    nickname: "Jaba the Hutt",
    email: "ezra_bridger@email.com",
    password: "123456",
    force_alignment: "light",
    image: "https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fdorksideoftheforce.com%2Ffiles%2Fimage-exchange%2F2018%2F08%2Fie_35888-850x560.jpeg",
  )

  luke = User.create(
    name: "Luke Skywalker",
    nickname: "Kid",
    email: "luke_skywalker@email.com",
    password: "123456",
    force_alignment: "light",
    image: "data:image/jpeg;base64,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",
  )
  10.times do |i|
    luke.posts.create(text: Faker::Movies::StarWars.quote(character: "luke_skywalker"), mood: mood[rand(5)], likes: rand(1..100))
  end

  grogu = User.create(
    name: "Grogu",
    nickname: "The Child",
    email: "baby_yoda@email.com",
    password: "123456",
    force_alignment: "grey",
    image: "https://www.thegreenhead.com/imgs/star-wars-baby-yoda-child-life-size-replica-figure-1.jpg",
  )

  mando = User.create(
    name: "Din Djarin",
    nickname: "The Mandolorian",
    email: "din_djarin@email.com",
    password: "123456",
    force_alignment: "grey",
    image: "https://cdna.artstation.com/p/assets/images/images/031/730/080/large/lee-bryan-mando-portrait-lee-bryan-art-2020.jpg?1604431127"
  )   
  maul = User.create(
    name: "Maul Opress",
    nickname: "Darth Maul",
    email: "darth_maul@email.com",
    password: "123456",
    force_alignment: "dark",
    image: "https://cdn.vox-cdn.com/thumbor/obqfP8shk4OQeFZz_YxU5VRgW9M=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19930629/raypark.jpg"
  )
  savage = User.create(
    name: "Savage Opress",
    nickname: "Ignorant Beast",
    email: "savage_opress@email.com",
    password: "123456",
    force_alignment: "dark",
    image: "https://i.pinimg.com/originals/90/64/11/906411de649b6dbda7a76aec4a3e5a4a.jpg"
  )
  ahsoka = User.create(
    name: "Ahsoka Tano",
    nickname: "Snips",
    email: "ahsoka_tano@email.com",
    password: "123456",
    force_alignment: "grey",
    image: "https://cdn.vox-cdn.com/thumbor/C9ETE3NdjUtZNnVzgN7hp7nQbCU=/653x0:2560x1196/1200x800/filters:focal(1334x321:1742x729)/cdn.vox-cdn.com/uploads/chorus_image/image/68493930/rosario_dawson_ahsoka_tano_mandalorian.0.jpg"
  ) 
  5.times do
    ahsoka.posts.create(text: Faker::Movies::StarWars.quote(character: "ahsoka_tano"), mood: mood[rand(5)], likes: rand(1..100))
  end

  jyn = User.create(
    name: "Jyn Erso",
    nickname: "Stardust",
    email: "jyn_erso@email.com",
    password: "123456",
    force_alignment: "light",
    image: "https://cdn.vox-cdn.com/thumbor/Ee-2vHfnHaJChS2G2ctOW-jTrPk=/0x0:1600x836/1200x800/filters:focal(672x290:928x546)/cdn.vox-cdn.com/uploads/chorus_image/image/53840887/jyn_erso_1.0.jpg",
  )
  krennic = User.create(
    name: "Orson Callan Krennic",
    nickname: "Director",
    email: "orson_krennic@email.com",
    password: "123456",
    force_alignment: "dark",
    image: "https://upload.wikimedia.org/wikipedia/en/a/ad/Ben_Mendelsohn_as_Orson_Krennic-Rogue_One_%282016%29.jpg"
  )
  tarkin = User.create(
    name: "Wilhuff Tarkin",
    nickname: "Grand Moff Tarkin",
    email: "grand_moff@email.com",
    password: "123456",
    force_alignment: "dark",
    image: "https://assets3.thrillist.com/v1/image/1874654/828x610/flatten;crop;jpeg_quality=70"
  )
  3.times do
    tarkin.posts.create(text: Faker::Movies::StarWars.quote(character: "grand_moff_tarkin"), mood: mood[rand(5)], likes: rand(1..100))
  end

  chewie = User.create(
    name: "Chewbacca",
    nickname: "Chewie",
    email: "chewbacca@email.com",
    password: "123456",
    force_alignment: "grey",
    image: "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F958761228%2F0x0.jpg%3Ffit%3Dscale"
  )
  22.times do |i|
    chewie.posts.create(text: Faker::Movies::StarWars.wookiee_sentence, mood: wookiemood[rand(5)], likes: rand(1..100))
  end

  puts "seeded #{User.all.length} users"
  puts "seeded #{Post.all.length} posts"
