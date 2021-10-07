const mongooseClient = require('mongoose');

const mongoURI = "mongodb+srv://admin:admin@bankappcluster.hm90b.mongodb.net/BankApplicationDB?retryWrites=true&w=majority";

module.exports = {
  openConnection: function(){
    mongooseClient
        .connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log("Database connection succesfully!"))
        .catch((err) => console.log(err));
  }
}