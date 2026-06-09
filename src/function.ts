type CalculateTotal = (price: number, shippingFee?: number) => number;

const calculateTotal: CalculateTotal = (price, shippingFee?) => {
    if (typeof shippingFee === 'undefined') {
        return price;
    }
    return price + shippingFee;
};

console.log(calculateTotal(1000));
console.log(calculateTotal(1000, 200));
// console.log(calculateTotal('3000'));