import { atlassianColors, materialColors } from './lib/palettes';
import screenSizes from './lib/screenSizes';

export const darkBackground: Partial<Theme['colors']> = {
  bg1: materialColors.black,
  bg2: materialColors.grey['800'] + '44',
  bg3: materialColors.grey['700'] + '44',
  text1: materialColors.grey['300'],
  text2: materialColors.grey['400'],
  text3: materialColors.grey['500'],
};

export const solarizedBackground: Partial<Theme['colors']> = {
  bg1: '#FCD7B1',
  bg2: materialColors.grey['400'] + '44',
  bg3: materialColors.grey['600'] + '44',
  text1: materialColors.grey['900'],
  text2: materialColors.grey['800'],
  text3: materialColors.grey['700'],
};

export const defaulTheme: Theme = {
  size: (n: number) => `${n * 2}px`,
  colors: {
    main: atlassianColors.blue['600'],
    mainBg: atlassianColors.blue['700'],
    bg1: materialColors.grey['50'],
    bg2: materialColors.grey['100'],
    bg3: materialColors.grey['200'],
    text1: materialColors.grey['800'],
    text2: materialColors.grey['700'],
    text3: materialColors.grey['600'],
    gray: materialColors.grey['700'],
    yellow: atlassianColors.yellow['700'],
    red: atlassianColors.red['800'],
    green: materialColors.lightGreen['800'],
    white: materialColors.white,
    black: materialColors.black,
  },
  shadow: {
    low: '1px 1px 4px 0px #0004',
    medium: '1px 1px 4px 1px #0005',
    high: '1px 1px 4px 1px #0007',
    mediumGray: '1px 1px 4px 1px #777a',
    lowRight: '3px 0 4px 0px #0002',
    mediumLeft: '-4px 0 4px 0px #0006',
  },
  bordertype: {
    small: 'none',
    medium: '1px solid #aaa3',
    large: '2px solid #aaa3',
  },
  borderRadius: {
    verySmall: '0.3rem',
    small: '0.4rem',
    medium: '0.6rem',
    large: '0.8rem',
    full: '50%',
  },
  fontSize: {
    body: '16px',
    label: '14px',
    small: '13px',
    verySmall: '12px',
    h1: '24px',
    h2: '22px',
    h3: '20px',
    h4: '19px',
    h5: '18px',
    h6: '17px',
  },
  devices: {
    mobileS: `(max-width: ${screenSizes.mobileS}px)`,
    mobileM: `(max-width: ${screenSizes.mobileM}px)`,
    mobileL: `(max-width: ${screenSizes.mobileL}px)`,
    tablet: `(max-width: ${screenSizes.tablet}px)`,
    laptopS: `(max-width: ${screenSizes.laptopS}px)`,
    laptopM: `(max-width: ${screenSizes.laptopM}px)`,
    laptopL: `(max-width: ${screenSizes.laptopL}px)`,
    desktopS: `(max-width: ${screenSizes.desktopS}px)`,
    desktopM: `(max-width: ${screenSizes.desktopM}px)`,
    desktopL: `(max-width: ${screenSizes.desktopL}px)`,
  },
};
