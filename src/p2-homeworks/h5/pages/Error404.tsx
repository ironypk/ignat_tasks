import React from 'react'
import {Link} from 'react-router-dom';
import styles from './Error404.module.css'

function Error404() {
    return (
        <div className={styles.root}>
            <div>404</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>
            <Link to={'/'}>Вернуться на главную</Link>
        </div>
    )
}

export default Error404
