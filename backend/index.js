const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./model');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/sveltos')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

app.post("/add-product", async (req, resp) => {
  try {
    let user = new User(req.body);
    let result = await user.save();
    resp.send(result);
    console.log(result);
  } catch (error) {
    resp.status(500).send(error.message);
  }
});

app.get("/products", async (req, resp) => {
  try {
    let users = await User.find();
    resp.send(users);
  } catch (error) {
    resp.status(500).send(error.message);
  }
});

app.put("/product/:id", async (req, resp) => {
  try {
    let result = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    resp.send(result);
  } catch (error) {
    resp.status(500).send(error.message);
  }
});

app.delete("/product/:id", async (req, resp) => {
  try {
    const result = await User.deleteOne({ _id: req.params.id });
    resp.send(result);
  } catch (error) {
    resp.status(500).send(error.message);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));















// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors')
// const User = require('./model');

// const app = express();
// app.use(express.json());
// app.use(cors());

// // Connect to the database
// mongoose.connect('mongodb://127.0.0.1:27017/sveltos')
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Error connecting to MongoDB:', err));

// app.post("/add-product", async (req, resp) => {
//   try {
//     let user = new User(req.body);
//     let result = await user.save();
//     resp.send(result);
//     console.log(result)
//   } catch (error) {
//     resp.status(500).send(error.message);
//   }
// });

// app.get("/products", async (req, resp) => {
//   try {
//     let users = await User.find();
//     resp.send(users);
//   } catch (error) {
//     resp.status(500).send(error.message);
//   }
// });

// app.put("/product/:id" , async (req,resp)=>{
//   let result = await User.updateOne(
//     {_id: req.params.id},
//     {
//       $set : req.body
//     }
//   )
//   resp.send(result)
// })

// app.delete("/product/:id", async (req,resp)=>{
//   resp.send(req.params.id);
//   const result = await User.deleteOne({_id:req.params.id})
//   resp.send(result);
// })


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // const express = require('express');
    // require('./db')
    // const User = require('./model');

    // const app = express();
    // app.use(express.json());


    // app.post("/add-Product", async (req, resp) => {
    // let user = new User(req.body);
    // let result = await user.save();
    // resp.send(result)
    // })

    // app.get("/products", async (req,resp)=>{
    // let user = await User.find();
    // resp.send(user);
    // })

    // app.listen(5000);
