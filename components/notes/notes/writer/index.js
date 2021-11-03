import { Input } from '@chakra-ui/input';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import React, { useState } from 'react';
import { InfoNotes } from './info';

export const Writer = () => {
  // categorie selected

  const [data, setData] = useState('paragraph');

  const setTitle = () => {
    if (data === 'title') {
      setData('paragraph');
    } else {
      setData('title');
    }
  };

  const setSubtitle = () => {
    if (data === 'subtitle') {
      setData('paragraph');
    } else {
      setData('subtitle');
    }
  };

  const setParagraph = () => {
    if (data === 'paragraph') {
      setData('paragraph');
    } else {
      setData('paragraph');
    }
  };

  const setPhoto = () => {
    if (data === 'photo') {
      setData('paragraph');
    } else {
      setData('photo');
    }
  };

  const setCode = () => {
    if (data === 'code') {
      setData('paragraph');
    } else {
      setData('code');
    }
  };

  // info

  const [info, setInfo] = useState([]);

  // salto de página

  const [linesJump, setLinesJump] = useState([1]);

  console.log(linesJump);

  return (
    <Box display="flex" maxWidth="full" flexDirection="column" gridGap={4}>
      <Flex gridGap={4}>
        <Box
          onClick={setTitle}
          background={(data === 'title' && 'purple.400') || 'purple.200'}
          cursor="pointer"
          px={4}
          py={2}
          _hover={{ background: 'purple.400' }}
          borderRadius="9999px"
        >
          <Text fontWeight="bold">T</Text>
        </Box>
        <Box
          onClick={setSubtitle}
          background={(data === 'subtitle' && 'purple.400') || 'purple.200'}
          cursor="pointer"
          px={4}
          py={2}
          _hover={{ background: 'purple.400' }}
          borderRadius="9999px"
        >
          <Text fontWeight="bold">S</Text>
        </Box>
        <Box
          onClick={setParagraph}
          background={(data === 'paragraph' && 'purple.400') || 'purple.200'}
          cursor="pointer"
          px={4}
          py={2}
          _hover={{ background: 'purple.400' }}
          borderRadius="9999px"
        >
          <Text fontWeight="bold">P</Text>
        </Box>
        <Box
          onClick={setPhoto}
          background={(data === 'photo' && 'purple.400') || 'purple.200'}
          cursor="pointer"
          px={4}
          py={2}
          _hover={{ background: 'purple.400' }}
          borderRadius="9999px"
        >
          <Text fontWeight="bold">I</Text>
        </Box>
        <Box
          onClick={setCode}
          background={(data === 'code' && 'purple.400') || 'purple.200'}
          cursor="pointer"
          px={4}
          py={2}
          _hover={{ background: 'purple.400' }}
          borderRadius="9999px"
        >
          <Text fontWeight="bold">{`</>`}</Text>
        </Box>
      </Flex>
      <Box autoFocus height="80vh" overflowX="hidden" position="relative">
        {linesJump.map((numb) => (
          <InfoNotes
            key={numb}
            setLinesJump={setLinesJump}
            style={data}
            setStyle={setData}
          />
        ))}
      </Box>
    </Box>
  );
};
