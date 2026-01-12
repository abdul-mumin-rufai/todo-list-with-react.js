React Todo App
A responsive and intuitive Todo List application built with React.js. It demonstrates fundamental and advanced React patterns including state management with Context API, component lifecycle, and local storage persistence.

🔗 Live Demo: https://rufai-projects-todos-app-with-react-js.web.app/


✨ Features
Full CRUD Operations: Create, Read, Update (mark as done/undone), and Delete todos.

Smart Filtering: Instantly filter your list to show "All", "Active", or "Completed" tasks.

State Management: Uses React's Context API for clean, scalable, and prop-drill-free state management across components.

Persistence: Todos are automatically saved to and loaded from the browser's localStorage, so your list persists between sessions.

Responsive Design: Works seamlessly on both desktop and mobile devices.

🛠️ Tech Stack
Frontend Library: React

State Management: React Context API

Persistence: Browser LocalStorage API

Styling: CSS (Update if you used a framework like Tailwind)

Build Tool: Create React App

Deployment: Firebase Hosting

🚀 Getting Started
Prerequisites
Node.js (v14 or later)

npm or yarn

Installation & Setup
Clone the repository:

bash
git clone https://github.com/YOUR_GITHUB_USERNAME/react-todo-app.git
cd react-todo-app
Install dependencies:

bash
npm install
# or
yarn install
Start the development server:

bash
npm start
# or
yarn start
The app will be available at http://localhost:3000.

📁 Project Architecture & Key Decisions
text
src/
├── components/          # Presentational components (TodoItem, TodoForm, FilterBar)
├── context/             # State management logic (TodoContext.js)
├── App.js               # Main application component
└── index.js             # Application entry point
Key Implementation Highlights:

Context API for State: Instead of prop-drilling state through multiple components, I centralized the application state (todos, filter) in a TodoContext. This makes the codebase more maintainable and easier to reason about as it scales.

LocalStorage Integration: Implemented a custom hook or effect within the context to synchronize the todo state with localStorage on every change, providing a seamless persistent experience.

Optimistic UI with Undo: The undo feature provides immediate visual feedback (optimistic update) when deleting a todo, while keeping the data in memory briefly to allow the user to revert the action—a pattern that enhances perceived performance and user control.

🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page (link to your GitHub Issues if you have one).

Fork the Project

Create your Feature Branch (git checkout -b feature/AmazingFeature)

Commit your Changes (git commit -m 'Add some AmazingFeature')

Push to the Branch (git push origin feature/AmazingFeature)

Open a Pull Request

👏 Acknowledgements
This project was built to solidify understanding of React's Context API and component design.

Inspired by classic todo applications like TodoMVC.

📄 License
Distributed under the MIT License. See LICENSE for more information.
