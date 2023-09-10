import { BASE_URL } from "./constants";

const handleResponseStatus = (response) => {
    if (response.ok) {
        return response.json();
    } else {
        return Promise.reject(`Error: ${response.status}`);
    }
}

export const register = (name, email, password) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password }),
    }).then(handleResponseStatus);
};

export const authorise = (email, password) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password }),
    }).then(handleResponseStatus);
};

export const checkToken = (jwt) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
        },
    }).then(handleResponseStatus);
};