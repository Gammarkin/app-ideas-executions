import React, {useEffect, useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import axios from 'axios';

const CORRECT_IMAGE =
  'https://www.rafaelglavam.com.br/wp-content/uploads/2020/03/correct-icon-png-8.png';
const ERROR_IMAGE =
  'https://www.maxpixel.net/static/photo/1x/Abort-Remove-Red-Cross-Error-Cancel-Delete-156119.png';

export default function GithubStatus() {
  const [scrapeResult, setScrapeResult] = useState(200);

  useEffect(() => {
    const handleScrape = async () => {
      const SCRAPE_URL = 'https://www.githubstatus.com/';
      const {status} = await axios.get(SCRAPE_URL, {json: true});

      setScrapeResult(status);
    };

    handleScrape();
  }, []);

  return (
    <div>
      <Header text="GitHub Status" show={true} />
      <div style={style.status__box}>
        <section style={style.status__section}>
          <div style={style.status__box}>
            <p>Git Operations</p>
            <img
              style={{margin: '10px'}}
              width={20}
              src={scrapeResult === 200 ? CORRECT_IMAGE : ERROR_IMAGE}
              alt="status"
            />
          </div>
          <div style={style.status__box}>
            <p>Webhooks</p>
            <img
              style={{margin: '10px'}}
              width={20}
              src={scrapeResult === 200 ? CORRECT_IMAGE : ERROR_IMAGE}
              alt="status"
            />
          </div>
          <div style={style.status__box}>
            <p>Pull Requests</p>
            <img
              style={{margin: '10px'}}
              width={20}
              src={scrapeResult === 200 ? CORRECT_IMAGE : ERROR_IMAGE}
              alt="status"
            />
          </div>
          <div style={style.status__box}>
            <p>GitHub Pages</p>
            <img
              style={{margin: '10px'}}
              width={20}
              src={scrapeResult === 200 ? CORRECT_IMAGE : ERROR_IMAGE}
              alt="status"
            />
          </div>
          <div style={style.status__box}>
            <p>GitHub Actions</p>
            <img
              style={{margin: '10px'}}
              width={20}
              src={scrapeResult === 200 ? CORRECT_IMAGE : ERROR_IMAGE}
              alt="status"
            />
          </div>
        </section>

        <section style={style.status__section}>
          <div style={style.status__box}>
            <p>GitHub Packages</p>
            <img
              style={{margin: '10px'}}
              width={20}
              src={scrapeResult === 200 ? CORRECT_IMAGE : ERROR_IMAGE}
              alt="status"
            />
          </div>
          <div style={style.status__box}>
            <p>Codespaces</p>
            <img
              style={{margin: '10px'}}
              width={20}
              src={scrapeResult === 200 ? CORRECT_IMAGE : ERROR_IMAGE}
              alt="status"
            />
          </div>
          <div style={style.status__box}>
            <p>API Requests</p>
            <img
              style={{margin: '10px'}}
              width={20}
              src={scrapeResult === 200 ? CORRECT_IMAGE : ERROR_IMAGE}
              alt="status"
            />
          </div>
          <div style={style.status__box}>
            <p>Issues</p>
            <img
              style={{margin: '10px'}}
              width={20}
              src={scrapeResult === 200 ? CORRECT_IMAGE : ERROR_IMAGE}
              alt="status"
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

const style = {
  status__box: {
    color: 'white',
    fontSize: '30px',
    display: 'flex',
  },

  status__section: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    heigth: '50%',
    margin: 0,
    padding: 0,
    backgroundColor: '#111',
  },
};
