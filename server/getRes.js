const calcCrow = require('./calcCrow')
const allData = require('./addresses.json');

function getResult(lat1, lon1, limit) {
  const res = [];
  limit = Number(limit); // mile radius
  
  let rowObj;
  for (let i = 0; i < allData.length; i += 1) {
    rowObj = allData[i];
    const dist =  calcCrow(lat1, lon1, rowObj['LATITUDE'], rowObj['LONGITUDE']);

    if (dist <= limit) res.push(rowObj);
  }
  
  return res;
}

module.exports = getResult;
