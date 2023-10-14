import { Link } from 'react-router-dom';
import genericImage from '../../public/podcast-logo.jpeg';

export const PodcastItem = ({ podcast, index }) => {

    const feedUrl = podcast.feedUrl;
    const artworkUr = podcast.artworkUrl600;
    const collectionName = podcast.collectionName;
    const imageUrl = podcast.artworkUrl100 || genericImage; // Si no hay imagen, usa la genérica

    return (
        <tr key={podcast.collectionId} className='max-h-16 border-b border-gray-300'> {/* Renderiza una fila de la tabla por cada podcast */}
            <td>
                <Link to={`/podcast/${podcast.collectionId}`} state={{ feedUrl, artworkUr, collectionName, }}>
                { index }
                </Link>
            </td>

            
            <td>
                <Link to={`/podcast/${podcast.collectionId}`} state={{ feedUrl, artworkUr, collectionName, }}>
                    <div className="flex flex-row">

                        <div className="flex justify-center items-center">
                            <img src={ imageUrl } alt={podcast.collectionName} className="w-10 h-10 rounded" />
                        </div>

                        <div className="ml-4">
                            <p className="font-medium line-clamp-1">{podcast.collectionName}</p>
                            <p className="text-gray-500 line-clamp-1">{podcast.artistName}</p>
                        </div>   

                    </div>
                </Link>
            </td>

            <td className="mx-2 text-sm">
                <Link to={`/podcast/${podcast.collectionId}`} state={{ feedUrl, artworkUr, collectionName, }}>
                    <div className="text-gray-500 h-10 mx-auto line-clamp-2">
                        descripcion, descripcion, descripcion, descripcion, descripcion,
                        description, description, description, descripcion, descripcion,
                        description, description, description, descripcion, descripcion
                    </div>
                </Link>
            </td>

            <td className='text-gray-500 text-sm'>
            <Link to={`/podcast/${podcast.collectionId}`} state={{ feedUrl, artworkUr, collectionName, }}>
                {new Date(podcast.releaseDate).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
            </Link>
            </td> 

      </tr>
    );
  };
  
