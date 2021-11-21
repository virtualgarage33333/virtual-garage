export const getSavedItemIds = () => {
  const savedItemIds = localStorage.getItem('saved_items')
    ? JSON.parse(localStorage.getItem('saved_items'))
    : [];

  return savedItemIds;
};

export const saveItemIds = (itemIdArr) => {
  if (itemIdArr.length) {
    localStorage.setItem('saved_items', JSON.stringify(itemIdArr));
  } else {
    localStorage.removeItem('saved_items');
  }
};

export const removeItemId = (itemId) => {
  const savedItemIds = localStorage.getItem('saved_items')
    ? JSON.parse(localStorage.getItem('saved_items'))
    : null;

  if (!savedItemIds) {
    return false;
  }

  const updatedSavedItemIds = savedItemIds?.filter((savedItemId) => savedItemId !== itemId);
  localStorage.setItem('saved_items', JSON.stringify(updatedSavedItemIds));

  return true;
};
