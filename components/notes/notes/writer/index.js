import { Input } from '@chakra-ui/input';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import React, { useState } from 'react';
import { InfoNotes } from './info';

export const Writer = () => {
  // categorie selected

  // salto de página

  const [lineJump, setLinesJump] = useState([1]);

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
