/* There's probably a way to do these imports with
 * less repetition, but I couldn't figure out how */

import Volume1 from '../routes/news/Volume1'; 
import Volume2 from '../routes/news/Volume2';
import Volume3 from '../routes/news/Volume3';
import Volume4 from '../routes/news/Volume4';
import Volume5 from '../routes/news/Volume5';
import Volume6 from '../routes/news/Volume6';
import Volume7 from '../routes/news/Volume7';
import Volume8 from '../routes/news/Volume8';
import Volume9 from '../routes/news/Volume9';
import Volume10 from '../routes/news/Volume10';
import Volume11 from '../routes/news/Volume11';

export const newsRegistry = [
    {"dateOfPublication": "8 May 2022", "route": <Volume1 />},
    {"dateOfPublication": "23 May 2022", "route": <Volume2 />},
    {"dateOfPublication": "12 June 2022", "route": <Volume3 />},
    {"dateOfPublication": "24 July 2022", "route": <Volume4 />},
    {"dateOfPublication": "27 August 2022", "route": <Volume5 />},
    {"dateOfPublication": "12 October 2022", "route": <Volume6 />},
    {"dateOfPublication": "16 December 2022", "route": <Volume7 />},
    {"dateOfPublication": "18 February 2023", "route": <Volume8 />},
    {"dateOfPublication": "25 March 2023", "route": <Volume9 />},
    {"dateOfPublication": "23 April 2023", "route": <Volume10 />},
    {"dateOfPublication": "25 May 2023", "route": <Volume11 />}
];
