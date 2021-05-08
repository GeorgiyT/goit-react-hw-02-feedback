import React from "react";
import style from "./Notification.module.css";

const Notification = ({ title }) => {
  return <p className={style.title}>{title}</p>;
};

export default Notification;
