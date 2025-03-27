import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Check, Trash2, GripVertical } from 'lucide-react';
import { useTasks } from '../context/TaskContext';

export function TaskList() {
  const { filteredTasks, toggleTask, deleteTask, reorderTasks } = useTasks();

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    reorderTasks(result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="space-y-2"
          >
            {filteredTasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    className={`flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 group animate-fade-in transition-all ${
                      task.completed ? 'opacity-75' : ''
                    }`}
                  >
                    <div {...provided.dragHandleProps} className="cursor-grab">
                      <GripVertical size={20} className="text-gray-400" />
                    </div>
                    <button
                      onClick={() => toggleTask(task.id)}
                      className={`w-5 h-5 rounded border ${
                        task.completed
                          ? 'bg-green-500 border-green-500'
                          : 'border-gray-300 dark:border-gray-600'
                      } flex items-center justify-center transition-colors`}
                    >
                      {task.completed && <Check size={14} className="text-white" />}
                    </button>
                    <span
                      className={`flex-1 text-gray-900 dark:text-gray-100 ${
                        task.completed ? 'line-through text-gray-500' : ''
                      }`}
                    >
                      {task.title}
                    </span>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}