/**
 * 年月日の文字列を返す
 *
 * @param inputDate
 * @returns
 */
export const formatDate = (inputDate: string) => {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = ("00" + (date.getMonth() + 1)).slice(-2);
    const day = ("00" + date.getDate()).slice(-2);
    const formattedDate = `${year}.${month}.${day}`;
    return formattedDate;
}
