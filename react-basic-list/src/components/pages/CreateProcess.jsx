import React, { useState } from 'react'
import Format from '../Format'
import { useForm } from "react-hook-form"
import { Button, Grid } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import { useHistory } from 'react-router-dom'
import { ENDPOINT } from "../utils/Constants"
import axios from 'axios'

const createProcessSend = (setCreate, setError) => (data) => {
    sendData(setCreate, setError, data)
}

const consultData = history => () => {
    history.push("/consult")
}

const sendData = async (setCreate, setError, data) => {
    const body = {

        firstName: data.firstName,
        surname: data.surname

    }


    const response = await axios.post(`${ENDPOINT}/v1/data`, body)
    
    if (response.status === 200) {
        setError(false)
        setCreate(true)
    } else {
        setError(true)
        setCreate(false)
    }


}
const CreateProcess = () => {
    const history = useHistory()

    const { register, handleSubmit } = useForm()
    const [create, setCreate] = useState(false);
    const [error, setError] = useState(false);

    const margintop = "10px"
    return (
        <Format>
            <form onSubmit={handleSubmit(createProcessSend(setCreate, setError))}>
                <Grid item
                    container
                    justify="center">
                    <label>First Name</label>
                </Grid>
                <Grid item
                    style={{ marginTop: margintop }}>
                    <input ref={register} style={{ width: "100%" }} name="firstName" />
                </Grid>
                <Grid item
                    container
                    justify="center"
                    style={{ marginTop: margintop }}>
                    <label>Surname</label>
                </Grid>
                <Grid item
                    style={{ marginTop: margintop }}>
                    <input ref={register} style={{ width: "100%" }} name="surname" />
                </Grid>
                <Grid item
                    container
                    direction="column"
                    style={{ marginTop: margintop, width: "100%" }}>
                    <Button type="submit" variant="contained" color="primary" >
                        Crear
                    </Button>
                </Grid>
                <Grid item
                    container
                    direction="column"
                    style={{ marginTop: margintop, width: "100%" }}>
                    <Button onClick={consultData(history)} variant="contained" color="secondary" >
                        consulta
                    </Button>
                </Grid>
                <Grid item
                    container
                    direction="column"
                    style={{ marginTop: margintop, width: "100%" }}>
                    {create ?
                        <Alert variant="filled" severity="success">
                            Creado satisfactoriamente
                        </Alert>
                        :
                        null}
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

            </form>
        </Format>
    )
}

export default CreateProcess