import React from 'react';
import { Link } from '@chakra-ui/react';

const SocialLink = ({ icon, to }) => {
  return (
    <Link fontSize="2xl" href={to} isExternal>
      {icon}
    </Link>
  );
};

export default SocialLink;
