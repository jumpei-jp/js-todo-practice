/**
 * const, letなどの変数宣言確認
 */

//
// let val1 = 'val';
// console.log(val1);

// const val3 = "const変数";
// console.log(val3);

//const変数は上書き不可
//val3 = "const変数を上書き";

// const val3 = "const再宣言";

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//     name: "じゃけえ",
//     age: 28,
// };

// val4.name = "jak";
// console.log(val4);

// val4.address = "Hirosima";
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */

// const name = "じゃけえ";
// const age = 28;

// // 私の名前はじゃけえです。年齢は28歳です。

// //従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

// //従来の関数
// const func1 = function func1(str){
//     return str;
// }
// console.log(func1("func1です。"));

// // アロー関数を利用　引数が一つの時はかっこをはずしても良い
// const func2 = (str) => {
//     return str;
// }
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//     return num1 + num2;
// };

// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//     name: "mike",
//     age: 30,
// };

// const {name, age } = myProfile;
// const message1 = `my name is ${name}. I am ${age} years old`;
// console.log(message1);

// const myProfile = ['mike', 25];

// const message3 = `my name is ${myProfile[0]}. I am ${myProfile[1]} years old.`;
// console.log(message3);

// //配列の分割代入は順番に気をつける
// const[name, age] = myProfile;
// const message4 = `my name is ${name}. I am ${age} years old`;
// console.log(message4);

/**
 * デフォルト値、引数
 */

// nameの後ろに初期値を入れることができる。
const sayHello = (name = 'guest') => {
 return console.log(`hello ${name}!`);
}

sayHello('jack');
sayHello();
console.log('-----------------------');
/**
 * スプレット構文
 * 重要！！！
 */
console.log("-----スプレッド構文-----");
//配列の展開
const arr1 = [1, 2, 3, 4];
console.log(arr1);
console.log(...arr1);
console.log('---------------------');

//普通に表示する場合
const sumFunc = (num1, num2) => {
 return console.log(num1 + num2);
}

sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1); //arr1の要素を順番に渡している？

console.log("------テスト------");
const test = [1, 2, 3, 4, 5];
const sprdFunc = (test1, test2) => {
    return console.log(test1 - test2);
}
sprdFunc(test[0], test[3]);
sprdFunc(...test); //スプレッド構文は配列をはじめから順に渡していく構文。

//まとめる
console.log("------まとめる--------");
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2; //分割代入を使っている。 arr3には残りのものを入力。
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のコピー、結合
console.log("----配列のコピー、結合----");
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4]; //配列をコピーして、arr4と同じ値をarr6に入れる
console.log(arr6);

const arr7 = [...arr4, ...arr5]; //配列を結合する。
console.log(arr7);

//コピーではどうなるのか
//参照先がイコールだからおかしい。。
const arr8 = arr4;
arr8[0] = 100;
console.log(arr8);
console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
console.log('----mapやfilter----');

//for文で出力してみる。
const nameArr = ["mick", "jack", "eri"];
for (let i = 0; i < nameArr.length; i++) {
    console.log(`${i}番目は${nameArr[i]}です。`);
}

//mapを使って出力してみる。 新しい配列を生成する。
const nameArr2 = nameArr.map((name)=>{ //mapは中にarrow関数を書いて、引数にその値の中身が順番に入ってくる。
    return name;
})
console.log(`${nameArr2}は`);

//mapを使って出力する。
nameArr.map((name, index) => console.log(`${index}番目は${name}`)); //第一引数には配列の値、第二引数にはindex番号を取得している。

const numFil = [1, 2, 3, 4,5];
// filterはreturnの後に条件式
const newNumFil = numFil.filter((num) => {
    return num % 2 === 1; //2で割った値のあまりが1の時だけ取り出す
})
console.log(newNumFil);

/**
 * 参考演算子
 */

console.log('----三項演算子----');
// 条件 ? tureの時 : falseの時
// 構文↑

/**
 * 論理演算子の意味
 */
console.log('----論理演算子の意味----');
const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
    console.log('1 or 2 is true');
}
if (flag1 && flag2) {
    console.log('1 and 2 are true');
}


// ||は左側がfalseなら右を返す
const num = 100;
const fee = num || 'price have not dicided';
console.log(fee);

// &&は左がfalseなら右側を返す
const num5 = 100;
const fee2 = num5 && 'something has been set';
console.log(fee2);