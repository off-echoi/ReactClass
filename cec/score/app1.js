const title = React.createElement(
  'h1',
  {
    //  JSON 객체 형태
    id: 'main-title',
    title: 'This is a title',
  },
  'My First React Element'
);
// title 은 React Element 이다
// 리액트는 실제 뷰를 다루지 않고
// 뷰(view,Dom)를 직접 다루는게 아니고 자바스크립트 객체(virtual DOM)를 다룬다
// 그래서 더 빠르게 성능이 좋게 다룰 수 있다.
// = ex) 실제 만개의 뷰가 아니고 만개의 객체에서 필요한것만 불러서 쓰기 때문에
console.log(title);

const desc = React.createElement(
  'p',
  null,
  'This is Description'
);

console.log(desc);

const header = React.createElement(
  'header',
  null,
  title, desc
);
console.log(header);
// title을 렌더링 해서 root에 올린다(넣는다)는 뜻
// ctrl + Q 해서 문범을 확인하여라
// ReactDOM.render(title, document.getElementById('root'));
ReactDOM.render(header,document.getElementById('root'));






