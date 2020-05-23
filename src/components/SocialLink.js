import { Link } from '@chakra-ui/core';

const SocialLink = ({ icon, to }) => {
    return (
        <Link fontSize="3xl" href={to} isExternal>
            {icon}
        </Link>
    );
};

export default SocialLink;
