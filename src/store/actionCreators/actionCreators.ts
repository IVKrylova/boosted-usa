import * as CatalogActionCreators from './catalog';
import * as AccessoriesActionCreators from './accessories';
import * as GiftCardActionCreators from './giftCard';
import * as CartActionCreators from './cart';

export default {
  ...CatalogActionCreators,
  ...AccessoriesActionCreators,
  ...GiftCardActionCreators,
  ...CartActionCreators,
}
