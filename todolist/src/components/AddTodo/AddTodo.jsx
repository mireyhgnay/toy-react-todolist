import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState('');
  // form 태그의 특성 : 텍스트를 바로 입력하고 입력되는 것을 상태로 설정해주어야한다.
  const handleChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    // 아무것도 입력하지 않았을 경우
    if (text.trim().length === 0) { // trim() : 앞,뒤의 여백을 없애준다.
      return;
    }
    onAdd({ id: uuidv4(), text, status: 'active' });
    setText(''); // button 클릭시(handleSubmit) input text 초기화
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add Todo'
        value={text}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}
