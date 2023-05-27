declare const clientInit: () => {
    text: {
        ecrypt: (args: TextEncryptArgs) => string;
        decrypt: (args: TextDecryptArgs) => string;
    };
};
export default clientInit;
