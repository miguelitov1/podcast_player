

export const podcastsDataSetter = (data) => {

    const podcasts = data.rss.channel.item.map( episode => {
        return {
            image: episode['itunes:image']._attributes.href,
            title: episode.title._cdata,
            description: episode['itunes:summary']._text.replace(/<\/?[^>]+(>|$)/g, ''),
            releaseDate: episode.pubDate._text,
            audioUrl: episode.enclosure._attributes.url,
            id: episode.guid._text,
        }
    });

    return podcasts;
}