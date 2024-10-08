import api from '../http-client';
import { PumpupApi } from './pumpup';

export { PumpupApi } from './pumpup';

export default new PumpupApi(api);
