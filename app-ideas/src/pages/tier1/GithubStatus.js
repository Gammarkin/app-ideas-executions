import React, {useEffect, useState} from 'react';

export default function GithubStatus() {
  const [scrapeResult, setScrapeResult] = useState({});

  useEffect(() => {
    const handleScrape = async () => {
      const SCRAPE_URL =
        'https://pokedex.org/';
      const response = await fetch(SCRAPE_URL);

      console.log(response);
    };

    handleScrape();
  }, []);

  return <div>GithubStatus</div>;
}
