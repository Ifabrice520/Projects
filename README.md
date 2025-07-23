📝 My To-Do List

A clean and interactive To-Do List web application built with HTML, Tailwind CSS (using CLI), and JavaScript. Includes task filtering, persistent dark mode toggle, and real-time task counters.

---

🌟 Features

- ✅ Add and delete tasks
- 🔄 Mark tasks as completed or active
- 📂 Filter by `All`, `Active`, or `Completed`
- 📊 Displays real-time task counts
- 💡 Keyboard support: Add task with `Enter` key

---

📁 Folder Structure

to-do-list/
├── dist/
│ ├── index.html # Main HTML file
│ ├── output.css # Compiled Tailwind CSS
│ └── script.js # JavaScript logic
├── src/
│ └── input.css # Tailwind source file
├── .vscode/ # VSCode config (optional)
│ └── settings.json
├── tailwind.config.js # Tailwind config
├── package.json
└── README.md # This file


---

🚀 Getting Started

1. Clone the Repository

```bash
git clone https://github.com/Ifabrice520/Projects
cd to-do-list

```
2. Install Tailwind via CLI

  npm install -D tailwindcss
  npx tailwindcss init

3. Add Tailwind Directives to src/input.css

  @tailwind base;
  @tailwind components;
  @tailwind utilities;

4. Build Tailwind CSS

  npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

5. Open the Project
   
  Open dist/index.html in your browser.

🛠️ Built With
Tailwind CSS — Utility-first CSS framework

JavaScript

HTML5

Author
ISHIMWE Fabrice — @https://github.com/Ifabrice520
