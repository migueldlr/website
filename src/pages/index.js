import Head from 'next/head';
import { withTheme } from 'emotion-theming';
import { Text, Stack, Image, Heading } from '@chakra-ui/core';

import { DarkModeSwitch } from '../components/DarkModeSwitch';

const Index = () => (
    <>
        <Head>
            <title>Miguel's website</title>
        </Head>
        <DarkModeSwitch />
        <Stack
            spacing="1.5rem"
            width="100%"
            height="100vh"
            alignItems="center"
            justifyContent="center">
            <Heading>Miguel de los Reyes</Heading>
            <Image
                size="250px"
                rounded="full"
                alt="Miguel de los Reyes"
                src="/mig.jpg"
            />
            <Text fontSize="3xl">Hey everyone, Miguel here</Text>
        </Stack>
    </>
);

export default withTheme(Index);
