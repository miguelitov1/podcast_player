import { useLocation } from 'react-router-dom';
import { useFetchXML } from '../hooks/useFetchXML';
import { PodcastDetailItems } from './PodcastDetailItems';
import { podcastsDataSetter } from '../helpers/podcastsDataSetter';

export const PodcastDetailsGrid = () => {

  const feedUrl = useLocation().state.feedUrl; //recoge la informacion del podcast seleccionado
  const { data, isLoading, error } = useFetchXML( feedUrl ); //recoge la informacion del canal de podcast seleccionado

  let podcasts = [];

  if (data && data.rss && data.rss.channel && data.rss.channel.item) podcasts = podcastsDataSetter( data ); //setea la informacion de los podcasts en un array de objetos

  console.log(podcasts)
    
  return (
    <>

    {isLoading && <p>Loading...</p>}
    {error && <p>{error}</p>}

      {data &&
        <>

          {/* <div
            className="mx-auto mt-20 mb-20 bg-black h-100 w-100 bg-no-repeat bg-center rounded-full bg-cover"
            style={{
              backgroundImage: `url(
                https://cdn.zendalibros.com/wp-content/uploads/podcast.jpg
              )`,
            }}
            alt="podcast"
          ></div> */}

          <h1 className="flex items-center- justify-center mx-auto w-2/3">How to start a podcast</h1>

          <table className="mx-auto w-2/3">
              <thead>
                <tr className='h-16'>
                  <th className="text-lg w-16">#</th>
                  <th className="text-lg w-1/3">Name</th>
                  <th className="text-lg w-1/3">Description</th>
                  <th className="text-lg w-1/3">Released</th>
                </tr>
              </thead>
              <tbody>
                {podcasts.map((podcast, index) => (
                  <PodcastDetailItems key={ podcast.id } podcast={ podcast } index={ index + 1 }/> //renderiza una fila de la tabla por cada podcast
                ))}
              </tbody>
            </table>
        </>
      }


    
    </>

  )
}
