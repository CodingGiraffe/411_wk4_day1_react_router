import React from 'react'
import cars from '../cars.json'
// import material ui components here //
// Container, Paper, Chip //
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';

const Car = (props) => {

    let id = props.match.params.id

    return (
        <div>
            <Container maxWidth="sm">
                <Paper>
                    <h1>{cars[id-1].Name}</h1>
                    <Chip label={`Name: ${cars[id-1].Name}`}/>
                    <Chip label={`ID: ${cars[id-1].id}`}/>
                    <Chip label={`MPG: ${cars[id-1].Miles_per_Gallon}`}/>
                    <Chip label={`Cylinders: ${cars[id-1].Cylinders}`}/>
                    <Chip label={`Horsepower: ${cars[id-1].Horsepower}`}/>
                    <Chip label={`Displacement: ${cars[id-1].Displacement}`}/>
                </Paper>
            </Container>
        </div>
    )
}

export default Car