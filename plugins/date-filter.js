import Vue from 'vue'

const dateFilter = value => {
  return formatDate(value);
};

function formatDate(inputDate) {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = ("00" + (date.getMonth() + 1)).slice(-2);
  const day = ("00" + date.getDate()).slice(-2);
  const formattedDate = `${year}.${month}.${day}`;
  return formattedDate;
}

Vue.filter('date', dateFilter)
