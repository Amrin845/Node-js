// const name = "Amrin Parvin";
// module.exports = name;

const name = "Amrin Parvin";
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const emp = {
  id: 1001,
  name: "Amrin Parvin",
  dsg: "Trainer",
  salary: 20000,
  city: "Patna",
  state: "Bihar",
};
function display() {
  console.log("In display function of test module");
}

class Test {
  show() {
    console.log("In show() method of Test Class of test Module");
  }
}
// const obj = new Test()

module.exports = {
  name: name,
  arr: arr,
  emp: emp,
  display: display,
  obj: new Test(),
};
