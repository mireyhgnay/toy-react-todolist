import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
  // todos : 해야할 일 전체를 담고있는 데이터
  // setTodos : 담고있는 그 데이터를 변경하고 업데이트
  const [todos, setTodos] = useState([
    { id: '123', text: '장보기', status: 'active' },
    { id: '124', text: '공부하기', status: 'active' },
  ]);

  // 추가된 새로운 아이템을 props todo로 받아 todos를 업데이트한다.
  // 기존 것을 가져오고, 새로운 todo를 업데이트
  const handleAdd = (todo) => setTodos([...todos, todo]); 
  return (
    <section>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
