import { enLang } from 'src/UI/assets/lang/en';
import { ptLang } from 'src/UI/assets/lang/pt';

export const langSwitch = (lang: MobileLangState): MobileLangState => {
  if (lang.type === 'en') return { type: 'pt', text: ptLang };
  if (lang.type === 'pt') return { type: 'en', text: enLang };
};
