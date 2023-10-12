import { useFetch } from '../hooks/useFetch';
import { PodcastItem } from './PodcastItem';

export const PodcastGrid = ({ search }) => {

    const { data, isLoading, error } = useFetch( `https://itunes.apple.com/search?term=${ search }&entity=podcast` );
    console.log(data);
    
    return (
      <>
  
            <h2>Resultados</h2>
      
                { isLoading && <p>Loading...</p> }
                { error && <p>{ error }</p> }

                { data && data.results.map( podcast => ( <PodcastItem podcast={ podcast }/> ) ) }

      </>
    )
  }