enum PhoneType {
  Home = 'home',
  Office = 'office',
  Studio = 'studio',
}
interface PhoneNumberDictionary {
  // 여러개의 키 수용을 위함
  [phone: string]: {
    num: number;
  };
}
interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

export { Contact, PhoneType };
