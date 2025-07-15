const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const activeCountEl = document.getElementById('active-count');
const completedCountEl = document.getElementById('completed-count');
const filterButtons = document.querySelectorAll('.filter-btn');

let tasks = [];

addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('bg-gray-900', 'text-white'));
    btn.classList.add('bg-gray-900', 'text-white');
    filterTasks(btn.dataset.filter);
  });
});


function addTask() {
  const text = taskInput.value.trim();
  if (text === '') return;

  tasks.push({ text, completed: false });
  taskInput.value = '';
  updateUI();
}


function updateUI() {
  if (tasks.length === 0) {
    taskList.innerHTML = `<li class="text-gray-500">No tasks yet. Add one above!</li>`;
  } else {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.className = 'flex items-center justify-between bg-gray-100 p-2 rounded mb-2';
      
      li.innerHTML = `
        <span class="flex items-center gap-2">
          <input type="checkbox" ${task.completed ? 'checked' : ''} data-index="${index}" class="task-checkbox" />
          <span class="${task.completed ? 'line-through text-gray-400' : ''}">${task.text}</span>
        </span>
        <button onclick="deleteTask(${index})" class="text-red-500 hover:underline text-sm">Delete</button>
      `;

      taskList.appendChild(li);
    });
  }

  document.querySelectorAll('.task-checkbox').forEach(cb => {
    cb.addEventListener('change', toggleComplete);
  });

  updateCounts();
  updateFilterLabels();
}


function toggleComplete(e) {
  const index = e.target.dataset.index;
  tasks[index].completed = !tasks[index].completed;
  updateUI();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  updateUI();
}

function filterTasks(filter) {
  let filtered = [];

  if (filter === 'all') {
    filtered = tasks;
  } else if (filter === 'active') {
    filtered = tasks.filter(t => !t.completed);
  } else if (filter === 'completed') {
    filtered = tasks.filter(t => t.completed);
  }

  taskList.innerHTML = '';

  if (filtered.length === 0) {
    taskList.innerHTML = `<li class="text-gray-500">No tasks found.</li>`;
  } else {
    filtered.forEach((task, index) => {
      const li = document.createElement('li');
      li.className = 'flex items-center justify-between bg-gray-100 p-2 rounded mb-2';
      li.innerHTML = `
        <span class="flex items-center gap-2">
          <input type="checkbox" ${task.completed ? 'checked' : ''} data-index="${index}" class="task-checkbox" />
          <span class="${task.completed ? 'line-through text-gray-400' : ''}">${task.text}</span>
        </span>
        <button onclick="deleteTask(${index})" class="text-red-500 hover:underline text-sm">Delete</button>
      `;
      taskList.appendChild(li);
    });

    document.querySelectorAll('.task-checkbox').forEach(cb => {
      cb.addEventListener('change', toggleComplete);
    });
  }
}

function updateCounts() {
  const activeCount = tasks.filter(t => !t.completed).length;
  const completedCount = tasks.filter(t => t.completed).length;

  activeCountEl.textContent = activeCount;
  completedCountEl.textContent = completedCount;
}

function updateFilterLabels() {
  const allBtn = document.querySelector('[data-filter="all"]');
  const activeBtn = document.querySelector('[data-filter="active"]');
  const completedBtn = document.querySelector('[data-filter="completed"]');

  allBtn.textContent = `All (${tasks.length})`;
  activeBtn.textContent = `Active (${tasks.filter(t => !t.completed).length})`;
  completedBtn.textContent = `Completed (${tasks.filter(t => t.completed).length})`;
}

// const darkToggle = document.getElementById('dark-toggle');
// const html = document.documentElement;

// darkToggle.addEventListener('click', () => {
//   html.classList.toggle('dark');
//   updateDarkIcon();
// });
