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
        opened={showforthHidden}
        onClose={() => setShowforthHidden(false)}
        target={
          <Link style={styles.link} to="/dolar-to-cents">
            <span
              onMouseLeave={() => setShowforthHidden(false)}
              onMouseOver={() => setShowforthHidden(true)}
            >
              Dollars To Cents: Convert dollars to cents
            </span>
          </Link>
        }
        width={260}
        position="bottom"
        withArrow
      >
        <div style={{display: 'flex'}}>
          <Text size="sm">
            convert into coins with the sub-type of dollars: penny, nickel, dime
            and quarter. Use an algorithm that would divide the dollar value to
            the four coin types, and output few coins as possible.
          </Text>
        </div>
      </Popover>
      <Popover
        style={styles.popOver}
        opened={showHiddenInfo}
        onClose={() => setShowHiddenInfo(false)}
        target={
          <Link name="first" style={styles.link} to="/CSV2JSON">
            <span
              onMouseLeave={() => setShowHiddenInfo(false)}
              onMouseOver={() => setShowHiddenInfo(true)}
            >
              CSV2JSON: CSV to JSON converter
            </span>
          </Link>
        }
        width={260}
        position="bottom"
        withArrow
      >
        <div style={{display: 'flex'}}>
          <Text size="sm">
            In the JSON2CSV application you translated JSON to a comma separated
            value (CSV) format. The objective of CSV2JSON is to reverse that
            process by converting a block of CSV text to JSON.
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
              Color Cycle: Cycle a color value through incremental changes
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
              Cause Effect: App Click list item to display item details{' '}
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
