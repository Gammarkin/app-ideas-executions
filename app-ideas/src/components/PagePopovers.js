import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Popover, Text} from '@mantine/core';

export default function PagePopovers() {
  const [showHiddenInfo, setShowHiddenInfo] = useState(false);
  const [showSecondHidden, setShowSecondHidden] = useState(false);
  const [showThirdHidden, setShowThirdHidden] = useState(false);
  const [showforthHidden, setShowforthHidden] = useState(false);

  return (
    <div>
      <Popover
        style={styles.popOver}
        opened={showHiddenInfo}
        onClose={() => setShowHiddenInfo(false)}
        target={
          <Link name="first" style={styles.link} to="/countdown-timer">
            <span
              onMouseLeave={() => setShowHiddenInfo(false)}
              onMouseOver={() => setShowHiddenInfo(true)}
            >
              Countdown Timer: Event Countdown timer
            </span>
          </Link>
        }
        width={260}
        position="bottom"
        withArrow
      >
        <div style={{display: 'flex'}}>
          <Text size="sm">
            We all have important events we look forward to in life, birthdays,
            anniversaries, and holidays to name a few. Wouldn't it be nice to
            have an app that counts down the months, days, hours, minutes, and
            seconds to an event? Countdown Timer is just that app! The objective
            of Countdown Timer is to provide a continuously decrementing display
            of the he months, days, hours, minutes, and seconds to a user
            entered event.
          </Text>
        </div>
      </Popover>
      <Popover
        style={styles.popOver}
        opened={showSecondHidden}
        onClose={() => setShowSecondHidden(false)}
        target={
          <Link style={styles.link} to="/color-cycle">
            <span
              onMouseLeave={() => setShowSecondHidden(false)}
              onMouseOver={() => setShowSecondHidden(true)}
            >
              Color Cycle Cycle a color value through incremental changes
            </span>
          </Link>
        }
        width={260}
        position="bottom"
        withArrow
      >
        <div style={{display: 'flex'}}>
          <Text size="sm">
            ColorCycle seeks to help WebDev's better understand RBG colors by
            making small changes to a colored box over time. This app draws a
            box filled with a user specified color and makes small changes over
            time also based on user input. In other words, from cycles through
            changes to the originally specified color.
          </Text>
        </div>
      </Popover>
      <Popover
        style={styles.popOver}
        opened={showThirdHidden}
        onClose={() => setShowThirdHidden(false)}
        target={
          <Link style={styles.link} to="/cause-effect">
            <span
              onMouseLeave={() => setShowThirdHidden(false)}
              onMouseOver={() => setShowThirdHidden(true)}
            >
              Cause Effect App Click list item to display item details{' '}
            </span>
          </Link>
        }
        width={260}
        position="bottom"
        withArrow
      >
        <div style={{display: 'flex'}}>
          <Text size="sm">
            A common user interface pattern is to summarize data in one section
            of a page that consists of some type of list (like text, images, or
            icons) that describes or categorizes a set of data. When a list item
            is clicked, the detailed data behind it is displayed in an adjacent
            pane on the page.
          </Text>
        </div>
      </Popover>
      <Popover
        style={styles.popOver}
        opened={showforthHidden}
        onClose={() => setShowforthHidden(false)}
        target={
          <Link style={styles.link} to="/xmas-lights">
            <span
              onMouseLeave={() => setShowforthHidden(false)}
              onMouseOver={() => setShowforthHidden(true)}
            >
              Christmas Lights Simulate a string of Christmas lights
            </span>
          </Link>
        }
        width={260}
        position="bottom"
        withArrow
      >
        <div style={{display: 'flex'}}>
          <Text size="sm">
            The ChristmasLights application relies on your development talents
            to create a mesmerizing light display. Your task is to draw seven
            colored circles in a row and based on a timer change the intensity
            of each circle. When a circle is brightened it's predecessor returns
            to its normal intensity.
          </Text>
        </div>
      </Popover>
    </div>
  );
}

const styles = {
  popOver: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '10vh',
    backgroundColor: 'rgba(255,255,255,0.1)',
    margin: '40px',
    borderRadius: '15px',
  },

  link: {
    color: 'white',
    fontWeight: 900,
    fontSize: '20px',
  },
};
