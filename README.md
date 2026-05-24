# 🍽️ What's For Dinner

A dynamic meal suggestion web app that randomly picks a dinner recipe for you — because "أي حاجة" is no longer an answer! Built with HTML5, CSS3, Bootstrap 5, and vanilla JavaScript.

🌐 **Live Demo:** [mohammed-kandeel.github.io/09-What-s-For-Dinner](https://mohammed-kandeel.github.io/09-What-s-For-Dinner/)

---

## 🚀 Features

- 🎲 **Random Meal Selector** — Shuffles 19 recipes using Fisher-Yates algorithm, no repeats until all meals are shown
- 📸 **Meal Photo** — Full recipe image with rating, reviews count, prep time, cook time, and servings
- ⚠️ **Extended Time Warning** — Auto-displays a red alert if total cook + prep time exceeds 45 minutes
- 📋 **Ingredients Tab** — Numbered list of all required ingredients
- 📖 **Instructions Tab** — Step-by-step cooking guide
- 🥗 **Nutrition Tab** — Calories, protein, carbs, fat, fiber, and sodium breakdown
- 💡 **Chef's Tips Tab** — Pro tips for best results
- 🔁 **Try Another Recipe** — One click to get a new random meal

---

## 🍴 Included Recipes (19 Meals)

| Cuisine | Meals |
|---------|-------|
| 🇮🇹 Italian | Lasagna Bolognese, Caprese Sandwich, Margherita Pizza, Creamy Spaghetti Carbonara |
| 🌏 Asian | Teriyaki Chicken Bowl, Pad Thai, Chicken Stir-Fry, Chicken Tikka Masala, Thai Green Curry, Vegetable Curry |
| 🇺🇸 American | Beef Tacos, BBQ Pulled Pork, Classic Beef Burger |
| 🌊 Seafood | Honey Garlic Salmon, Shrimp Scampi |
| 🫒 Mediterranean | Greek Moussaka, French Onion Soup, Caesar Salad, Mediterranean Quinoa Bowl |

---

## 🛠️ Technologies Used

- **HTML5** — Semantic structure with Bootstrap tab system
- **CSS3** — CSS Variables, CSS Grid (desktop layout), transitions, scrollbar styling
- **Bootstrap 5** — Navbar, responsive grid, tabs component, utility classes
- **Vanilla JavaScript** — DOM manipulation, arrays, objects, functions, template literals
- **Font Awesome** — Icons throughout the UI

---

## 🧠 JavaScript Concepts Used

### Data Structure
Each meal is a structured **object** inside a **`dinnerMeals` array**:
```javascript
{
  photo: { img, rate, reviews, servings, time: { prep, cock } },
  name:  { level, cuisine, title, description },
  ingredients: [...],
  instructions: [...],
  nutrition: { calories, protein, carbohydrates, fat, fiber, sodium },
  tips: [...]
}
```

### Fisher-Yates Shuffle Algorithm
```javascript
function mixMeals() {
  meals = dinnerMeals.concat();
  for (var i = meals.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [meals[i], meals[j]] = [meals[j], meals[i]];
  }
}
```
Ensures every recipe appears once before reshuffling — no annoying repeats!

### Dynamic HTML with Template Literals
```javascript
function getPhotoMeal(array, index) {
  return `<img src="./images/${array[index].photo.img}" ... />`;
}
```
All UI sections are generated dynamically from data — zero hardcoded meal content in HTML.

### Conditional Rendering
```javascript
function isExtendedTime(array, index) {
  if (array[index].photo.time.cock + array[index].photo.time.prep > 45) {
    return `<div class="bg-red-50 border-red-500 ...">⚠️ Extended Time</div>`;
  }
  return '';
}
```

---

## 📁 Project Structure

```
What's-For-Dinner/
│
├── index.html
├── css/
│   ├── style.css           # Component styles + CSS Grid layout
│   ├── utilities.css       # Custom utility classes (colors, spacing, typography)
│   ├── bootstrap.min.css
│   └── all.min.css         # Font Awesome icons
├── js/
│   ├── index.js            # All meal data + logic
│   └── bootstrap.bundle.min.js
├── images/
│   ├── lasagna-bolognese.webp
│   ├── margherita-pizza.webp
│   └── ...19 meal images
│
└── README.md
```

---

## 🖥️ Layout — CSS Grid on Desktop

On screens ≥ 1024px, the card switches to a **2-panel CSS Grid** layout:

```css
#dinner {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  height: 750px;
}
/* Photo panel: columns 1-2 */
/* Info panel: columns 3-5, scrollable */
```

---

## ⚙️ CSS Concepts Used

| Concept | Usage |
|---------|-------|
| CSS Grid | Desktop 2-panel layout (2/5 image + 3/5 content) |
| CSS Variables | Full design token system (`--color-*`, `--font-size-*`) |
| `::after` pseudo-element | Active tab underline indicator |
| `linear-gradient` | Header logo, CTA button, page background |
| CSS transitions | Button hover scale, color changes |
| Custom scrollbar | `scrollbar-color` + `scrollbar-width` for tab content |
| Bootstrap 5 | Navbar collapse, tab system, responsive grid |
| Custom utility classes | `fs-*`, `fw-*`, `bg-*`, `text-*` Tailwind-inspired system |

---

## ▶️ How to Run

No setup needed — open directly in any browser:

```bash
open index.html
```

## 👤 Author

**Mohammed Kandeel**  
🔗 [09-What-s-For-Dinner](https://github.com/mohammed-kandeel/09-What-s-For-Dinner)  
🌐 [Live Demo](https://mohammed-kandeel.github.io/09-What-s-For-Dinner/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
