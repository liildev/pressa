import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { alpha, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./_styles.scss";

export default function Header() {
  const { user } = useSelector((state) => state.auth);
  console.log(user.data.role);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "304px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "304px",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "white",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <header>
      <div className="container header-container">
        <Link to="/pressa">
          <Logo />
        </Link>
        <nav className="header-nav">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Izlash"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <ul className="header-list">
            <li>
              <Link to="/pressa/about">Biz haqimizda</Link>
            </li>
            {user?.data?.role === "ADMIN" ? (
              <li>
                <Link to="/admin">Admin Panel</Link>
              </li>
            ) : user?.data?.role === "USER" ? (
              <li>
                <Link to="/pressa">Savol va javoblar</Link>
              </li>
            ) : (
              <li>
                <Link to="/pressa">Savol va javoblar</Link>
              </li>
            )}
          </ul>
          <Link to="/pressa/add" className="header-btn">
            + E’lon berish
          </Link>
        </nav>
      </div>
    </header>
  );
}
