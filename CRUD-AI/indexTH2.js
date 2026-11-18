// CRUD - Create, Read, Update, Delete
const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");
const counter = document.getElementById("counter");
const emptyMessage = document.getElementById("empty");
const toast = document.getElementById("toast");
const toastText = document.getElementById("toast-text");
const toastUndo = document.getElementById("toast-undo");

let tasks = [];
let editingId = null;      // id задачи, которая сейчас редактируется (или null)
let lastDeleted = null;    // { task, index } — чтобы можно было отменить удаление
let toastTimer = null;

// Иконки (статичный SVG, пользовательского текста здесь нет)
const ICON_EDIT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>';
const ICON_DELETE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/></svg>';
const ICON_SAVE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
const ICON_CANCEL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="M6 6l12 12"/></svg>';

// ---------- CREATE ----------
form.addEventListener("submit", event => {
  event.preventDefault();
  const title = input.value.trim();
  if (!title) return;

  tasks.push({ id: Date.now(), title: title, done: false });
  input.value = "";
  render();
});

// ---------- клики по списку (галочка, карандаш, корзина, сохранить, отмена) ----------
list.addEventListener("click", event => {
  const li = event.target.closest("li");
  if (!li) return;

  const id = Number(li.dataset.id);
  const target = event.target;

  // UPDATE: поставить/снять галочку
  if (target.classList.contains("toggle-input")) {
    const task = tasks.find(task => task.id === id);
    if (task) task.done = !task.done;
    render();
    return;
  }

  // UPDATE: начать редактирование
  if (target.closest(".edit")) {
    startEdit(id);
    return;
  }

  // UPDATE: сохранить правку
  if (target.closest(".save")) {
    saveEdit(id, li.querySelector(".edit-input").value);
    return;
  }

  // UPDATE: отменить правку
  if (target.closest(".cancel")) {
    cancelEdit();
    return;
  }

  // DELETE: удалить задачу
  if (target.closest(".delete")) {
    deleteTask(id);
  }
});

// Двойной клик по тексту тоже открывает редактирование
list.addEventListener("dblclick", event => {
  const span = event.target.closest(".title");
  if (!span) return;
  startEdit(Number(span.closest("li").dataset.id));
});

// Enter — сохранить, Esc — отменить (пока курсор в поле редактирования)
list.addEventListener("keydown", event => {
  if (!event.target.classList.contains("edit-input")) return;
  const id = Number(event.target.closest("li").dataset.id);

  if (event.key === "Enter") {
    event.preventDefault();
    saveEdit(id, event.target.value);
  } else if (event.key === "Escape") {
    cancelEdit();
  }
});

// ---------- функции действий ----------
function startEdit(id) {
  editingId = id;
  render();
}

function saveEdit(id, newTitle) {
  const title = newTitle.trim();
  if (!title) return; // пустое название не сохраняем, остаёмся в режиме правки

  const task = tasks.find(task => task.id === id);
  if (task) task.title = title;
  editingId = null;
  render();
}

function cancelEdit() {
  editingId = null;
  render();
}

function deleteTask(id) {
  const index = tasks.findIndex(task => task.id === id);
  if (index === -1) return;

  const [task] = tasks.splice(index, 1);
  lastDeleted = { task, index };
  if (editingId === id) editingId = null;
  render();
  showToast("Задача удалена");
}

function undoDelete() {
  if (!lastDeleted) return;
  tasks.splice(lastDeleted.index, 0, lastDeleted.task); // вернуть на прежнее место
  lastDeleted = null;
  hideToast();
  render();
}

// ---------- всплывающее сообщение ----------
function showToast(text) {
  toastText.textContent = text;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    hideToast();
    lastDeleted = null; // после исчезновения сообщения отменить уже нельзя
  }, 5000);
}

function hideToast() {
  clearTimeout(toastTimer);
  toast.hidden = true;
}

toastUndo.addEventListener("click", undoDelete);

// ---------- READ: рисуем список ----------
function makeButton(className, label, icon) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "icon-btn " + className;
  btn.setAttribute("aria-label", label);
  btn.title = label;
  btn.innerHTML = icon;
  return btn;
}

function render() {
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.dataset.id = task.id;
    if (task.done) li.classList.add("done");

    if (task.id === editingId) {
      // Режим редактирования: поле ввода + «Сохранить» и «Отмена»
      li.classList.add("editing");

      const editInput = document.createElement("input");
      editInput.type = "text";
      editInput.className = "edit-input";
      editInput.value = task.title;
      editInput.setAttribute("aria-label", "Название задачи");

      li.append(
        editInput,
        makeButton("save", "Сохранить", ICON_SAVE),
        makeButton("cancel", "Отмена", ICON_CANCEL)
      );
    } else {
      // Обычный режим: галочка + текст + «Изменить» и «Удалить»
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.done;
      checkbox.className = "toggle-input";
      checkbox.setAttribute("aria-label", "Выполнено");

      const span = document.createElement("span");
      span.className = "title";
      span.textContent = task.title;
      span.title = "Двойной клик — изменить";

      li.append(
        checkbox,
        span,
        makeButton("edit", "Изменить", ICON_EDIT),
        makeButton("delete", "Удалить", ICON_DELETE)
      );
    }

    list.append(li);
  });

  // Пустое состояние и счётчик
  emptyMessage.hidden = tasks.length > 0;
  const left = tasks.filter(task => !task.done).length;
  counter.textContent = tasks.length ? "Осталось: " + left + " из " + tasks.length : "";

  // Курсор сразу в поле редактирования, текст выделен
  if (editingId !== null) {
    const editInput = list.querySelector(".edit-input");
    if (editInput) {
      editInput.focus();
      editInput.select();
    }
  }
}

render();
