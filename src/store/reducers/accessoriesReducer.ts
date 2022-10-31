import { AccessoriesState, AccessoriesActionTypes, AccessoriesAction } from '../../types/accessories';

const initialState: AccessoriesState = {
  accessories: [],
  loading: false,
  error: null,
}

export const accessoriesReducer = (state = initialState, action: AccessoriesAction): AccessoriesState => {
  switch (action.type) {
    case AccessoriesActionTypes.FETCH_ACCESSORIES:
      return { loading: true, accessories: [], error: null }
    case AccessoriesActionTypes.FETCH_ACCESSORIES_SUCCESS:
      return { loading: false, accessories: action.payload, error: null }
    case AccessoriesActionTypes.FETCH_ACCESSORIES_ERROR:
      return { loading: false, accessories: [], error: action.payload }
    default:
      return state;
  }
}
