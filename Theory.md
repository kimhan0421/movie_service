Part 1
====
### npm start!

Creating a Github Repository
----------------------------------
+ git init
+ git remote add origin 레파지토리 주소
+ git add .
> warning: LF will be replaced by CRLF in README.md.
> 윈도우를 사용하고 있으니 => git config --global core.autocrlf true
+ git commit -m "설명"
+ git push origin master

How does React work?
--------------------------
### 폴더
+ public
> favicon => 상단에 나타내는 것. \
> index => 인덱스. 비워져 있음
+ src
> App.js
> index.js

react 작동 \
=> 작성한 모든 요소를 생성함. \
JS와 함께 이것들을 만들고, 이들을 HTML로 넣는데 이때문에 HTML이 보이지 않음 \
```<div> element넣는 역할 담당</div> ``` => index.html에는 작성한 helllo가 보이지 않음

virtual DOM 존재
> virtual document object model


Part 2 - JSX & PROPS
===============
콘솔에 npm start 한 상태로 돌려야 함.

<App /> \
=> componet. \
=> react는 component와 함께 동작. \
=> component
> HTML을 반환하는 함수

JS 와 HTML사이의 조합 = jsx \
component 작성시 => import React from "react"작성으로 jsx가 component사용을 이해함

function Potato() \
=> P는 대문자 + return \
=> 선언되었지만 사용하지 않아요 \
=> export 해요 ) export default Potato;

### react application이 하나의 component만을 rendering해야 함.
따라서, index.js에는 <App />가 이미 있으니, App.js에 Potato를 import \
./ = directory
