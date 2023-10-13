import { useFetch } from '../hooks/useFetch';
import { PodcastItem } from './PodcastItem';

export const PodcastGrid = ({ search }) => {

    const { data, isLoading, error } = useFetch( `https://itunes.apple.com/search?term=${ search }&media=podcast` );
    console.log(data);
    
    return (
        <>

          {isLoading && <p>Loading...</p>}
          {error && <p>{error}</p>}
      
          {data && (
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
                {data.results.map((podcast, index) => (
                  <PodcastItem key={ podcast.trackId } podcast={ podcast } index={ index + 1 }/>
                ))}
              </tbody>
            </table>
          )}

          {/* <BasicTable data={ data }/> */}
      </>
    )
  }