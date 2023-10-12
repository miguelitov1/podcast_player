

export const PodcastItem = ( { podcast } ) => {

    return (
        <div key={ podcast.collectionId }>
            <p>{ podcast.collectionName }</p>
            <img src={ podcast.artworkUrl100 } alt={ podcast.collectionName }/>
        </div>
    )
  }