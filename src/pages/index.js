import Head from 'next/head';
import { withTheme } from 'emotion-theming';
import { Text, Stack, Image, Heading } from '@chakra-ui/core';

import DarkModeSwitch from '../components/DarkModeSwitch';
import SocialGrid from '../components/SocialGrid';
import Dots from '../components/Dots';

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
            <Heading fontSize={['3xl', '5xl']}>Miguel de los Reyes</Heading>
            <Image
                size="2xs"
                rounded="full"
                alt="Miguel de los Reyes"
                src="/mig.jpg"
            />
            <Text textAlign="center" fontSize={['xl', '3xl']}>
                Hey everyone, Miguel here!
            </Text>
            <SocialGrid />
            <Dots />
        </Stack>
    </>
);

export default withTheme(Index);
