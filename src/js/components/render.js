// Components
import Store from './store';

// Render
export default class Render {
  // Show tasks on page
  static showTasks() {
    const tasks = Store.getTask();
    const taskList = document.getElementById('task-list');
    const tasksSearch = document.getElementById('bar__search').value;
    const statusFilter = document.getElementById('bar__status').value;
    const priorityFilter = document.getElementById('bar__priority').value;

    while (taskList.hasChildNodes()) {
      taskList.removeChild(taskList.lastChild);
    }

    const open = tasks.filter(task => task.status === 'open');
    const done = tasks.filter(task => task.status === 'done');
    const sortedByStatus = [...open, ...done];

    sortedByStatus

      .filter(
        t =>
          t.title.toLowerCase().includes(tasksSearch.toLowerCase()) &&
          t.status.includes(statusFilter) &&
          t.priority.includes(priorityFilter)
      )
      .map(task => Render.domRender(task, taskList));
  }

  // DOM render
  static domRender(task, taskList) {
    const newTask = document.createElement('div');

    newTask.classList.add('task');
    newTask.dataset.id = task.id;
    if (task.status === 'done') {
      newTask.classList.add('task--done');
    }

    newTask.innerHTML = `
    <h3 class="task__title">${task.title}</h3>
    <p class="task__description">${task.description}</p>
    <div class="task__menu">
      <span class="task__priority task__priority--${task.priority}">${task.priority}</span>
      <div class="task__option">
        <i class="task__option-btn">•••</i>
        <ul class="task__option-list">
            <li class="task__option-item task-done">done</li>
            <li class="task__option-item task-edit" id="open-modal-edit">edit</li>
            <li class="task__option-item task-delete">delete</li>
        </ul>
      </div>
    </div>
  `;
    taskList.appendChild(newTask);
  }
}
