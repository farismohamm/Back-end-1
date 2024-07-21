const fs = require("fs");

const addPrson = (id, fname, lname, city, age) => {
  const allData = loadInfo();

  const dplicatedData = allData.filter((obj) => {
    return obj.id === id;
  });
  if (dplicatedData.length === 0) {
    allData.push({
      id: id,
      fname: fname,
      lname: lname,
      city: city,
      age: age,
    });
    savealldata(allData);
  } else {
    console.log("error dplicatedData".toUpperCase());
  }
};
const loadInfo = () => {
  try {
    const datajson = fs.readFileSync("datal11.json").toString();

    return JSON.parse(datajson);
  } catch {
    return [];
  }
};

const savealldata = (allData) => {
  const savaalDatajson = JSON.stringify(allData);
  fs.writeFileSync("datal11.json", savaalDatajson);
};
const deleteData = (id) => {
  const allData = loadInfo();
  const dataTokeep = allData.filter((obj) => {
    return obj.id !== id;
  });
  console.log(dataTokeep);
  savealldata(dataTokeep);
};
const readData = (id) => {
  const allData = loadInfo();
  const itemNeeded = allData.find((obj) => {
    return obj.id == id;
  });

  if (itemNeeded) {
    console.log(itemNeeded);
  } else {
    console.log("ID NEEDED NOT FOUND");
  }
};
const listData= ()=>{
const allData= loadInfo();

allData.forEach((obj) =>{
console.log(obj.fname, obj.city)
})

}
module.exports = {
  addPrson,
  deleteData,
  readData,
  listData
};
