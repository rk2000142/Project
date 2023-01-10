exports.companyNewSchema = require("./companyNew");
exports.companyUpdateSchema = require("./companyUpdate");
exports.jobNewSchema = require("./jobNew");
exports.jobUpdateSchema = require("./jobUpdate");
exports.userAuthSchema = require("./userAuth");
exports.userNewSchema = require("./userNew");
exports.userUpdateSchema = require("./userUpdate");

app.use(bodyParser.json());
app.use(multer().any()); 
app.use(bodyParser.urlencoded({ extended: true }));

//------------------- Connection Establishment Between Application and Database -------------------//
mongoose.connect("mongodb+srv://rohit_sonawane:*****@cluster0.e9hjfiy.mongodb.net/group60Database",
    { useNewUrlParser: true,})
  .then(() => console.log("MongoDb is connected!"))
  .catch((err) => console.log(err));

  
app.use("/", route);

app.use("*", (req, res) => {
  return res
    .status(400)
    .send({ status: false, message: "please enter valid url endpoint" });
});

//------------------- Server Configuration -------------------//

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
