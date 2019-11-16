// 아래 실행결과를 예측하고 map과 forEach의 차이점을 설명하시오.
var items = ['1', '2', '3', '4', '5'];
// map은 배열을 받아서 루프를 돌면서 새로운 배열을 리턴
var newItems = items.map(item => parseInt(item));
console.log(newItems,items);

// 원본배열에 루프만 돌 뿐...
var newItems2 = items.forEach(item => parseInt(item));
console.log(newItems2);
