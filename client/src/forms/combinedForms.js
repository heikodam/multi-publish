import immowelt from './singleForms/immowelt';
import ebayKleinanzeige from './singleForms/ebay-kleinanzeige';

const combinedForms = {
    ...immowelt,
    ...ebayKleinanzeige
};

export default combinedForms;