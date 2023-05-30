import { atlassianColors, materialColors } from './lib/palettes';
import screenSizes from './lib/screenSizes';

export const defaultTheme: Theme = {
  size: (n: number) => `${n * 0.2}rem`,
  colors: {
    bg1: materialColors.grey['50'],
    bg2: materialColors.grey['100'],
    bg3: materialColors.grey['300'],
    text1: materialColors.grey['800'],
    text2: materialColors.grey['700'],
    text3: materialColors.grey['600'],
    main: atlassianColors.blue['600'],
    mainBg: atlassianColors.blue['700'],
    gray: materialColors.grey['700'],
    yellow: atlassianColors.yellow['700'],
    red: atlassianColors.red['800'],
    green: materialColors.lightGreen['800'],
    white: materialColors.white,
    black: materialColors.black,
  },
  fontSize: {
    body: '1rem',
    small: '0.95rem',
    verySmall: '0.85rem',
    label: '0.9rem',
    h1: '1.6rem',
    h2: '1.4rem',
    h3: '1.2rem',
    h4: '1.1rem',
    h5: '1.075rem',
    h6: '1.05rem',
  },
  shadow: {
    low: '1px 1px 2px 0 #0005',
    medium: '1px 1px 2px 0 #0009',
    high: '1px 2px 2px 0 #000C',
    mediumGray: '1px 1px 4px 1px #777a',
    lowRight: '3px 0 4px 0px #0002',
    mediumLeft: '-4px 0 4px 0px #0006',
  },
  radius: {
    verySmall: '0.2rem',
    small: '0.3rem',
    medium: '0.4rem',
    large: '0.5rem',
    full: '50%',
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

export const defaultThemeDark = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    bg1: materialColors.black,
    bg2: materialColors.grey['800'] + '44',
    bg3: materialColors.grey['700'] + '44',
    text1: materialColors.grey['300'],
    text2: materialColors.grey['400'],
    text3: materialColors.grey['500'],
  },
};
