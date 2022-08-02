import React, { useState } from "react";
import "./_styles.scss";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../../redux/actions/auth";
import { ReactComponent as Logo } from "../../assets/svg/Pressa.svg";
import account from "../../assets/img/main/account.png";
import lock from "../../assets/img/main/lock.png";

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const { login, user } = useSelector((state) => state.auth);

  const handleClick = () => {
    dispatch(adminLogin(username, password));
  };

  return (
    <div className="login">
      <Logo />
      <div className="login__block">
        <form className="login__form">
          <h2 className="login__title">Tizimga kirish</h2>

          <input
            placeholder="Login"
            onChange={(evt) => setUsername(evt.target.value)}
          />
          <img className="account" src={account} alt="account" />

          <input
            className="psw"
            onChange={(evt) => setPassword(evt.target.value)}
            type="password"
            placeholder="Parol"
          />

          <img className="lock" src={lock} alt="lock" />

          <p>Parolni unutdingizmi?</p>
          <Button onClick={handleClick}>Kirish</Button>
        </form>
      </div>
    </div>
  );
}
