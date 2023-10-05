import { createGlobalStyle, withTheme } from 'styled-components';
import { ThemeProps } from './themes';

type GlobalThemeProps = {
  theme: ThemeProps;
};

const globalStyle = createGlobalStyle`
  :root {
    //dark-mode
    --dark-background: #1A1B27;
    --dark-text: #F5F5F7;

    //light-mode
    --light-background: #f2f2f2;
    --light-text: #2E0509;

  }

  * {
    margin: 0px 0 0px 0;
    padding: 0px 0 1px 0;
  }

  body  {
    -webkit-font-smoothing: antialiased;
    height: 100vh;
    width: 50vw;
    margin: 0 auto;
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 3.375rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

  h2 {
    font-size: 3.375rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

  h3 {
    font-size: 1.375rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

  a {
    font-size: 3.375rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

  p {
    font-size: .975rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

  login-button-header {
    font-size: .975rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }
  
  .center-container {
    display: flex;
    background-color: ${({ theme }: GlobalThemeProps) => theme.background}
    flex-direction: row; /* Arrange items in a row */ /* Distribute space between items */ /* Center vertically */
    max-width: 1280px;
    margin-top: 150px;
  }
  
  .content {
    flex-grow: 1; /* Allow the content to grow and take available space */
  }

  .grey-box { 
    text-align: center;
    padding: 2rem;
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};

  }
  
  .grey-box h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }
  
`;

export default withTheme(globalStyle);