import React from 'react';
import { Grid } from '@chakra-ui/react';
import SocialLink from '../components/SocialLink';

import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialGrid = () => {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={10}>
      <SocialLink to="https://github.com/migueldlr" icon={<FaGithub />} />
      <SocialLink
        to="https://www.linkedin.com/in/migueldlr/"
        icon={<FaLinkedin />}
      />
      <SocialLink
        to="https://www.instagram.com/migueldelosr/"
        icon={<FaInstagram />}
      />
    </Grid>
  );
};

export default SocialGrid;
