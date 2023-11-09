let snacks = [
  {
    sid: 1,
    img: "https://drive.google.com/uc?id=1MtcoRMRl_aEIsxiVKNYtvzkN1lb0-aY8",
    name: "Margherita Pizza",
    price: 249,
    desc: "A hugely popular margherita, with a deliciously tangy single cheese topping",
  },
  {
    sid: 2,
    img: "https://drive.google.com/uc?id=1bHndWCaE_keISVXtWVq5DHqG5056XJLp",
    name: "Achari Do Pyaza Pizza",
    price: 309,
    desc: "Onions, pickle-flavored tangy sauce, and 100% authentic mozzarella cheese are the main ingredients of this pizza.",
  },
  {
    sid: 3,
    img: "https://drive.google.com/uc?id=1Yvm9B0nopl2jGlTLDT_VYhwa7DaxFPev",
    name: "Veggie Supreme Pizza",
    price: 299,
    desc: "Your choice of pizza base, tomato sauce, mozzarella, mushrooms, red and green peppers, red onions, sweetcorn, tomatoes",
  },
  {
    sid: 4,
    img: "https://drive.google.com/uc?id=1R5OMZ_5xh95OAeANLOtJo04Mf2D3mZNs",
    name: "Cheese n Corn Pizza",
    price: 329,
    desc: "A combination of juicy Sweet Corn & 100% mozzarella cheese with flavorful signature pan sauce.",
  },
  {
    sid: 5,
    img: "https://drive.google.com/uc?id=1-DCPwUfVAEm1UXynxglp_Crf7uLBCcJL",
    name: "Cheese n Tomato Pizza",
    price: 329,
    desc: "A traditional Neapolitan Margherita pizza recipe is tomato sauce with fresh tomatoes, mozzarella cheese and basil which represent the colours of the Italian flag – white cheese, green basil and red tomato",
  },
  {
    sid: 6,
    img: "https://drive.google.com/uc?id=1x-VNIqk19BXZKOLPSz7w__l4e9GGC_9I",
    name: "Peppy Paneer Pizza",
    price: 399,
    desc: "The peppy paneer pizza is made with fresh and soft paneer with crispy capsicum and topped with spicy red pepper",
  },
  {
    sid: 7,
    img: "https://drive.google.com/uc?id=16pffWiPhqjeR5ewneJFG1hTp3arC-pTB",
    name: "Veggie Paradise Pizza",
    price: 399,
    desc: "Goldern Corn, Black Olives, Capsicum & Red Paprika.The toppings include tomato sauce, onions, mushrooms, olives, feta, spinach, provolone cheese, mozzarella, and a sprinkle of roasted red peppers.",
  },
  {
    sid: 8,
    img: "https://drive.google.com/uc?id=1Vkm2d-5TCwgH3Tohm5xuLR5e4BnULnqv",
    name: "Deluxe Veggie Pizza",
    price: 459,
    desc: "Our Veggie Deluxe Specialty Pizza is loaded with Mushrooms, Red Onions, Green Peppers, Black Olives and Tomatoes with a Wisconsin Cheese Blend served on top of our Original Pizza Sauce.",
  },
  {
    sid: 9,
    img: "https://drive.google.com/uc?id=1I8nIdvnurnMzRwFcUzYZulChIoZ5MJk8",
    name: "Veg Extravaganza Pizza",
    price: 469,
    desc: "ExtravaganZZa: pepperoni, ham, Italian sausage, beef, fresh onions, fresh green peppers, fresh mushrooms, and black olives — all sandwiched between two layers of cheese made with 100% real mozzarella.",
  },
  {
    sid: 10,
    img: "https://drive.google.com/uc?id=1vFtKRGOIIyfAT3nOi1XispoOn-3gP_7L",
    name: "Creamy Tomato Pasta Pizza",
    price: 469,
    desc: "Explore creamy tomato veg pasta is filled with Instant Fusilli Pasta, Creamy Culinary Dressing, Onion, Olive, Green Capsicum & Parsley sprinkle.",
  },
  {
    sid: 11,
    img: "https://drive.google.com/uc?id=17KhYUUnWUjWA2aA-ql6zydH4T8tVABrS",
    name: "Paneer Makhani Pizza",
    price: 459,
    desc: "The paneer makhani pizza is a delicious blend of spicy tomato sauce and marinated paneer and capsicum toppings with soft and fluffy dough",
  },
  {
    sid: 12,
    img: "https://drive.google.com/uc?id=16sHkp1tOBSp6_xGF8muvENnjDOZIrPuB",
    name: "Tandoori Paneer Pizza",
    price: 459,
    desc: "Tandoori Paneer Pizza consist mustard oil, garlic, ginger, turmeric powder, garam masala, coriander powder, cumin, chili powder, and fenugreek, yogurt, ginger-garlic paste and paneer cubes",
  },
  //^ Burger
  {
    sid: 13,
    img: "https://drive.google.com/uc?id=1gafN35GkG6Pjb1TCuQoDO6d7sSzS1lao",
    name: "Cheesy Stuffed Veggie Burger",
    price: 89,
    desc: "It made from ingredients like beans, especially soybeans and tofu, nuts, grains, seeds or fungi such as mushrooms or mycoprotein.",
  },
  {
    sid: 14,
    img: "https://drive.google.com/uc?id=1ze4y8d38vAZQ_ijItNxj1_tglnH-e93h",
    name: "Aloo Tikki Burger",
    price: 99,
    desc: "Aloo Tikki are crispy, spiced, savory patties made from mashed potatoes, ground spices, herbs, together with a binding ingredient like bread crumbs or cornstarch",
  },
  {
    sid: 15,
    img: "https://drive.google.com/uc?id=11xOWz9C8CaNI-RAH_V9d2LL8OplUI89Q",
    name: "Pav Bhaji Burger",
    price: 109,
    desc: "They are made with toasted burger buns and a spicy stuffing made of vegetables and pav bhaji masala.",
  },
  {
    sid: 16,
    img: "https://drive.google.com/uc?id=1pO222MLfKPh32JkVKHxkbeENX3xIfsOb",
    name: "Green Chilly Cheese Burger",
    price: 129,
    desc: "Green Chile Cheeseburger- one of the best and simplest burgers ever. Full of flavor, a little heat, and cheesy goodness- you will want this every time you have a burger!",
  },
  {
    sid: 17,
    img: "https://drive.google.com/uc?id=16Qr52fJOAFzwynfsnGFh2uBLJDo_AnU6",
    name: "Crunchy Veg Burger",
    price: 129,
    desc: "A crisp veggie patty, slathered with delicious mayo, topped with our extra fresh and soft bun. This is the ultimate Veggie Burger, incredibly delicious with bursting flavors of spices.",
  },
  {
    sid: 18,
    img: "https://drive.google.com/uc?id=1iu8StrOvXizE2C3MLigz9pMuUViK8YBk",
    name: "Special Veg Burger",
    price: 149,
    desc: "These veggie patties are loaded on to buns, topped with lettuce, onions, tomatoes, pickled vegetables & a special burger sauce.",
  },
  {
    sid: 19,
    img: "https://drive.google.com/uc?id=11LKsruG21bPKtw87VYneS-6Vkp5dyOSQ",
    name: "Cafe Special Veg Burger",
    price: 169,
    desc: "This is the special burger of our cafe. It contains many veggies and different types of sauces. It will be your one of the favorites.",
  },
  //^ Fries
  {
    sid: 20,
    img: "https://drive.google.com/uc?id=1jjnqjAv9knpPgjf_UPuvsRKMkhWiQNpW",
    name: "French Fries",
    price: 50,
    desc: "It is typically made from deep-fried potatoes that have been cut into various shapes, especially thin strips.",
  },
  {
    sid: 21,
    img: "https://drive.google.com/uc?id=1Re1MhxO1YHvpBpbccrSH5ouqV8Dt93i7",
    name: "Chilly French Fries",
    price: 65,
    desc: "Chili cheese fries are made of crispy French fries that are then topped with chili and melted cheese, along with a variety of other toppings like green onions and jalapenos.",
  },
  {
    sid: 22,
    img: "https://drive.google.com/uc?id=15FpGh6lG4EOLnnayL2ZpLAeLuEPo3R7B",
    name: "Corn Chilly French Fries",
    price: 75,
    desc: "Corn Fries are crispy French fries layered with Mexican street corn (Elote), chili lime crema sauce and topped with queso fresco!",
  },
  {
    sid: 23,
    img: "https://drive.google.com/uc?id=1IrolV8kNp5c2ClXdS3TTFKSqJUha3HlV",
    name: "Sweet Potato Fries",
    price: 100,
    desc: "Sweet potato fries quick and easy to make and healthier than regular fries. Sweet potatoes contain iron, calcium, selenium, as well as B vitamins, vitamin C, and beta-carotene.",
  },
  {
    sid: 24,
    img: "https://drive.google.com/uc?id=1EsPbTx9i9lRxXVG86Kb2SU1V9xfuxeWS",
    name: "Curly Fries",
    price: 110,
    desc: "A kind of fries characterized by their spring-like shape, being cut from whole potatoes using a specialized spiral slicer.",
  },
  {
    sid: 25,
    img: "https://drive.google.com/uc?id=1XrZZV14D7yRXozIhOcHuk6ZWXfg8f_6D",
    name: "Tornado Fries",
    price: 120,
    desc: "It is a deep fried spiral-cut whole potato on a skewer, similar to a French fry, brushed with various seasonings such as onion, cheese, or honey. Some varieties have spliced sausages in between.",
  },
  //^ Sandwiches
  {
    sid: 26,
    img: "https://drive.google.com/uc?id=1SqdcKim4fTkcJmYxIuWSxKOdxbWs-Xnr",
    name: "Veg Club Sandwich",
    price: 50,
    desc: "A sandwich is a food typically consisting of vegetables, sliced cheese, placed on or between slices of bread.",
  },
  {
    sid: 27,
    img: "https://drive.google.com/uc?id=1j1eAktvKonPUN4X70gpAJsi0ViG-m8br",
    name: "Tomato Cucumber Sandwich",
    price: 60,
    desc: "A sandwich is a food typically consisting of tomatoes and other veggies, placed on or between slices of bread.",
  },
  {
    sid: 28,
    img: "https://drive.google.com/uc?id=1bAnUSA54-jNthzPebb9Yf-RQt9eWaquW",
    name: "Grilled Cheese Sandwich",
    price: 60,
    desc: "Grilled sandwiches are still just regular sandwiches with a filling between two slices of bread and then grilled.",
  },
  {
    sid: 29,
    img: "https://drive.google.com/uc?id=1TyG5nV11xZGiD3lCH1lONmJ_X5B8xwJK",
    name: "Aloo Grilled Sandwich",
    price: 60,
    desc: "This sandwiches are filling with aloo-matar between two slices of bread and then grilled.",
  },
  {
    sid: 30,
    img: "https://drive.google.com/uc?id=1PUIdqGvXaKUz1mlU3V_Df4aqfVBQi-Iu",
    name: "Paneer Sandwich",
    price: 65,
    desc: "Paneer Sandwich is a quick, delicious and protein-packed sandwich made with crumbled paneer, spices, veggies, herbs and bread.",
  },
  {
    sid: 31,
    img: "https://drive.google.com/uc?id=1uqJGfsTO6_Qvayn2jlsEQmxpZJAB_Z1-",
    name: "Veg Mayonnaise Sandwich",
    price: 70,
    desc: "Veg mayonnaise sandwich made with mixed veggies and mayo. Simple, quick and easy to make sandwich that makes for a great breakfast or snack.",
  },
  {
    sid: 32,
    img: "https://drive.google.com/uc?id=1GI9e7kRGKo5QCc1thBVY1FgpiPlC2n3J",
    name: "Corn Cheese Sandwich",
    price: 80,
    desc: "These quick sandwiches are made with bread of choice, sweet corn kernels, veggies, cheese, spices and sandwich spread or chutney (whatever you like).",
  },
  {
    sid: 33,
    img: "https://drive.google.com/uc?id=1Usqfv8v3y8cKVcFFty-H_QGnG9WJQL9t",
    name: "Paneer Bhurji Sandwich",
    price: 110,
    desc: "Paneer Bhurji Sandwich recipe is a quick and healthy sandwich prepared with spiced paneer/cottage cheese filling in it.",
  },
  //^ Frankie
  {
    sid: 34,
    img: "https://drive.google.com/uc?id=114pP32qVxTiGDepPvIDu5CBiAFDXI3gz",
    name: "Veg Mayo Frankie",
    price: 70,
    desc: "It's a type of roll filled with various kinds of stuffing like potato to paneer, cheese to mayonnaise, vegetable and many more.",
  },
  {
    sid: 35,
    img: "https://drive.google.com/uc?id=1jQICN7BSv-_NanYWRfZyquATMb-HWDas",
    name: "Veg Schezwan Frankie",
    price: 70,
    desc: "Schezwan Frankie is a popular Indian street-style kathi roll made with spicy and tasty schezwan chutney, aloo patties and roti.",
  },
  {
    sid: 36,
    img: "https://drive.google.com/uc?id=1G5P0fh1I31zD-08_KTWWUyJVvqb3jgZ6",
    name: "Peri Peri Paneer Frankie",
    price: 75,
    desc: "The vegetables and paneer is tossed in peri peri sauce and mayo and then wrapped in a whole wheat flour roti.",
  },
  {
    sid: 37,
    img: "https://drive.google.com/uc?id=1ljzNngs5h66P-Y3u0rAdcz2LAm8QAo5t",
    name: "Veg Mexican Frankie",
    price: 85,
    desc: "It is a veg frankie in mexican style and made with many mexican ingredients. It is a delicious and tasty.",
  },
  {
    sid: 38,
    img: "https://drive.google.com/uc?id=1Ot9iPZr8skDRRFV7gPK2ly3meUL6D7-h",
    name: "Pav Bhaji Frankie",
    price: 90,
    desc: "This is the yummiest and healthyish snack ever! A jowar roti filled with the spiced vegetable bhaji and rolled into a wrap is easy way to carry your meal.",
  },
  {
    sid: 39,
    img: "https://drive.google.com/uc?id=1vWmMbk5QInd4-eNXKo9D5rACqih2okS8",
    name: "Noodle Frankie",
    price: 85,
    desc: "a unique combination of indo chinese cuisine noodles recipe with indian street food kathi roll. an innovative and popular snack.",
  },
  {
    sid: 40,
    img: "https://drive.google.com/uc?id=15j6pdNgdT45fwMwXD5BeO7o3a-XGIsH_",
    name: "Manchurian Frankie",
    price: 100,
    desc: "Manchurian Rolls is ultimate comforting and must try street food. Various manchurain ingredients sre inside the roll.",
  },
  //^ puff
  {
    sid: 41,
    img: "https://drive.google.com/uc?id=1zSwN1lqkijtq1Sr_xae9XMzCeREW0ecr",
    name: "Veg Puff",
    price: 20,
    desc: "This puff is filled with boiled mashed potatoes, finely chopped onions, peppers, green chilies, ginger, garlic, green peas, and basic spices",
  },
  {
    sid: 42,
    img: "https://drive.google.com/uc?id=1-ub5kvdw2yVYQ8tAYqPz99nNoCI1R112",
    name: "Veg Butter Puff",
    price: 25,
    desc: "This puff is filled with boiled mashed potatoes, finely chopped onions, peppers, green chilies, ginger, garlic, green peas, and basic spices and covered with butter",
  },
  {
    sid: 43,
    img: "https://drive.google.com/uc?id=1SKM2NtoASgOhOhCzI0jjOIFtiu4ViMer",
    name: "Masala Puff",
    price: 25,
    desc: "Vegetable Masala Puffs | Curried vegetables folded into layers of buttery puff pastry are baked until golden brown and flakey.",
  },
  {
    sid: 44,
    img: "https://drive.google.com/uc?id=1TF3nIM0fzJoHDdqDbOhE9irSedhl5bHO",
    name: "Spring Puff",
    price: 25,
    desc: "This is springed puff with very tasty and delicious. You must try this for one time.",
  },
  {
    sid: 45,
    img: "https://drive.google.com/uc?id=19K1tLXXbHx4R-RAL6nwQKV5pfqx_Y6_4",
    name: "Paneer Puff",
    price: 25,
    desc: " Paneer Puff is a popular and delicious Indian bakery-style savory snack made with puff pastry sheets and paneer.",
  },
  {
    sid: 46,
    img: "https://drive.google.com/uc?id=12SRGbLcA1SsEFkFsGfif-ajRd8fMKwPg",
    name: "Meggie Puff",
    price: 45,
    desc: "Unique kids favorite deep-fried snack recipe made with maggie noodles stuffing inside a bread pocket.",
  },
  {
    sid: 47,
    img: "https://drive.google.com/uc?id=1Y4Za6IwxoyNBj9i4QJuIx2jiogH1bEJo",
    name: "Cheese Puff",
    price: 50,
    desc: "Cheese puffs, cheese curls, cheese balls, cheese ball puffs, cheesy puffs, or corn curls are a puffed corn snack, coated with a mixture of cheese or cheese-flavored powders.",
  },
  {
    sid: 48,
    img: "https://drive.google.com/uc?id=1Tt5OEG-zjEV458VLTdgEvp7_mt6AxqCp",
    name: "Italian Puff",
    price: 60,
    desc: "Made with Emmental, these cheese puffs are the perfect accompaniment to any perfect aperitif, they are crispy on the outside but creamy on the inside.",
  },
  //^ Bhel
  {
    sid: 49,
    img: "https://drive.google.com/uc?id=1nqOObpY7pm-Ylm7Jb0YeJ0mOq-d_YYfK",
    name: "Regular Bhel",
    price: 40,
    desc: "It is made of puffed rice, vegetables and a tangy tamarind sauce, and has a crunchy texture.",
  },
  {
    sid: 50,
    img: "https://drive.google.com/uc?id=1Jegzy7zeV9G42AGuxEK3hq_aAAeoKzO1",
    name: "Bombay Bhel",
    price: 50,
    desc: "Bombay bhel is one of the most famous street food and obviously tasty. It can be chilly or sweet as you like.",
  },
  {
    sid: 51,
    img: "https://drive.google.com/uc?id=1i1SFqPMMfi3Z0QLOUaQxlShdvwkX-GX2",
    name: "Papad Bhel",
    price: 60,
    desc: "Papad Bhel is a newly added instant snack to the list of street food. This savoury snack is tasty, fuss-free, and easy to make.",
  },
  {
    sid: 52,
    img: "https://drive.google.com/uc?id=1aLrbueYkTXXxVoB2YHJifzWSU0cjzpXi",
    name: "Kurkure Bhel",
    price: 60,
    desc: "This Kurkure chaat is a chop-chop, mix and match, sweet and sour bhel. Toss all the ingredients in a mixing bowl, and your bhel is ready.",
  },
  {
    sid: 53,
    img: "https://drive.google.com/uc?id=1uZff1uPleT0PWAQDJS2KcCSpbmnAeJMK",
    name: "Sweet Corn Bhel",
    price: 65,
    desc: "Corn Bhel Recipe is a quick and delicious snack made with boiled corn, tossed with chopped onions, tomatoes, cucumber ,bell pepper ,spicy mint.",
  },
  {
    sid: 54,
    img: "https://drive.google.com/uc?id=1apiEAlPfmG6BsngnkAP60Meg_TSXybcz",
    name: "Cheesy Bhel",
    price: 70,
    desc: "Cheese bhel recipe is one of the quick and cheesy Mumbai street food snacks made with puffed rice.",
  },
  {
    sid: 55,
    img: "https://drive.google.com/uc?id=1QFrJ2cRO12jguHETTdNtqWkb5mSpf0oS",
    name: "Mexican Bhel",
    price: 80,
    desc: "This bhel is made with mexican components like chunky salsa, crisp tortilla chips, sweet corn, capsicum and boiled rajma",
  },
  //^ Pasta
  {
    sid: 56,
    img: "https://drive.google.com/uc?id=1DMm3XIEb14gRXGZ-eWDVxG-7CeCrfIMJ",
    name: "Masala Pasta",
    price: 70,
    desc: "It is made with spring onions, tomatoes, ginger-garlic paste, veggies and spice powders like turmeric, cumin, coriander, black pepper, red chili powder and garam masala powder",
  },
  {
    sid: 57,
    img: "https://drive.google.com/uc?id=1YN9zEaefNmq4YpFQmqqVctbUKSeW68wk",
    name: "Veg Masala Pasta",
    price: 80,
    desc: "t's a vegetarian pasta loaded with a whole head of broccoli, corn, zucchinis, capsicum/peppers and onion, and smothered in a garlic herb tomato sauce.",
  },
  {
    sid: 58,
    img: "https://drive.google.com/uc?id=1KinaG4a267Zo9PyJfjuRz7UTYqZfgnT4",
    name: "Tomato Pasta",
    price: 80,
    desc: "Tomato Pasta is prepared by first cooking Penne or Fusilli Pasta to Al Dente perfection and then cooking them with homemade red tomato pasta sauce.",
  },
  {
    sid: 59,
    img: "https://drive.google.com/uc?id=1BXKTaDtWRhEKSuoCtuFLsi0tAkbJ9rBZ",
    name: "Butter Masala Pasta",
    price: 85,
    desc: "Butter masala pasta is made with the butter and various masala paste. And, different veggies are included in this pasta.",
  },
  {
    sid: 60,
    img: "https://drive.google.com/uc?id=1BwLB4yrbmYR4sNIujy22M__SJb-MuoFU",
    name: "Cheezde Masala Pasta",
    price: 90,
    desc: "Butter masala pasta is made with the cheese and various masala paste. And, different veggies are included in this pasta.",
  },
  {
    sid: 61,
    img: "https://drive.google.com/uc?id=1Hi1pNwtAkVphLU_j7U_MKAJiqafDlti7",
    name: "Indian Sp. Pasta",
    price: 100,
    desc: "An Indian-style pasta with a slightly spicy, creamy tomato-based butter masala sauce. It's based on everyone's favorite Indian dish.",
  },
  //^ Other
  {
    sid: 62,
    img: "https://drive.google.com/uc?id=1kpCGp8TH_zFBSiuI1Ko-7iuDHSzjKYbZ  ",
    name: "Dabeli",
    price: 20,
    desc: "Dabeli, made with little sweet and spicy potato filling in pav or buns with crunchy peanuts, pomegranate seeds, tangy tamarind and spicy garlic chutney.",
  },
  {
    sid: 63,
    img: "https://drive.google.com/uc?id=1zdUbxAX9-LEMRZ71OqkrEV0Q0ohebpoK",
    name: "Vadapav",
    price: 20,
    desc: "Vadapav is a vegetarian fast food dish consists of a deep fried potato dumpling placed inside pav sliced almost in half through the middle.",
  },
  {
    sid: 64,
    img: "https://drive.google.com/uc?id=13P2hxdHkmx3i6VV2_LH3tRa27RmPMT3R",
    name: "Kachori",
    price: 30,
    desc: "It is usually a round ball made of flour and dough filled with a stuffing of yellow moong dal, black pepper, red chili powder, and ginger paste.",
  },
  {
    sid: 65,
    img: "https://drive.google.com/uc?id=1KRt6JlzrN9PDGhcC_DtDjcp3fIdnI40f",
    name: "Sev Khamani",
    price: 30,
    desc: "The appetiser tastes sweet and sour both at once as it is flavoured with a tinge of lemon juice along with sugar.",
  },
  {
    sid: 66,
    img: "https://drive.google.com/uc?id=1N3JltHmPTMeFJzO8ukaRBOLpA0BWIpvb",
    name: "Dalvada",
    price: 30,
    desc: "Dal Vada are made with lentils of choice, spices and herbs. These delicious and crispy dal vada are a great way to make your festive time fun-filled.",
  },
  {
    sid: 67,
    img: "https://drive.google.com/uc?id=1JZTTkOmlY2HoWHfgfQyrz8o9AbfUruEb",
    name: "Samosa",
    price: 30,
    desc: "A samosa or singara is a fried South Asian pastry with a savoury filling, including ingredients such as spiced potatoes, onions, and peas.",
  },
  {
    sid: 68,
    img: "https://drive.google.com/uc?id=1NlLzx2GRUbkdPB9lzmnBhqBI8TE_Ra1I",
    name: "Punjabi Samosa",
    price: 40,
    desc: "Punjabi samosa is made potato, beans and tastes very delicious and many ingredients are in this.",
  },
  {
    sid: 69,
    img: "https://drive.google.com/uc?id=12ZhToUJoBSyZXkgQUY28Q1D_j0qA5fVu",
    name: "Handvo",
    price: 80,
    desc: "Handvo is a savory vegetable cake. It is often made with a bottle gourd filling, though many other vegetables can be added. Sometimes crushed peanuts are also added.",
  },
  {
    sid: 70,
    img: "https://drive.google.com/uc?id=1UwDmiZ8HDZ5-r7ceiDXKsm6JUX4nn8wo",
    name: "Garlic Bread",
    price: 120,
    desc: "Garlic bread consists of bread, topped with garlic and olive oil or butter and may include additional herbs, such as oregano or chives.",
  },
];

