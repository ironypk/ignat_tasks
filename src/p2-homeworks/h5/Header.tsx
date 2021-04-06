import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {PATH} from './Routes';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles({
    button : {
        width:'100%',
        backgroundColor:'#444',
        borderRadius:0,
        '&:hover $arrow':{
            color:'#999'
        }
    },
    arrow:{
        color:'#fff'
    }
});

function Header() {
    const classes = useStyles();
    const [state, setState] = React.useState<boolean>(false);
    return (
        <div>
                <Button className={classes.button} onClick={()=>setState(!state)}>
                    <ArrowDropDownIcon className={classes.arrow}/>
                </Button>
                <Drawer   anchor={'top'} open={state} onClose={()=>setState(false)}>
                    <div>
                        <List>
                            {
                                Object.entries(PATH).map(([key,value]) => {
                                    return (
                                            <ListItem
                                                button key={key}
                                                activeClassName={'Mui-selected'}
                                                component={NavLink}
                                                to={value}
                                                onClick={()=>setState(false)}
                                            >
                                                <ListItemText primary={key}/>
                                            </ListItem>
                                )
                            })
                            }
                        </List>
                    </div>
                </Drawer>
    </div>
    )
}

export default Header
