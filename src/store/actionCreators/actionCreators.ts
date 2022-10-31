import * as CatalogActionCreators from './catalog';
import * as AccessoriesActionCreators from './accessories';
import * as GiftCardActionCreators from './giftCard';

export default {
  ...CatalogActionCreators,
  ...AccessoriesActionCreators,
  ...GiftCardActionCreators,
}