for (let item of snacks) {
  document.querySelector("#ordersnacks").innerHTML +=
    `<div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title text-center">${item.name }</h5>
        <img class="w-100 "  src="${item.img }" class="card-img-top" alt="...">
        <hr>
        <p class="card-text">${item.desc }</p>
      </div>
      <div class="card-footer d-flex justify-content-between">
        <p class="price"><span>&#8377;</span>${item.price }</p>
        <button class="btn add-item" id="${item.sid }" onclick="let typename = 'snacks';let itemNumber = 1;total(typename,this.id,itemNumber)"> Add </button>
      </div>
    </div>
  </div>`;
}

let beverages = [
  //^ Tea
  {
    bid: 1,
    img: "https://drive.google.com/uc?id=1QWHbvlAnrpaqV72HnKItT7Fj2rAJLttm",
    name: "Ginger Tea",
    price: 20,
    desc: "A delicious, warming Indian Ginger Tea made with fresh ginger roots, tea leaves and milk.",
  },
  {
    bid: 2,
    img: "https://drive.google.com/uc?id=1N7TglGOrNqCQyYY3yb4lkf1FJXdpbjDx",
    name: "Ginger Mint Tea",
    price: 25,
    desc: "It is called Pudina Adrak Chai in Hindi, this tea has a bite from the ginger and a lovely aroma from the mint.",
  },
  {
    bid: 3,
    img: "https://drive.google.com/uc?id=1SuITRACISyWJ9YPhJEUW1MRpzS_FXJfL",
    name: "Kullad Tea",
    price: 25,
    desc: "A Kullad or Kulhad is a traditional clay cup, made like all earthenware, by firing in kiln. ",
  },
  {
    bid: 4,
    img: "https://drive.google.com/uc?id=18Ah2nqCQ1e4Pb3GU9VRIrJezytqCeEiL",
    name: "Sugar Free Tea",
    price: 30,
    desc: "This tea is made with suger free for the person who has diabities.",
  },
  {
    bid: 5,
    img: "https://drive.google.com/uc?id=1QlKxUfqbmBwG61Y_dAn2_JE8E7eKqkIM",
    name: "Elaichi Tea",
    price: 40,
    desc: "As the name suggests, elaichai chai or cardamom tea literally translates to cardamom flavoured tea.",
  },
  {
    bid: 6,
    img: "https://drive.google.com/uc?id=1PP8ppfh73yqBtAf5hCuvNzhuymOZzrJK",
    name: "Tulsi Tea",
    price: 40,
    desc: "Promotes heart health by lowering cholesterol and high blood pressure. Reduces the negative physical and psychological effects of stress.",
  },
  {
    bid: 7,
    img: "https://drive.google.com/uc?id=1RUYkfgricUUtU4hJRwbJS60hjZkNstow",
    name: "Tandoori Tea",
    price: 40,
    desc: "Tandoori Chai (Kulhad Chai) is a delicious twist on regular tea where Masala Chai is smoked by pouring it into a hot kulhad (clay mug).",
  },
  {
    bid: 8,
    img: "https://drive.google.com/uc?id=1fTNHFoz-GrqLoR6fsbsHJWYjK-yqPTNf",
    name: "Kesar Tea",
    price: 50,
    desc: "Saffron tea Kesar Chai is a milk tea that is full of good health and helps you in relaxing.",
  },
  {
    bid: 9,
    img: "https://drive.google.com/uc?id=1cmA2yPK3wL66PbtzztgbyUjMv50TT9H3",
    name: "Green Tea",
    price: 60,
    desc: "Green tea is a type of tea that is made from Camellia sinensis leaves and buds that have not undergone the same withering and oxidation process which is used to make oolong teas and black teas.",
  },
  {
    bid: 10,
    img: "https://drive.google.com/uc?id=1LySxTqAoZi9MvYYYFg-a193KZKJUi-Ci",
    name: "Black Tea",
    price: 60,
    desc: "Black tea is a type of tea produced from the camellia sinensis plant that is highly oxidized, resulting in a dark reddish-gold hue, a hearty, slightly astringent flavor, and a moderate amount of caffeine.",
  },
  {
    bid: 11,
    img: "https://drive.google.com/uc?id=1jQnJ07jNHbOx_1wk8ZLG9dyoHiHbMuuh",
    name: "Lemon Tea (Ice)",
    price: 80,
    desc: "Lemon tea is one of our favorite blends for a refreshing, healthy citrus sip. There are tons of different types of lemon teas",
  },
  {
    bid: 12,
    img: "https://drive.google.com/uc?id=1wPSUZOGs7Cx52_6PnrDOYw_-vj8HXgg4",
    name: "Blueberry Tea (Ice)",
    price: 80,
    desc: "Blueberry tea is made by steeping leaves of the blueberry bush in hot water.It provides a number of unique health benefits that make it both refreshing to drink and beneficial to your body.",
  },
  {
    bid: 13,
    img: "https://drive.google.com/uc?id=15-El1b7TYZdkZYN9tDktokuQY4vpDMVg",
    name: "Rose Tea (Ice)",
    price: 80,
    desc: "Rose tea is an aromatic herbal beverage made from the fragrant petals and buds of rose flowers. It's claimed to offer numerous health benefits, though many of these are not well supported by science.",
  },
  {
    bid: 14,
    img: "https://drive.google.com/uc?id=1H8WqOq9uDIYlyjiKbMnoSIgpLP16ukhv",
    name: "Peach Tea (Ice)",
    price: 80,
    desc: "Peach tea is made from the dried leaves and bark of a peach tree. Peaches have long been recognized for both their culinary and medicinal properties.",
  },
  
  //^ Coffee
  {
    bid: 15,
    img: "https://drive.google.com/uc?id=1zJtEXG_zJWJN2NAgAxX-h73yuabydZVE",
    name: "Hot Coffee",
    price: 80,
    desc: "A hot coffee is a casual get-together between two people who enjoy each other's company. It is tasty beverage.",
  },
  {
    bid: 16,
    img: "https://drive.google.com/uc?id=198MSuuCEO4v2yikAkzGJ2jDk_kLhyfKB",
    name: "Espresso Coffee",
    price: 129,
    desc: "Espresso is a concentrated form of coffee, served in shots. It's made of two ingredients - finely ground, 100% coffee, and hot water.",
  },
  {
    bid: 17,
    img: "https://drive.google.com/uc?id=1asXFcmJt8ZNj4hfaUQQFOpk6ZS_slFgO",
    name: "Cold Coffee",
    price: 139,
    desc: "Cold Coffee is a creamy and popular cold beverage that is made from 3 main ingredients - coffee, sugar, and cold milk shaken or blended well in a mixer grinder.",
  },
  {
    bid: 18,
    img: "https://drive.google.com/uc?id=1TwV0F_5UmNcnfw_pe-S2qnQfoSf9oH7Y",
    name: "Cappuccino",
    price: 139,
    desc: "A cappuccino is the perfect balance of espresso, steamed milk and foam. This coffee is all about the structure and the even splitting of all elements into equal thirds.",
  },
  {
    bid: 19,
    img: "https://drive.google.com/uc?id=10mv3duEQom_pFaUuylFCVQeEElLWH0ne",
    name: "Americano",
    price: 139,
    desc: "An Americano is made by pouring hot water over one or two espresso shots, resulting in a drink of similar volume and strength to regular coffee.",
  },
  {
    bid: 20,
    img: "https://drive.google.com/uc?id=1hhAfhgQmU-kr5dmb77scBWcPVvSoD9pb",
    name: "Mocha",
    price: 149,
    desc: "Although a mocha is often interpreted differently across the world, the basis is that a shot of espresso is combined with a chocolate powder or syrup, followed by milk or cream.",
  },
  {
    bid: 21,
    img: "https://drive.google.com/uc?id=1o1rPYQ3PSEMXB334XY3VwNyTXkl0S6O3",
    name: "Cafe Latte",
    price: 159,
    desc: "A latte or caffè latte is a milk coffee that is a made up of one or two shots of espresso, steamed milk and a final, thin layer of frothed milk on top.",
  },
  {
    bid: 22,
    img: "https://drive.google.com/uc?id=1DXbS2agB5sj_QwJPeJu47yDE3ks8ARko",
    name: "Vanilla Cappuccino",
    price: 169,
    desc: "A French vanilla cappuccino is a coffee drink that is made with espresso, steamed milk, and foam that has been flavored with vanilla syrup.",
  },
  {
    bid: 23,
    img: "https://drive.google.com/uc?id=16sp3NLlcmBBCVbSEBbR3iTx7hbjcZwfy",
    name: "Caramel Cappuccino",
    price: 179,
    desc: "Caramel Cappuccino recipe features whole steamed milk, bold espresso made from sustainably-sourced beans, fluffy foam, and buttery caramel flavor.",
  },
  {
    bid: 24,
    img: "https://drive.google.com/uc?id=1HJBwg1CVsLIPuudzHCtNpehgFZD6EV5g",
    name: "Hazelnut Cappuccino",
    price: 189,
    desc: "Hazelnut coffee is a flavored coffee with hazelnut as its primary flavor. It is typically made by adding hazelnut extract or hazelnut flavoring to coffee grounds before brewing or using hazelnut-flavored coffee beans.",
  },
  //^ Juice
  {
    bid: 25,
    img: "https://drive.google.com/uc?id=1TV6KxjVU627_Jx2xJ68y-05VRZ1JfLh9",
    name: "Banana Juice",
    price: 120,
    desc: "This delicious and creamy banana juice recipe is made from ripe bananas, milk and sweetener.",
  },
  {
    bid: 26,
    img: "https://drive.google.com/uc?id=1AgMnlFIJBgXwmY3j2sUsi-_DDdr7en-v",
    name: "Chikoo Juice",
    price: 130,
    desc: "This delicious and creamy banana juice recipe is made from ripe chikoo, milk and sweetener.",
  },
  {
    bid: 27,
    img: "https://drive.google.com/uc?id=1r76f0oI_NSyycudDgYr39ESMpd1qteEj",
    name: "Pineapple Juice",
    price: 140,
    desc: "This delicious and creamy pinapple juice recipe is made from ripe chikoo, milk and sweetener.",
  },
  {
    bid: 28,
    img: "https://drive.google.com/uc?id=1JeUz4-TYpxWoh0Hk7Kzn0ZGy6vFnzh3m",
    name: "Butterscotch Juice",
    price: 140,
    desc: "This delicious and creamy juice is made with brown sugar and butter.",
  },
  {
    bid: 29,
    img: "https://drive.google.com/uc?id=104E4kp6e_cfBYj5K3eNQ4kRXUjdVaT_t",
    name: "Rose Juice",
    price: 150,
    desc: "Rose juice is made from water and rose petals.",
  },
  {
    bid: 30,
    img: "https://drive.google.com/uc?id=1JH0t06q_0PuV2Bn-lxETY8zfY1xDKjDN",
    name: "Kiwi Juice",
    price: 190,
    desc: "The ellipsoidal kiwi fruit is a true berry and has furry brownish green skin.",
  },
  {
    bid: 31,
    img: "https://drive.google.com/uc?id=11395ASd-HQRwTfhrCuggpqjr91nElB6-",
    name: "Mango Juice",
    price: 190,
    desc: "Mango juice is just what it sounds like, juice made from mangos.",
  },
  {
    bid: 32,
    img: "https://drive.google.com/uc?id=1_k6-mTeCgdiKERZIFdeqWKVtQHtZ9A4H",
    name: "Apple Rich Juice",
    price: 190,
    desc: "Apple juice helps boost energy. Being the richest source of phenolic compounds.",
  },
  {
    bid: 33,
    img: "https://drive.google.com/uc?id=1j8csTCLwNH1krGPUFfJUgBisnBOLZ8X9",
    name: "Sitafal Juice",
    price: 200,
    desc: "Sitafal juice is very delicious and extremely creamy.",
  },
  {
    bid: 34,
    img: "https://drive.google.com/uc?id=1bMsI_-D9EoBRCi_39_u5mcSmPKHPugjv",
    name: "Litchi Juice",
    price: 200,
    desc: "Fresh juicy lychees blended with water, mint, and lime juice and strained through a fine-mesh strainer.",
  },
  {
    bid: 35,
    img: "https://drive.google.com/uc?id=1pVqFJi4-c0XvPbGB9325UrBVfKSITRRT",
    name: "Strawberry Juice",
    price: 210,
    desc: "Strawberry juice is the fruit juice from strawberries. It is rich with Vitamin C and ranges from sweet to sweet tart in taste.",
  },
  //^ cans
  {
    bid: 36,
    img: "https://drive.google.com/uc?id=17gxwpUJL4NXBuUX00AOlIUc25Sh5NVlN",
    name: "Sprite",
    price: 40,
    desc: '<p class="text-center fs-6">“Thirst for Yours”</p>',
  },
  {
    bid: 37,
    img: "https://drive.google.com/uc?id=1edvC3OAgYY6D7wFJiqwnNQXMrn8nwkrt",
    name: "Thums Up",
    price: 40,
    desc: '<p class="text-center fs-6">“Taste the thunder!”</p>',
  },
  {
    bid: 38,
    img: "https://drive.google.com/uc?id=1CM4WmvY5nG77CE6C11qfGN1B-NI1FFeu",
    name: "Fanta",
    price: 40,
    desc: '<p class="text-center fs-6">“Fanta ka signal loud, Bunking is allowed”</p>',
  },
  {
    bid: 39,
    img: "https://drive.google.com/uc?id=1q9SEy4m-xBHm9Tr8LpAN9r5xExjfHoxj",
    name: "Coca Cola",
    price: 40,
    desc: '<p class="text-center fs-6">“Taste the Inflation”</p>',
  },
  {
    bid: 40,
    img: "https://drive.google.com/uc?id=1v6lN-zy736J2aNuKqevzrRK6AdAVFDQW",
    name: "Pepsi",
    price: 40,
    desc: '<p class="text-center fs-6">“Rise Up, Baby!”</p>',
  },
  {
    bid: 41,
    img: "https://drive.google.com/uc?id=19qnXvgLJhmAmfV-WMAUQ6FM1lqzVti1H",
    name: "Mountain Due",
    price: 40,
    desc: '<p class="text-center fs-6">“Do the Dew”</p>',
  },
  {
    bid: 42,
    img: "https://drive.google.com/uc?id=1JGaXe8VE0-EmyW7IV5AGWc_g-O6zUM-J",
    name: "Charged",
    price: 50,
    desc: '<p class="text-center fs-6">“Get Charged”</p>',
  },
  {
    bid: 43,
    img: "https://drive.google.com/uc?id=1sF8gFPy6ogKJoEASsJl2y_skOJfzzh4t",
    name: "Hell",
    price: 55,
    desc: '<p class="text-center fs-6">“Gives you power like HELL”</p>',
  },
  {
    bid: 44,
    img: "https://drive.google.com/uc?id=1CuceGnh1jlQI7Y6DmUrFuyG0tTIX2Ze_",
    name: "Monster",
    price: 100,
    desc: '<p class="text-center fs-6">“Unleash the Beast”</p>',
  },
  {
    bid: 45,
    img: "https://drive.google.com/uc?id=1cRyzQtQDKzz_3N9zIFxfT6Vu1XzQ9BtL",
    name: "Red Bull",
    price: 110,
    desc: '<p class="text-center fs-6">“Red Bull gives you wings”</p>',
  },
];

