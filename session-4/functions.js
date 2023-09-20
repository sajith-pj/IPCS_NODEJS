function printName(name = "defaultNAme") {
  console.log(name);
}

// const printUser = function (user) {
//   console.log(user);
// };

(function (user) {
  console.log(user);
})({ name: "Sajith" });

printName();
printUser({
  name: "Sajith",
  age: "27",
});

const printUser = (user = { name: "Sajith" }) => {
  console.log(user);
};

printUser();
