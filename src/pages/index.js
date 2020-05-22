import Head from 'next/head';
import { withTheme } from 'emotion-theming';
import { Text, Stack, Image } from '@chakra-ui/core';

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
            alignItems="center"
            justifyContent="flex-start"
            pt="8rem"
            px="1rem">
            <Image
                size="300px"
                rounded="full"
                alt="Miguel de los Reyes"
                src="/mig.jpg"
            />

            <Text fontFamily="mono" fontSize="4xl">
                Hey everyone, Miguel here!
            </Text>
        </Stack>
    </>
);

export default withTheme(Index);
