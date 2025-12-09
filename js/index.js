var dinnerPhoto = document.getElementById('dinnerPhoto');
var dinnerName = document.getElementById('dinnerName');
var extendedTime = document.getElementById('extendedTime');
var ingredients = document.getElementById('ingredients');
var instructions = document.getElementById('instructions');
var nutrition = document.getElementById('nutrition');
var tips = document.getElementById('tips');
// all data
var dinnerMeals = [
   {
      // dinner - photo
      photo: {
         img: 'lasagna-bolognese.webp',
         rate: 4.9,
         reviews: 478,
         servings: 4,
         time: {
            prep: 30,
            cock: 90,
         },
      },
      // dinner-name
      name: {
         level: 'Intermediate',
         cuisine: 'Italian',
         title: 'Lasagna Bolognese',
         description: 'Layered Italian pasta with rich meat sauce and béchamel',
      },
      // ingredients
      ingredients: [
         '12 lasagna sheets',
         '500g ground beef',
         '400g canned tomatoes',
         '1 onion, diced',
         '2 carrots, diced',
         '500ml béchamel sauce',
         '200g mozzarella, grated',
         '100g parmesan cheese',
         'Fresh basil',
      ],
      // instructions
      instructions: [
         'Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.',
         'Cook lasagna sheets according to package directions. Drain and set aside.',
         'Preheat oven to 180°C (350°F).',
         'In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.',
         'Top final layer with béchamel, mozzarella, and parmesan cheese.',
         'Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving.',
      ],
      // nutrition
      nutrition: {
         calories: 680,
         protein: 42,
         carbohydrates: 58,
         fat: 28,
         fiber: 6,
         sodium: 920,
      },
      // tips
      tips: [
         'Make bolognese sauce a day ahead for better flavor',
         "Don't skip the resting time after baking",
         'Use fresh pasta sheets for best texture',
         'Freeze leftovers in individual portions',
      ],
   },
   {
      // dinner - photo
      photo: {
         img: 'teriyaki-chicken-bowl.webp',
         rate: 4.7,
         reviews: 367,
         servings: 2,
         time: {
            prep: 15,
            cock: 20,
         },
      },
      // dinner-name
      name: {
         level: 'Easy',
         cuisine: 'Asian',
         title: 'Teriyaki Chicken Bowl',
         description: 'Sweet and savory chicken over rice with vegetables',
      },
      // ingredients
      ingredients: [
         '400g chicken thighs, sliced',
         '1/2 cup teriyaki sauce',
         '2 cups cooked rice',
         '1 broccoli head, florets',
         '1 carrot, julienned',
         'Sesame seeds',
         'Green onions, sliced',
         '1 tablespoon sesame oil',
      ],
      // instructions
      instructions: [
         'Heat sesame oil in a pan. Cook chicken until browned on all sides.',
         'Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.',
         'Meanwhile, steam broccoli and carrots until tender-crisp.',
         'Divide rice between bowls.',
         'Top with teriyaki chicken and steamed vegetables.',
         'Garnish with sesame seeds and green onions. Serve hot.',
      ],
      // nutrition
      nutrition: {
         calories: 540,
         protein: 42,
         carbohydrates: 58,
         fat: 14,
         fiber: 4,
         sodium: 1240,
      },
      // tips
      tips: ['Use chicken thighs for juicier meat', 'Make homemade teriyaki sauce for better flavor control', 'Add edamame for extra protein', 'Meal prep by cooking rice and chicken ahead'],
   },
   {
      // dinner - photo
      photo: {
         img: 'pad-thai.webp',
         rate: 4.8,
         reviews: 445,
         servings: 2,
         time: {
            prep: 20,
            cock: 15,
         },
      },
      // dinner-name
      name: {
         level: 'Intermediate',
         cuisine: 'Asian',
         title: 'Pad Thai',
         description: 'Popular Thai stir-fried noodles with shrimp and peanuts',
      },
      // ingredients
      ingredients: [
         '200g rice noodles',
         '200g shrimp, peeled',
         '2 eggs',
         '3 tablespoons tamarind paste',
         'tablespoons fish sauce',
         'tablespoon palm sugar',
         'Bean sprouts',
         'Crushed peanuts',
         'Lime wedges and cilantro',
      ],
      // instructions
      instructions: [
         'Soak rice noodles in warm water for 30 minutes. Drain and set aside.',
         'Mix tamarind paste, fish sauce, and palm sugar to make the sauce.',
         'Heat wok over high heat. Scramble eggs and set aside.',
         'Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.',
         'Add scrambled eggs and bean sprouts. Toss everything together.',
         'Serve topped with crushed peanuts, lime wedges, and cilantro.',
      ],
      // nutrition
      nutrition: {
         calories: 540,
         protein: 32,
         carbohydrates: 62,
         fat: 16,
         fiber: 4,
         sodium: 1120,
      },
      // tips
      tips: [
         "Don't oversoak noodles or they'll be mushy",
         'Cook on high heat for authentic wok flavor',
         'Balance sweet, sour, and salty flavors',
         'Prepare all ingredients before starting to cook',
      ],
   },
   {
      // dinner - photo
      photo: {
         img: 'caprese-sandwich.webp',
         rate: 4.5,
         reviews: 189,
         servings: 2,
         time: {
            prep: 10,
            cock: 5,
         },
      },
      // dinner-name
      name: {
         level: 'Easy',
         cuisine: 'Italian',
         title: 'Caprese Sandwich',
         description: 'Fresh Italian sandwich with mozzarella, tomato, and basil',
      },
      // ingredients
      ingredients: [
         '1 ciabatta bread',
         '200g fresh mozzarella, sliced',
         '2 large tomatoes, sliced',
         'Fresh basil leaves',
         '3 tablespoons pesto',
         '2 tablespoons balsamic glaze',
         'Olive oil',
         'Salt and pepper',
      ],
      // instructions
      instructions: [
         'Slice ciabatta bread in half horizontally.',
         'Toast bread lightly until just crispy.',
         'Spread pesto on both sides of bread.',
         'Layer mozzarella slices, tomato slices, and fresh basil leaves.',
         'Drizzle with olive oil and balsamic glaze. Season with salt and pepper.',
         'Close sandwich, cut in half, and serve immediately.',
      ],
      // nutrition
      nutrition: {
         calories: 480,
         protein: 22,
         carbohydrates: 48,
         fat: 22,
         fiber: 3,
         sodium: 680,
      },
      // tips
      tips: [
         'Use ripe, in-season tomatoes for best flavor',
         'Buffalo mozzarella is traditional but harder to slice',
         'Toast bread lightly - not too crispy',
         'Add prosciutto or salami for a heartier sandwich',
      ],
   },
   {
      // dinner - photo
      photo: {
         img: 'beef-tacos.webp',
         rate: 4.6,
         reviews: 278,
         servings: 4,
         time: {
            prep: 15,
            cock: 20,
         },
      },
      // dinner-name
      name: {
         level: 'Easy',
         cuisine: 'American',
         title: 'Beef Tacos',
         description: 'Flavorful Mexican tacos with seasoned ground beef',
      },
      // ingredients
      ingredients: [
         '500g ground beef',
         '8 taco shells',
         '1 onion, diced',
         '2 tablespoons taco seasoning',
         'Shredded lettuce',
         'Diced tomatoes',
         'Shredded cheddar cheese',
         'Sour cream',
         'Salsa',
      ],
      // instructions
      instructions: [
         'Heat a large skillet over medium-high heat. Cook ground beef until browned.',
         'Add diced onion and cook until softened, about 5 minutes.',
         'Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.',
         'Warm taco shells according to package directions.',
         'Fill each shell with seasoned beef.',
         'Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately.',
      ],
      // nutrition
      nutrition: {
         calories: 420,
         protein: 26,
         carbohydrates: 32,
         fat: 20,
         fiber: 4,
         sodium: 780,
      },
      // tips
      tips: [
         'Drain excess fat from beef for healthier tacos',
         'Warm shells in oven for better texture',
         'Prepare all toppings before cooking beef',
         'Use ground turkey for a lighter option',
      ],
   },
   {
      // dinner - photo
      photo: {
         img: 'bbq-pulled-pork.webp',
         rate: 4.7,
         reviews: 412,
         servings: 4,
         time: {
            prep: 15,
            cock: 240,
         },
      },
      // dinner-name
      name: {
         level: 'Easy',
         cuisine: 'American',
         title: 'BBQ Pulled Pork',
         description: 'Slow-cooked tender pork in smoky barbecue sauce',
      },
      // ingredients
      ingredients: [
         '1kg pork shoulder',
         '1 cup BBQ sauce',
         '1/2 cup apple cider vinegar',
         '2 tablespoons brown sugar',
         '1 tablespoon paprika',
         '1 tablespoon garlic powder',
         'Burger buns',
         'Coleslaw for serving',
      ],
      // instructions
      instructions: [
         'Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.',
         'Place pork in slow cooker with apple cider vinegar and 1/2 cup water.',
         'Cook on low for 8 hours or high for 4 hours until meat is very tender.',
         'Remove pork and shred with two forks. Discard excess fat.',
         'Return shredded pork to slow cooker, mix with BBQ sauce.',
         'Serve on toasted buns with coleslaw on top.',
      ],
      // nutrition
      nutrition: {
         calories: 620,
         protein: 48,
         carbohydrates: 52,
         fat: 22,
         fiber: 3,
         sodium: 1180,
      },
      // tips
      tips: [
         'Use pork shoulder for best results - it stays moist',
         'Let pork rest before shredding for juicier meat',
         'Make your own BBQ sauce for better flavor',
         'Leftovers freeze well for up to 3 months',
      ],
   },
   {
      // dinner - photo
      photo: {
         img: 'classic-beef-burger.webp',
         rate: 4.6,
         reviews: 421,
         servings: 4,
         time: {
            prep: 15,
            cock: 20,
         },
      },
      // dinner-name
      name: {
         level: 'Easy',
         cuisine: 'American',
         title: 'Classic Beef Burger',
         description: 'Juicy homemade burger with all the fixings',
      },
      // ingredients
      ingredients: ['500g ground beef (80/20)', '4 burger buns', '4 slices cheddar cheese', 'Lettuce leaves', 'Tomato slices', 'Red onion, sliced', 'Pickles', 'Burger sauce or condiments'],
      // instructions
      instructions: [
         'Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.',
         'Season patties generously with salt and pepper on both sides.',
         'Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.',
         'Add cheese slices in the last minute of cooking and cover to melt.',
         'Toast burger buns lightly on the grill or in a pan.',
         'Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.',
      ],
      // nutrition
      nutrition: {
         calories: 650,
         protein: 38,
         carbohydrates: 42,
         fat: 35,
         fiber: 2,
         sodium: 920,
      },
      // tips
      tips: [
         "Don't press down on burgers while cooking - keeps them juicy",
         'Make indent in center to prevent burger from puffing up',
         'Let patties rest for 2-3 minutes before serving',
         'Toast buns for better texture and flavor',
      ],
   },
   {
      // dinner - photo
      photo: {
         img: 'greek-moussaka.webp',
         rate: 4.8,
         reviews: 234,
         servings: 4,
         time: {
            prep: 30,
            cock: 60,
         },
      },
      // dinner-name
      name: {
         level: 'Intermediate',
         cuisine: 'Mediterranean',
         title: 'Greek Moussaka',
         description: 'Traditional layered eggplant casserole with lamb',
      },
      // ingredients
      ingredients: [
         '3 large eggplants, sliced',
         '500g ground lamb',
         '400g canned tomatoes',
         '1 onion, diced',
         '3 cloves garlic, minced',
         '500ml béchamel sauce',
         '100g parmesan cheese',
         'Cinnamon and oregano',
         'Olive oil',
      ],
      // instructions
      instructions: [
         'Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.',
         'Brush eggplant slices with olive oil, grill or bake until softened.',
         'Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.',
         'Preheat oven to 180°C (350°F).',
         'Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.',
         'Bake for 45 minutes until golden. Let rest 15 minutes before serving.',
      ],
      // nutrition
      nutrition: {
         calories: 580,
         protein: 36,
         carbohydrates: 32,
         fat: 32,
         fiber: 8,
         sodium: 820,
      },
      // tips
      tips: [
         'Salt eggplant to remove bitterness',
         "Don't skip the resting time - it helps set the layers",
         'Use ground beef if lamb is unavailable',
         'Make ahead and reheat for easier serving',
      ],
   },
   {
      // dinner - photo
      photo: {
         img: 'margherita-pizza.webp',
         rate: 4.9,
         reviews: 512,
         servings: 2,
         time: {
            prep: 90,
            cock: 12,
         },
      },
      // dinner-name
      name: {
         level: 'Intermediate',
         cuisine: 'Italian',
         title: 'Margherita Pizza',
         description: 'Classic Italian pizza with fresh mozzarella and basil',
      },
      // ingredients
      ingredients: [
         '300g pizza dough',
         '200g crushed tomatoes',
         '250g fresh mozzarella',
         'Fresh basil leaves',
         '2 tablespoons olive oil',
         '2 cloves garlic, minced',
         'Salt and pepper to taste',
         'Parmesan cheese for topping',
      ],
      // instructions
      instructions: [
         'Let pizza dough come to room temperature and rest for 1 hour.',
         'Preheat oven to maximum temperature (usually 250°C/480°F).',
         'Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.',
         'Roll out dough on a floured surface to desired thickness.',
         'Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.',
         'Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.',
      ],
      // nutrition
      nutrition: {
         calories: 580,
         protein: 24,
         carbohydrates: 68,
         fat: 22,
         fiber: 4,
         sodium: 920,
      },
      // tips
      tips: ['Use a pizza stone for crispier crust', "Don't overload with toppings - less is more", 'Add basil after baking to keep it fresh', 'Let dough rest properly for best texture'],
   },
   {
      // dinner - photo
      photo: {
         img: 'creamy-spaghetti-carbonara.webp',
         rate: 4.8,
         reviews: 234,
         servings: 4,
         time: {
            prep: 15,
            cock: 20,
         },
      },
      // dinner-name
      name: {
         level: 'Easy',
         cuisine: 'Italian',
         title: 'Creamy Spaghetti Carbonara',
         description: 'A classic Italian pasta dish with eggs, cheese, and pancetta',
      },
      // ingredients
      ingredients: [
         '400g spaghetti pasta',
         '200g pancetta or guanciale, diced',
         '4 large eggs',
         '100g Pecorino Romano cheese, grated',
         '50g Parmesan cheese, grated',
         'Freshly ground black pepper',
         'Salt for pasta water',
      ],
      // instructions
      instructions: [
         'Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.',
         'While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.',
         'In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.',
         'Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.',
         'Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.',
         'Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!',
      ],
      // nutrition
      nutrition: {
         calories: 520,
         protein: 28,
         carbohydrates: 62,
         fat: 18,
         fiber: 3,
         sodium: 680,
      },
      // tips
      tips: [
         'Use room temperature eggs for a smoother sauce consistency',
         'Work quickly when mixing eggs with hot pasta to avoid scrambling',
         "Reserve extra pasta water - it's the secret to perfect creaminess",
         'Freshly grated cheese makes all the difference in flavor',
         'Never add cream - authentic carbonara is made with eggs only',
      ],
   },
   {
      // dinner - photo
      photo: {
         img: 'chicken-stir-fry.webp',
         rate: 4.5,
         reviews: 324,
         servings: 4,
         time: {
            prep: 15,
            cock: 15,
         },
      },
      // dinner-name
      name: {
         level: 'Easy',
         cuisine: 'Asian',
         title: 'Chicken Stir-Fry',
         description: 'Quick and healthy stir-fry with colorful vegetables',
      },
      // ingredients
      ingredients: [
         '500g chicken breast, sliced',
         '2 bell peppers, sliced',
         '1 broccoli head, florets',
         '2 carrots, julienned',
         '3 tablespoons soy sauce',
         '2 tablespoons oyster sauce',
         '1 tablespoon sesame oil',
         '2 cloves garlic, minced',
         'Fresh ginger, grated',
      ],
      // instructions
      instructions: [
         'Mix soy sauce, oyster sauce, and sesame oil for the sauce.',
         'Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.',
         'Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.',
         'Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.',
         'Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.',
         'Serve immediately over steamed rice or noodles.',
      ],
      // nutrition
      nutrition: {
         calories: 320,
         protein: 34,
         carbohydrates: 18,
         fat: 12,
         fiber: 5,
         sodium: 840,
      },
      // tips
      tips: [
         'Cut all ingredients before starting to cook',
         'Keep heat high for authentic stir-fry texture',
         "Don't overcrowd the wok or vegetables will steam",
         'Add cashews or peanuts for extra crunch',
      ],
   },
   {
      // dinner - photo
      photo: {
         img: 'french-onion-soup.webp',
         rate: 4.7,
         reviews: 267,
         servings: 4,
         time: {
            prep: 15,
            cock: 60,
         },
      },
      // dinner-name
      name: {
         level: 'Intermediate',
         cuisine: 'Mediterranean',
         title: 'French Onion Soup',
         description: 'Rich beef broth with caramelized onions and melted cheese',
      },
      // ingredients
      ingredients: [
         '4 large onions, thinly sliced',
         '4 tablespoons butter',
         '1 liter beef broth',
         '1/2 cup white wine',
         '2 bay leaves',
         'Fresh thyme',
         'Baguette slices',
         '200g Gruyère cheese, grated',
      ],
      // instructions
      instructions: [
         'Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.',
         'Add white wine and deglaze the pot, scraping up brown bits.',
         'Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.',
         'Meanwhile, toast baguette slices until golden.',
         'Ladle soup into oven-safe bowls. Top with toasted bread and cheese.',
         'Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot.',
      ],
      // nutrition
      nutrition: {
         calories: 380,
         protein: 18,
         carbohydrates: 36,
         fat: 18,
         fiber: 4,
         sodium: 980,
      },
      // tips
      tips: [
         "Patience is key - don't rush the onion caramelization",
         'Use good quality beef broth for best flavor',
         'Gruyère can be substituted with Swiss cheese',
         'Watch carefully when broiling to avoid burning',
      ],
   },
   {
      // dinner - photo
      photo: {
         img: 'chicken-tikka masala.webp',
         rate: 4.7,
         reviews: 389,
         servings: 4,
         time: {
            prep: 20,
            cock: 30,
         },
      },
      // dinner-name
      name: {
         level: 'Intermediate',
         cuisine: 'Asian',
         title: 'Chicken Tikka Masala',
         description: 'Rich and creamy Indian curry with tender chicken pieces',
      },
      // ingredients
      ingredients: [
         '600g chicken breast, cubed',
         '1 cup plain yogurt',
         '2 tablespoons tikka masala paste',
         '400ml coconut cream',
         '1 onion, diced',
         '4 cloves garlic, minced',
         '2 tablespoons ginger, grated',
         '400g canned tomatoes',
         'Fresh cilantro for garnish',
      ],
      // instructions
      instructions: [
         'Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.',
         'Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.',
         'In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.',
         'Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.',
         'Stir in coconut cream and remaining yogurt. Add chicken back to the pan.',
         'Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.',
      ],
      // nutrition
      nutrition: {
         calories: 450,
         protein: 38,
         carbohydrates: 24,
         fat: 22,
         fiber: 4,
         sodium: 760,
      },
      // tips
      tips: [
         'Marinate chicken overnight for deeper flavor',
         'Use full-fat coconut cream for richest sauce',
         'Adjust spice level by varying the tikka paste amount',
         'Serve with naan bread and basmati rice',
      ],
   },
   {
      // dinner - photo
      photo: {
         img: 'honey-garlic-salmon.webp',
         rate: 4.9,
         reviews: 187,
         servings: 2,
         time: {
            prep: 10,
            cock: 15,
         },
      },
      // dinner-name
      name: {
         level: 'Easy',
         cuisine: 'Seafood',
         title: 'Honey Garlic Salmon',
         description: 'Pan-seared salmon with a sweet and savory glaze',
      },
      // ingredients
      ingredients: [
         '2 salmon fillets (6oz each)',
         '3 tablespoons honey',
         '2 tablespoons soy sauce',
         '4 cloves garlic, minced',
         '1 tablespoon olive oil',
         '1 teaspoon fresh ginger, grated',
         'Sesame seeds for garnish',
         'Green onions, sliced',
      ],
      // instructions
      instructions: [
         'Pat salmon fillets dry with paper towels. Season with salt and pepper.',
         'In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.',
         'Heat olive oil in a large skillet over medium-high heat.',
         'Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.',
         'Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.',
         'Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice.',
      ],
      // nutrition
      nutrition: {
         calories: 380,
         protein: 35,
         carbohydrates: 28,
         fat: 14,
         fiber: 0,
         sodium: 720,
      },
      // tips
      tips: [
         "Don't overcook salmon - it should be slightly pink in the center",
         'Use wild-caught salmon for best flavor and nutrition',
         'Let the sauce caramelize slightly for deeper flavor',
         'Pair with steamed broccoli or asparagus for a complete meal',
      ],
   },
   {
      // dinner - photo
      photo: {
         img: 'vegetable-curry.webp',
         rate: 4.6,
         reviews: 289,
         servings: 4,
         time: {
            prep: 20,
            cock: 30,
         },
      },
      // dinner-name
      name: {
         level: 'Easy',
         cuisine: 'Asian',
         title: 'Vegetable Curry',
         description: 'Hearty vegetarian curry with coconut milk',
      },
      // ingredients
      ingredients: [
         '2 potatoes, cubed',
         '1 cauliflower, florets',
         '2 carrots, sliced',
         '1 can chickpeas',
         '400ml coconut milk',
         '3 tablespoons curry powder',
         '1 onion, diced',
         '3 cloves garlic, minced',
         'Fresh spinach',
      ],
      // instructions
      instructions: [
         'Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.',
         'Add potatoes and carrots, cook for 5 minutes.',
         'Pour in coconut milk and 1 cup water. Bring to simmer.',
         'Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.',
         'Stir in fresh spinach and cook until wilted.',
         'Serve hot over basmati rice or with naan bread.',
      ],

      // nutrition
      nutrition: {
         calories: 380,
         protein: 14,
         carbohydrates: 48,
         fat: 16,
         fiber: 12,
         sodium: 480,
      },
      // tips
      tips: [
         'Add vegetables in order of cooking time needed',
         'Adjust curry powder amount to taste',
         'Use full-fat coconut milk for creamier curry',
         'Add protein like tofu or paneer if desired',
      ],
   },
   {
      // dinner - photo
      photo: {
         img: 'mediterranean-quinoa-bowl.webp',
         rate: 4.5,
         reviews: 156,
         servings: 2,
         time: {
            prep: 20,
            cock: 35,
         },
      },
      // dinner-name
      name: {
         level: 'Easy',
         cuisine: 'Mediterranean',
         title: 'Mediterranean Quinoa Bowl',
         description: 'Healthy bowl with quinoa, vegetables, and tahini dressing',
      },
      // ingredients
      ingredients: ['1 cup quinoa', 'Cherry tomatoes, halved', 'Cucumber, diced', 'Red onion, sliced', 'Kalamata olives', 'Feta cheese, crumbled', 'Fresh parsley', 'Tahini dressing'],
      // instructions
      instructions: [
         'Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.',
         'While quinoa cooks, prepare all vegetables and set aside.',
         'For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.',
         'Fluff cooked quinoa with a fork and let cool slightly.',
         'Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.',
         'Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing.',
      ],
      // nutrition
      nutrition: {
         calories: 480,
         protein: 18,
         carbohydrates: 58,
         fat: 20,
         fiber: 10,
         sodium: 540,
      },
      // tips
      tips: [
         'Rinse quinoa well to remove bitter coatin',
         'Let quinoa cool before adding fresh ingredients',
         'Make extra tahini dressing - it keeps well in the fridge',
         'Add grilled chicken or chickpeas for extra protein',
      ],
   },
   {
      // dinner - photo
      photo: {
         img: 'thai-green-curry.webp',
         rate: 4.7,
         reviews: 312,
         servings: 4,
         time: {
            prep: 15,
            cock: 25,
         },
      },
      // dinner-name
      name: {
         level: 'Intermediate',
         cuisine: 'Asian',
         title: 'Thai Green Curry',
         description: 'Vibrant and aromatic curry with vegetables and coconut milk',
      },
      // ingredients
      ingredients: [
         '2 tablespoons green curry paste',
         '400ml coconut milk',
         '300g chicken breast, sliced',
         '1 red bell pepper, sliced',
         '100g green beans',
         '1 eggplant, cubed',
         '2 tablespoons fish sauce',
         '1 tablespoon palm sugar',
         'Fresh Thai basil leaves',
      ],
      // instructions
      instructions: [
         'Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.',
         'Add half the coconut milk and stir to combine with the curry paste.',
         'Add sliced chicken and cook until no longer pink, about 5 minutes.',
         'Add remaining coconut milk, vegetables, fish sauce, and palm sugar.',
         'Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.',
         'Stir in fresh Thai basil leaves. Serve hot with jasmine rice.',
      ],
      // nutrition
      nutrition: {
         calories: 420,
         protein: 26,
         carbohydrates: 22,
         fat: 26,
         fiber: 5,
         sodium: 890,
      },
      // tips
      tips: [
         'Adjust spice level by using more or less curry paste',
         'Add vegetables in stages based on cooking time needed',
         'Fresh Thai basil is essential for authentic flavor',
         'Use full-fat coconut milk for richest, creamiest sauce',
      ],
   },
   {
      // dinner - photo
      photo: {
         img: 'caesar-salad.webp',
         rate: 4.4,
         reviews: 198,
         servings: 2,
         time: {
            prep: 15,
            cock: 0,
         },
      },
      // dinner-name
      name: {
         level: 'Easy',
         cuisine: 'Mediterranean',
         title: 'Caesar Salad',
         description: 'Classic salad with crispy romaine and creamy dressing',
      },
      // ingredients
      ingredients: [
         '1 large romaine lettuce',
         '1/2 cup Caesar dressing',
         '1/2 cup parmesan cheese, shaved',
         '1 cup croutons',
         '2 anchovy fillets (optional)',
         'Lemon wedges',
         'Black pepper',
      ],
      // instructions
      instructions: [
         'Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.',
         'Place lettuce in a large salad bowl.',
         'Add Caesar dressing and toss until evenly coated.',
         'Add croutons and half the parmesan cheese. Toss gently.',
         'Top with remaining parmesan shavings and anchovies if using.',
         'Serve immediately with lemon wedges and fresh black pepper.',
      ],
      // nutrition
      nutrition: {
         calories: 320,
         protein: 12,
         carbohydrates: 18,
         fat: 22,
         fiber: 3,
         sodium: 680,
      },
      // tips
      tips: ['Use cold, crisp lettuce for best texture', 'Make homemade croutons for better flavor', 'Add grilled chicken for a complete meal', "Don't dress salad until ready to serve"],
   },
   {
      // dinner - photo
      photo: {
         img: 'shrimp-scampi.webp',
         rate: 4.8,
         reviews: 356,
         servings: 2,
         time: {
            prep: 10,
            cock: 15,
         },
      },
      // dinner-name
      name: {
         level: 'Easy',
         cuisine: 'Seafood',
         title: 'Shrimp Scampi',
         description: 'Garlicky shrimp in white wine butter sauce',
      },
      // ingredients
      ingredients: [
         '400g large shrimp, peeled',
         '300g linguine pasta',
         '6 cloves garlic, minced',
         '1/2 cup white wine',
         '4 tablespoons butter',
         '2 tablespoons olive oil',
         'Fresh parsley, chopped',
         'Lemon juice and zest',
         'Red pepper flakes',
      ],
      // instructions
      instructions: [
         'Cook linguine according to package directions. Reserve 1 cup pasta water.',
         'Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.',
         'Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.',
         'Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.',
         'Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.',
         'Garnish with parsley, lemon zest, and serve immediately.',
      ],
      // nutrition
      nutrition: {
         calories: 520,
         protein: 36,
         carbohydrates: 54,
         fat: 18,
         fiber: 3,
         sodium: 620,
      },
      // tips
      tips: [
         "Don't overcook shrimp - they cook very quickly",
         'Use good quality white wine for best flavor',
         'Toss pasta in sauce for maximum flavor absorption',
         'Add extra lemon for bright, fresh taste',
      ],
   },
];
// dinner - photo
function getPhotoMeal(array, index) {
   var demo = `
   <img class="object-fit-cover" src="./images/${array[index].photo.img}" alt="${array[index].name.description}" />

   <div class="py-2 px-3 bg-white rounded-pill d-flex align-items-center gap-2 position-absolute top-24 start-24 shadow-lg">
      <span class="fs-14 text-yellow-400">
         <i class="fa-solid fa-star"></i>
      </span>
      <span class="fs-14 fs-md-16 text-gray-900 fw-7">${array[index].photo.rate}</span>
      <span class="fs-12 fs-md-14 text-gray-500">(${array[index].photo.reviews} reviews)</span>
   </div>

   <div class="p-12 p-md-24 bg-white rounded-3 d-flex align-items-center justify-content-evenly gap-3 position-absolute start-24 end-24 bottom-24 shadow-lg">
      <div class="text-center d-flex flex-column flex-grow-1">
         <span class="fs-18 fs-md-24 text-orange-500">
            <i class="fa-solid fa-clock"></i>
         </span>
         <span class="fs-12 fs-md-14 text-gray-500">Prep Time</span>
         <span class="fs-14 fs-md-16 text-gray-900 fw-7">${array[index].photo.time.prep} min</span>
      </div>

      <div class="text-center d-flex flex-column flex-grow-1">
         <span class="fs-18 fs-md-24 text-red-500">
            <i class="fa-solid fa-fire-burner"></i>
         </span>
         <span class="fs-12 fs-md-14 text-gray-500">Cook Time</span>
         <span class="fs-14 fs-md-16 text-gray-900 fw-7">${array[index].photo.time.cock} min</span>
      </div>

      <div class="text-center d-flex flex-column flex-grow-1">
         <span class="text-blue-500 fs-16 fs-md-20">
            <svg
               class="svg-inline--fa fa-users"
               style="width: 1.4063em; height: 1.125em"
               aria-hidden="true"
               focusable="false"
               data-prefix="fas"
               data-icon="users"
               role="img"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 640 512"
               data-fa-i2svg=""
            >
               <path
                  fill="currentColor"
                  d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"
               ></path>
            </svg>
         </span>
         <span class="fs-12 fs-md-14 text-gray-500">Servings</span>
         <span class="fs-14 fs-md-16 text-gray-900 fw-7">${array[index].photo.servings} people </span>
      </div>
   </div>
   `;
   return demo;
}
// dinner-name
function getNameMeal(array, index) {
   var demo = `
      <div class="align-self-end align-self-md-auto d-flex">
         <span class="w-48 h-48 text-orange-600 rounded-3 bg-orange-100 d-inline-flex align-items-center justify-content-center me-2">
            <i class="fa-solid fa-bookmark"></i>
         </span>
         <span class="w-48 h-48 text-orange-600 rounded-3 bg-orange-100 d-inline-flex align-items-center justify-content-center">
            <i class="fa-solid fa-share-nodes"></i>
         </span>
      </div>

      <div class="order-md-first">
         <div class="mb-12 d-flex">
            <span class="badge fs-12 fw-5 py-1 px-12 rounded-pill bg-green-100 text-green-700 me-12">${array[index].name.level}</span>
            <span class="badge fs-12 fw-5 py-1 px-12 rounded-pill bg-blue-100 text-blue-700">${array[index].name.cuisine}</span>
         </div>

         <h2 class="fs-24 fs-md-36 text-gray-900 fw-7">${array[index].name.title}</h2>
         <p class="m-0 fs-14 fs-md-18 text-gray-600">${array[index].name.description}</p>
      </div>
   `;
   return demo;
}
// extended-time
function isExtendedTime(array, index) {
   var demo = '';
   if (array[index].photo.time.cock + array[index].photo.time.prep > 45) {
      demo = `
         <div class="mb-4 bg-red-50 border-start border-5 border-red-500 rounded-4 p-3 d-flex align-items-center">
            <div class="fs-20 text-red-500 me-12 d-flex align-items-center justify-content-center">
               <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <div>
               <p class="m-0 fs-14 fs-md-16 fw-6 text-red-800">Extended Preparation Time</p>
               <p class="m-0 fs-12 fs-md-14 text-red-600">This recipe requires more than 45 minutes to prepare. Plan accordingly!</p>
            </div>
         </div>
         `;
      return demo;
   } else {
      return demo;
   }
}
// ingredients
function getIngredients(array, index) {
   var demo = '';
   for (var i = 0; i < array[index].ingredients.length; i++) {
      demo += `
            <div class="d-flex align-items-center justify-content-start gap-2 ">
               <span class="text-white bg-orange-500 fs-12 fw-7 rounded-circle w-24 h-24 d-flex align-items-center justify-content-center">${i + 1}</span>
               <span class="text-gray-700">${array[index].ingredients[i]}</span>
            </div>
         `;
   }
   return demo;
}
// instructions
function getInstructions(array, index) {
   var demo = '';
   for (var i = 0; i < array[index].instructions.length; i++) {
      demo += `
            <div class="d-flex align-items-start justify-content-start gap-3 ">
               <span class="text-white bg-orange-500 fs-20 fw-7 rounded-4 w-48 h-48 d-flex align-items-center justify-content-center flex-shrink-0">${i + 1}</span>
               <p class="text-gray-700 mb-0 pt-2">${array[index].instructions[i]}</p>
            </div>
         `;
   }
   return demo;
}
// nutrition
function getNutrition(array, index) {
   var demo = `
         <div class="col-12 col-md-6 p-0 px-md-2">
            <div class="p-3 bg-gray-50 rounded-4 d-flex align-items-center justify-content-between">
               <div class="d-flex align-items-center">
                  <span class="bg-orange-100 me-12 rounded-3 w-40 h-40 text-orange-600 d-inline-flex align-items-center justify-content-center">
                     <i class="fa-solid fa-fire"></i>
                  </span>
                  <span class="fs-12 fs-md-16 fw-5 text-gray-700">Calories</span>
               </div>
               <div class="fs-md-20 fw-7 text-gray-900">
                  <span>${array[index].nutrition.calories} kcal</span>
               </div>
            </div>
         </div>

         <div class="col-12 col-md-6 p-0 px-md-2">
            <div class="p-3 bg-gray-50 rounded-4 d-flex align-items-center justify-content-between">
               <div class="d-flex align-items-center">
                  <span class="bg-blue-100 me-12 rounded-3 w-40 h-40 text-blue-600 d-inline-flex align-items-center justify-content-center">
                     <i class="fa-solid fa-dumbbell"></i>
                  </span>
                  <span class="fs-12 fs-md-16 fw-5 text-gray-700">Protein</span>
               </div>
               <div class="fs-md-20 fw-7 text-gray-900">
                  <span>${array[index].nutrition.protein}g</span>
               </div>
            </div>
         </div>

         <div class="col-12 col-md-6 p-0 px-md-2">
            <div class="p-3 bg-gray-50 rounded-4 d-flex align-items-center justify-content-between">
               <div class="d-flex align-items-center">
                  <span class="me-12 rounded-3 w-40 h-40 text-yellow-600 bg-yellow-100 d-inline-flex align-items-center justify-content-center">
                     <i class="fa-solid fa-wheat-awn"></i>
                  </span>
                  <span class="fs-12 fs-md-16 fw-5 text-gray-700">Carbohydrates</span>
               </div>
               <div class="fs-md-20 fw-7 text-gray-900">
                  <span>${array[index].nutrition.carbohydrates}g</span>
               </div>
            </div>
         </div>

         <div class="col-12 col-md-6 p-0 px-md-2">
            <div class="p-3 bg-gray-50 rounded-4 d-flex align-items-center justify-content-between">
               <div class="d-flex align-items-center">
                  <span class="me-12 rounded-3 w-40 h-40 text-red-600 bg-red-100 d-inline-flex align-items-center justify-content-center">
                     <i class="fa-solid fa-droplet"></i>
                  </span>
                  <span class="fs-12 fs-md-16 fw-5 text-gray-700">Fat</span>
               </div>
               <div class="fs-md-20 fw-7 text-gray-900">
                  <span>${array[index].nutrition.fat}g</span>
               </div>
            </div>
         </div>

         <div class="col-12 col-md-6 p-0 px-md-2">
            <div class="p-3 bg-gray-50 rounded-4 d-flex align-items-center justify-content-between">
               <div class="d-flex align-items-center">
                  <span class="me-12 rounded-3 w-40 h-40 text-green-600 bg-green-100 d-inline-flex align-items-center justify-content-center">
                     <i class="fa-solid fa-seedling"></i>
                  </span>
                  <span class="fs-12 fs-md-16 fw-5 text-gray-700">Fiber</span>
               </div>
               <div class="fs-md-20 fw-7 text-gray-900">
                  <span>${array[index].nutrition.fiber}g</span>
               </div>
            </div>
         </div>

         <div class="col-12 col-md-6 p-0 px-md-2">
            <div class="p-3 bg-gray-50 rounded-4 d-flex align-items-center justify-content-between">
               <div class="d-flex align-items-center">
                  <span class="me-12 rounded-3 w-40 h-40 text-pink-600 bg-pink-100 d-inline-flex align-items-center justify-content-center">
                     <i class="fa-solid fa-cube"></i>
                  </span>
                  <span class="fs-12 fs-md-16 fw-5 text-gray-700">Sodium</span>
               </div>
               <div class="fs-md-20 fw-7 text-gray-900">
                  <span>${array[index].nutrition.sodium}mg</span>
               </div>
            </div>
         </div>`;
   return demo;
}
// tips
function getTips(array, index) {
   var demo = '';
   for (var i = 0; i < array[index].tips.length; i++) {
      demo += `
         <div class="p-3  rounded-4 border-start border-4 border-amber-400 bg-amber-50 d-flex">
            <span class="fs-18 my-2 me-12 text-amber-600 d-flex align-items-center justify-content-center flex-shrink-0">
               <i class="fa-solid fa-circle-check"></i>
            </span>
            <p class="text-gray-700 mb-0">${array[index].tips[i]}</p>
         </div>`;
   }
   return demo;
}
// mixMeals
var meals = dinnerMeals.concat();
function mixMeals() {
   meals = dinnerMeals.concat();
   for (var i = meals.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [meals[i], meals[j]] = [meals[j], meals[i]];
   }
}
// next meal
var index = 0;
function clickToNextMeal() {
   meals.shift();
   if (index > meals.length) {
      index = 0;
      mixMeals();
   }
   dinnerPhoto.innerHTML = getPhotoMeal(meals, index);
   dinnerName.innerHTML = getNameMeal(meals, index);
   extendedTime.innerHTML = isExtendedTime(meals, index);
   ingredients.innerHTML = getIngredients(meals, index);
   instructions.innerHTML = getInstructions(meals, index);
   nutrition.innerHTML = getNutrition(meals, index);
   tips.innerHTML = getTips(meals, index);
   index++;
}
// first star
mixMeals();
clickToNextMeal();
