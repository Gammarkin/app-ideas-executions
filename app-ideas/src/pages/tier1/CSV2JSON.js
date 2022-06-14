import React, {useState} from 'react';
import {Textarea, Button, Center} from '@mantine/core';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../styles/tier1-styles/CSV2JSON.css';

export default function CSV2JSON() {
  const [error, setError] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [convertedResult, setConvertedResult] = useState({});

  const handleVerification = () => {
    if (!textAreaValue || !textAreaValue.includes(',')) {
      setError('insert Valid CSV to be converted');
      return false;
    }
    setError('');
    return true;
  };

  const handleConversion = () => {
    const isValid = handleVerification();

    if (isValid) {
      const convertedInArray = textAreaValue.split(', ');
      let convertedJSON = [];

      convertedInArray.forEach((converted) => {
        convertedJSON = [...convertedJSON, converted];
      });

      setConvertedResult({...convertedJSON});
      setTextAreaValue('');
    }
  };

  const handleCopyJSON = () => {
    const copy = JSON.stringify(convertedResult);
    navigator.clipboard.writeText(copy);

    setConvertedResult({});
  };

  return (
    <div>
      <Header text='CSV converter to JSON' show={true} />
      <Center>
        <Textarea
          onChange={({target: {value}}) => setTextAreaValue(value)}
          placeholder="Lorem, Ipsum, Rocks "
          label="Your CSV with an comma, and a space"
          radius="md"
          size="xl"
          required
          error={error}
          value={textAreaValue}
        />
      </Center>
      <Center>
        <Button
          style={{marginTop: '15px'}}
          onClick={handleConversion}
          color="red"
          radius="md"
        >
          Convert
        </Button>

        <Button
          style={{marginTop: '15px', marginLeft: '10px'}}
          onClick={handleCopyJSON}
          color="cyan"
          radius="md"
        >
          Copy Result
        </Button>
      </Center>
      <Footer />
    </div>
  );
}
