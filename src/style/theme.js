const palette = {
    blue: '#0073E6',
    green: '#0ECD9D',
    red: '#CD0E61',
    black: '#0B0B0B',
    white: '#FFFFFF',
  }
  
  export const theme = {
    colors: {
      background: palette.white,
      foreground: palette.black,
      primary: palette.blue,
      success: palette.green,
      danger: palette.red,
      failure: palette.red,
    },
    spacing: {
      s: 8,
      m: 16,
      l: 24,
      xl: 40,
    },
    textVariants: {
      text:{
        fontSize: 16,
        color: palette.black
      },
    },
    button:{
        color:{
            primary: palette.blue,
            secondary: palette.red,
            success: palette.green
        }
    }
  };
  
  export const darkTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      background: palette.black,
      foreground: palette.white,
    }
  }