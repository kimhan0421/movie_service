<h1 align="center">
state
</h1> 
<p align="center">
  <strong>3.1</strong><br>
</p>

class App extends React.Component{}   
+ class App은 React.Component  
+ React.Component + 여러 기능 ) 여기서는 state를 다룰 것
+ React.Component 는 함수 ) return이 필요하고, 이를 모니터에 표시함
+ 이렇게 return 되는 것을 render로 넣어서 표시
> react는 자동적으로 class component의 render method를 실행하고 싶어하기 때문

<p align="center">
  <strong>3.2</strong><br>
</p>

state
+ obj임
+ component의 data를 넣을 공간 존재함
+  {this.state.count} => 함수기 때문에 this로 

<button onClick>
+ JS에서는 eventListener를 통해야 함 
+ BUT! react에서는 자동적으로 onClick이 주어짐

state는 직접 변경 안됨
따라서, state의 상태를 변경할때 react가 render function을 바꿔주길 원해야 함

```react
 add = () => {
    this.setState({count:1})
  };
```
+ state = obj, setState는 새로운 state를 받아야 함
+ setStae => 새로운 state, render function을 호출

```react
add = () => {
    this.setState({count: this.state.count + 1})
  };
```
+ state에 의존하는 방법
+ 따라서, current사용

<p align="center">
  <strong>3.3</strong><br>
</p>

setState 호출
+ componet 호출
+ render 호출
+ update 완료되었다면, componentDidUpdate 실행
```react
class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log("Component rendered");
  }
  componentDidUpdate() {
    console.log("I just updated");
  }
  componentWillUnmount() {
    console.log("Goodbye, cruel world");
  }
  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
```
<p align="center">
  <strong>3.4</strong><br>
</p>
componentDidMount() 에서 data를 fetch 해야 함, API로부터 data fetching이 완료되면 "We are ready"대신 movie를 render하고 map만들고 novie를 render...

<h1 align="center">
MAKING THE MOVIE APP
</h1> 
<p align="center">
  <strong>4.1</strong><br>
</p>

data fetch하고 싶어요 )
JS => fetch 사용   
react => axios ) npm i axios으로 API사용   

JS에게 componentDidMount함수가 끝날때까지 시간이 걸린다고 알려줘야 함   
=> async와 await

흐름
+ 처음에는 isLoading : true => Loading...을 봄
+ application이 mount된 후 getMovies 함수를 호출
+ getMovies는 axios.get을 사용하기 때문에 시간이 걸리고, 이를 알려주기 위해 await사용

<p align="center">
  <strong>4.2</strong><br>
</p>

movies.data.data.movies를 원해요   
= {data: {data : {movies}}}

this.setState({movies:movies}) => {setState의 movies:axios의 movies}  \ 
sort_by=rating => 별점 순서로 정렬   \
Movie.PropTypes => {//정보 가져오는 함수
map함수 => 반드시 return

key는 유일해야 함. => movie ID줄 수 있음

