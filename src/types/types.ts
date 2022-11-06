export interface IFaq {
  id: number,
  question: string,
  answer: string
}

export interface Item {
  name: string,
  img: string,
  price: number,
  id: number,
  count: number,
  initPrice: number
}

export interface SoloItemType {
  id: number,
  price: number,
  name: string,
  img: string
}
