import {sortString} from 'real-estate-utils'

const countryOptions = [
    { key: 'tr', value: 'Turkey', flag: 'tr', text: 'Turkey', number:"+90"},
    { key: 'dz', value: 'Algeria', flag: 'dz', text: 'Algeria',  number:"+213"},
    { key: 'bh', value: 'Bahrain', flag: 'bh', text: 'Bahrain', number:"+973"},
    { key: 'eg', value: 'Egypt', flag: 'eg', text: 'Egypt', number:"+2" },
    { key: 'ir', value: 'Iran', flag: 'ir', text: 'Iran', number:"+98" },
    { key: 'iq', value: 'Iraq', flag: 'iq', text: 'Iraq',number:"+964" },
    { key: 'jo', value: 'Jordan', flag: 'jo', text: 'Jordan',number:"+962" },
    { key: 'kw', value: 'Kuwait', flag: 'kw', text: 'Kuwait' ,number:"+965"},
    { key: 'lb', value: 'Lebanon', flag: 'lb', text: 'Lebanon' ,number:"+961"},
    { key: 'ly', value: 'Libya', flag: 'ly', text: 'Libya' ,number:"+218"},
    { key: 'ma', value: 'Morocco', flag: 'ma', text: 'Morocco' ,number:"+212"},
    { key: 'om', value: 'Oman', flag: 'om', text: 'Oman' ,number:"+968"},
    { key: 'qa', value: 'Qatar', flag: 'qa', text: 'Qatar' ,number:"+974"},
    { key: 'sa', value: 'Saudi', flag: 'sa', text: 'Saudi Arabia' ,number:"+966"},
    { key: 'sd', value: 'Sudan', flag: 'sd', text: 'Sudan' ,number:"+249"},
    { key: 'sy', value: 'Syria', flag: 'sy', text: 'Syria' ,number:"+963"},
    { key: 'tn', value: 'Tunisia', flag: 'tn', text: 'Tunisia' ,number:"+216"},
    { key: 'ae', value: 'U.A.E.', flag: 'ae', text: 'U.A.E.' ,number:"+971"},
    { key: 'ye', value: 'Yemen', flag: 'ye', text: 'Yemen' ,number:"+969"},

]
export default sortString(countryOptions,'text')