import tw, { theme } from 'twin.macro';
import { createGlobalStyle } from 'styled-components';

const StylesBase = createGlobalStyle`
  .light {
    --bg-primary: #FFFFFF;
    --bg-secondary: #F1F5F9;
    --text-primary: ${theme`colors.gray.300`};
    --text-secondary: #1E293B;
    --color-primary: #E11D48;
  }
  .dark {
    --bg-primary: #0F172A;
    --bg-secondary: #1E293B;
    --text-primary: ${theme`colors.yellow.400`};
    --text-secondary: #FFFFFF;
    --color-primary: #2563EB;
  }
  body {
    ${tw`bg-primary text-primary transition-all duration-200`}
  }
`;

export default StylesBase;
