type PathState = {
  address: string;
};

type PathContext = [PathState, React.Dispatch<React.SetStateAction<PathState>>];

type GlobalState = {
  darkTheme: boolean;
};

type GlobalContext = [GlobalState, React.Dispatch<React.SetStateAction<GlobalState>>];

type SendDataState = {
  to: 'TESTING';
  data: { something: string };
};

type SendDataContext = [SendDataState, React.Dispatch<React.SetStateAction<SendDataState>>];

type MobileLangState = {
  type: 'en' | 'pt';
  text: MobileLanguageDefinition;
};

type MobileLangContext = [MobileLangState, Dispatch<SetStateAction<MobileLangState>>];
