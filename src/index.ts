import { deriveCtorWithMixin } from './utils';
import { Main } from './main';
import { Books } from './book';
import { Movies } from './movie';
import { Characters } from './character';
import { Quotes } from './quote';
import { Chapters } from './chapter';

class LOTR extends Main { }

interface LOTR extends Books, Movies, Characters, Quotes, Chapters { }

deriveCtorWithMixin(LOTR, [Books, Movies, Characters, Quotes, Chapters]);

export default LOTR;
