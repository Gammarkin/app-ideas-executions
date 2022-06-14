import React, {useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {TextInput, Button, NativeSelect, Center, Text} from '@mantine/core';

export default function DolarToCents() {
  const [numberValue, setNumberValue] = useState(''); // need to transform to number
  const [selectValue, setSelectValue] = useState('Cents');
  const [convertedResult, setConvertedResult] = useState('');
  const [finalMessage, setFinalMessage] = useState('');

  const options = ['Cents', 'Pennies', 'Nickels', 'Quarters', 'Dimes'];

  const handleConvertValue = () => {
    const valueInDolars = Number(numberValue);
    let finalValue = numberValue;

    switch (selectValue) {
      case 'Cents':
        setConvertedResult(valueInDolars * 100);
        finalValue = valueInDolars * 100;
        break;

      case 'Pennies':
        setConvertedResult(valueInDolars * 100);
        finalValue = valueInDolars * 100;

        break;

      case 'Nickels':
        setConvertedResult(valueInDolars * 20);
        finalValue = valueInDolars * 20;

        break;

      case 'Quarters':
        setConvertedResult(valueInDolars * 4);
        finalValue = valueInDolars * 4;

        break;
      case 'Dimes':
        setConvertedResult(valueInDolars * 10);
        finalValue = valueInDolars * 10;

        break;

      default:
        setConvertedResult(valueInDolars);
        break;
    }

    setFinalMessage(
      `${numberValue} dolars in ${selectValue} is ${finalValue} ${selectValue}`
    );
  };

  return (
    <div>
      <Header text="Dolar to cents" show={true} />
      <div>
        <form style={{marginTop: '80px'}}>
          <Center style={{display: 'flex', flexDirection: 'column'}}>
            <TextInput
              style={{width: '200px', marginTop: '20px'}}
              placeholder="10,00"
              label="The price in dollars"
              radius="md"
              size="md"
              required
              onChange={({target: {value}}) => setNumberValue(value)}
            />

            <NativeSelect
              style={{width: '200px', marginTop: '20px'}}
              data={options}
              label="Pick what you want to convert"
              placeholder="Cents"
              radius="md"
              size="md"
              onChange={({target: {value}}) => setSelectValue(value)}
            />

            <Button
              style={{marginTop: '20px'}}
              onClick={handleConvertValue}
              variant="light"
              radius="md"
              size="md"
            >
              Convert
            </Button>
          </Center>
        </form>

        <Center>
          {convertedResult && (
            <Text style={{color: 'white', marginTop: '10px'}}>
              {finalMessage}
            </Text>
          )}
        </Center>
      </div>
      <Footer />
    </div>
  );
}
