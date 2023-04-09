# <div align="center">✔️ trim() : input text 앞 뒤 여백 없애주기</div>

<br>

## string.prototype.trim()

[🔗 MDN - trim()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/trim)

`trim()` 메서드는 문자열 양 끝의 공백을 제거하고 원본 문자열을 수정하지 않고 새로운 문자열을 반환합니다.

```jsx
const greeting = "   Hello world!   ";

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";
```

<br>

## To Do List 에서 목록을 추가할 때 Input 에 적용해보기

**HTML 코드**

```html
<section class="todo">
  <ul class="todo_list"></ul>

  <form action="" class="todo_form">
    <input type="text" placeholder="ADD TODO" class="todo_input" />
    <button class="btn_add">ADD</button>
  </form>
</section>
```

**JavaScript 코드**

```jsx
const todoInput = document.querySelector(".todo_input");
const todoForm = document.querySelector(".todo_form");

// ADD Todo
function todoAdd(todo) {
  const todoList = document.querySelector(".todo_list");
  const li = document.createElement("li");
  li.className = "todo_item";
  const span = document.createElement("span");
  span.className = "todo_text";

  li.appendChild(span);
  span.innerText = todoInput.value;
  todoList.appendChild(li);
}

// From submit event
function handleSubmit(e) {
  e.preventDefault();

  const newTodo = todoInput.value;

  if (newTodo.trim().length === 0) {
    return;
  }

  todoAdd(newTodo);
  todoInput.value = "";
}

todoForm.addEventListener("submit", handleSubmit);
```

handleSubimt() 함수에서 사용한 것 처럼

만약 input value 값에 여백을 모두 제거한 길이가 0 일 때 return 해주어 종료해주면 됩니다!
