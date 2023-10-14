import { createContext, useState } from 'react';

const AudioOrderContext = createContext();

const AudioOrderProvider = ({ children }) => {
  const [audioOrder, setAudioOrder] = useState([{
    title: "",
    url: "",
    tags: "",
  }]);

  return (
    <AudioOrderContext.Provider value={[ audioOrder, setAudioOrder ]}>
      {children}
    </AudioOrderContext.Provider>
  );
};

export { AudioOrderContext, AudioOrderProvider };