import * as React from "react";
import style from "./ArticleItem.module.css";
// import {Link} from "react-router-dom";
// import {getArticleDetailsAction} from "../../../article_page/redux/asyncActions";

const ArticleItem = (props) => {

    return (
        // <Link to={`/article/${props.id}`}>
        <div className={style.article}>
            <div className={style.article_item_img_div}>
                <img src={"#"} className={style.article_item_img}></img>
            </div>
            <div>
                <h3>{props.title}</h3>
            </div>
            <div>
                <span>{props.date}</span>
            </div>
        </div>
    );
};

export default ArticleItem;
