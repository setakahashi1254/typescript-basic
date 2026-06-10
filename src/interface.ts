interface Shop {
    readonly id: number;
    name: string;
    address?: string;
}

const shopA: Shop = {
    id: 1,
    name: 'SAMURAI 東京本店',
    address: '東京都',
};

const shopB: Shop = {
    id: 2,
    name: 'SAMURAI 大阪支店',
    address: '大阪府',
}

const shopC: Shop = {
    id: 3,
    name: 'SAMURAI オンライン店',
};

console.log(shopA);
console.log(shopB);
console.log(shopC)