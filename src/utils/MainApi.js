import { BASE_URL } from "./constants";

class MainApi {
    constructor({ baseURL, headers }) {
        this._baseURL = baseURL;
        this._headers = headers;
    }

    _handleResponseStatus(response) {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject(`Ошибка: ${response.status}`);
        }
    }

    getAllMovies() {
        return fetch(`${this._baseURL}`, {
            method: 'GET',
            headers: this._headers,
        }).then(this._handleResponseStatus)
    }

}

const mainApi = new MainApi({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default mainApi;