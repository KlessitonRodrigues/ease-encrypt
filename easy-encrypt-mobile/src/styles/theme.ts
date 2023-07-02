import { atlassianColors, materialColors } from './lib/palettes';

export const defaultTheme: MobileTheme = {
  size: (n: number) => `${n * 2}px`,
  colors: {
    main: atlassianColors.blue['600'],
    mainBg: atlassianColors.blue['700'],
    bg1: materialColors.grey['50'],
    bg2: materialColors.grey['100'],
    bg3: materialColors.grey['200'],
    bg4: materialColors.grey['300'],
    text1: materialColors.grey['800'],
    text2: materialColors.grey['700'],
    text3: materialColors.grey['600'],
    text4: materialColors.grey['400'],
    gray: materialColors.grey['500'],
    yellow: atlassianColors.yellow['600'],
    red: atlassianColors.red['800'],
    blue: atlassianColors.blue['600'],
    green: materialColors.lightGreen['800'],
    white: materialColors.grey['300'],
    black: materialColors.black,
  },
  fontSize: {
    h1: '24px',
    h2: '22px',
    h3: '20px',
    h4: '19px',
    h5: '18px',
    h6: '17px',
    body: '16px',
    label: '14px',
    small: '15px',
    verySmall: '13px',
  },
  radius: {
    verySmall: '2px',
    small: '4px',
    medium: '6px',
    large: '8px',
    full: '50%',
  },
};

export const defaultThemeDark = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    main: atlassianColors.blue['500'],
    mainBg: atlassianColors.blue['600'],
    bg1: materialColors.black,
    bg2: materialColors.grey['800'] + '44',
    bg3: materialColors.grey['700'] + '44',
    bg4: materialColors.grey['600'] + '44',
    text1: materialColors.grey['300'],
    text2: materialColors.grey['400'],
    text3: materialColors.grey['500'],
    text4: materialColors.grey['700'],
    gray: materialColors.grey['600'],
    white: materialColors.grey['300'],
  },
};
