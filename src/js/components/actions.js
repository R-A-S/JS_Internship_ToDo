// Components
import Scheduler from './scheduler';
import Store from './store';
import Render from './render';

// Actions
// Get schedule after DOM loading
document.addEventListener('DOMContentLoaded', Render.showTasks);

// Open modal create
document.getElementById('open-modal').addEventListener('click', e => {
  Scheduler.modal(e.target);
});

// Close modals
document.getElementById('close-modal').addEventListener('click', e => {
  Scheduler.modal(e.target);
});
document.getElementById('close-modal-edit').addEventListener('click', e => {
  Scheduler.modal(e.target);
});

// Create a todo-item with a title, description, priority fields and a default status - open
document.getElementById('modal-form').addEventListener('submit', e => {
  Scheduler.createTask(e);
});

// Done / Edit / Delete
document.querySelector('.task-list').addEventListener('click', e => {
  // Move todo-item in done status
  if (e.target.classList.contains('task-done')) {
    Store.doneTask(e.target);
    Render.showTasks();
  }

  // Edit all todo-item fields
  if (e.target.classList.contains('task-edit')) {
    Scheduler.editTask(e.target);
  }

  // Delete todo-item
  if (e.target.classList.contains('task-delete')) {
    Store.deleteTask(e.target);
    Render.showTasks();
  }
});

// Search todo-item by title
document.getElementById('bar__search').addEventListener('input', Render.showTasks);

// Filter todo-item by status
document.getElementById('bar__status').addEventListener('input', Render.showTasks);

// Filter todo-item by priority
document.getElementById('bar__priority').addEventListener('input', Render.showTasks);
