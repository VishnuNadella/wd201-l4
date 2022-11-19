const today = new Date().toLocaleDateString("en-CA");

const todoList = () => {
  var all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    var req_lst = [];
    all.forEach((task) => {
      if (today > task.dueDate) {
        req_lst.push(task);
      }
    });
    return req_lst;
  };

  const dueToday = () => {
    var due_today_lst = [];
    all.forEach((task) => {
      if (task.dueDate === today) {
        due_today_lst.push(task);
      }
    });
    return due_today_lst;
  };

  const dueLater = () => {
    var due_later_lst = [];
    all.forEach((task) => {
      if (task.dueDate > today) {
        due_later_lst.push(task);
      }
    });
    return due_later_lst;
  };

  const toDisplayableList = (list) => {
    var display_list = [];
    list.forEach((task) => {
      if (task.completed === false) {
        if (task.dueDate === today) {
          display_list.push(`[ ] ${task.title}`);
        } else {
          display_list.push(`[ ] ${task.title} ${task.dueDate}`);
        }
      } else {
        if (task.dueDate === today) {
          display_list.push(`[x] ${task.title}`);
        } else {
          display_list.push(`[x] ${task.title} ${task.dueDate}`);
        }
      }
    });
    return display_list.join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
