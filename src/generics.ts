const echo = <T>(value: T): T => {
    return value;
};

console.log(echo<string>('こんにちは'));
console.log(echo<number>(123));
console.log(echo<boolean>(true));