import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {AppShell, Navbar, Header} from '@mantine/core';
import NewPages from '../../components/NewPages';
import '../../styles/main-styles/Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <AppShell
          padding="md"
          navbar={
            <Navbar
              style={{backgroundColor: '#111'}}
              width={{base: 280}}
              height={610}
              p="xs"
            >
              <Link to="/tier1">
                <div className="homeTierOne">
                  <span> Tier One </span>
                  <span> Begginer </span>
                </div>
              </Link>
              <Link to="/tier2">
                <div className="homeTierTwo">
                  <span>Tier Two Intermediate</span>
                </div>
              </Link>
              <Link to="/tier3">
                <div className="homeTierThree">
                  <span>Tier Three Advanced</span>
                </div>
              </Link>
            </Navbar>
          }
          header={
            <Header
              style={{
                backgroundColor: '#111',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              height={60}
              p="xs"
            >
              <h1 style={{color: 'white', fontSize: '40px', fontWeight: 700}}>
                App Executions
              </h1>
              <div>
                <a
                  href="https://github.com/Gammarkin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    style={{
                      backgroundColor: 'white',
                      width: '30px',
                      borderRadius: '15px',
                    }}
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="github-link"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/mknmarcosfilho/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    style={{
                      backgroundColor: 'white',
                      width: '30px',
                      borderRadius: '15px',
                      marginLeft: '10px',
                    }}
                    src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
                    alt="linkedin-link"
                  />
                </a>
              </div>
            </Header>
          }
        >
          <NewPages />
        </AppShell>
      </div>
    );
  }
}
