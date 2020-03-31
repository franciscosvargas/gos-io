import pt from './pt-BR.json'
import en from './en.json'

export default function getMessages(locale) {
	switch (locale) {
		case 'pt-BR':
			return pt;
			break;

		case 'en-US':
			return en;
			break;
	
		default:
			return en;
			break;
	}
}