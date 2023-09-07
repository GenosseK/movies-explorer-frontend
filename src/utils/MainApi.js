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

    saveMovie(movieData) {
        return fetch(`${this._baseURL}/movies`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(movieData),
        }).then(this._handleResponseStatus)
    }

    deleteMovie(movieId) {
        return fetch(`${this._baseURL}/movies/${movieId}`, {
            method: 'DELETE',
            headers: this._headers,
        }).then(this._handleResponseStatus)
    }

    getSavedMovies() {
        return fetch(`${this._baseURL}/movies`, {
            method: 'GET',
            headers: this._headers,
        }).then(this._handleResponseStatus)
    }

}

const mainApi = new MainApi({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGY4NzRhYzM4MGFiMjk0NDc3MTExY2IiLCJpYXQiOjE2OTQwMDQ0MDcsImV4cCI6MTY5NDYwOTIwN30.kcU4wV8z3GhrpUJj49oE0iVH4IC2s9qp2woRk0wOOmI',
    }
});

export default mainApi;