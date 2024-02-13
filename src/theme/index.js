import PropTypes from 'prop-types';
import { useMemo } from 'react';
// @mui
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
//
import palette from './palette';
// import shadows from './shadows';
import typography from './typography';
import GlobalStyles from './GlobalStyles';
// import customShadows from './customShadows';
import componentsOverride from './overrides';

// ----------------------------------------------------------------------

// ThemeProvider.propTypes = {
//   children: PropTypes.node,
// };

// export default function ThemeProvider({ children }) {
//   // const themeOptions = useMemo(
//   //   () => ({
//   //     palette,
//   //     shape: { borderRadius: 6 },
//   //     typography,
//   //     //   shadows: shadows(),
//   //     //   customShadows: customShadows(),

//   //   }),
//   //   []
//   // );

export const theme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        display: 'none',
        // Override default styles here
        borderColor: 'red', // Change border color
      },
      focused: {
        // Styles for the focused state
        '& label': {
          color: 'blue', // Change label color on focus
        },
      },
    },
  }
}
)

// export default theme;
// theme.components = componentsOverride(theme);

//   return (
//     <StyledEngineProvider injectFirst>
//       <MUIThemeProvider theme={theme}>
//         <CssBaseline />
//         <GlobalStyles />
//         {children}
//       </MUIThemeProvider>
//     </StyledEngineProvider>
//   );
// }
