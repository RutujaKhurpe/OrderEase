import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper , Button} from '@material-ui/core';


const MyTable = () => {

  const rows = [
    { id: 1, category: 'Main Course', dish: 'Spaghetti Carbonara', tableNo: '$12.99' },
    { id: 2, category: 'Appetizer', dish: 'Caesar Salad', tableNo: '$7.99' },
    { id: 3, category: 'Dessert', dish: 'Chocolate Cake', tableNo: '$6.99' },
    { id: 4, category: 'Beverage', dish: 'Iced Tea', tableNo: '$2.49' },
    // Add more rows as needed
  ];
  
  return (
    <div style={{width :'100%'}}>
      
  
    <TableContainer component={Paper} style={{width :'100%'}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow style={{backgroundColor : '#016064',  color:'white'}}>
            <TableCell style={{color: 'white'}}>Id</TableCell>
            <TableCell style={{color: 'white'}}>Category</TableCell>
            <TableCell style={{color: 'white'}}>Dish</TableCell>
            <TableCell style={{color: 'white'}}>TableNo</TableCell>
            <TableCell style={{color: 'white'}}>Actions</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Replace this with your actual data */}
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.dish}</TableCell>
              <TableCell>{row.tableNo}</TableCell> 
              <TableCell>
                {/* <Button variant="contained" color="primary" onClick={() => handleUpdate(row.id)}>Update</Button>
                <Button variant="contained" color="secondary" onClick={() => handleDelete(row.id)}>Delete</Button> */}
                <Button variant="contained"  style={{marginRight:'10px', color:'green'}}>orderComplete</Button>
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
