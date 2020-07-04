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

2-1
----
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

2-2
----
다음은 같은 뜻
```html
<div class = "hello">
```
```jsx
<Food fav = "noodle" />
```
기본적으로 어떤 것의 이름 속성을 따옴표+텍스트와 같은 방식
=> food component에 fav라는 이름의 property를 noodle라는 value로 줌

function Food(props)   
> props에는 <Food fav = "noodle" />의 값들이 들어감   
> = function Food({fav})

Food({fav})
> <Food fav = "noodle" />의 fav 같아야 함

jsx = HTML + JS   

map => function으로 function의 array의 각 item 적용함   
```react
{foodILike.map(dish => (
    <Food name={dish.name} picture={dish.image} />
))}
```
에서 dish는 obj   
dish.name이나 dish.image로 obj의 name과 image를 가져옴

2-3
---
map => 무조건 array로 돌려줌   
react의 모든 element => 유일해야 하는데, 이를 list안으로 넣으면 유일성을 잃어버림

2-4
----
prop-types할일   
- 전달받은 props가 원하는 props인지 확인해야 함.

node.js에 무언가를 설치하려면,   
- npm i prop-types
- 설치 확인 ) package.json에서 "prop-types"찾기

Food 함수에 prop-type을 추가할 것  
- 이때 이름은 반드시 proptype
- type확인
- boolean, array, ture, object 등을 확인 할 수 있다
- 더불어 required를 호출하는 방식으로 확인가능
- 따라서, type과 required 확인 가능
