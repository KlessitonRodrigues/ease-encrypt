type LanguageOptions = 'en' | 'pt';

type LanguageDefinition = {
  Pages: {
    Home: {
      textInputLabel: string;
      passwordInputLabel: string;
      encryptFormLabel: string;
      encryptFormContent: {
        checkbox1: {
          label: string;
          item1: string;
        };
        checkbox2: {
          label: string;
          item1: string;
          item2: string;
        };
      };
      buttons: {
        button1: string;
        button2: string;
      };
      resultInputLabel: string;
      footerButtons: {
        button1: string;
      };
    };
  };
};
