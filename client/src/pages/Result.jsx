import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';

const Result = () => {
  const [image, setImage] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');
  const { generateImage } = useContext(AppContext);

  // Disable scrolling on mount
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!input) return;
    setImage(null);
    setIsImageLoaded(false);
    setLoading(true);
    const generatedImage = await generateImage(input);
    if (generatedImage) {
      setImage(generatedImage);
      setIsImageLoaded(true);
    }
    setLoading(false);
  };

  return (
    // pb-72 creates enough space at the bottom for the fixed elements
    <form onSubmit={onSubmitHandler} className="flex flex-col min-h-screen pb-72">
      {/* Header and Image Container */}
      <div className="flex-1 flex flex-col items-center justify-center pt-1 px-1 text-center mx-auto">
        {/* Header / Prompt Placeholder */}
        <div className="text-center text-gray-700 text-lg mb-45 sm:mb-33 relative -top-6">

          {!image && !loading && <p>Enter a prompt to generate an image...</p>}
          {loading && (
            <>
              <p>Generating image, please wait...</p>
              <motion.div
                className="h-1 bg-blue-500 mt-6 text-center text-gray-700 text-lg mb-45 relative -top-6"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop"
                }}
              />
            </>
          )}
        </div>

        {/* Image Display Section */}
        <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-lg text-center text-gray-700 text-lg mb-40 relative -top-80">
          {image && (
            <motion.img    
              key={image}      
              src={image}
              alt="Generated result"
              className="w-full h-full object-cover"
              style={{ maxHeight: 'calc(100vh - 300px)' }}
              onLoad={() => setIsImageLoaded(true)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            />
          )}
        </div>
      </div>

      {/* Fixed Buttons Container (positioned above the search bar) */}
      {isImageLoaded && (
        <motion.div
          className="fixed bottom-28 left-1/2 transform -translate-x-1/2 w-full max-w-2xl flex gap-4 justify-center z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            type="button"
            onClick={() => {
              setImage(null);
              setIsImageLoaded(false);
              setInput('');
            }}
            className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full font-medium transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
          >
            Generate Another
          </motion.button>
          <motion.a
            href={image}
            download
            className="bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
          >
            Download Image
          </motion.a>
        </motion.div>
      )}

      {/* Fixed Search Bar */}
      <motion.div
        className="fixed bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-2xl bg-white border border-gray-300 shadow-lg rounded-full flex items-center px-4 py-2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="flex-1 bg-transparent outline-none text-lg placeholder-gray-400 px-3 py-2"
          type="text"
          placeholder="Describe the image you want to generate..."
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-all duration-300"
        >
          ➤
        </button>
      </motion.div>
    </form>
  );
};

export default Result;
