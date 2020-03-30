import * as React from 'react';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';

import {Ingredient} from '../Ingredient';

export const IngredientRow = (props: {
  ingredient: Ingredient;
  onPercentChange: any;
  onAmountChange: any;
}) => {
  const onPercentChange = (event: any) => {
    const newPercent: number = event.target.value;
    props.onPercentChange(props.ingredient.name, newPercent);
  };

  const onAmountChange = (event: any) => {
    const newAmount: number = event.target.value;
    props.onAmountChange(props.ingredient.name, newAmount);
  };

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {props.ingredient.name}
        {props.ingredient.name !== 'flour' && <button>remove</button>}
      </TableCell>
      <TableCell align="right">
        {props.ingredient.name === 'flour' ?
          <p>100</p>:
          <TextField
            id="filled-basic"
            type="number"
            inputProps={{min: '1', max: '100', step: '1'}}
            label="Percent"
            onChange={onPercentChange}
            value={props.ingredient.percent}
          />}
      </TableCell>
      <TableCell align="right">
        {props.ingredient.name === 'flour' ?
          <TextField
            id="filled-basic"
            type="number"
            inputProps={{min: '0', step: '0.5'}}
            label="Amount"
            onChange={onAmountChange}
            value={props.ingredient.amount}
          />:
          <p>{props.ingredient.amount.toFixed(2)}</p>
        }
      </TableCell>
    </TableRow>
  );
};
