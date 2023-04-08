# <div align="center">✔️ 고유한 id 라이브러리 사용하여 설정하기 - uuid</div>

<br>

## uuid

UUID는 Universally Unique IDentifier의 약자로, 전세계에 하나밖에 없는 ID라는 뜻이고,

Node.js에서 UUID를 생성해주는 라이브러리 입니다.

<br>

## uuid Install

```bash
# npm
npm install uuid

# yarn
yarn add uuid
```

<br>

## 사용 방법

UUID에는 생성 방법이 여러가지 있습니다.

아래 생성방법들 중 마음에 드는 것을 골라서 사용하면 됩니다.

- v1: 타임스탬프(시간) 기준으로 생성
- v3: MD5 해시 기준으로 생성
- v4: 랜덤값을 기반으로 생성
- v5: SHA-1 해시 기준으로 생성

<br>

```jsx
import { v4 } from "uuid";
```

설치 후 import 하여 사용할 수 있습니다.

<br>

개발자도구로 확인해보면 아래 이미지처럼 설정한 각 아이템별로 고유한 id 값이 부여된다.

![스크린샷 2023-04-08 오후 11 18 59](https://user-images.githubusercontent.com/111990266/230726148-6f2a0b8f-b2f5-4cbc-b309-c6caf71296be.png)

<br>

---

<br>

🔗 참고 https://fred16157.github.io/node.js/nodejs-library-uuid/
