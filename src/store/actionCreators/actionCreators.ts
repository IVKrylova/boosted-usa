import * as CatalogActionCreators from './catalog';
import * as AccessoriesActionCreators from './accessories';

export default {
  ...CatalogActionCreators,
  ...AccessoriesActionCreators,
}
