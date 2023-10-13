import { formatDistanceToNow } from 'date-fns';

export const PodcastItem = ({ podcast, index }) => {

    return (
      <tr key={podcast.collectionId} className='max-h-16'>

        <td>{ index }</td>
        
        <td>
            <div className="flex flex-row">

                <div className="flex justify-center items-center">
                    <img src={podcast.artworkUrl100} alt={podcast.collectionName} className="w-10 h-10 rounded" />
                </div>

                <div className="ml-4">
                    <p className="font-medium">{podcast.collectionName}</p>
                    <p className="text-gray-500">{podcast.artistName}</p>
                </div>   

            </div>
        </td>

        <td className="mx-2 text-sm">
            <p>
                descripcion, descripcion, descripcion, descripcion, descripcion,
                {/* description, description, description, descripcion, descripcion, */}
                {/* description, description, description, descripcion, descripcion */}
            </p>
        </td>

        <td className='text-sm'>{new Date(podcast.releaseDate).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</td>

      </tr>
    );
  };
  