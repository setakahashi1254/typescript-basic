const user: { readonly name: string; age?: number; email: string } = {
    name: '侍太郎',
    email: 'taro.samurai@example.com',
};

// user.name = '侍花子';
user.age = 30;
console.log(user);