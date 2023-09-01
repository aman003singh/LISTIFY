
    // Initialize tasks from localStorage or an empty array
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function addTask() {
        var input = document.getElementById("input");
        // get current text from input field
        var newTask = input.value;
        // only add new item to list if some text was entered
        if (newTask != "") {
            // create new HTML list item
            var item = document.createElement("li");
            // add HTML for buttons and new task text
            // Note, need to use '' because of "" in HTML
            item.innerHTML =
                '<input type="button" class="done" onclick="markDone(this.parentNode)"  value="&#x2713;" /> ' +
                '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' +
                newTask;

            // add new item as part of the existing list
            document.getElementById("tasks").appendChild(item);

            input.value = "";
            input.placeholder = "Enter Next task";

            // Add the new task to the tasks array
            tasks.push(newTask);
            // Save the updated tasks array to localStorage
            saveTasks();
        }
    }

    // change styling used for a given item
    function markDone(item) {
        item.className = "finished";
        saveTasks();
    }

    // remove item completely from the document
    function remove(item) {
        if (item.className == "finished") {
            item.remove();
            // Remove the task from the tasks array and save
            const taskText = item.innerText.trim();
            const taskIndex = tasks.indexOf(taskText);
            if (taskIndex !== -1) {
                tasks.splice(taskIndex, 1);
                saveTasks();
            }
        } else {
            alert("Click Check Before Deleting");
        }
    }

    // Clean all tasks
    function clean() {
        // Remove all tasks from the tasks array and save
        tasks.length = 0;
        saveTasks();
        // Clear the task list
        const taskList = document.getElementById("tasks");
        taskList.innerHTML = "";
    }

    // Load and display tasks when the page loads
    window.onload = function () {
        displayTasks();
    };

    // Display tasks function
    function displayTasks() {
        const taskList = document.getElementById('tasks');
        taskList.innerHTML = '';

        tasks.forEach((task) => {
            const item = document.createElement('li');
            item.innerHTML =
                '<input type="button" class="done" onclick="markDone(this.parentNode)"  value="&#x2713;" /> ' +
                '<input type="button" class="remove" onclick="remove(this.parentNode)" value="&#x2715;" /> ' +
                task;
            taskList.appendChild(item);
        });
    }


    function doAbout() {
      var about = document.getElementById("divabout");
      about.innerHTML =
        "Heya, This is Aman. Welcome to our todo list website! Our website is designed to help you keep track of your tasks and stay organized. With our easy-to-use interface, you can quickly add new tasks, set due dates, and prioritize your work";

      about.className = "aboutcolor";
    }

    function clearAbout() {
      var clear = document.getElementById("divabout");
      clear.innerHTML = "";
    }
