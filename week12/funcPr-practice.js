const cart = [
    { item: "노트북", price: 1200000, quantity: 1 }, 
    { item: "마우스", price: 35000, quantity: 2 }, 
    { item: "키보드", price: 89000, quantity: 1 } 
];

// cart의 총 가격을 저장할 변수
let totalPrice = 0;

// for 루프를 사용하여 cart의 각 항목 가격 계산
for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price * cart[i].quantity; // 개별 항목의 가격 * 수량을 합산
}
console.log(`totalPrice : ${totalPrice}`); // 총 가격 출력

// forEach를 사용하여 동일한 작업 수행
totalPrice = 0;
cart.forEach(item => {
    totalPrice += item.price * item.quantity; // 개별 항목의 가격 * 수량을 합산
});
console.log(`totalPrice : ${totalPrice}`);

// reduce를 사용하여 총 가격 계산
totalPrice = cart.reduce((sum, goods) => sum + goods.price * goods.quantity, 0);
console.log(`totalPrice : ${totalPrice}`);

// map을 사용하여 각 항목의 총 가격을 포함하는 새로운 배열 생성
const itemTotals = cart.map(goods => (
    { item: goods.item, total: goods.price * goods.quantity } // 항목 이름과 총 가격 반환
));
console.log('itemTotals = ', itemTotals);

// 이름 배열을 대문자로 변환
const names = ['alice', 'bob', 'charlie'];
const uppercasedNames = names.map(
    name => name.toUpperCase() // 이름을 모두 대문자로 변환
);
console.log(`uppercasedNames = , ${uppercasedNames}`);

// 이름 배열을 첫 글자만 대문자로 변환
const capitalStartnames = names.map(
    name => name.charAt(0).toUpperCase() + name.slice(1) // 첫 글자 대문자 + 나머지 소문자
);
console.log(`capitalStartnames = , ${capitalStartnames}`);
