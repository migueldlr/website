import NextApp from 'next/app';
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core';

import theme from '../theme';

class App extends NextApp {
    render() {
        const { Component } = this.props;
        return (
            <>
                <ThemeProvider theme={theme}>
                    <ColorModeProvider>
                        <CSSReset />
                        <Component />
                    </ColorModeProvider>
                </ThemeProvider>
                <style jsx>{`
                    @font-face {
                        font-family: 'Nunito';
                        src: url('/fonts/Nunito-Regular.ttf');
                        font-weight: normal;
                        font-style: normal;
                    }
                    @font-face {
                        font-family: 'Nunito';
                        src: url('/fonts/Nunito-Bold.ttf');
                        font-weight: bold;
                        font-style: normal;
                    }
                `}</style>
            </>
        );
    }
}

export default App;
