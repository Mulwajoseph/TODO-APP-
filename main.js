// // window.addEventListener('load' , () => {
// //     todos = JSON.parse(localStorage.getitem('todos')) || [];
// //     const nameinput = document.querySelector('#name');
// //     const newTodoForm = document.querySelector('anew-todo-form');
// //     const username = localStorage.getItem('username' || '')
// //     nameinput.value = username;
// //     nameinput.addEventListener('change' , encodeURI => {
// //         localStorage.setitem('username', encodeURI.target.value);
        

// //     })

// //     newTodoForm.addEventListener('submit' , encodeURI => {
// //         encodeURI.preventDefault();
// //         const toddo = {
// //             content:encodeURI.target.elements.content.value,
// //             category:encodeURI.target.elements.value,
// //             done: false,
// //             createdAT: new Date().getTime()
// //                }
// //         todos.push(todo);
// //         localstorage.setitem('todos', JSON.stringify(todos));

// //         encodeURI.target.reset(); 

// //         DisplayTodos()
// //     })
// // })
// // function DisplayTodos(){
// //     const todolist = documentt.querySelector('#todo-list');

// //     todolist.innerHTML = '';
// //     todos.forEach(todo => {
// //         const todoItem = document.createElement('div');
// //         todoItem.classList.add('todo-item')

// //         const label = document.createElement('label');
// //         const input = document.createElement('input');
// //         const span = document.createElement('span');
// //         const content = document.createElement('div');
// //         const actions = document.createElement('div');
// //         const edit = document.createElement('button');
// //         const deleteButton = document.createElement('button');

// //         input.type = 'checkbox';
// //         input.checked = todo.done;
// //         span.classList.add('bubble');

// //         if(todo.category == 'personal'){
// //             span.classList.add('personal')
// //         }else {
// //             span.classList.add('business');
// //         }
// //         content.classList.add('todo-content');
// //         actions.classList.add('actions');
// //         edit.classList.add('edit');
// //         deleteButton.classList.add('delete');

// //         content.innerHTML = `<input type="text" value="${todo.content}"
// //         readonly>`;
// //         edit.innerHTML = 'Edit';
// //         deleteButton.innerHTML = 'delete';

// //         label.appendChild(input);
// //         label.appendChild(span);
// //         actions.appendChild(edit);
// //         actions.appendChild(deleteButton);
// //         todoItem.appendChild(label);
// //         todoItem.appendChild(content);
// //         todoItem.appendChild(actions);

// //         todolist.appendChild(todoItem);

// //         if (todo.done) {
// //             todoItem.classList.add('done');
// //         }
// //         input.addEventListener('click' , encodeURI =>{
// //             todo.done = encodeURI.target.checked;
// //             localStorage.setitem('todos',JSON.stringify(todos))

// //             if(todo.done){
// //                 todo.Item.classList.add('done');
// //             }else{
// //                 todoItem.classList.remove('done');
// //             }
// //             DisplayTodos();
// //         })

// //         edit.addEventListener('click', encodeURI => {
// //             const input = content.querySelector('input');
// //             input.removeAttribute('readonly');
// //             input.focus();
// //             input.addEventListener('blur' , encodeURI => {
// //                 input.setAttribute('readonly', true);
// //                 todo.content = encodeURI.target.value;
// //                 localStorage.setItem('todos' , JSON.stringify(todos));
// //                 DisplayTodos();
// //             })
// //         })

// //         deleteButton.addEventListener('click', encodeURI =>{
// //             todos = todos.filter(t => t != todo);
// //             localStorage.setItem('todos', JSON.stringify(todos));
// //             DisplayTodos();

// //         })
// //     })
// // }

window.addEventListener('load', () => {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    const nameInput = document.querySelector('#name');
    const newTodoForm = document.querySelector('#new-todo-form');
    const username = localStorage.getItem('username') || '';
    nameInput.value = username;
    nameInput.addEventListener('change', (event) => {
      localStorage.setItem('username', encodeURI(event.target.value));
    });
    newTodoForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const todo = {
        content: event.target.elements.content.value,
        category: document.querySelector('input[name="category"]:checked').value,
        done: false,
        createdAt: new Date().getTime(),
      };
      todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(todos));
      event.target.reset();
      displayTodos();
    });
    displayTodos();
  });
  
