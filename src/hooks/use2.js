import React, { useEffect, useState } from 'react';
import xmlJs from 'xml-js';

const XMLDisplay = () => {
  const [xmlData, setXmlData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/books.xml'); // Replace with the URL or path to your XML data
        if (!response.ok) {
          throw new Error('Error fetching XML data');
        }
        const xmlText = await response.text();
        const jsonData = JSON.parse(xmlJs.xml2json(xmlText, { compact: true, spaces: 4 }));
        setXmlData(jsonData);
      } catch (error) {
        console.error('Error fetching or parsing XML data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {xmlData ? (
        <pre>{JSON.stringify(xmlData, null, 4)}</pre>
      ) : (
        <p>Loading XML data...</p>
      )}
    </div>
  );
};

export default XMLDisplay;
