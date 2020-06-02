import Head from 'next/head';
import { withTheme } from 'emotion-theming';
import { Text, Stack, Image, Heading, Box } from '@chakra-ui/core';

import DarkModeSwitch from '../components/DarkModeSwitch';
import SocialGrid from '../components/SocialGrid';
import Dots from '../components/Dots';
import NoSSR from '../components/NoSSR';

const Index = () => (
    <>
        <Head>
            <title>Miguel's website</title>
            <meta
                name="google-site-verification"
                content="U9e3mw3p4czRArRMZlBkylWhkPuboUIuUaOHWwvqrk8"
            />
        </Head>
        <DarkModeSwitch />
        <Stack
            spacing="1.5rem"
            width="100%"
            height="100vh"
            alignItems="center"
            justifyContent="center">
            <Heading fontSize={['3xl', '5xl']}>Miguel de los Reyes</Heading>
            <Box
                position="relative"
                size="2xs"
                display="flex"
                alignItems="center"
                justifyContent="center">
                <NoSSR>
                    <Dots />
                </NoSSR>
                <Image
                    size="2xs"
                    rounded="full"
                    alt="Miguel de los Reyes"
                    src="/mig.jpg"
                    position="absolute"
                />
            </Box>
            <Text textAlign="center" fontSize={['xl', '3xl']}>
                Hey everyone, Miguel here!
            </Text>
            <SocialGrid />
        </Stack>
    </>
);

export default withTheme(Index);
