// オブジェクトの型にUserという別名をつける
type User = {
    id: number | string;
    name: string;
};

// 型注釈でUser型を指定する
const firstUser: User = {
    id: 1,
    name: '侍太郎',
};

const secondUser: User = {
    id: '2',
    name: '侍花子',
};

console.log(firstUser);
console.log(secondUser);