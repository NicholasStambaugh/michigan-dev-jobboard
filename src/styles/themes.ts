export interface ThemeProps {
    background: string;
    text: string;
  }
  
  export const darkTheme: ThemeProps = {
    background: 'var(--dark-background)',
    text: 'var(--dark-text)',
  };
  
  export const lightTheme: ThemeProps = {
    background: 'var(--light-background)',
    text: 'var(--light-text)',
  };