type Review = {
    rating: number,
    comment: string,
    reviewer: string,
};

const review1: Review = {
    rating: 5,
    comment: '最高の商品でした！',
    reviewer: '侍太郎',
};

const review2: Review = {
    rating: 3,
    comment: '普通の商品でした。',
    reviewer: '侍花子',
}

console.log(review1);
console.log(review2);