//   function displayTodos() {
//     const todoList = document.querySelector('#todo-list');
//     todoList.innerHTML = '';
//     const todos = JSON.parse(localStorage.getItem('todos')) || [];
//     todos.forEach((todo) => {
//       const todoItem = document.createElement('div');
//       todoItem.classList.add('todo-item');
//       const label = document.createElement('label');
//       const input = document.createElement('input');
//       const span = document.createElement('span');
//       const content = document.createElement('div');
//       const actions = document.createElement('div');
//       const edit = document.createElement('button');
//       const deleteButton = document.createElement('button');
//       input.type = 'checkbox';
//       input.checked = todo.done;
//       span.classList.add('bubble');
//       if (todo.category === 'personal') {
//         span.classList.add('personal');
//       } else {
//         span.classList.add('business');
//       }
//       content.classList.add('todo-content');
//       actions.classList.add('actions');
//       edit.classList.add('edit');
//       deleteButton.classList.add('delete');
//       content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
//       edit.innerHTML = 'Edit';
//       deleteButton.innerHTML = 'Delete';
//       label.appendChild(input);
//       label.appendChild(span);
//       actions.appendChild(edit);
//       actions.appendChild(deleteButton);
//       todoItem.appendChild(label);
//       todoItem.appendChild(content);
//       todoItem.appendChild(actions);
//       todoList.appendChild(todoItem);
//     });
//  }

// function displayTodos() {
//     const todoList = document.querySelector('#todo-list');
//     todoList.innerHTML = '';
//     const todos = JSON.parse(localStorage.getItem('todos')) || [];
//     todos.forEach((todo, index) => {
//       const todoItem = document.createElement('div');
//       todoItem.classList.add('todo-item');
//       const label = document.createElement('label');
//       const input = document.createElement('input');
//       const span = document.createElement('span');
//       const content = document.createElement('div');
//       const actions = document.createElement('div');
//       const edit = document.createElement('button');
//       const deleteButton = document.createElement('button');
//       input.type = 'checkbox';
//       input.checked = todo.done;
//       span.classList.add('bubble');
//       if (todo.category === 'personal') {
//         span.classList.add('personal');
//       } else {
//         span.classList.add('business');
//       }
//       content.classList.add('todo-content');
//       actions.classList.add('actions');
//       edit.classList.add('edit');
//       deleteButton.classList.add('delete');
//       content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
//       edit.innerHTML = 'Edit';
//       deleteButton.innerHTML = 'Delete';
  
//       // add event listener for editing
//       edit.addEventListener('click', () => {
//         const newContent = prompt('Enter new content', todo.content);
//         if (newContent !== null) {
//           todos[index].content = newContent;
//           localStorage.setItem('todos', JSON.stringify(todos));
//           displayTodos();
//         }
//       });
  
//       // add event listener for deleting
//       deleteButton.addEventListener('click', () => {
//         todos.splice(index, 1);
//         localStorage.setItem('todos', JSON.stringify(todos));
//         displayTodos();
//       });
  
//       label.appendChild(input);
//       label.appendChild(span);
//       actions.appendChild(edit);
//       actions.appendChild(deleteButton);
//       todoItem.appendChild(label);
//       todoItem.appendChild(content);
//       todoItem.appendChild(actions);
//       todoList.appendChild(todoItem);
//     });
//   }


function displayTodos() {
    const todoList = document.querySelector('#todo-list');
    todoList.innerHTML = '';
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach((todo, index) => {
      const todoItem = document.createElement('div');
      todoItem.classList.add('todo-item');
      const label = document.createElement('label');
      const input = document.createElement('input');
      const span = document.createElement('span');
      const content = document.createElement('div');
      const actions = document.createElement('div');
      const edit = document.createElement('button');
      const deleteButton = document.createElement('button');
      input.type = 'checkbox';
      input.checked = todo.done;
      span.classList.add('bubble');
      if (todo.category === 'personal') {
        span.classList.add('personal');
      } else {
        span.classList.add('business');
      }
      content.classList.add('todo-content');
      actions.classList.add('actions');
      edit.classList.add('edit');
      deleteButton.classList.add('delete');
      content.innerHTML = `<input type="text" value="${todo.content}" readonly>`;
      edit.innerHTML = 'Edit';
      deleteButton.innerHTML = 'Delete';
  
      // add event listener for editing
      edit.addEventListener('click', () => {
        const newContent = prompt('Enter new content', todo.content);
        if (newContent !== null) {
          todos[index].content = newContent;
          localStorage.setItem('todos', JSON.stringify(todos));
          displayTodos();
        }
      });
  
      // add event listener for deleting
      deleteButton.addEventListener('click', () => {
        todos = todos.filter((_, i) => i !== index);
        localStorage.setItem('todos', JSON.stringify(todos));
        displayTodos();
      });
  
      label.appendChild(input);
      label.appendChild(span);
      actions.appendChild(edit);
      actions.appendChild(deleteButton);
      todoItem.appendChild(label);
      todoItem.appendChild(content);
      todoItem.appendChild(actions);
      todoList.appendChild(todoItem);
    });
  }
  