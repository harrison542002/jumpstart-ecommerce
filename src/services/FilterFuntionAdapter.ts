export const onFiltering = (
  value: string,
  checked: boolean,
  type: any,
  setType: any
) => {
  if (checked) {
    type != null ? setType(type + value) : setType(value);
  } else {
    if (type) {
      setType(type.replace(value, ""));
    }
  }
};

export const onFilteringForPrice = (
  value: string,
  checked: boolean,
  type: any,
  setType: any
) => {
  if (checked) {
    setType(value);
  } else {
    if (type) {
      setType(type.replace(value, ""));
    }
  }
};

export const onFilteringWithPrice = (
  value: string,
  lowPrice: any,
  setLowPrice: any,
  highPrice: any,
  setHighPrice: any,
  checked: boolean
) => {
  const valuelowPrice = value.split(",")[0];
  const valuehighPrice = value.split(",")[1] || null;
  onFilteringForPrice(valuelowPrice, checked, lowPrice, setLowPrice);
  if (valuehighPrice) {
    onFilteringForPrice(valuehighPrice, checked, highPrice, setHighPrice);
  }
  return;
};
