

export const podcastsDataSetter = (data) => {
    const podcasts = (data.rss && data.rss.channel && data.rss.channel.item) || [];
  
    return podcasts.map((episode) => {
      const descriptionWithoutHTML = (episode['itunes:summary'] && (episode['itunes:summary']._text || episode['itunes:summary']._cdata)) ? (episode['itunes:summary']._text || episode['itunes:summary']._cdata).replace(/<\/?[^>]+(>|$)/g, '') : '';
      const cleanDescription = descriptionWithoutHTML.replace(/\&nbsp;/g, '');
  
      return {
        image: (episode['itunes:image'] && episode['itunes:image']._attributes && episode['itunes:image']._attributes.href) || '',
        title: (episode.title && (episode.title._cdata || episode.title._text)) || '',
        description: cleanDescription.substring(0, 100),
        releaseDate: (episode.pubDate && (episode.pubDate._text || episode.pubDate._cdata)) || '',
        audioUrl: (episode.enclosure && episode.enclosure._attributes && episode.enclosure._attributes.url) || '',
        id: (episode.guid && (episode.guid._text || episode.guid._cdata)) || '',
      };
    });
  };
  