import React, {useEffect, useState} from 'react';
import AlbumService from "../../service/album.service";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import './albums.scss'

const Albums = () => {

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        AlbumService.getAlbums().then(res => {
            setAlbums(res.data);
        }).catch(err => toast.error(err.message))
    }, [])

    return (
        <div className="overflow">
            <div className="albums">
                <h1>Albums</h1>
                <ul data-testid="album-container">
                    {albums.map((item,index) => <Link key={index} to={`/albums/${item.id}`}><li  data-testid={`single-item-${index}`}>{item.title}</li></Link>)}
                </ul>
            </div>
        </div>
    );
};

export default Albums;
