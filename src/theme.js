import { theme as chakraTheme } from '@chakra-ui/core';

const fonts = {
    ...chakraTheme.fonts,
    heading: 'Nunito, sans-serif',
    body: 'Nunito, sans-serif',
    mono: `'Menlo', monospace`,
};

const breakpoints = ['40em', '52em', '64em'];

const theme = {
    ...chakraTheme,
    colors: {
        ...chakraTheme.colors,
        black: '#16161D',
    },
    fonts,
    breakpoints,
    icons: {
        ...chakraTheme.icons,
    },
};

export default theme;
