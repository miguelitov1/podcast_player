import { Link } from 'react-router-dom';

export const PodcastItem = ({ podcast, index }) => {

    return (
        <tr key={podcast.collectionId} className='max-h-16'> {/* Renderiza una fila de la tabla por cada podcast */}
            <td>
                <Link to={`/podcast/${podcast.collectionId}`}> {/* Redirige a la pantalla de la colecion del podcast seleccionado */}
                    { index }
                </Link>
            </td>

            
            <td>
                <Link to={`/podcast/${podcast.collectionId}`}>
                    <div className="flex flex-row">

                        <div className="flex justify-center items-center">
                            <img src={podcast.artworkUrl100} alt={podcast.collectionName} className="w-10 h-10 rounded" />
                        </div>

                        <div className="ml-4">
                            <p className="font-medium">{podcast.collectionName}</p>
                            <p className="text-gray-500">{podcast.artistName}</p>
                        </div>   

                    </div>
                </Link>
            </td>

            <td className="mx-2 text-sm">
                <Link to={`/podcast/${podcast.collectionId}`}>
                    <p>
                        descripcion, descripcion, descripcion, descripcion, descripcion,
                        {/* description, description, description, descripcion, descripcion, */}
                        {/* description, description, description, descripcion, descripcion */}
                    </p>
                </Link>
            </td>

            <td className='text-sm'>
                <Link to={`/podcast/${podcast.collectionId}`}>
                    {new Date(podcast.releaseDate).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                </Link>
            </td> 

      </tr>
    );
  };
  
