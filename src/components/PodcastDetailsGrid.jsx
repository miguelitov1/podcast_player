import { useFetchXML } from '../hooks/useFetchXML';
import { PodcastDetailItems } from './PodcastDetailItems';
import { podcastsDataSetter } from '../helpers/podcastsDataSetter';

export const PodcastDetails = () => {

    const { data, isLoading, error } = useFetchXML( `https://anchor.fm/s/157ee310/podcast/rss` );

    let podcasts = [];

    if (data && data.rss && data.rss.channel && data.rss.channel.item) podcasts = podcastsDataSetter( data );

    console.log(podcasts)
    
  return (
    <>

    {isLoading && <p>Loading...</p>}
    {error && <p>{error}</p>}

      {data &&
        <>
          {/* <div style={{
            width: '66.666667%',
            height: '33.333333%',
            backgroundImage: `url(${data.rss.channel.image.url._text})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }} /> */}

          <div className="mx-auto w-2/3 h-1/3 flex items-center justify-center overflow-hidden">
            {/* <img
              src={}
              alt="podcast image"
            /> */}
          </div>

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
                  <PodcastDetailItems key={ podcast.id } podcast={ podcast } index={ index + 1 }/>
                ))}
              </tbody>
            </table>
        </>
      }


    
    </>

  )
}
