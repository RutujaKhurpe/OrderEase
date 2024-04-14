import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';



import './Dishes.css';
const MyTable = () => {
  const [editableRowId, setEditableRowId] = useState(null);
  const [editedRows, setEditedRows] = useState({});
  const [dishes, setDishes] = useState([])
  const [dish, setDish] = useState({
    Diet :"",
    Category: "",
    dish_name: "",
    Summary: "",
    Price: "",
  })
  const [newlyAddedRowIndex, setNewlyAddedRowIndex] = useState(null);



  useEffect(() => {
    // Fetch data from backend when component mounts
    axios.get('http://localhost:3008/DisplayDish')
      .then(response => {
        setDishes(response.data); // Update state with fetched data
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  const handleAddDish = () => {
    // Remove the 'image' property from the dish object
  
    axios.post('http://localhost:3008/addDish', dish)
      .then(() => {
        axios.get('http://localhost:3008/DisplayDish')
          .then(response => {
            setDishes(response.data);
            console.log(response.data)
            setDish({
              Diet :"",
              Category: "",
              dish_name: "",
              Summary: "",
              Price: "",
            });
            // Reset newlyAddedRowIndex after 2 seconds
            setTimeout(() => {
              setNewlyAddedRowIndex(null);
            }, 2000);
          })
          .catch(error => {
            console.error('There was an error fetching updated dishes:', error);
          });
      })
      .catch(error => {
        console.error('There was an error adding the dish:', error);
      });
  }
  

  //claud ai
  // const handleAddDish = () => {
  //   const formData = new FormData();
  //   formData.append('image', imageFile); // Append the image file
  //   formData.append('Category', dish.Category);
  //   formData.append('dish_name', dish.dish_name);
  //   formData.append('Summary', dish.Summary);
  //   formData.append('Price', dish.Price);
  
  //   axios.post('http://localhost:3008/addDish', formData, {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   })
  //     .then(() => {
  //       axios.get('http://localhost:3008/DisplayDish')
  //         .then(response => {
  //           const previousDishes = [...dishes];
  //           setDishes(response.data);
  //           const newIndex = response.data.findIndex(item => !previousDishes.some(prevItem => prevItem.Id === item.Id));
  //           setNewlyAddedRowIndex(newIndex);
  //           setDish({
  //             image: '',
  //             Category: "",
  //             dish_name: "",
  //             Summary: "",
  //             Price: "",
  //           });
  //           setImageFile(null); // Reset the imageFile state
  
  //           setTimeout(() => {
  //             setNewlyAddedRowIndex(null);
  //           }, 2000);
  //         })
  //         .catch(error => {
  //           console.error('there was an error fetching updated dishes!', error);
  //         });
  //     })
  //     .catch(error => {
  //       console.log('there was an error adding the dish', error);
  //     });
  // };
  const rows = [
    { Id: 1, Diet :"VEG",category: 'Main Course', dish_name: 'Spaghetti Carbonara', Price: '$12.99', Summary: 'Pasta with bacon, eggs, and cheese' },
    { Id: 2, Diet :"Nonveg",category: 'Appetizer', dish_name: 'Caesar Salad', Price: '$7.99', Summary: 'Romaine lettuce, croutons, parmesan cheese, and Caesar dressing' },

  ];

  const handleEditClick = (rowId) => {
    setEditableRowId(rowId);
    const editedRow = rows.find(row => row.Id === rowId);
    setEditedRows({ ...editedRows, [rowId]: editedRow });
  };

  const handleSaveClick = (rowId) => {
    // Save edited row data to backend or update data source
    // For demonstration purposes, we'll just log the edited row
    console.log('Edited row:', editedRows[rowId]);
    setEditableRowId(null);
    setEditedRows({});
  };

  const handleInputChange = (e, field, rowId) => {
    const { value } = e.target;
    const editedRow = { ...editedRows[rowId], [field]: value };
    setEditedRows({ ...editedRows, [rowId]: editedRow });
  };

  return (
    <div style={{ wIdth: '100%' }}>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', wIdth: '100%' }}>

      <TextField
          style={{ wIdth: '220px' }}
          label="Diet"
          variant="outlined"
          autoComplete
          // fullWIdth 
          value={dish.Diet}
          onChange={(e) => setDish({ ...dish, Diet: e.target.value })}
        />
        <TextField
          style={{ wIdth: '220px' }}
          label="Category"
          variant="outlined"
          autoComplete
          // fullWIdth 
          value={dish.Category}
          onChange={(e) => setDish({ ...dish, Category: e.target.value })}
        />
        <TextField style={{ wIdth: '250px' }}
          label="Enter Dish"
          variant="outlined"
          fullWIdth
          value={dish.dish_name}
          onChange={(e) => setDish({ ...dish, dish_name: e.target.value })}
        />

        <TextField style={{ wIdth: '120px' }}
          label="Enter Price"
          variant="outlined"
          fullWIdth
          value={dish.Price}
          onChange={(e) => setDish({ ...dish, Price: e.target.value })}
        />
        <TextField style={{ wIdth: '250px' }}
          label="Enter Summary"
          variant="outlined"
          fullWIdth
          value={dish.Summary}
          onChange={(e) => setDish({ ...dish, Summary: e.target.value })}
        /><br />
       

        <Stack>
          <Button variant="contained" color="primary" style={{ marginTop: '10px' }} onClick={handleAddDish}>
            Add Dish <AddIcon />
          </Button>
        </Stack>
      </div>



      <TableContainer component={Paper} style={{ wIdth: '100%' }}>
        <Table aria-label="simple table">
          <TableHead style={{ position: 'sticky', top: 0, zIndex: 1, backgroundColor: 'lightpink' }}>
            <TableRow style={{ backgroundColor: 'lightpink' }}>
              <TableCell>Id</TableCell>
              <TableCell>Diet</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Dish</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Summary</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dishes.map((row, index) => (
              <TableRow key={row.Id} className={newlyAddedRowIndex === index ? "newly-added-row" : ""}>
                <TableCell>{row.Id}</TableCell>
                
                <TableCell>
                  {editableRowId === row.Id ? (
                    <TextField
                      value={editedRows[row.Id]?.Diet || row.Diet}
                      onChange={(e) => handleInputChange(e, 'Diet', row.Id)}
                    />
                  ) : (
                    row.Diet
                  )}
                </TableCell>

                <TableCell>
                  {editableRowId === row.Id ? (
                    <TextField
                      value={editedRows[row.Id]?.category || row.Category}
                      onChange={(e) => handleInputChange(e, 'Category', row.Id)}
                    />
                  ) : (
                    row.Category
                  )}
                </TableCell>
                <TableCell>
                  {editableRowId === row.Id ? (
                    <TextField
                      value={editedRows[row.Id]?.dish_name || row.dish_name}
                      onChange={(e) => handleInputChange(e, 'dish_name', row.Id)}
                    />
                  ) : (
                    row.dish_name
                  )}
                </TableCell>
                <TableCell>
                  {editableRowId === row.Id ? (
                    <TextField
                      value={editedRows[row.Id]?.Price || row.Price}
                      onChange={(e) => handleInputChange(e, 'Price', row.Id)}
                    />
                  ) : (
                    row.Price
                  )}
                </TableCell>
                <TableCell>
                  {editableRowId === row.Id ? (
                    <TextField
                      value={editedRows[row.Id]?.Summary || row.Summary}
                      onChange={(e) => handleInputChange(e, 'Summary', row.Id)}
                    />
                  ) : (
                    row.Summary
                  )}
                </TableCell>
                <TableCell>
                  {editableRowId === row.Id ? (
                    <Button variant="contained" color="primary" onClick={() => handleSaveClick(row.Id)}>Save</Button>
                  ) : (
                    <Button variant="contained" color="primary" onClick={() => handleEditClick(row.Id)}>Edit</Button>
                  )}
                  <Button variant="contained" color="secondary" style={{ marginLeft: '10px' }} onClick={() => handleSaveClick(row.Id)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyTable;