interface Item<T> {
  value: T;
  selected: boolean;
}


const emails: Item<string> [] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts: Item<number> [] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem (item: Item<string | number>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email: Item<string>) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});
// NOTE: 이메일 드롭 다운 아이템 추가
numberOfProducts.forEach(function (product: Item<number>) {
  const item = createDropdownItem(product);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});
