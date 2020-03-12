import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import './Chart.css';

class IngredientData {
    name = '';
    percent = 0;
    weight = 0;
    volume = 0;
}

export function Chart() {
    const rows = [
        { 
            name: 'flour',
            percent: 100,
            weight: 1,
            volume: 1,
        } as IngredientData,
        { 
            name: 'water',
            percent: 20,
            weight: 3,
            volume: 3,
        } as IngredientData,
    ];

    return (
        <div className="chart-container">
            <TableContainer component={Paper}>
                <Table className="table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Ingredient</TableCell>
                            <TableCell align="right">Percent</TableCell>
                            <TableCell align="right">Weight</TableCell>
                            <TableCell align="right">Volume</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { rows.map(row => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">
                                    <TextField id="filled-basic" type="number" label="Percent" />
                                </TableCell>
                                <TableCell align="right">{row.weight}</TableCell>
                                <TableCell align="right">{row.volume}</TableCell>
                            </TableRow>
                        )) }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}