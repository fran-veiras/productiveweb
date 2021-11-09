import { Box, Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';

export const Folders = ({ data, setActiveFolder }) => {
  const setCategorie = () => {
    setActiveFolder({ data });
  };

  const getData = () => {
    if (typeof localStorage !== 'undefined') {
      return JSON.parse(localStorage.getItem(data));
    } else {
      return 'no';
    }
  };

  const [info, setInfo] = useState([]);

  useEffect(() => {
    setInfo(getData());
  }, [data]);

  useEffect(() => {
    setInfo(getData());
  }, []);

  return (
    <>
      {info !== null && info !== undefined && (
        <Box
          onClick={setCategorie}
          _hover={{ background: 'purple.200' }}
          transition="ease .2s"
          cursor="pointer"
          p={2}
        >
          <Text>{info.title}</Text>
        </Box>
      )}
    </>
  );
};
