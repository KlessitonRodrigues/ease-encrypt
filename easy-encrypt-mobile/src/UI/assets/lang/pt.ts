export const ptLang: LanguageDefinition = {
  Pages: {
    Home: {
      textInputLabel: 'Texto',
      passwordInputLabel: 'Senha',
      encryptFormLabel: 'Tipo de criptografia',
      encryptFormContent: {
        checkbox1: {
          label: 'Forte',
          item1: 'Usa algoritmo de criptografia EAS',
        },
        checkbox2: {
          label: 'Muito Forte',
          item1: 'Usa algoritmo de criptografia EAS',
          item2: 'Somente pode ser desencriptado com Easy Encrypt',
        },
      },
      buttons: {
        button1: 'Encriptar',
        button2: 'Desencriptar',
      },
      resultInputLabel: 'Resultado',
      footerButtons: {
        button1: 'Copiar',
      },
    },
  },
};
