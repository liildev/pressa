import React, { useEffect, useState } from "react";
import "./_styles.scss";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import dayjs from "dayjs";
import user from "../../assets/img/main/user.png";
import calendar from "../../assets/img/main/calendar.png";
import mobile from "../../assets//img/main/device-mobile.png";
import offline from "../../assets/img/main/status-offline.png";
import online from "../../assets/img/main/status-online.png";
import biznes from "../../assets/img/main/presentation-chart-line.png";
import dizayner from "../../assets/img/main/color-palette.png";
const socket = io.connect(process.env.REACT_APP_API);

export default function Announces() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    socket.emit("post", { status: "active" });
    socket.on("get_active_posts", (data) => {
      setPosts(data);
    });
  }, []);

  return (
    <section className="announces">
      <div className="container announces__container">
        <h2>Oxirgi e’lonlar</h2>
        <Link to="single">
          <ul className="announces__list">
            {posts?.map((post) => (
              <li className="announces__item" key={post.post_id}>
                <img
                  src={process.env.REACT_APP_API + "/" + post.post_image}
                  alt="user"
                  className="afisha"
                />
                <div>
                  <h3>{post.post_title}</h3>
                  <ul>
                    <li>
                      <img src={user} alt="" />
                      <span>{post.creator_name}</span>
                    </li>
                    <li>
                      <img
                        src={
                          post.creator_profession === "UI/UX designer"
                            ? `${mobile}`
                            : post.creator_profession === "Tadbirkor"
                            ? `${biznes}`
                            : post.creator_profession === "Grafik dizayner"
                            ? `${dizayner}`
                            : mobile
                        }
                        alt=""
                      />
                      <span>{post.creator_profession}</span>
                    </li>
                    <li>
                      <img src={calendar} alt="" />{" "}
                      <span>
                        {dayjs(post.conference_date).format("DD/MM/YYYY")}
                      </span>
                    </li>
                    <li>
                      <img
                        src={
                          post.conference_type === "onlone"
                            ? `${online}`
                            : `${offline}`
                        }
                        alt=""
                      />
                      <span>{post.conference_type}</span>
                    </li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </Link>
        <Button style={{ marginLeft: "auto", marginRight: "auto" }}>
          Ko’proq ko’rish
        </Button>
      </div>
    </section>
  );
}
