export const formatDate = (inputDate?: string) => {
  if (!inputDate) {
    return "";
  }

  const date = new Date(inputDate);

  if (Number.isNaN(date.getTime())) {
    return inputDate;
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
};
