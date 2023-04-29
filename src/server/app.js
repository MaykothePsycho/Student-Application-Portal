const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodedb"
});

connection.connect((err) => {
    if(err) {
        console.error('Error on database ', err);
        return;
    }
    console.log('Connected to the database');
});

app.post('/register', (req,res) => {

    const {email , password} = req.body;

    const query = "INSERT INTO user (email,password) VALUE (?,?)";
    
    connection.query(query, [email, password], (err,result) => {

        if(err){
            console.error("Error on database ", err);
            res.status(500).send({error: "Error when registering"});
            return;
        }
        res.status(200).send({message: "Registration is successful!"});

    })
    
});

app.post('/', (req,res) => {

    const {email, password} = req.body;

    const query = "SELECT * FROM user WHERE email=? AND password=?";

    connection.query(query, [email, password], (err, result) => {
        if(err){
            console.error("Error while controlling the information.", err);
            res.status(500).send({error: 'Error while controlling the information.'});
            return;
        }
        if(result.length > 0){
            const email = result[0].email;

            const isLoginQuery = "UPDATE user SET isLogin = 1 WHERE email=?";

            connection.query(isLoginQuery, email, (err,result) => {
                if(err){
                    console.error("Error while updating login information. ", err);
                    res.status(500).send({error: 'Login could not be updated'});
                }
            });

            res.status(200).send({message: '1', id: email});
        }else{
            res.status(200).send({message: '0'});
        }
        

    })



});


app.post('/signout', (req,res) => {

        const {id} = req.body;

        const query = "UPDATE user SET isLogin = 0 WHERE id_num=?";

        connection.query(query, [id], (err,result) => {
            if(err){
                console.error("Error at isLogin update.", err);
                res.status(500).send({error: 'Error at isLogin update.'});
                return;
            }
            
            res.status(200).send({message: 'User logout is updated.'});
        });

});

app.post('/change_password', (req, res) => {
  const { email, password } = req.body;

  const checkPasswordQuery = 'SELECT password FROM user WHERE email = ?';

  connection.query(checkPasswordQuery, [email], (err, result) => {
    if (err) {
      console.error('Error at password check.', err);
      res.status(500).send({ error: 'Something went wrong' });
      return;
    }

    if (result.length === 0) {
      res.status(401).send({ error: 'The current password is incorrect.' });
      return;
    }

    const userPassword = result[0].password;

    if (userPassword !== password) {
      res.status(401).send({ error: 'The current password is incorrect.' });
      return;
    }

    const updatePasswordQuery = 'UPDATE user SET password = ? WHERE email = ?';

    connection.query(updatePasswordQuery, [password, email], (err, result) => {
      if (err) {
        console.error('Error at password update.', err);
        res.status(500).send({ error: 'Something went wrong' });
        return;
      }

      res.status(200).send({ message: 'User password has been updated.' });
    });
  });
});

  
  

  app.post('/application', (req, res) => {
    const {
      idnumber,
      name,
      email,
      phone,
      dateOfBirth,
      nationality,
      gender,
      secondNationality,
      educationLevel,
      disability,
      disabilityType,
      address,
      university,
      dateOfGrad,
      gpa,
      documentType,
      documentName,
      documentFile
    } = req.body;
  
    const kontrolQuery = "SELECT * FROM application WHERE idnumber = ?";
    connection.query(kontrolQuery, [idnumber], (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send("An error occurred in the database connection.");
      }
  
      if (results.length > 0) {
        return res.status(400).send("A record with the same ID number already exists.");
      }
  
      const insertQuery =
        "INSERT INTO application (idnumber, name, email, phone, dateOfBirth, nationality, gender, secondNationality, educationLevel, disability, disabilityType, address, university, dateOfGrad, gpa, documentType, documentName, documentFile) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      connection.query(
        insertQuery,
        [
          idnumber,
          name,
          email,
          phone,
          dateOfBirth,
          nationality,
          gender,
          secondNationality,
          educationLevel,
          disability,
          disabilityType,
          address,
          university,
          dateOfGrad,
          gpa,
          documentType,
          documentName,
          documentFile
        ],
        (err, results) => {
          if (err) {
            console.error(err);
            return res.status(500).send("An error occurred in the database connection.");
          }
          
          console.log(results);
          return res.status(200).send("The application has been successfully received.");
        }
      );
    });
  });
  

app.post("/editapplication", (req,res) => {

    const user_id = req.body.id;

    const query = "SELECT * FROM application WHERE idnumber=?";

    connection.query(query, [user_id], (err,result) => {
        if(err){
            console.error("An error occurred while retrieving information from the database.", err);
            res.status(500).send({error: "An error occurred while retrieving information from the database."});
            return;
        }
        if(result.length===0){
            res.status(404).send({message: "Application Not Found."});
        }else{
            res.status(200).send({
                name: result[0].name, 
                phone: result[0].phone, 
                email: result[0].email,
                dateOfBirth: result[0].dateOfBirth,
                nationality: result[0].nationality,
                gender: result[0].gender,
                secondNationality: result[0].secondNationality,
                educationLevel: result[0].educationLevel,
                disability: result[0].disability,
                disabilityType: result[0].disabilityType,
                address: result[0].address,
                university: result[0].university,
                dateOfGrad: result[0].dateOfGrad,
                gpa: result[0].gpa,
                documentType: result[0].documentType,
                documentName: result[0].documentName,
                documentFile: result[0].documentFile,
              });
                
        }
       


    });



});



const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`The server is listening on ${PORT}`);
});



