((columnTitle) => {
  if (columnTitle.length === 1) return columnTitle.charCodeAt(0) - 64;
  let response = 0;
  while (columnTitle.length > 0) {
    response += columnTitle.charCodeAt(0) - 64;
    columnTitle = columnTitle.slice(1);
    if (columnTitle.length !== 0) {
      response = 26 * response;
    }
  }
  return response;
})("AHEI");
