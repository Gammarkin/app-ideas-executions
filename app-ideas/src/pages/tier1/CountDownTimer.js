import React, {Component} from 'react';
import {Popover, Text, Button} from '@mantine/core';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default class CountDownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHiddenInfo: false,
    };
  }
  render() {
    const {showHiddenInfo} = this.state;

    return (
      <div>
        <Header text="Countdown Timer Event" show={true} />
        <div>
          <Popover
            opened={showHiddenInfo}
            onClose={() => this.setState({showHiddenInfo: false})}
            target={
              <Button onClick={() => this.setState({showHiddenInfo: true})}>
                Details
              </Button>
            }
            width={260}
            position="bottom"
            withArrow
          >
            <div style={{display: 'flex'}}>
              <Text size="sm">
                Thanks for stopping by and checking Mantine, you are awesome!
              </Text>
            </div>
          </Popover>
        </div>
        <Footer />
      </div>
    );
  }
}
