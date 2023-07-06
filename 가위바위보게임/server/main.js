// https://expressjs.com/ 에서 내려받는 정보들. Go Live 하지 않고, 내 서버를 내가 만드는 방법 중 하나. (node.js & express)
//터미널 열어서 해야 하고, node main.js 통해서 실행함.
//서버 끌 때는 ctrl + c (종료)
//11열 확인, public 이라는 폴더에서 정적으로 제공 할 js 및 htnml 넣어놔야 함!
//파일 다운 받아야 함. PS C:\Users\devedu13\Desktop\가위바위보게임> \server > npm i express

const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public")); // public folder에 있는 애를 정적 파일로 제공할거야.

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
