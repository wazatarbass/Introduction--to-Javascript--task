const myself = {
  firstName: "Adewale",
  lastName: "Lawal",
  height: "198cm",
  country: "Nigeria",
  getFullname: function () {
    console.log(this);
    return this.firstName + " " + this.lastName;
  },
};

console.log(myself.firstName);
console.log(myself.lastName);
console.log(myself.height);
console.log(myself.country);

// let fname = myself.getFullname();
// console.log(fname);

// console.log(user);
