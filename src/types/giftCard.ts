export interface GiftCardState {
  giftCard: any[];
  loading: boolean;
  error: null | string;
}

export enum GiftCardActionTypes {
  FETCH_GIFT_CARD = 'FETCH_GIFT_CARD',
  FETCH_GIFT_CARD_SUCCESS = 'FETCH_GIFT_CARD_SUCCESS',
  FETCH_GIFT_CARD_ERROR = 'FETCH_GIFT_CARD_ERROR',
}

interface FetchGiftCardAction {
  type: GiftCardActionTypes.FETCH_GIFT_CARD;
}

interface FetchGiftCardSuccessAction {
  type: GiftCardActionTypes.FETCH_GIFT_CARD_SUCCESS;
  payload: any[];
}

interface FetchGiftCardErrorAction {
  type: GiftCardActionTypes.FETCH_GIFT_CARD_ERROR;
  payload: string;
}

export type GiftCardAction = FetchGiftCardAction | FetchGiftCardSuccessAction | FetchGiftCardErrorAction;
