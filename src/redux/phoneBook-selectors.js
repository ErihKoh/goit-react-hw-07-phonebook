export const getContacts = state => state.phoneBook.items;
export const getFilter = state => state.phoneBook.filter;

export const getVisibleContacts = state => {
  const items = getContacts(state);
  const filter = getFilter(state);
  const normalizeFilter = filter.toLowerCase();
  return items.filter(item => item.data.name.includes(normalizeFilter));
};
