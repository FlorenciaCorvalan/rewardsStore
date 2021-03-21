export const headers = {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDE0YzQ0MDdlNzE4NzAwMjBlMzhlZWUiLCJpYXQiOjE2MTE5NzM2OTZ9.HjdXeC-ct5_9dcz1s1wBSktBWKpaGD8ymQoXMsyoxHU",
    };

const user = 'https://coding-challenge-api.aerolab.co/user/me';
const products = 'https://coding-challenge-api.aerolab.co/products';
const coins = 'https://coding-challenge-api.aerolab.co/user/points';
const redeem = 'https://coding-challenge-api.aerolab.co/redeem';
const history = 'https://coding-challenge-api.aerolab.co/user/history';

export const fetchUser = async () => {
    try {
        const response = await fetch(user, { method: "GET", headers});
        const info = await response.json();
        return info;
    } catch (error) {
        console.log(error);
    }
}

export const postCoins = async (amount) => {
    try{
        const response = await fetch(coins, {
            method: "POST",
            headers,
            body: JSON.stringify({ amount: amount}),
        });
        const info = await response.json();
        return info;
    } catch (error) {
        console.log(error);
    }
}

export const getRedeem = async (productId) => {
    try{
        const response = await fetch(redeem, {
            method: "POST",
            headers,
            body: JSON.stringify({ productId: productId}),
        });
        const info = await response.json();
        return info;
    } catch (error){
        console.log(error);
    }
}