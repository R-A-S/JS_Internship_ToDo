// Store
export default class Store {
  static tasks = [];

  static getTask() {
    if (this.tasks.length) {
      return this.tasks;
    }
    if (window.localStorage && localStorage.getItem('.tasks')) {
      this.tasks = JSON.parse(localStorage['.tasks']);
    }
    return this.tasks;
  }

  static createTask(task) {
    this.tasks.unshift(task);
    localStorage['.tasks'] = JSON.stringify(this.tasks);
  }

  static deleteTask(el) {
    let parent = el.parentElement;
    while (!parent.dataset.id) {
      parent = parent.parentElement;
    }
    this.tasks = this.tasks.filter(t => t.id !== parent.dataset.id);
    localStorage['.tasks'] = JSON.stringify(this.tasks);
  }

  static doneTask(el) {
    let parent = el.parentElement;
    while (!parent.dataset.id) {
      parent = parent.parentElement;
    }
    this.tasks = this.tasks.map(t => (t.id === parent.dataset.id ? { ...t, status: 'done' } : t));
    localStorage['.tasks'] = JSON.stringify(this.tasks);
  }

  static editTask(tasks) {
    localStorage['.tasks'] = JSON.stringify(tasks);
  }
}
