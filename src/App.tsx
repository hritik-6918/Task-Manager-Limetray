import React from 'react';
import { TaskProvider } from './context/TaskContext';
import { ThemeProvider } from './context/ThemeContext';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import { TaskFilter } from './components/TaskFilter';
import { ThemeToggle } from './components/ThemeToggle';
import { ClipboardList } from 'lucide-react';

function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
          <div className="container mx-auto px-4 py-8 max-w-2xl">
            <ThemeToggle />
            <div className="flex items-center gap-3 mb-8">
              <ClipboardList className="w-8 h-8 text-blue-500" />
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Task Manager
              </h1>
            </div>
            <TaskForm />
            <TaskFilter />
            <TaskList />
          </div>
        </div>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;