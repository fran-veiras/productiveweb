import { Box, Heading, Text } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import React, { useState } from 'react';

export const InfoNotes = ({ setLinesJump, style, setStyle }) => {
  const [data, setData] = useState([]);

  const setValueOfData = (e) => {
    setData(e.target.value);
  };

  const addLineJump = (e) => {
    e.key === 'Enter' &&
      e.preventDefault() & setLinesJump((cat) => [...cat, cat + 1]);
  };

  return (
    <>
      {style === 'title' && (
        <Box
          maxWidth="full"
          wordBreak="break-word"
          lineHeight="normal"
          fontSize="l"
          color="transparent"
          position="relative"
        >
          {data}
          <Textarea
            resize="none"
            height="full"
            overflowY="scroll"
            variant="unstyled"
            type="text"
            value={data}
            onChange={setValueOfData}
            onKeyPress={addLineJump}
            caretColor="#fff"
            position="absolute"
            top="0"
            left="0"
            p={0}
            autoFocus
            lineHeight="normal"
            fontSize="l"
            color="blue.500"
          />
        </Box>
      )}
      {style === 'paragraph' && (
        <Box
          maxWidth="full"
          wordBreak="break-word"
          lineHeight="normal"
          fontSize="l"
          color="transparent"
          position="relative"
        >
          {data}
          <Textarea
            resize="none"
            height="full"
            overflowY="scroll"
            variant="unstyled"
            type="text"
            value={data}
            onChange={setValueOfData}
            onKeyPress={addLineJump}
            caretColor="#fff"
            position="absolute"
            top="0"
            left="0"
            p={0}
            autoFocus
            lineHeight="normal"
            fontSize="l"
            color="red.500"
          />
        </Box>
      )}
    </>
  );
};
