import React, { useEffect, useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
  // todos : 해야할 일 전체를 담고있는 데이터
  // setTodos : 담고있는 그 데이터를 변경하고 업데이트
  /*
  const [todos, setTodos] = useState([
    { id: "123", text: "장보기", status: "active" },
    { id: "124", text: "공부하기", status: "active" },
  ]);
  */

  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

  // 추가된 새로운 아이템을 props todo로 받아 todos를 업데이트한다.
  // 기존 것을 가져오고, 새로운 todo를 업데이트
  const handleAdd = (todo) => setTodos([...todos, todo]);

  // 기존 투두 데이터를 받아와서 해당 id와 업데이트할 id가 같으면 업데이트 해주고, 아니면 기존 그대로 유지
  const handleUpdate = (updated) =>
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));

  // 지우려고하는 투두가 아닌 것들만 필터링한다.
  const handleDelete = (deleted) =>
    setTodos(todos.filter((t) => t.id !== deleted.id));

  // localStorage 에 할일 목록 저장하기
  useEffect(() => {
    // todos 라는 key에 오브젝트를 저장할 것이다.
    // 배열을 저장하기 우해서는 json 으로 변환을 해줘야한다.
    // todos 를 json으로 저장해서 todos에 저장한다.
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // filtered 된 애들만 보여주는 함수
  const filtered = getFilteredItems(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filtered.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
}

function readTodosFromLocalStorage() {
  // 로컬스토리지에서 todos를 받아와서
  // 키 todos에 저장된 애들이 있다면 todos를 파싱해주고 아니면 빈배열로 리턴한다.
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}
