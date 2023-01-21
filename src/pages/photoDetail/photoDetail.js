import React, {useEffect, useState} from 'react';
import {Link, useParams, useNavigate} from "react-router-dom";
import AlbumService from "../../service/album.service";
import './photoDetail.scss'

const PhotoDetail = () => {

    const {photoId} = useParams()
    const [photo, setPhoto] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        AlbumService.getPhotoById(photoId).then(res => {
            setPhoto(res.data)
        })
    }, [])

    return (
        <div className="photo-detail-page">
            <h1>{photo.title}</h1>
            <img src={photo.url} alt="photo"/>
            <button onClick={() => navigate(-1)}>Back To Photos</button>
        </div>
    );
};

export default PhotoDetail;
