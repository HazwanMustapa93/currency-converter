import { Currency } from '../../models/currency';
import { getLocalStorage } from './browser-storage-functions';

/** Get saved currencies from local storage */
export function getSelectedList(localStorageKey = 'fav') {
    const selected: Currency[] = JSON.parse(getLocalStorage(localStorageKey));

    return selected;
}

export function massageSelectedList(alLCurrencyList: Currency[], selectedList: Currency[]) {
    selectedList = alLCurrencyList
    .filter(a => selectedList.find(b => b.currencyAbbr === a.currencyAbbr))
    .map(a =>
      {
        a.sortNo = selectedList.find(b => b.currencyAbbr === a.currencyAbbr).sortNo;
        return a;
      })
    .sort((a, b) => a.sortNo - b.sortNo);

    const unSelectedList = alLCurrencyList.filter(a => !selectedList.find(b => b.currencyAbbr === a.currencyAbbr));

    return {
        selectedList,
        unSelectedList
    };
}