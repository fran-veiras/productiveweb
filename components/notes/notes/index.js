import { Box, Heading, Text } from '@chakra-ui/layout';
import React, { useState } from 'react';
import { Writer } from './writer';

export const Notes = ({ data }) => {
  const [info, setInfo] = useState([]);

  return (
    <Box display="flex" flexDirection="column" gridGap={4}>
      <Heading>{data}</Heading>
      <Writer />
    </Box>
  );
};
