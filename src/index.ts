import { deriveCtorWithMixin } from './utils';
import { Main } from './main';

class LOTR extends Main {

}

deriveCtorWithMixin(LOTR, []);

export default LOTR;