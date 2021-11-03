import { Box, Container, Flex } from '@chakra-ui/layout';
import Head from 'next/head';
import { Display } from '../components/display';
import { NotesDashboard } from '../components/notes';

export default function Home() {
  return (
    <Box height="100vh" overflow="hidden">
      <Head>
        <title>Multidisplay notes</title>
        <meta name="Multidisplay notes" content="notes with multi display" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex h="100vh" w="100vw" justifyContent="space-between">
        <NotesDashboard />
        <Display />
      </Flex>
    </Box>
  );
}