for (let item of beverages) {
  document.querySelector("#orderbeverages").innerHTML +=
    `<div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title text-center">${item.name }</h5>
        <img class="w-100 "  src="${item.img }" class="card-img-top" alt="...">
        <hr>
        <p class="card-text">${item.desc }</p>
      </div>
      <div class="card-footer d-flex justify-content-between">
        <p class="price"><span>&#8377;</span>${item.price }</p>
        <button class="btn add-item" id="${item.bid }"  onclick="let typename = 'beverages';let itemNumber = 1;total(typename,this.id,itemNumber)"> Add </button>
      </div>
    </div>
  </div>`;
}

let combo = [
  {
    cid: 1,
    img: "https://drive.google.com/uc?id=1UqW8lrEnRnFPL0LFLlDGy30Rug0NmPd9",
    name: "Kadak Combo",
    price: 169,
    desc: "Veg club sandwich(Regular)<br>Cappuccino",
  },
  {
    cid: 2,
    img: "https://drive.google.com/uc?id=15IDZXegkQQKsvmcDut4v_spZdhh8JACb",
    name: "Mazedar Combo",
    price: 199,
    desc: '<p class="my-1">Cheesy Stuffed Veggie Burger(regular)</p>Lemon Tea (Ice)<p class="my-1">French Fries</p>',
  },
  {
    cid: 3,
    img: "https://drive.google.com/uc?id=1nHMxnhwUnXoKfa2AM4BMO_SnpN4QESpe",
    name: "Delight Combo",
    price: 329,
    desc: '<p class="my-1">Garlic Bread</p>Coca Cola Can<p class="my-1">Veggie Supreme Pizza(Regular)</p>',
  },
  {
    cid: 4,
    img: "https://drive.google.com/uc?id=1jyTmN4vEAIL6TMpAohYPYAndEblu4ySY",
    name: "Burger Combo",
    price: 499,
    desc: '<p class="my-1">3 Special Veg Burger (Regular)</p>Monster',
  },
  {
    cid: 5,
    img: "https://drive.google.com/uc?id=18CQ8EUkKeAZnv2M7GsviLaWygD-iT6ed",
    name: "Delux Combo",
    price: 519,
    desc: '<p class="my-1">Creamy Tomato Pasta Pizza (Regular)</p>Aloo Tikki Burger (Regular)<p class="my-1">Caramel Cappuccino </p>',
  },
];

