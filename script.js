
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

        // add new item as part of existing list
        document.getElementById("tasks").appendChild(item);

        input.value = "";
        input.placeholder = "Enter Next task";
      }
    }

    // change styling used for given item
    function markDone(item) {
      item.className = "finished";
    }

    /* Step 7 below here */
    function remove(item) {
      // remove item completely from document
      if (item.className == "finished") {
        item.remove();
      } else {
        alert("Click Check Before Deleting");
      }
    }

    /* Step 11 below here */
    function doAbout() {
      var about = document.getElementById("divabout");
      about.innerHTML =
        "Heya, This is Aman. Welcome to our todo list website! Our website is designed to help you keep track of your tasks and stay organized. With our easy-to-use interface, you can quickly add new tasks, set due dates, and prioritize your work";

      about.className = "aboutcolor";
    }

    /* Step 14 below here */
    function clearAbout() {
      var clear = document.getElementById("divabout");
      clear.innerHTML = "";
    }

    function important(item) {
      item.className = "important";
    }
  