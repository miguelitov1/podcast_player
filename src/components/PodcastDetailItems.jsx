

export const PodcastDetailItems = ({ podcast, index }) => {

    return (
        <tr key={podcast.id} className='max-h-16'> {/* Renderiza una fila de la tabla por cada podcast */}
            <td>
              { index }
            </td>

            
            <td>   
                  <div className="flex flex-row">

                      <div className="flex justify-center items-center">
                          <img src={podcast.image} alt={podcast.title} className="w-10 h-10 rounded" />
                      </div>

                      <div className="ml-4">
                          <p className="font-medium">{podcast.title}</p>
                      </div>   

                  </div>
            </td>

            <td className="mx-2 text-sm">
              {podcast.description}
            </td>

            <td className='text-sm'>
                  {new Date(podcast.releaseDate).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
            </td> 

      </tr>
    );
  };
  
