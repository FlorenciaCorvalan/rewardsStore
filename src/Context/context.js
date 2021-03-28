export const headers = {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDE0YzQ0MDdlNzE4NzAwMjBlMzhlZWUiLCJpYXQiOjE2MTE5NzM2OTZ9.HjdXeC-ct5_9dcz1s1wBSktBWKpaGD8ymQoXMsyoxHU",
    };

export const user = 'https://coding-challenge-api.aerolab.co/user/me';
export const productsUrl = 'https://coding-challenge-api.aerolab.co/products';
export const coinsUrl = 'https://coding-challenge-api.aerolab.co/user/points';
export const redeemUrl = 'https://coding-challenge-api.aerolab.co/redeem';
export const historyUrl = 'https://coding-challenge-api.aerolab.co/user/history';

export const fetchUser = async () => {
    try {
        const response = await fetch(user, { method: "GET", headers});
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const postCoins = async (amount) => {
    try{
        const response = await fetch(coinsUrl, {
            method: "POST",
            headers,
            body: JSON.stringify({ amount: amount}),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getRedeem = async (productId) => {
    try{
        const response = await fetch(redeemUrl, {
            method: "POST",
            headers,
            body: JSON.stringify({ productId: productId}),
        });
        const data = await response.json();
        return data;
    } catch (error){
        console.log(error);
    }
}