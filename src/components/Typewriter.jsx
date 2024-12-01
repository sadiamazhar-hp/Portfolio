// Typewriter.jsx
import React, { useEffect, useState } from 'react';

const Typewriter = ({ words, typingSpeed = 100, deletingSpeed = 50, delayBetweenWords = 1000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[currentWordIndex];

      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1)); // Deleting characters
      } else {
        setCurrentText((prev) => fullWord.slice(0, prev.length + 1)); // Adding characters
      }

      // Check if typing/deleting is complete
      if (!isDeleting && currentText === fullWord) {
        setTimeout(() => setIsDeleting(true), delayBetweenWords);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length); // Move to the next word
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(typingTimeout); // Cleanup
  }, [currentText, isDeleting, currentWordIndex, typingSpeed, deletingSpeed, delayBetweenWords, words]);

  return (
    <span>
      {currentText}
      <span className="cursor">|</span> {/* Blinking cursor */}
    </span>
  );
};

export default Typewriter;
