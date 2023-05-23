import emojiList from "../charInfo/emojiList.json";

 export interface ICard {
    title: string;
    symbol: string;
    keywords: string;
 }

 export const emojiLists: ICard[] = emojiList;

 