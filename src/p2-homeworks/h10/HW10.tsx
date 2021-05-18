import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from './bll/store';
import {loadingAC, LoadingActionType, LoadingStateType} from './bll/loadingReducer';
import {Dispatch} from 'redux';
import {CircularProgress} from '@material-ui/core';

function HW10() {
    const {loading} = useSelector((state:AppStoreType):LoadingStateType=>state.loading)
    const dispatch = useDispatch<Dispatch<LoadingActionType>>()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(()=> dispatch(loadingAC(false)),2000)
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <CircularProgress/>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
