import React, { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button, Grid } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { ENDPOINT } from "../utils/Constants";
import { Alert } from '@material-ui/lab';
const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'surname', headerName: 'Surname', width: 130 },
    { field: 'process', headerName: 'Process', width: 130 },
];

const processTrueData = (selected, setLoad, setError) => async () => {
    console.log(selected)
    try {
        const row = selected.map((number) => Number(number))
        await axios.post(`${ENDPOINT}/v1/data/process`, row)
        setLoad(false)
        setError(false)
        console.log("consulta")
    } catch (error) {
        setError(true)
        console.log(error)
    }

}

const ConsultProcess = () => {
    const history = useHistory()

    const [rows, setRows] = useState([])
    const [selected, setSelected] = useState([])
    const [load, setLoad] = useState(false)

    useEffect(() => {
        const api = async () => {
            try {
                const response = await axios.get('http://localhost:8000/v1/data')
                setRows(response.data)
                // setRows(response.data)
            } catch (error) {
                console.log(error)
            }
            setLoad(true)

        }
        api()
        console.log('useEffect ejecutado');
    }, [load])
    const [error, setError] = useState(false);

    const margintop = "10px"

    console.log("render")
    return (
        <Grid
            container
            spacing={2}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}>
            <Grid
                item
                style={{ width: "700px" }}>

                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection
                        onSelectionChange={(newSelection) => {
                            setSelected(newSelection.rowIds)
                        }} />
                </div>

            </Grid>
            <Grid item
                container
                direction="column"
                style={{ marginTop: margintop, width: "100px" }}>
                <Button onClick={processTrueData(selected, setLoad, setError)} variant="contained" color="primary" >
                    Procesar
                    </Button>
            </Grid>
            <Grid item
                container
                direction="column"
                style={{ marginTop: margintop, width: "100px" }}>
                <Button onClick={() => {
                    history.push("/")
                }} variant="contained" color="secondary" >
                    Cancelar
                    </Button>
            </Grid>
            <Grid item
                    container
                    direction="column"
                    style={{ marginTop: margintop }}>
                    {error ?
                        <Alert variant="filled" severity="error">
                            Se produjo un error
                      </Alert>
                        :
                        null}
                </Grid>
        </Grid>


    );
}

export default ConsultProcess;
