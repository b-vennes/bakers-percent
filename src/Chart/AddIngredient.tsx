import * as React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const AddIngredient = (props: {
  onAdd: any,
}): JSX.Element => {
  let name: string;
  let percent: number;

  const nameChanged = (event:any) => {
    name = event.target.value;
  };

  const percentChanged = (event:any) => {
    percent = event.target.value;
  };

  const addClicked = () => {
    if (name && percent) {
      props.onAdd(name, percent);
    }
  };

  return (
    <div>
      <h3>
        Add Ingredient
      </h3>
      <TextField
        label="Name"
        onChange={nameChanged}
      />
      <TextField
        label="Percent"
        type="number"
        onChange={percentChanged}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={addClicked}>
          Add
      </Button>
    </div>
  );
};