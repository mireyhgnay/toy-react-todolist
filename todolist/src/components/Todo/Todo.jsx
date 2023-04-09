import React from "react";
import { FaTrashAlt } from "react-icons/fa";

// 리스트 컴포넌트
// 체크박스 / 텍스트 / 삭제버튼 이 모두 들어가는 Todo Component
export default function Todo({ todo, onUpdate, onDelete }) {
  const { text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li>
      <input
        type="checkbox"
        id="checkbox"
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor="checkbox">{text}</label>
      <button onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </li>
  );
}
