export default (oldItems, newItem) => {
  const existedItem = oldItems.find(item => item.id === newItem.id);
  if (existedItem) {
    return oldItems.map(item => {
      if (item.id === newItem.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
  }
  return [...oldItems, { ...newItem, quantity: 1 }];
};
