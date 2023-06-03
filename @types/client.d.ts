type AppClient = {
  text: {
    encrypt: (args: TextEncryptArgs) => string;
    decrypt: (args: TextDecryptArgs) => string;
  };
};
