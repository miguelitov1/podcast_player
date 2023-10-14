//Componente para mostrar detalles de un podcast en una fila de una tabla.
import genericImage from '../public/podcast-logo.jpeg';

export const PodcastDetailItems = ({ podcast, index }) => {
  
    const imageUrl = podcast.image || genericImage; // Si no hay imagen, usa la genérica
    
    return (
        <tr key={podcast.id} className='max-h-16'> {/* Renderiza una fila de la tabla por cada podcast */}
            <td>
              { index }
            </td>

            
            <td>   
                  <div className="flex flex-row">

                      <div className="flex justify-center items-center">
                          <img src={imageUrl} alt={podcast.title} className="w-10 h-10 rounded" />
                      </div>

                      <div className="ml-4">
                          <p className="font-medium">{podcast.title}</p>
                      </div>   

                  </div>
            </td>

            <td className="text-gray-500 mx-2 text-sm">
              <div className=" h-10 mx-auto line-clamp-2">
                {podcast.description}
              </div>
            </td>

            <td className='text-gray-500 text-sm'>
                  {new Date(podcast.releaseDate).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
            </td> 

      </tr>
    );
  };
  
