"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculateTotal = (price, shippingFee) => {
    if (typeof shippingFee === 'undefined') {
        return price;
    }
    return price + shippingFee;
};
console.log(calculateTotal(1000));
console.log(calculateTotal(1000, 200));
// console.log(calculateTotal('3000'));
//# sourceMappingURL=function.js.map