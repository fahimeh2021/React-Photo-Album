import axios from 'axios';

export default class AlbumService {
    static getAlbums() {
        return axios.get("https://jsonplaceholder.typicode.com/albums")
    }

    static getAlbumById(albumId) {
        return axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
    }

    static getPhotoById(photoId) {
        return axios.get(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
    }

    static getAlbumPhotos(albumId) {
        return axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)

    }
}
