let promises = new Promise((resolve, reject) => {
  fetch("/url")
    .then((response) => {
      resolve();
    })
    .catch((err) => {
      reject(err);
    });
});

promises
  .then((response) => {})
  .catch((err) => {
    console.log(err);
  });

//  PENDING
//  FULLFILED
//  ERROR
