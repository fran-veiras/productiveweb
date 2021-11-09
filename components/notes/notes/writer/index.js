import { Input } from '@chakra-ui/input';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import { InfoNotes } from './info';

export const Writer = () => {
  // categorie selected

  // salto de página

  const getLocalStorageJumpLines = () => {
    const local = JSON.parse(localStorage.getItem('keys'));

    if (local === null) {
      return [1];
    } else {
      return local;
    }
  };

  const [lineJump, setLinesJump] = useState(getLocalStorageJumpLines());

  function SetLocalStorageJumpLines(item) {
    localStorage.setItem('keys', JSON.stringify(item));
  }

  useEffect(() => {
    SetLocalStorageJumpLines(lineJump);
  }, []);

  useEffect(() => {
    SetLocalStorageJumpLines(lineJump);
  }, [lineJump]);

  return (
    <Box display="flex" maxWidth="full" flexDirection="column" gridGap={4}>
      <Box autoFocus height="80vh" overflowX="hidden">
        {lineJump.map((numb) => (
          <InfoNotes
            key={numb}
            numb={numb}
            lineJump={lineJump}
            setLinesJump={setLinesJump}
          />
        ))}
      </Box>
    </Box>
  );
};
