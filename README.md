https://github.com/user-attachments/assets/72fdba70-31f5-4419-a0a4-2f680cbe76a9

# Task Manager Limetray

## Overview

Task Manager Limetray is a simple and efficient task management application built with React, TypeScript, and Vite. It provides an intuitive UI to create, filter, reorder, and delete tasks while offering a dark mode theme toggle.

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Drag-and-drop reordering of tasks
- Task filtering (All, Pending, Completed)
- Dark mode toggle

## Tech Stack

- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Build Tool**: Vite
- **Linting & Formatting**: ESLint, TypeScript ESLint
- **Testing**: Jest, React Testing Library

## Directory Structure

```
└── hritik-6918-task-manager-limetray/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    ├── vite.config.ts
    ├── jest.config.ts
    └── src/
        ├── App.tsx
        ├── index.css
        ├── main.tsx
        ├── vite-env.d.ts
        ├── components/
        │   ├── TaskFilter.tsx
        │   ├── TaskForm.tsx
        │   ├── TaskList.tsx
        │   ├── ThemeToggle.tsx
        │   └── TaskItem.tsx
        ├── context/
        │   ├── TaskContext.tsx
        │   └── ThemeContext.tsx
        ├── hooks/
        │   ├── useLocalStorage.ts
        │   ├── useTheme.ts
        │   └── useTaskManager.ts
        ├── tests/
        │   ├── TaskForm.test.tsx
        │   ├── TaskList.test.tsx
        │   └── ThemeToggle.test.tsx
        └── types/
            └── task.ts
```

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- npm or yarn

### Steps to Run Locally

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/hritik-6918-task-manager-limetray.git
   cd hritik-6918-task-manager-limetray
   ```
2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```
   The application should now be running at `http://localhost:5173/`.

## Scripts

- `npm run dev` - Starts the development server.
- `npm run build` - Builds the project for production.
- `npm run preview` - Previews the production build.
- `npm run lint` - Runs ESLint for code linting.
- `npm run test` - Runs unit tests with Jest and React Testing Library.


Made with ❤️ by Hritik-6918
