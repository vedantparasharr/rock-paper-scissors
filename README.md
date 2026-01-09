# Rock Paper Scissors Game

A classic Rock Paper Scissors game built with vanilla JavaScript, HTML, and CSS. Play against the computer with an intuitive interface and multiple input options

## Features

- **Interactive Gameplay** - Play against a computer opponent with random move generation
- **Score Tracking** - Persistent score tracking using localStorage (wins, losses, ties)
- **Multiple Input Methods**:
  - Click buttons with mouse
  - Use keyboard shortcuts (R/Q for Rock, P/W for Paper, S/E for Scissors)
- **Auto Play Mode** - Watch the computer play against itself automatically
- **Visual Feedback** - See both player and computer moves with emoji icons
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Modern UI** - Clean, gradient-styled interface with smooth animations

## How to Play

1. Choose your move by clicking a button or using keyboard shortcuts
2. The computer will randomly select its move
3. The winner is determined by classic Rock Paper Scissors rules:
   - Rock beats Scissors
   - Scissors beats Paper
   - Paper beats Rock
4. Your score is automatically saved and persists between sessions

## Technologies Used

- **HTML5** - Structure and layout
- **CSS3** - Styling with modern features (CSS Grid, Flexbox, gradients, animations)
- **Vanilla JavaScript** - Game logic and interactivity
- **localStorage API** - Score persistence

## What I Learned

This project helped me understand:
- DOM manipulation and event handling in JavaScript
- Working with localStorage for data persistence
- Implementing game logic with conditional statements
- Using setInterval for auto-play functionality
- Creating responsive layouts with CSS Grid and Flexbox
- Handling both mouse and keyboard events

## Project Structure

```
rock-paper-scissors/
│
├── index.html          # Main HTML structure
├── style.css           # All styling and responsive design
├── script.js           # Game logic and interactivity
└── README.md           # Project documentation
```

## Setup

1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. Start playing!

No build process or dependencies required - just pure HTML, CSS, and JavaScript.

## Keyboard Controls

- **R** or **Q** - Select Rock
- **P** or **W** - Select Paper
- **S** or **E** - Select Scissors

## Future Improvements

Potential features to add:
- Sound effects for moves and results
- Animation for winning/losing
- Best of N rounds game mode
- Multiplayer option (local or online)
- Statistics and game history
- Different difficulty levels for the computer

## Acknowledgments

While I built the JavaScript logic myself and understand all the code, I used AI assistance for creating the HTML structure and CSS styling to learn modern design patterns and best practices.

## License

This project is open source and available for anyone to use and learn from.
