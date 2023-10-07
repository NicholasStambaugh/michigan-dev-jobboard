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
    height: calc(100vh - 100px);
    width: 100%;
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
    align-text: center;
  }

  h3 {
    font-size: 1.375rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

  a {
    font-size: 3.375rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

 li {
    font-size: 1.375rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

  p {
    font-size: .975rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

  label {
    font-size: .975rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

  login-button-header {
    font-size: .975rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

  footer  {
    font-size: .975rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text}
    align-items: center;
  }

  .center-line::after {
    content: "";
    display: block;
    width: 60%;
    height: 1px;
    margin: 0 15px 5px 50px;
    background-color: ${({ theme }: GlobalThemeProps) => theme.text};
    margin: 2rem auto;
  }
  
  
  .content {
    flex-grow: 1;
    margin-top: 300px; /* Allow the content to grow and take available space */
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

  label {
    font-size: 1.5rem;
    margin-bottom: 1rem;;
  }

  login-card-form {
    width: 100%;
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
    color: ${({ theme }: GlobalThemeProps) => theme.text}
  }
  
  .styled-table {
    width: 100%;
    border-collapse: collapse;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
  }

  @media (max-width: 375px) {
    h1 {
      font-size: 2.375rem;
    }
    h2 {
      font-size: 2.375rem;
    }
    a {
      font-size: 2.375rem;
    }
    li {
      font-size: 1.125rem;
    }
    p {
      font-size: .875rem;
    }
    label {
      font-size: .875rem;
    }
    login-button-header {
      font-size: .875rem;
    }
    footer {
      font-size: .875rem;
    }
    .center-line::after {
      width: 40%;
      margin: 0 15px 5px 30px;
    }
    .grey-box h2 {
      font-size: 1.125rem;
    }
    label {
      font-size: 1.125rem;
    }
  }

`;

export default withTheme(globalStyle);