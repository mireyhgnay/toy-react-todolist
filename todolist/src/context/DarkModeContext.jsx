import { createContext, useContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode); // 모든 요소들을 클래스명 토글에 따라 변경해줄 것임
  };

  useEffect(() => {
    const isDark =
      // tailwindcss 에서 다크모드 내용 가져온 것
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark); // 내부 스태틱에 저장
    updateDarkMode(isDark);
  }, []);

  return (
    // 필요한 요소들이 darkMode와 toggleDarkMode 에 접근할 수 있다.
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// html코드에서도 다크모드를 클래스 셀렉터로 제어할 수 있도록 한다.
// 추가로 로컬스토리지에도 클래스 변경됨을 저장한다.
function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}

/*
다크모드를 사용해야하는 컴포넌트 안에 매번 아래 코드를 넣어주어야하는 번거로움을 여기서 함수로 해결해주기!
const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
*/

export const useDarkMode = () => useContext(DarkModeContext);
