import React, { useEffect, useState } from "react";
import "./_styles.scss";
import {
  alpha,
  Avatar,
  Button,
  Divider,
  InputBase,
  styled,
} from "@mui/material";

import search from "../../assets/img/admin/search.png";
import { ReactComponent as Notification } from "../../assets/svg/notif.svg";
import io from "socket.io-client";
import AdminCase from "../AdminCase/AdminCase";
import { useSelector } from "react-redux";

const socket = io.connect(process.env.REACT_APP_API);

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
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
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
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

export default function AdminBody() {
  const [btnEvt, setBtnEvt] = useState("undefined");
  const [posts, setPosts] = useState();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    socket.on(`get_undefined_posts`, (data) => {
      setPosts(data);
    });
    socket.emit("post", { status: btnEvt });
  }, [btnEvt]);

  return (
    <>
      <div className="admin-body">
        <div className="admin-body__header">
          <Search>
            <SearchIconWrapper>
              <img src={search} alt="search" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <div className="admin-body__user">
            <Notification />
            <div>
              <Avatar alt="Travis Howard" src="https://picsum.photos/200" />
              <h3>{user.data?.username}</h3>
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <div className="admin-body">
        <div className="admin-body__hero">
          <Button
            className={btnEvt === "undefined" ? "contained" : "outlined"}
            onClick={(evt) => setBtnEvt("undefined")}
          >
            Kutilmoqda
          </Button>
          <Button
            className={btnEvt === "active" ? "contained" : "outlined"}
            onClick={(evt) => setBtnEvt("active")}
          >
            Qabul qiligan
          </Button>
          <Button
            className={btnEvt === "deleted" ? "contained" : "outlined"}
            onClick={(evt) => setBtnEvt("deleted")}
          >
            Rad etilgan
          </Button>
        </div>
      </div>
      <Divider />
      <div className="admin-body">
        <div className="admin-body__cases">
          <h3>Eng so’ngi xabarnomalar</h3>
          <ul className="admin-body__list">
            {posts?.map((post) => (
              <AdminCase
                id={post.post_id}
                key={post.post_id}
                title={post.post_title}
                tel={post.creator_tel}
                date={post.conference_date}
                profession={post.creator_profession}
                username={post.creator_name}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
