import React, {useState} from 'react';
import {Textarea} from '@mantine/core';

export default function CSV2JSON() {
  const [error, setError] = useState('');
  return (
    <div>
      <Textarea
        placeholder="Your comment"
        label="Your comment"
        radius="md"
        size="xl"
        required
        error={error}
      />
    </div>
  );
}
