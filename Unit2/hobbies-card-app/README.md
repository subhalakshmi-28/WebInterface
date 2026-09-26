# Hobbies Card — React Props Project

A single React application that displays multiple student hobby cards,
built using **one reusable `HobbyCard` component** and **Props**.

## 📁 Folder Structure

```
hobbies-card-app/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx            → mounts the App into the page
    ├── index.css           → global background/reset styles
    ├── App.jsx             → holds hobby data, passes props to HobbyCard
    ├── App.css             → layout styling (header, grid, footer)
    └── components/
        ├── HobbyCard.jsx   → reusable card component (receives props)
        └── HobbyCard.css   → card design (colors, hover effect, badges)
```

## ▶️ How to Run

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`) in your browser.

## 🧠 How Props Work Here (for your exam explanation)

1. **Data lives in `App.jsx`** — the `hobbiesData` array holds one object
   per student (name, hobby, icon, description, details, accentColor).

2. **Props are PASSED in `App.jsx`**, inside the `.map()` loop:
   ```jsx
   <HobbyCard
     name={item.name}
     hobby={item.hobby}
     icon={item.icon}
     description={item.description}
     details={item.details}
     accentColor={item.accentColor}
   />
   ```
   Every attribute here (`name`, `hobby`, `icon`...) is a **prop**.

3. **Props are RECEIVED in `HobbyCard.jsx`**, as the function's parameter:
   ```jsx
   function HobbyCard(props) {
     const { name, hobby, description, icon, details, accentColor } = props;
     ...
   }
   ```

4. **Props are USED** inside the JSX of `HobbyCard.jsx` to display the
   content — e.g. `{name}`, `{hobby}`, `{description}`, and mapping over
   `details` to list bullet points.

5. Because `HobbyCard` never hardcodes any hobby data itself, the **same
   component is reused 6 times** with different props — that's the core
   idea of Props: making components reusable and dynamic.

## ✨ Design Features

- Unique rounded cards with a colored top accent bar (color also comes from props!)
- Circular icon badge with a hover rotation animation
- Card lifts and glows on hover
- Responsive grid — cards automatically wrap on smaller screens
- Small "detail chips" list for extra interesting facts about each hobby
