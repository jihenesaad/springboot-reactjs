import React, { useState, useEffect } from 'react';

const AlltempbackComponent = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fetchHTMLContent = async () => {
      try {
        const response = await fetch('/backend/allback.html'); // URL de votre fichier HTML
        if (!response.ok) {
          throw new Error('Failed to load HTML content');
        }
        const html = await response.text();
        setHtmlContent(html);
      } catch (error) {
        console.error('Error fetching HTML content:', error);
        // Gérez les erreurs de chargement ici
      }
    };

    fetchHTMLContent();
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
};

export default AlltempbackComponent;