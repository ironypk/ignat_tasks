import React, {ChangeEvent} from 'react'
import {Box, Button, makeStyles, TextField, Typography} from '@material-ui/core';
import clsx from 'clsx'


type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string// need to fix any
    totalUsers: number // need to fix any
}



// презентационная компонента (для верстальщика)


const useStyles = makeStyles((theme) => ({
    container:{
        maxWidth:300,
        margin: theme.spacing(1)
    },
    root: {
        width:300,
        marginBottom:theme.spacing(1),
        '& input:valid + fieldset': {
            borderColor: 'green',
            borderWidth: 2,
        },
        '& input:invalid:focus + fieldset': {
            borderColor: 'red',
            borderWidth: 2,
        },

        '& input:valid:focus + fieldset': {
            borderColor: 'green',
        },
        '& label': {
            color: '#555',
            '&.Mui-focused': {
                color: 'green',
            }
        },
    },
    rootRed: {
        '& label.Mui-focused': {
            color: 'red',
        },
    }
}));

const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <TextField
                className={clsx(classes.root, {[classes.rootRed]: !name.length})}
                label={error}
                required
                variant="outlined"
                value={name}
                onChange={setNameCallback}
                id="validation-outlined-input"
            />
            <Box display='flex' alignItems='flex-end' flexDirection='column'>
                <Button onClick={addUser} variant={'outlined'}>add</Button>
                <Typography>{totalUsers}</Typography>
            </Box>
        </div>
    )
}

export default Greeting
