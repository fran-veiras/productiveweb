import { Box, Divider, Flex, Heading, Text } from '@chakra-ui/layout';
import { Textarea } from '@chakra-ui/textarea';
import React, { useEffect, useState } from 'react';
import Trash from '../../../../../public/trash';

export const InfoNotes = ({ setLinesJump, numb, lineJump }) => {
  const [data, setData] = useState([]);

  const setValueOfData = (e) => {
    setData(e.target.value);
  };

  const addLineJump = (e) => {
    e.key === 'Enter' &&
      e.preventDefault() & setLinesJump((cat) => [...cat, cat + 1]);
  };

  const [valueOfStyle, setValueOfStyle] = useState('paragraph');

  const setTitle = () => {
    if (valueOfStyle === 'title') {
      setValueOfStyle('paragraph');
    } else {
      setValueOfStyle('title');
    }

    if (menu === true) {
      setMenu(!true);
      setValue(!true);
    }
  };

  const setSubtitle = () => {
    if (valueOfStyle === 'subtitle') {
      setValueOfStyle('paragraph');
    } else {
      setValueOfStyle('subtitle');
    }

    if (menu === true) {
      setMenu(!true);
      setValue(!true);
    }
  };

  const setParagraph = () => {
    if (valueOfStyle === 'paragraph') {
      setValueOfStyle('paragraph');
    } else {
      setValueOfStyle('paragraph');
    }

    if (menu === true) {
      setMenu(!true);
      setValue(!true);
    }
  };

  // change operator

  let timer;

  const [value, setValue] = useState(false);

  const changeOperator = (e) => {
    clearTimeout(timer);
    if (e.detail === 1) {
      timer = setTimeout(onclick, 200);
    } else if (e.detail === 2) {
      setValue(true);
    }
  };

  const [menu, setMenu] = useState(false);

  const closePopup = () => {
    setValue(!true);
    setMenu(!true);
  };

  const openMenu = () => {
    if (menu === false) {
      setMenu(!false);
    }
  };

  // delete component

  const deleteComponent = (e) => {
    (e.key === 'Backspace') & (data.length === 0) && filterComponent(numb);
  };

  const filterComponent = (numb) => {
    setLinesJump((item) => item.filter((item) => item !== numb));
  };

  // last

  return (
    <>
      {valueOfStyle === 'title' && (
        <Box
          maxWidth="full"
          wordBreak="break-word"
          lineHeight="normal"
          color="transparent"
          position="relative"
          fontSize="3xl"
          mb="10px"
        >
          {data}
          <Textarea
            onClick={changeOperator}
            resize="none"
            height="full"
            overflowY="scroll"
            variant="unstyled"
            type="text"
            value={data}
            onChange={setValueOfData}
            onKeyPress={(e) => {
              addLineJump(e);
              deleteComponent(e);
            }}
            caretColor="#fff"
            position="absolute"
            top="0"
            left="0"
            p={0}
            autoFocus
            lineHeight="normal"
            fontSize="3xl"
            color="black"
            mb="10px"
          />
        </Box>
      )}
      {valueOfStyle === 'paragraph' && (
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
            onClick={changeOperator}
            resize="none"
            height="full"
            overflowY="scroll"
            variant="unstyled"
            type="text"
            value={data}
            onChange={setValueOfData}
            onKeyPress={addLineJump}
            onKeyDown={deleteComponent}
            caretColor="#fff"
            position="absolute"
            top="0"
            left="0"
            p={0}
            autoFocus
            lineHeight="normal"
            fontSize="l"
            color="black"
          />
        </Box>
      )}
      {valueOfStyle === 'subtitle' && (
        <Box
          maxWidth="full"
          wordBreak="break-word"
          lineHeight="normal"
          fontSize="xl"
          color="transparent"
          position="relative"
        >
          {data}
          <Textarea
            onClick={changeOperator}
            resize="none"
            height="full"
            overflowY="scroll"
            variant="unstyled"
            type="text"
            value={data}
            onChange={setValueOfData}
            onKeyPress={(e) => {
              addLineJump(e);
              deleteComponent(e);
            }}
            caretColor="#fff"
            position="absolute"
            top="0"
            left="0"
            p={0}
            autoFocus
            lineHeight="normal"
            fontSize="xl"
            color="black"
          />
        </Box>
      )}

      {/* controls */}

      {value === true && menu !== true && (
        <>
          <Box
            display="inline-block"
            p={4}
            background="#fff"
            boxShadow="md"
            position="absolute"
            zIndex="9999"
          >
            <Flex gridGap={4}>
              <a onClick={openMenu}>
                <Box cursor="pointer">Turn into</Box>
              </a>
              <Box>
                <Divider orientation="vertical" borderColor="purple.400" />
              </Box>
              <Box cursor="pointer">
                <Trash />
              </Box>
            </Flex>
          </Box>
        </>
      )}
      {(value === true || menu === true) && (
        <a onClick={closePopup}>
          <Box
            position="absolute"
            top="0"
            background="transparent"
            height="80vh"
            width="80vw"
            zIndex="9997"
          ></Box>
        </a>
      )}

      {menu === true && (
        <Flex
          position="absolute"
          background="#fff"
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
          flexDirection="column"
          zIndex="9998"
        >
          <Box
            onClick={setTitle}
            cursor="pointer"
            px={4}
            py={1}
            _hover={{ background: 'gray.50' }}
          >
            <Heading fontWeight="bold" fontSize="3xl">
              Title
            </Heading>
          </Box>
          <Box>
            <Divider />
          </Box>
          <Box
            onClick={setSubtitle}
            cursor="pointer"
            px={4}
            py={2}
            _hover={{ background: 'gray.50' }}
          >
            <Text fontWeight="bold" fontSize="xl">
              Subtitle
            </Text>
          </Box>
          <Divider />
          <Box
            onClick={setParagraph}
            cursor="pointer"
            px={4}
            py={2}
            _hover={{ background: 'gray.50' }}
          >
            <Text fontWeight="bold" fontSize="l">
              Paragraph
            </Text>
          </Box>
        </Flex>
      )}
    </>
  );
};
