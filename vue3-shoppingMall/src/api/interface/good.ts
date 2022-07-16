import {BasePage} from './base'

export interface GoodsListResp {
    id: number,
    productImg: string,
    productName: string,
    productPrice: number,
}

export interface GoodsListParam extends BasePage {
    
    price: string,
    productName: string
}