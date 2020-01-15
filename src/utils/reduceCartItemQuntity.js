export default (allCartItems, id) => {
  const existedCartItem = allCartItems.find(item => item.id === id);
  if (existedCartItem.quantity === 1) {
    return allCartItems.filter(item => item.id !== id);
  }
  return allCartItems.map(item => {
    if (item.id === id) {
      return { ...item, quantity: item.quantity - 1 };
    } else {
      return item;
    }
  });
};
