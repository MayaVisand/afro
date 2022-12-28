import React from "react";
import styles from "./Gallery.module.css";
import * as data from "./../../data/fakeData";
const Gallery = () =>
{
    return ( <div className={styles.galContainer}>
        { data.tempData.gallery_imgs.map(el => {
            return <img className={styles.imgBox} alt={"imgs"} src={el} key={Math.random()}/>;
        })}

        { data.tempData.gallery_imgs.map(el => {
            return <img className={styles.imgBox} alt={"imgs"} src={el} key={Math.random()}/>;
        })}
        </div>);
};

export default Gallery;