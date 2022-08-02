import React from "react";
import "./_styles.scss";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import home from "../../assets/img/admin/home.png";
import presentation from "../../assets/img/admin/presentation.png";
import trash from "../../assets/img/admin/trash.png";
import cog from "../../assets/img/admin/cog.png";
import logout from "../../assets/img/admin/arrow-circle-left.png";
import { Link } from "react-router-dom";

export default function AdminNav() {
  return (
    <div className="admin">
      <Link to='/'><Logo /></Link>
      <ul className="admin__list">
        <li className="admin__item">
          <Link to="/home">
            <img src={home} alt="" />
            <span>Bosh sahifa</span>
          </Link>
        </li>
        <li className="admin__item">
          <Link to="/pres">
            <img src={presentation} alt="" />
            <span>Statistika</span>
          </Link>
        </li>

        <li className="admin__item">
          <Link to="/trash">
            <img src={trash} alt="" />
            <span>O’chirilganlar</span>
          </Link>
        </li>

        <li className="admin__item">
          <Link to="/cog">
            <img src={cog} alt="" />
            <span>Sozlamalar</span>
          </Link>
        </li>

        <li className="admin__item">
          <Link to="/">
            <img src={logout} alt="" />
            <span>Chiqish</span>
          </Link>
        </li>
      </ul>
      <p>2022 All Rights</p>
    </div>
  );
}
