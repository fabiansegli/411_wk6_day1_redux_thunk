import React from "react";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import Menu from "@material-ui/core/Menu";
import {
  Button,
  Container,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";

const Import = props => {
    
  return (
    <div>
      <Container style={{ marginTop: "40px" }}>
        <Button onClick={props.fetchMakes} variant="contained" color="primary">
          Import
        </Button>
        <h2>Count: {props.makes.length}</h2>
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">Make</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {props.makes.map((make, index) => {
            return (
              <TableRow key={make.MakeId}>
                <TableCell align="left">{make.MakeId}</TableCell>
                <TableCell align="left">{make.MakeName}</TableCell>
                <TableCell align="left">
                  <DeleteForeverOutlinedIcon
                    className="delete-button"
                    onClick={() => props.deleteMake(index)}
                  />
                  <Menu />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Container>
    </div>
  );
};

export default Import;
