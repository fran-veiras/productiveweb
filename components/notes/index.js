import { Input } from '@chakra-ui/input';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React, { useEffect, useState } from 'react';
import Plus from '../../public/plus';
import { Folders } from './folders';
import { Notes } from './notes';
import { v4 as uuidv4 } from 'uuid';

export const NotesDashboard = () => {
  // tags info

  const [tags, setTags] = useState([]);

  // id generator

  const createId = () => {
    return uuidv4();
  };

  const getLocalStorageID = () => {
    const local =
      typeof localStorage !== 'undefined' &&
      JSON.parse(localStorage.getItem(ids));

    if (local === null) {
      return [];
    } else {
      return local;
    }
  };

  const [ids, setIds] = useState(getLocalStorageID());

  // local storage

  const getLocalStorage = () => {
    if (typeof localStorage !== 'undefined') {
      return JSON.parse(localStorage.getItem(newIds));
    } else {
      return [];
    }
  };

  const [folders, setFolders] = useState(getLocalStorage());

  useEffect(() => {
    addNewId();
  }, [folders]);

  const addNewId = () => {
    setIds(createId());
  };

  function SetLocalStorageID(item) {
    localStorage.setItem(item, JSON.stringify(item));
  }

  useEffect(() => {
    SetLocalStorageID(ids);
  }, []);

  useEffect(() => {
    SetLocalStorageID(ids);
  }, [folders]);

  const [newIds, setNewIds] = useState([]);

  useEffect(() => {
    setNewIds(ids);
  }, [ids]);

  function SetLocalStorage(item) {
    localStorage.setItem(newIds, JSON.stringify({ title: item }));
  }

  useEffect(() => {
    SetLocalStorage(folders);
  }, [folders]);

  // get keys

  const [keys, setKeys] = useState([]);

  function allStorage() {
    keys = Object.keys(localStorage);

    return keys;
  }

  useEffect(() => {
    setKeys(allStorage());
  }, []);

  useEffect(() => {
    setKeys(allStorage());
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
          '#' + tags.charAt(0).toUpperCase() + tags.replace(/ /g, '').slice(1),
        ]) &
          setTags('') &
          setActive(!true);
    }
  };

  // const [pages, setPages] = useState([]);

  // useEffect(() => {
  //   setPages((cat) => [...cat, folders]);
  // }, [folders]);

  // useEffect(() => {
  //   setPages((cat) => [...cat, folders]);
  // }, []);

  // input

  const [active, setActive] = useState(false);

  const enableInput = () => {
    active === false && setActive(!false);
    active === true && setActive(!true);
  };

  // setActiveFolder

  const [activeFolder, setActiveFolder] = useState([]);

  return (
    <Box display="flex" w="full">
      <Flex w="full">
        <Box
          display="flex"
          flexDirection="column"
          p={4}
          h="100vh"
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
            {keys !== null &&
              keys.map((cat) => (
                <Folders
                  key={cat}
                  data={cat}
                  setActiveFolder={setActiveFolder}
                />
              ))}
          </Box>
        </Box>
        <Box p={4} background="white" flex="3">
          {folders !== null &&
            folders
              .filter((cat) => cat === activeFolder.data)
              .map((data) => <Notes key={data} data={data} />)}
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
