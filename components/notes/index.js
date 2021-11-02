import { Input } from '@chakra-ui/input';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import Plus from '../../public/plus';
import { Folders } from './folders';
import { Notes } from './notes';

export const NotesDashboard = () => {
  // tags info

  const [tags, setTags] = useState([]);

  // local storage

  const getLocalStorage = () => {
    if (typeof localStorage !== 'undefined') {
      return JSON.parse(localStorage.getItem('folders'));
    } else {
      return [];
    }
  };
  const [folders, setFolders] = useState(getLocalStorage());

  function SetLocalStorage(item) {
    localStorage.setItem('folders', JSON.stringify(item));
  }

  useEffect(() => {
    SetLocalStorage(folders);
  }, [folders]);

  // tags info

  const saveTags = (e) => {
    setTags(e.target.value.trim());
  };

  const sendTags = (e) => {
    if (tags.length > 1) {
      e.key === 'Enter' &&
        setFolders((cat) => [
          '#' + tags.charAt(0).toUpperCase() + tags.replace(/ /g, '').slice(1),
        ]) &
          setTags('') &
          setActive(!true);
    }

    if (folders !== null) {
      e.key === 'Enter' &&
        setFolders((cat) => [
          ...folders,
          '#' + tags.charAt(0).toUpperCase() + tags.replace(/ /g, '').slice(1),
        ]) &
          setTags('') &
          setActive(!true);
    }
  };

  // input

  const [active, setActive] = useState(false);

  const enableInput = () => {
    active === false && setActive(!false);
    active === true && setActive(!true);
  };

  return (
    <Box display="flex" w="full">
      <Flex w="full">
        <Box
          display="flex"
          flexDirection="column"
          p={4}
          h="full"
          background="gray.100"
          flex="1"
          gridGap={4}
        >
          <Box display="flex">
            <Text fontSize="xl">Your Notes</Text>
          </Box>
          <Box
            flexDirection="column"
            display="flex"
            justifyContent="space-between"
            gridGap={4}
          >
            <Box display="flex" justifyContent="space-between">
              <Text fontSize="md" color="purple.400" fontWeight="bold">
                #Tags 📌
              </Text>
              <Box
                transition="ease .2s"
                _hover={{ background: 'purple.100' }}
                cursor="pointer"
                onClick={enableInput}
              >
                <Plus />
              </Box>
            </Box>
            {active === true && (
              <Box display="inline-block" position="relative" overflow="hidden">
                <Input
                  p="10px 10px 10px 20px"
                  type="text"
                  focusBorderColor="purple.600"
                  autoFocus
                  value={tags}
                  onChange={saveTags}
                  onKeyPress={sendTags}
                />
                <span>#</span>
              </Box>
            )}
            {folders !== null &&
              folders.map((cat) => <Folders key={cat} data={cat} />)}
          </Box>
        </Box>
        <Box p={4} background="white" flex="3">
          <Notes />
        </Box>
      </Flex>
      <style jsx>{`
        span {
          position: absolute;
          bottom: 9px;
          top: 9px;
          left: 10px;
        }
      `}</style>
    </Box>
  );
};
