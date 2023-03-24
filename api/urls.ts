export const helsinkiPostalCode = "00930";
export const espooPostalCode = "02100";
export const vantaaPostalCode = "01730";

export const urls = [
  `http://avoindata.prh.fi/opendata/bis/v1?totalResults=false&maxResults=10&resultsFrom=10&streetAddressPostCode=${helsinkiPostalCode}&companyRegistrationFrom=2014-02-28`,
  `http://avoindata.prh.fi/opendata/bis/v1?totalResults=false&maxResults=10&resultsFrom=10&streetAddressPostCode=${vantaaPostalCode}&companyRegistrationFrom=2014-02-28`,
  `http://avoindata.prh.fi/opendata/bis/v1?totalResults=false&maxResults=10&resultsFrom=10&streetAddressPostCode=${espooPostalCode}&companyRegistrationFrom=2014-02-28`,
];
