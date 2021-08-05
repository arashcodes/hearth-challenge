const fs = require('fs');
const parse = require('csv-parse');

const csvFilePath = __dirname + '/addresses.csv';

const csvData=[];
fs.createReadStream(csvFilePath)
    .pipe(parse({delimiter: ','}))
    .on('data', function(csvrow) {
      
        rowObj = {
          'SALE TYPE': csvrow[0],
          'SOLD DATE': csvrow[1],
          'PROPERTY TYPE': csvrow[2],
          'ADDRESS': csvrow[3],
          'CITY': csvrow[4],
          'STATE OR PROVINCE': csvrow[5],
          'ZIP OR POSTAL CODE': csvrow[6],
          'PRICE': csvrow[7],
          'BEDS': csvrow[8],
          'BATHS': csvrow[9],
          'LOCATION': csvrow[10],
          'SQUARE FEET': csvrow[11],
          'LOT SIZE': csvrow[12],
          'YEAR BUILT': csvrow[13],
          'DAYS ON MARKET': csvrow[14],
          '$/SQUARE FEET': csvrow[15],
          'HOA/MONTH': csvrow[16],
          'STATUS': csvrow[17],
          'NEXT OPEN HOUSE START TIME': csvrow[18],
          'NEXT OPEN HOUSE END TIME': csvrow[19],
          'URL': csvrow[20],
          'SOURCE': csvrow[21],
          'MLS#': csvrow[22],
          'FAVORITE': csvrow[23],
          'INTERESTED': csvrow[24],
          'LATITUDE': csvrow[25],
          'LONGITUDE': csvrow[26],
        }

        csvData.push(rowObj);
      })
      .on('end',function() {
        const jsonFilePathName = __dirname + '/addresses.json';
        csvData.splice(0, 1);
        fs.writeFileSync(jsonFilePathName, JSON.stringify(csvData, null, 2), 'utf-8')
    });
