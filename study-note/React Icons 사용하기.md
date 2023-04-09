# <div align="center">✔️ React Icons 사용하기</div>

<br>

### React Icons

🔗 React Icons 공식 문서 https://react-icons.github.io/react-icons/

<br>

### Install

```bash
npm install react-icons --save
```

<br>

### 아이콘 사용하기

1. [React Icons 공식 문서](https://react-icons.github.io/react-icons/) 들어가기
2. 사용하고 싶은 아이콘 검색 ex. 휴지통 아이콘 : 'trash'
3. 사용 할 아이콘 클릭 > `Copied 'FaTrashAlt' to clipboard` 이름이 복사됨
4. 사용할 컴포넌트 파일로 와서 import 후, 태그로 사용

   ```jsx
   import { FaTrashAlt } from "react-icons/fa";
   <button type="button">
     <FaTrashAlt />
   </button>;
   ```
