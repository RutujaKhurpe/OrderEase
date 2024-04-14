import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper , Button} from '@material-ui/core';
import Navbar from './NavBar';
import Quantity from '../tabs/Quantity';


const Orders = () => {

  const rows = [
    { Id: 1, dish_name: 'Main Course', Quantity: 'Spaghetti Carbonara' },
    { Id: 2, dish_name: 'Appetizer', Quantity: 'Caesar Salad' },
    { Id: 3, dish_name: 'Dessert', Quantity: 'Chocolate Cake' },
    { Id: 4, dish_name: 'Beverage', Quantity: 'Iced Tea'},
    // Add more rows as needed
  ];
  
  return (
    <>
    <Navbar/>
    <div style={{width :'100%', marginTop: '90px'}}>
      
  <h2>Your orders are listed below</h2>
    <TableContainer component={Paper} style={{width :'100%'}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor : '#016064',  color:'white'}}>
            <TableCell style={{color: 'white'}}>Id</TableCell>
            <TableCell style={{color: 'white'}}>Dish name</TableCell>
            <TableCell style={{color: 'white'}}>Quantity</TableCell>
            <TableCell style={{color: 'white'}}>Actions</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Replace this with your actual data */}
          {rows.map((row) => (
            <TableRow key={row.Id}>
              <TableCell>{row.Id}</TableCell>
              <TableCell>{row.dish_name}</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>
                {/* <Button variant="contained" color="primary" onClick={() => handleUpdate(row.id)}>Update</Button>
                <Button variant="contained" color="secondary" onClick={() => handleDelete(row.id)}>Delete</Button> */}
                <Button variant="contained"  style={{marginRight:'10px', color:'green'}}>Place Order</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  );
};

export default Orders;
