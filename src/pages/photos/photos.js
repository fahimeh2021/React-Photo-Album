import React, {useEffect, useState} from 'react';
import AlbumService from "../../service/album.service";
import {Link, useParams} from "react-router-dom";
import reactHtmlReplace from 'react-html-replace';
import './photos.scss'

const Photos = () => {

    const {albumId} = useParams();
    const [photos, setPhotos] = useState([]);
    const [albumDetail, setAlbumDetail] = useState({});
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        AlbumService.getAlbumPhotos(albumId).then(res => {
            setPhotos(res.data)
        })
    }, [])

    useEffect(() => {
        AlbumService.getAlbumById(albumId).then(res => {
            setAlbumDetail(res.data)
        })
    }, [])

    const regexSearch = new RegExp(`\\S*${searchValue}\\S*`)

    return (
        <div className="overflow">
            <div className="photos-page">
                <h1 data-testid="header" >album{albumDetail.title}</h1>
                
                <input 
                        type="text"
                        data-testid="searchBar"
                        placeholder="search photos" 
                        value={searchValue}
                        onChange={(e) => {
                        setSearchValue(e.target.value);
                        }}
                />

                <ul>
                    {photos.filter(item => item.title.includes(searchValue)).map(item =>
                        <li>
                            <Link to={`/photos/${item.id}`}>
                                <img src={item.thumbnailUrl}/><h4>
                                {searchValue ?
                                    reactHtmlReplace(
                                        item.title.replace(regexSearch, `<italic>$&</italic>`),
                                        (tag, props) => {
                                            if (tag === 'italic') {
                                                return <i style={{color: "red"}}/>;
                                            }
                                        }
                                    ) : item.title}
                                {/*{item.title.replace(searchValue,`<span>${searchValue}</span>`)}*/}
                            </h4>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Photos;
