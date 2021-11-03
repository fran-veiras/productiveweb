import { Box, Text } from '@chakra-ui/layout';
import React from 'react';

export const Folders = ({ data, setActiveFolder }) => {
  const setCategorie = () => {
    setActiveFolder({ data });
  };

  return (
    <Box
      onClick={setCategorie}
      _hover={{ background: 'purple.200' }}
      transition="ease .2s"
      cursor="pointer"
      p={2}
    >
      <Text>{data}</Text>
    </Box>
  );
};
