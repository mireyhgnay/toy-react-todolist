import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      <Header
        filters={filters} // 우리가 사용할 filter들은 배열 filters 이고,
        filter={filter} // 현재 선택된 filter는 상태값 filter 이고,
        onFilterChange={setFilter} // 현재 선택된 filter로 상태를 변경한다
      />
      {/* 변경된 filter는 이거야! 라고 TodoList 에 전달해준다 */}
      <TodoList filter={filter} />
    </>
  );
}

export default App;
