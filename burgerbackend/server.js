const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

// const multer = require('multer');
// const path = require('path');
//variable for express
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json());

app.use(cors());
// app.use(express.static('public'))
//  app.use(express.json())
 
//  const storage = multer.diskStorage({
//   destination :(req,file,cb) =>{
//     cb(null, 'public/images')
//   },
//   filename:(req,file,cb) =>{
//     cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname))
//   }
//  })

//  const upload = multer({
//   storage : storage
//  })
 

const db = mysql.createConnection({
    host: "localhost",
    user: "rutuja2",
    password: '123',
    database: "resto"
});

//this is for disaply dishes 
app.get("/DisplayDish", (req, res) => {
    const sql = "SELECT Id, Diet, Category, dish_name, Price, Summary FROM `dish` ORDER BY `dish`.`Id` DESC";
    db.query(sql, (err, result) => {
        if (err) {
            console.log("error executing", err);
            // return res.status(500).json({ error: 'internal server Error', details: err.message });
        }else{
            res.send(result)
        }
        // return res.json(data);
    });
});

//get the dish details
app.get('/getDishDetails/:id', (req, res) => {
  const dishId = req.params.id;
  const sql = "SELECT Id, Diet, Category, dish_name, Price, Summary FROM `dish` WHERE Id = ?";
  db.query(sql, [dishId], (err, result) => {
      if (err) {
          console.log("error executing", err);
          return res.status(500).json({ error: 'Internal Server Error', details: err.message });
      } else {
          if (result.length > 0) {
              res.json(result[0]);
          } else {
              res.status(404).json({ message: 'Dish not found' });
          }
      }
  });
});





//this is chatgpt for convert image array to image link or urk
app.get("/displayFrontDish", (req, res) => {
  const sql = "SELECT Diet,  Category, dish_name, Summary, Price FROM dish";
  db.query(sql, (err, result) => {
      if (err) {
          console.log("Error executing query:", err);
          res.status(500).json({ error: 'Internal Server Error' });
      } else{
          res.send(result);
      }
  });
});

//addition of dosh module
// app.post('/addDish' ,(req, res) =>{
//   const Id           = req.body.Id;
//      const Diet = req.body.Dish;
//       const Category     =req.body.Category;
//       const dish_name       = req.body.dish_name;
//       const Summary        = req.body.Summary;
//      const Price     = req.body.Price;
  
//   db.query('INSERT INTO dish (Id,Diet,  Category,dish_name, Summary, Price ) VALUES (?,?,?,?,?,?)', 
//   [Id ,Diet, Category,dish_name, Summary, Price], 
//   (err, result) => {
//       if (err) {
//           console.log(err)
//           console.log("error inserting image");
//       }else{
//           res.send("values inserted");
//           console.log(result)
//       }

//       // return response.status(500).json({ error: 'internal server Error', details: err.message });
//       // return response.status(201).json(res);
//   });
// });

//addiotn of dishes
app.post('/addDish', (req, res) => {
  const { Diet, Category, dish_name, Summary, Price } = req.body;

  db.query('INSERT INTO dish (Diet, Category, dish_name, Summary, Price) VALUES (?, ?, ?, ?, ?)', [Diet, Category, dish_name, Summary, Price], (err, result) => {
      if (err) {
          console.error(err);
          res.status(500).send("Error inserting dish");
      } else {
          console.log(result);
          res.status(200).send("Dish inserted successfully");
      }
  });
});

//upPrice of resto
app.put('/upPrice', (req, res) => {
  
  const Id = req.body.Id;
  const {
    image,
    Category,
    dish_name,
    Summary,
    Price,
  } = req.body;

  const sql =
    'UPPrice resto SET  image = ?, Category = ?,dish_name=?, Summary = ?, Price = ? WHERE Id = ?';
  const values = [image, Category, dish_name,Summary, Price, Id];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error updating data:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
    //only send the request once
      res.send(result);
      
    
});
});
//delete of resto
app.delete('/delete', (req, res) => {
  const Id = req.body.Id;
  const sql = 'DELETE FROM resto WHERE Id = ?';

  db.query(sql, Id, (err, result) => {
    if (err) {
      console.error('Error deleting data:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    res.status(200).json({ success: true });
  });
});

app.listen(3008,()=>{
    console.log("3008 port running, yipee");
})

db.connect((err)=>{
    if (err){
        console.log("error connecting to mysql:", err.message);
        return;
    }
    console.log("connected to mySQL, yipeeee, 3008");
})

