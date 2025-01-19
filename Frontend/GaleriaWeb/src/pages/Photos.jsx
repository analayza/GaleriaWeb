import Menu from '../components/Menu.jsx';
import servicePhotos from '../service/Photos.js';
import { useEffect, useState } from 'react';
import { GlobalStyles } from '../style/GlobalStyle.js';
import { PhotosGrid, ImageGrid, PhotoItem, ButtonDelete } from '../style/Photos.js';
import servicePhotosDelete from '../service/PhotosDelete.js';
import { FaTrash } from 'react-icons/fa';


export default function Photos() {
    
    const [photos, setPhotos] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    useEffect(() => {
        async function fetchPhotos() {
            try {
                setLoading(true);
                await delay(3000);
                const data = await servicePhotos();
                setPhotos(data.photos);
            } catch (err) {
                setError(err.message);
            }finally{
                setLoading(false);
            }
        }

        fetchPhotos();
    }, []);

    const handleDelete = async (photoId) => {
        try {
            await servicePhotosDelete(photoId);
            setPhotos(prevPhotos => prevPhotos.filter(photo => photo.id !== photoId));
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <GlobalStyles/>
            <Menu />
            <div>
                {loading? <p style={{marginLeft: '250px', color: 'black'}}>Carregando...</p> : null}
                {error && <p style={{ color: 'black', marginLeft: '250px' }}>{error}</p>}
                <PhotosGrid>
                    {photos.map((photo) => (
                        <PhotoItem key={photo.id}>
                            <ImageGrid
                                src={photo.url}
                                alt={photo.description || "Foto"}
                            />
                            <ButtonDelete onClick={() => handleDelete(photo.id)}>
                                <FaTrash size={20} color='black' />
                            </ButtonDelete>
                        </PhotoItem>
                    ))}
                </PhotosGrid>
            </div>
        </>
    )
}