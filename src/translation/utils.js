import pt from './pt-BR.json'
import en from './en.json'
import es from './es.json'

export default function getMessages(locale) {
	switch (locale) {
		case 'pt-BR':
			return pt;
			break;

		case 'pt-PT':
			return pt;
			break;

		case 'en-US':
			return en;
			break;

		case 'es':
			return es;
			break;

		case 'es-419':
			return es;
			break;

	
		default:
			return en;
			break;
	}
}