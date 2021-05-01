import { Currency } from './../models/currency';
export class AppConstants {
    static favLsKey = 'fav';
    static loggedInCookieName = 'isloggedin';
    static defaultSelection: Currency[] = [
        {
            currencyAbbr: 'MYR',
            sortNo: 0,
            convertedValue: 0,
            currencyDesc: '',
            rateToBase: 0
        },
        {
            currencyAbbr: 'SGD',
            sortNo: 1,
            convertedValue: 0,
            currencyDesc: '',
            rateToBase: 0
        },
        {
            currencyAbbr: 'THB',
            sortNo: 2,
            convertedValue: 0,
            currencyDesc: '',
            rateToBase: 0
        },
        {
            currencyAbbr: 'IDR',
            sortNo: 3,
            convertedValue: 0,
            currencyDesc: '',
            rateToBase: 0
        },
        {
            currencyAbbr: 'AUD',
            sortNo: 4,
            convertedValue: 0,
            currencyDesc: '',
            rateToBase: 0
        }
    ]
}
