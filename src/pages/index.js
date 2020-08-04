import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Text, Stack, useTheme, Link } from '@chakra-ui/core';

import { DarkModeSwitch } from '../components/DarkModeSwitch';
import SocialGrid from '../components/SocialGrid';
import { Helmet } from 'react-helmet';

const Index = ({ data }) => {
  const theme = useTheme();
  return (
    <>
      <Helmet>
        <title>Miguel de los Reyes</title>
        <meta
          name="google-site-verification"
          content="U9e3mw3p4czRArRMZlBkylWhkPuboUIuUaOHWwvqrk8"
        />
      </Helmet>
      <DarkModeSwitch />
      <Stack
        spacing="1.5rem"
        width="100%"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Text textAlign="center" fontSize={['2xl', '4xl']}>
          Hey everyone, Miguel here!
        </Text>
        {/* <Heading fontSize={['3xl', '5xl']}>Hey everyone, Miguel here!</Heading> */}
        {/* <Heading fontSize={['3xl', '5xl']}>Miguel de los Reyes</Heading> */}
        <Link href="/resume.pdf" external>
          <Img
            fixed={data.file.childImageSharp.fixed}
            alt="Miguel de los Reyes"
            style={{
              borderRadius: '50%',
              height: theme.sizes['2xs'],
              width: theme.sizes['2xs'],
            }}
          />
        </Link>
        <SocialGrid />
      </Stack>
    </>
  );
};

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "mig.jpg" }) {
      childImageSharp {
        fixed(height: 750, width: 750) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default Index;
