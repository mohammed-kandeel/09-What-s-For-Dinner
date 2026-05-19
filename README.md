# 🍽️ What's For Dinner

A fun and interactive meal inspiration app that randomly selects a dinner recipe for you — because "anything" is never a good answer!

🌐 **Live Demo:** [mohammed-kandeel.github.io/09-What-s-For-Dinner](https://mohammed-kandeel.github.io/09-What-s-For-Dinner/)

---

## 🚀 Features

- 🎲 **Random Meal Generator** — Shuffles through 18 dinner recipes and picks one randomly every time
- 🔄 **Try Another Recipe** — Click to get a new meal without repeating recent ones (Fisher-Yates shuffle)
- ⚠️ **Extended Time Warning** — Automatically shows an alert if total prep + cook time exceeds 45 minutes
- 📋 **4-Tab Recipe Card:**
  - **Ingredients** — Numbered list with orange badges
  - **Instructions** — Step-by-step with large numbered indicators
  - **Nutrition** — 6 nutrition facts (Calories, Protein, Carbs, Fat, Fiber, Sodium)
  - **Chef's Tips** — Pro tips with amber left-border style
- 📱 **Responsive Layout** — Single column on mobile, side-by-side grid on desktop (1024px+)

---

## 🛠️ Technologies Used

- **HTML5** — Semantic structure
- **CSS3** — CSS Variables, CSS Grid, CSS nesting, transitions
- **JavaScript (Vanilla)** — DOM manipulation, Arrays, Objects, Functions, Fisher-Yates shuffle
- **Bootstrap 5** — Navbar, tabs (`nav-tabs`), grid system (`col-*`), utilities
- **Font Awesome** — Icons throughout the UI

---

## 🌟 JavaScript Highlights

### Data Structure
Each meal is a JavaScript object with 6 properties:

```js
{
  photo: { img, rate, reviews, servings, time: { prep, cock } },
  name:  { level, cuisine, title, description },
  ingredients: [ ...strings ],
  instructions: [ ...strings ],
  nutrition: { calories, protein, carbohydrates, fat, fiber, sodium },
  tips: [ ...strings ]
}
```

### Fisher-Yates Shuffle
```js
function mixMeals() {
  meals = dinnerMeals.concat();
  for (var i = meals.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [meals[i], meals[j]] = [meals[j], meals[i]];
  }
}
```
Ensures truly random, non-repeating meal order every cycle.

### Dynamic HTML Generation
All UI sections are built with template literal functions:
- `getPhotoMeal()` — Hero image + rating badge + time/servings bar
- `getNameMeal()` — Title, cuisine, level badges, bookmark/share buttons
- `isExtendedTime()` — Conditional warning banner (> 45 min total)
- `getIngredients()` — Looped numbered ingredient list
- `getInstructions()` — Looped step-by-step instructions
- `getNutrition()` — 6 nutrition fact cards
- `getTips()` — Looped chef tip cards

---

## 🍳 Recipe Collection (18 Meals)

| Cuisine | Recipes |
|---------|---------|
| 🇮🇹 Italian | Lasagna Bolognese, Margherita Pizza, Caprese Sandwich, Creamy Spaghetti Carbonara |
| 🌏 Asian | Teriyaki Chicken Bowl, Pad Thai, Chicken Stir-Fry, Chicken Tikka Masala, Thai Green Curry, Vegetable Curry |
| 🇺🇸 American | Beef Tacos, BBQ Pulled Pork, Classic Beef Burger |
| 🌊 Seafood | Honey Garlic Salmon, Shrimp Scampi |
| 🫒 Mediterranean | Greek Moussaka, French Onion Soup, Caesar Salad, Mediterranean Quinoa Bowl |

---

## 📁 Project Structure

```
What's-For-Dinner/
│
├── index.html
├── css/
│   ├── style.css          # Component styles + CSS nesting
│   ├── utilities.css      # Custom utility classes (colors, sizes, shadows)
│   ├── bootstrap.min.css
│   └── all.min.css        # Font Awesome
├── js/
│   ├── index.js           # All app logic
│   └── bootstrap.bundle.min.js
├── images/
│   ├── avatar-4.webp
│   ├── favicon.png
│   └── [18 food photos].webp
│
└── README.md
```

---

## 🖥️ Layout Overview

### Mobile
Single column — photo on top, tabs below

### Desktop (1024px+)
```
┌─────────────────┬────────────────────────────┐
│                 │  Title + Badges             │
│   Meal Photo    │  ⚠️ Extended Time Warning   │
│   (2/5 cols)    │  [Ingredients] [Instructions]│
│                 │  [Nutrition]   [Chef's Tips] │
│                 │                             │
│                 │  🔄 Try Another Recipe      │
└─────────────────┴────────────────────────────┘
```
Built with **CSS Grid** (`grid-template-columns: repeat(5, 1fr)`) — photo takes 2 columns, content takes 3.

---

## ⚙️ CSS Concepts Used

| Concept | Usage |
|---------|-------|
| CSS Grid | Desktop 2/5 + 3/5 split layout |
| CSS Variables | Full design token system (`--color-*`, `--font-size-*`) |
| CSS Nesting | `style.css` uses native CSS nesting for component styles |
| Bootstrap integration | Navbar, tabs, grid, utilities overridden with custom tokens |
| `::after` pseudo-element | Active tab underline indicator |
| `linear-gradient` | Header icon, "Try Another Recipe" button, page background |
| `transition` | Hover effects on buttons, navbar links |
| `transform: scale()` | Button hover scale effect |
| Custom scrollbar | `scrollbar-color` + `scrollbar-width: thin` |
| Media queries | Responsive at 768px (navbar) and 1024px (grid layout) |

---

## ▶️ How to Run

No setup needed — open directly in any browser:

```bash
open index.html
```

Or double-click `index.html` from your file explorer.

---

## 🔮 Possible Future Improvements

- [ ] Save favorite recipes to localStorage
- [ ] Filter by cuisine or difficulty level
- [ ] Add a shopping list generator from ingredients
- [ ] Animate meal transition with CSS keyframes
- [ ] Add a timer feature for cooking steps

---

## 👤 Author

**Mohammed Kandeel**  
🔗 [09-What-s-For-Dinner](https://github.com/mohammed-kandeel/09-What-s-For-Dinner)  
🌐 [Live Demo](https://mohammed-kandeel.github.io/09-What-s-For-Dinner/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