for (let item of combo) {
  document.querySelector("#ordercombo").innerHTML +=
    `<div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title text-center">${item.name }</h5>
        <img class="w-100 "  src="${item.img }" class="card-img-top" alt="...">
        <hr>
        <p class="card-text">${item.desc }</p>
      </div>
      <div class="card-footer d-flex justify-content-between">
        <p class="price"><span>&#8377;</span>${item.price }</p>
        <button class="btn add-item" id="${item.cid }"  onclick="let typename = 'combo';let itemNumber = 1;total(typename,this.id,itemNumber)"> Add </button>
      </div>
      </div>
  </div>`;
}

var total_items = [];


function total(name, id) {
  if (name == "snacks") {
    var item = snacks[id - 1];
  } else if (name == "beverages") {
    var item = beverages[id - 1];
  } else {
    var item = combo[id - 1];
  }

  let item_value = item.price;

  let set_cart = () => {
    document.getElementById("cart").innerHTML +=
      ` <div class="col" id="${name+'0'+id}">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title text-center">${item.name }</h5>
            <img class="w-100 "  src="${item.img }" class="card-img-top" alt="...">
            <hr>
            <h5 class="card-title"><span>&#8377;</span>${item_value }</h5>
            <p class="card-text">${item.desc }</p>
          </div>
          <div class="card-footer  d-flex align-items-center justify-content-between">
            <div class="input-group me-auto" id="idbutton">
              <button class="btn btn-outline-secondary" onclick="inc(${name + id},${item_value})" type="button">+</button>
              <input type="text" id="${name+id}" class="form-control inp-style" placeholder="1" disabled>
              <button class="btn btn-outline-secondary" type="button" onclick="dec(${name + id},${item_value})" >-</button>
              </div>
              <button class="btn btn-outline-secondary" 
               onclick="removeItem(${name+'0'+id},${name+id},${item_value},${name},${id})">Remove</button>
          </div>
        </div>
        </div>`;
  };

  let flag = false;

  if (total_items.length != 0) {
    for (let element of total_items) {
      if (element == item.name) {
        let pl = document.getElementById(name + id).placeholder;
        document.getElementById(name + id).placeholder = Number(pl) + 1;
        flag = false;
      } else {
        flag = true;
      }
    }
  } else {
    flag = true;
  }



  if (flag) {
    set_cart();
    total_items.push(item.name);
  }

  let price = document.getElementById("money").innerHTML;
  let items = document.getElementById("items").innerHTML;
  document.getElementById("money").innerHTML = Number(price) + item_value;
  document.getElementById("items").innerHTML = Number(items) + 1;
}

function inc(name, item_price) {
  
  let pl = name.placeholder;
  name.placeholder = Number(pl) + 1;

  let price = document.getElementById("money").innerHTML;
  let items = document.getElementById("items").innerHTML;
  document.getElementById("money").innerHTML = Number(price) + item_price;
  document.getElementById("items").innerHTML = Number(items) + 1;
}

function dec(name, item_price) {
  let pl = Number(name.placeholder);

  if(pl>1){
    name.placeholder = pl - 1;
    let price = document.getElementById("money").innerHTML;
    let items = document.getElementById("items").innerHTML;
    document.getElementById("money").innerHTML = Number(price) - item_price;
    document.getElementById("items").innerHTML = Number(items) - 1;
  }

}

function removeItem(item_id,item_count,item_value,type,index){
  item_count = item_count.placeholder;
  let price = document.getElementById("money").innerHTML;
  let items = document.getElementById("items").innerHTML;
  document.getElementById("money").innerHTML = Number(price) - ((item_value)*(item_count));
  document.getElementById("items").innerHTML = Number(items) - item_count;
  item_id.remove();
  total_items.pop(type[index].name);
}

function setPrice(){
  let val = document.getElementById("money").innerHTML;
  document.getElementById("order-money").innerHTML = val; 
}