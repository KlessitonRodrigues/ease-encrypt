// usePathContext
type PathState = {
  address: string;
};

type PathContext = [PathState, React.Dispatch<React.SetStateAction<PathState>>];

// useGlobalContext
type GlobalState = {};

type GlobalContext = [GlobalState, React.Dispatch<React.SetStateAction<GlobalState>>];

// useThemeTypeContext
type ThemeTypeState = {
  darkTheme: boolean;
  mainColor?: string;
};

type ThemeTypeContext = [ThemeTypeState, React.Dispatch<React.SetStateAction<ThemeTypeState>>];

// useSendDataContext
type SendDataState = {
  to: 'TESTING';
  data: { something: string };
};

type SendDataContext = [SendDataState, React.Dispatch<React.SetStateAction<SendDataState>>];

// useLangContext
type MobileLangState = {
  type: 'en' | 'pt';
  text: MobileLanguageDefinition;
};

type MobileLangContext = [MobileLangState, React.Dispatch<React.SetStateAction<MobileLangState>>];
