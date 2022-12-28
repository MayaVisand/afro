import React from "react";
import styles from "./Header.module.css";

const Header = () => {
    return (<div className={styles.navBar}>
        <ul>
            <li>
                <img alt={"logo"} src={"https://i.postimg.cc/kg80f524/Logo-MV-mini.png"} className={styles.logo}/>
            </li>
            <li><a className={styles.active} href="#braids">Косы</a></li>
            <li><a href="#dreads">Дреды</a></li>
            <li><a href="#zizi">Зизи</a></li>
            <li><a href="#sale">Наращивание</a></li>
            <li><a href="#blog">Инфо</a></li>
            <li><a href="#contacts">Контакты</a></li>
        </ul>
    </div>);
};

export default Header;