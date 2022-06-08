import { Button, useNotification } from '@test/core';
import { useState } from 'react';
import Title from '@/components/Title';

export default function App() {
  const [count, setCount] = useState(0);
  const { onNotice } = useNotification();

  const handleCount = () => setCount(count + 1);
  const handleNotice = () => onNotice(`Hello Monorepo, current count is ${count}`);
  return (
    <div>
      <Title>
        Hello Monorepo
      </Title>
      <div>
        <Button onClick={handleCount} >Count: {count}</Button>
      </div>
      <div>
        <Button onClick={handleNotice} >Notice</Button>
      </div>
    </div>
  );
}
