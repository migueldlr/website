import { Grid } from '@chakra-ui/core';
import SocialLink from '../components/SocialLink';

import {
    AiOutlineInstagram,
    AiFillLinkedin,
    AiFillGithub,
} from 'react-icons/ai';

const SocialGrid = () => {
    return (
        <Grid templateColumns="repeat(3, 1fr)" gap={5}>
            <SocialLink
                to="https://github.com/migueldlr"
                icon={<AiFillGithub />}
            />
            <SocialLink
                to="https://www.linkedin.com/in/migueldlr/"
                icon={<AiFillLinkedin />}
            />
            <SocialLink
                to="https://www.instagram.com/migueldelosr/"
                icon={<AiOutlineInstagram />}
            />
        </Grid>
    );
};

export default SocialGrid;
