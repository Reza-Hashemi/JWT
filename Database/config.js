const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/JWT", (error) => {
  if (error) {
    console.log(error);
    process.exit(1);
  }
});

mongoose.connection.on(`connected`, () => {
  console.log(`connected to Database`);
});
