const fs = require("fs");
// fs.writeFileSync("data1.text", "faris moammed");
// fs.appendFileSync("data1.text", " mohammed assam");
// console.log(fs.readFileSync("data1.text").toString());
// const Alldata = require("./allData");
// console.log(Alldata.fnme);
// console.log(Alldata.lnem);
// console.log(Alldata.city);
// console.log(Alldata.fun1(1,4))
// const validator = require("validator")
// console.log(validator.isEmail("mohammed"))
// console.log(validator.isEmail("mohammed@gamil.com"));
// const x = process.argv[2]
// // if(x === "add"){
// //     console.log("you have add an item")
// // }else if(x=== "delete"){
// //     console.log("youn have delete an item ")
// // }else{
// //     console.log("error")
// // }
const data10 = require("./data10");
const yargs = require("yargs");
const { type } = require("os");

yargs.command({
  command: "add",
  describe: "to add an item",
  builder: {
    fname: {
      describe: "this is the  first  name desc  and add itme",
      demandOption: false,
      type: "strang",
    },
    lname: {
      describe: "this is the  lest  name desc  and add itme",
      demandOption: false,
      type: "strang",
    },
  },
  handler: (x) => {
    data10.addPrson(x.id, x.fname, x.lname, x.city, x.age);
  },
});

yargs.command({
  command: "de",
  describe: "to delete an item",
  handler: (x) => {

    data10.deleteData(x.id);
  },
});

yargs.command({
  command: "read",
  describe: "to read an itme",
  builder: {
    id:{
  describe: "This is id descin read command",

  demandOption: true,
  type: "string"
},
       }
     , handler: (x) => {
  data10.readData(x.id)

}
   });

   yargs.command({
command:"list",
describe: "to list an itme",
// builder:{
//       fname: {
//       describe: "this is the  first  name desc  and add itme",
//       demandOption: false,
//       type: "strang",
//     },
//     city: {
//       describe: "this is the  lest  name desc  and add itme",
//       demandOption: false,
//       type: "strang",
//     },
// },
handler: ()=>{
  data10.listData()
}
   })
console.log(yargs.argv)

yargs.parse();