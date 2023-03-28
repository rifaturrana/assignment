const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
// const sample=require('./jsondata.json')
// const data=require('./models/data')
const app = express();
const data=require('./routes')
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(bodyparser.json());

app.use(bodyparser.urlencoded({ extended: true }));

dotenv.config();

app.use('/api/data',data)

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connected"))
    .catch((err) => {
    console.log("DB Connection Error: " + err.message);
    });


const port = process.env.PORT || 3001;

// const seedDatas = async () => {
//     try {
//       await data.deleteMany();
//       console.log("data are deleted");
//       await data.insertMany(sample);
//       console.log("data products are added.");
//       process.exit();
//     } catch (error) {
//       console.log(error.message);
//       process.exit();
//     }
//   };
  
//   seedDatas();

app.listen(port, () => {
  console.log("listening on port " + port);
});