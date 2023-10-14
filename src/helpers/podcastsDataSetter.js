

export const podcastsDataSetter = (data) => {

    const podcasts = data.rss.channel.item.map( episode => {

        const descriptionWithoutHTML = episode['itunes:summary']._text.replace(/<\/?[^>]+(>|$)/g, '');
        const cleanDescription = descriptionWithoutHTML.replace(/\&nbsp;/g, '');

        return {
            image: episode['itunes:image']._attributes.href,
            title: episode.title._cdata,
            description: cleanDescription,
            releaseDate: episode.pubDate._text,
            audioUrl: episode.enclosure._attributes.url,
            id: episode.guid._text,
        }
    });

    return podcasts;
}