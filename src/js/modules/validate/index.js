import { VALIDATE } from '../../constants';
import Validate from '@stormid/validate';

export default () => Validate(VALIDATE.SELECTOR, VALIDATE.OPTIONS);