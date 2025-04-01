# Demo Video

https://github.com/user-attachments/assets/6817703c-4029-456a-a45a-f36d7b2cabdb

# Task Manager Limetray

A simple and elegant task management application built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## Features

- **Task Management**:
  - Add new tasks with a simple form
  - View task list with filtering (All, Pending, Completed)
  - Toggle task completion status
  - Delete tasks
  - Reorder tasks via drag-and-drop
- **Theme Support**:
  - Switch between light and dark modes
  - Persist theme preference in local storage
- Responsive design using Tailwind CSS
- Local storage for task persistence
- Smooth animations for task interactions

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/hritik-6918/task-manager-limetray.git
cd task-manager-limetray
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Development Approach

### Tech Stack Choices
We chose **React** with **Vite** for its fast development experience and hot module replacement, making it ideal for a lightweight task manager. **TypeScript** ensures type safety and better code maintainability. **Tailwind CSS** accelerates UI development with utility-first styling and built-in dark mode support. **react-beautiful-dnd** was integrated for seamless drag-and-drop functionality.

### Backend Architecture
This is a frontend-only application that uses **localStorage** for persistent data storage via a custom `useLocalStorage` hook. The **TaskContext** manages task state globally, providing functions for adding, toggling, deleting, and reordering tasks efficiently.

### Frontend Implementation
The frontend leverages a **component-based architecture** with React. Key components include `TaskForm` for adding tasks, `TaskList` for displaying and managing tasks, `TaskFilter` for filtering tasks, and `ThemeToggle` for theme switching. **Context API** is used for state management across components, ensuring a smooth user experience.

### Challenges Faced & Solutions
1. **Drag-and-Drop Implementation**: Integrating drag-and-drop was tricky with state updates. We used **react-beautiful-dnd** and a custom `reorderTasks` function in the TaskContext to handle reordering seamlessly.
2. **Theme Persistence**: Maintaining theme state across sessions required local storage. The `ThemeContext` with `useLocalStorage` solved this by syncing the theme with the DOM and storage.
3. **Task Filtering**: Filtering tasks dynamically while maintaining performance was a concern. We used `React.useMemo` in the TaskContext to optimize the `filteredTasks` computation.
4. **Responsive Design**: Ensuring a consistent UI across devices was achieved with Tailwind CSS’s responsive utilities and a mobile-first approach.

## Built With Tech Stack

- React (with Vite)
- TypeScript
- Tailwind CSS
- react-beautiful-dnd (Drag-and-Drop)
- Lucide React (Icons)

Made with ❤️ by Hritik-6918
