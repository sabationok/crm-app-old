//  ! масив обєктів аля з бази даних
let ordersArray = [
  {
    date: '01.05.2021',
    orderNum: '002025',
    ttnList: [123456123, 123456132],
    col4: '---',
    col5: '---',
    col6: '---',
    col7: '---',
    col8: '---',
    col9: '---',
    col10: '---',
  },
  {
    date: '02.05.2021',
    orderNum: '002425',
    ttnList: [46513215, 123456132],
    col4: '---',
    col5: '---',
    col6: '---',
    col7: '---',
    col8: '---',
    col9: '---',
    col10: '---',
  },
  {
    date: '06.05.2021',
    orderNum: '002225',
    ttnList: [456256123, 123454132],
    col4: '---',
    col5: '---',
    col6: '---',
    col7: '---',
    col8: '---',
    col9: '---',
    col10: '---',
  },
  {
    date: '01.05.2021',
    orderNum: '005025',
    ttnList: [123456123, 123456132],
    col4: '---',
    col5: '---',
    col6: '---',
    col7: '---',
    col8: '---',
    col9: '---',
    col10: '---',
  },
  {
    date: '02.05.2021',
    orderNum: '002425',
    ttnList: [123456123, 123456132],
    col4: '---',
    col5: '---',
    col6: '---',
    col7: '---',
    col8: '---',
    col9: '---',
    col10: '---',
  },
  {
    date: '06.05.2021',
    orderNum: '002525',
    ttnList: [128456123, 123454132],
    col4: '---',
    col5: '---',
    col6: '---',
    col7: '---',
    col8: '---',
    col9: '---',
    col10: '---',
  },
  {
    date: '01.05.2021',
    orderNum: '002025',
    ttnList: [123456123, 123456132],
    col4: '---',
    col5: '---',
    col6: '---',
    col7: '---',
    col8: '---',
    col9: '---',
    col10: '---',
  },
  {
    date: '02.05.2021',
    orderNum: '002425',
    ttnList: [123456123, 123456132],
    col4: '---',
    col5: '---',
    col6: '---',
    col7: '---',
    col8: '---',
    col9: '---',
    col10: '---',
  },
  {
    date: '06.05.2021',
    orderNum: '002225',
    ttnList: [128456123, 123454132],
    col4: '---',
    col5: '---',
    col6: '---',
    col7: '---',
    col8: '---',
    col9: '---',
    col10: '---',
  },
  {
    date: '01.05.2021',
    orderNum: '002025',
    ttnList: [123456123, 123456132],
    col4: '---',
    col5: '---',
    col6: '---',
    col7: '---',
    col8: '---',
    col9: '---',
    col10: '---',
  },
  {
    date: '02.05.2021',
    orderNum: '002425',
    ttnList: [123456123, 123456132],
    col4: '---',
    col5: '---',
    col6: '---',
    col7: '---',
    col8: '---',
    col9: '---',
    col10: '---',
  },
  {
    date: '06.05.2021',
    orderNum: '002225',
    ttnList: [128456123, 123454132],
    col4: '---',
    col5: '---',
    col6: '---',
    col7: '---',
    col8: '---',
    col9: '---',
    col10: '---',
  },

];

const ordersBlock = document.querySelector('.block.--orders ');
console.log(ordersBlock);
const ordersOverflow = document.querySelector('.--orders .block__overflow');
console.log(ordersOverflow);
const ordersTable = document.querySelector('.table.--orders .tbody');
console.log(ordersTable);

const createTableRow = ({
  date = '---',
  orderNum = '---',
  ttnList = '---',
  col4 = '---',
  col5 = '---',
  col6 = '---',
  col7 = '---',
  col8 = '---',
  col9 = '---',
  col10 = '---',
  ...others
} = {}) => {

  const ttnListStr = ttnList.join(', ');
  return `
  <tr class="row">
    <td class="col --1" data-tittle="date">${date}</td>
    <td class="col --2" data-tittle="orderNum">${orderNum}</td>
    <td class="col --3" data-tittle="ttnList">${ttnListStr}</td>
    <td class="col --4" data-tittle="">${col4}</td>
    <td class="col --5" data-tittle="">${col5}</td>
    <td class="col --6" data-tittle="">${col6}</td>
    <td class="col --7" data-tittle="">${col7}</td>
    <td class="col --8" data-tittle="">${col8}</td>
    <td class="col --9" data-tittle="">${col9}</td>
    <td class="col --10" data-tittle="">${col10}</td>
  </tr>`;
};

const tableRowsArray = ordersArray.map((el, idx, arr) => {
  return createTableRow(el);
});

console.log(tableRowsArray);
console.log(tableRowsArray.join(''));

// Вставка елементів на сторінку
// galleryListEl.innerHTML = galleryCardsArr.join('');
ordersTable.insertAdjacentHTML('afterbegin', tableRowsArray.join(''));
