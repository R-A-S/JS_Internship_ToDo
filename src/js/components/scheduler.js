// Components
import Store from './store';
import Task from './task';
import Render from './render';

// Scheduler
export default class Scheduler {
  // Open / close modal
  static modal(el) {
    if (el.classList.contains('open-modal')) {
      this.clearModal();
      document.getElementById('modal').style.display = 'flex';
    }

    if (el.classList.contains('close-modal' || 'close-modal-edit')) {
      document.getElementById('modal').style.display = 'none';
      document.getElementById('modal-edit').style.display = 'none';
      this.clearModal();
    }
  }

  // Clear modal
  static clearModal() {
    document.getElementById('modal-form__title').value = '';
    document.getElementById('modal-form__description').value = '';
    document.getElementById('modal-form__priority').value = 'normal';
  }

  // Create task
  static createTask(e) {
    e.preventDefault();

    const title = document.getElementById('modal-form__title').value;
    const description = document.getElementById('modal-form__description').value;
    const priority = document.getElementById('modal-form__priority').value;
    const status = 'open';
    const id = `${(+new Date()).toString(16)}`;

    const task = new Task(title, description, priority, status, id);

    if (title.trim() && description.trim()) {
      Store.createTask(task);
      Render.showTasks();
    }
    this.clearModal();
    document.getElementById('modal').style.display = 'none';
  }

  // Edit task
  static editTask(el) {
    let parent = el.parentElement;
    while (!parent.dataset.id) {
      parent = parent.parentElement;
    }

    const tasks = Store.getTask();
    const index = tasks.findIndex(t => t.id === parent.dataset.id);
    const { title, description, priority } = tasks[index];
    const newTitle = document.getElementById('modal-form__title-edit');
    const newDescription = document.getElementById('modal-form__description-edit');
    const newPriority = document.getElementById('modal-form__priority-edit');

    document.getElementById('modal-edit').style.display = 'flex';

    newTitle.value = title;
    newDescription.value = description;
    newPriority.value = priority;

    document.getElementById('modal-form-edit').addEventListener(
      'submit',
      e => {
        e.preventDefault();

        document.getElementById('modal-edit').style.display = 'none';

        tasks[index].title = newTitle.value;
        tasks[index].description = newDescription.value;
        tasks[index].priority = newPriority.value;
        document.getElementById('modal-edit').style.display = 'none';
        if (newTitle.value.trim() && newDescription.value.trim()) {
          Store.editTask(tasks);
          Render.showTasks();
        }
      },
      { once: true }
    );
  }
}
