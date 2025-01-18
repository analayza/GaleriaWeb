import Menu from '../components/Menu.jsx';
import servicePhotos from '../service/Photos.js';
import { useEffect, useState } from 'react';
import { GlobalStyles } from '../style/Entry.js';
import {PhotosGrid, ImageGrid, PhotoItem} from '../style/Photos.js';

export default function Photos() {

    const [photos, setPhotos] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchPhotos() {
            try {
                const data = await servicePhotos();
                setPhotos(data.photos);
            } catch (err) {
                setError(err.message);
            }
        }

        fetchPhotos();
    }, []);

    return (
        <>
            <GlobalStyles/>
            <Menu/>
            <div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {photos.length > 0 ? (
                    <PhotosGrid>
                        {photos.map((photo) => (
                            <PhotoItem key={photo.id}>
                                <ImageGrid
                                    src={photo.url} 
                                    alt={photo.description || "Foto"}
                                />
                                <p>{photo.description}</p>
                            </PhotoItem>
                        ))}
                    </PhotosGrid>
                ) : (
                    <p>Você ainda não possui fotos. Faça algum upload.</p>
                )}
            </div>
            <a href="/photos/upload">Clique aqui para uploads de fotos</a>
        </>
    )
}