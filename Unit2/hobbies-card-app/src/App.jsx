import HobbyCard from './components/HobbyCard.jsx';
import './App.css';
const hobbiesData = [
  {
    id: 1,
    name: 'Subhalaskshmi R',
    hobby: 'Photography',
    icon: '📷',
    accentColor: '#ff6b6b',
    description:
      'Loves capturing candid moments and nature shots using natural light and simple compositions.',
    details: [
      "🌿 Loves photographing nature and flowers",
      "🌅 Favorite time to take photos: golden hour",
    ],
  },
  {
    id: 2,
    name: 'Subhalakshmi R',
    hobby: 'Painting',
    icon: '🎨',
    accentColor: '#4d96ff',
    description:
      'Enjoys expressing emotions through acrylic and watercolor paintings inspired by everyday life.',
    details: [
      '🎨 Loves creating colorful landscape paintings',
      '🌸 Enjoys painting flowers and nature scenes',
],
  },
  {
    id: 3,
    name: 'Subhalakhsmi R',
    hobby: 'Chess',
    icon: '♟️',
    accentColor: '#38b000',
    description:
      'Passionate strategic thinker who enjoys solving chess puzzles and playing tournaments.',
    details: [
      '♟️ Enjoys solving challenging chess puzzles',
      '🎯 Focuses on improving strategic thinking',
],
  },
  {
    id: 4,
    name: 'Subhalakshmi R',
    hobby: 'Music',
    icon: '🎧',
    accentColor: '#f77fbe',
    description:
      'Loves exploring different genres of music and enjoys listening to relaxing melodies during free time.',
    details: [
      '🎧 Enjoys listening to music while relaxing',
      '🎶 Loves exploring different music genres',
],
  },
  {
    id: 5,
    name: 'Subhalakshmi R',
    hobby: 'Gardening',
    icon: '🌱',
    accentColor: '#ffb703',
    description:
      'Maintains a small terrace garden and enjoys growing vegetables and flowering plants.',
    details: [
  '🌱 Grows flowers, herbs, and small vegetables',
  '🥕 Loves growing fresh vegetables at home',
],
  },
  {
    id: 6,
    name: 'Subhalakshmi R',
    hobby: 'Watching Movies',
icon: '🎬',
description:
  'Enjoys watching different kinds of movies and discovering interesting stories, characters, and new perspectives.',
details: [
  '🎬 Enjoys watching movies during free time',
  '🎭 Enjoys exploring different movie genres',
],
  },
];
function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>🌟 Hobbies Showcase</h1>
        <p>A React Props Practical Project — Reusable Hobby Cards</p>
      </header>
      <main className="cards-grid">
        {hobbiesData.map((item) => (
          <HobbyCard
            key={item.id}
            name={item.name}
            hobby={item.hobby}
            icon={item.icon}
            description={item.description}
            details={item.details}
            accentColor={item.accentColor}
          />
        ))}
      </main>
      <footer className="app-footer">
        <p>Built with React ⚛️ and Props | Hobbies Showcase</p>
        </footer>
    </div>
  );
}
export default App;
