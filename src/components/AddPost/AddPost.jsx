import React, { useState } from "react";
import "./_styles.scss";
import {
  DesktopDatePicker,
  LocalizationProvider,
  TimePicker,
} from "@mui/x-date-pickers";
import {
  Autocomplete,
  Button,
  ButtonGroup,
  Stack,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { category } from "../../lib/categories";
import dayjs from "dayjs";
import { addPost } from "../../redux/actions/posts";
import { useDispatch, useSelector } from "react-redux";
import home from "../../assets/img/main/house.png";
import cloud from "../../assets/img/main/cloud-upload.png";

export default function AddPost() {
  const [date, setDate] = React.useState(new Date(Date.now()));
  const [categoryValue, setCategoryValue] = React.useState(category[0]);
  const [inputValue, setInputValue] = React.useState("");
  const [clickedBtn, setClickedBtn] = React.useState("online");
  const [linkValue, setLinkValue] = useState("");
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [tel, setTel] = useState("");
  const [tel2, setTel2] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [fullDesc, setFullDesc] = useState("");
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const { addedPost } = useSelector((state) => state.posts);

  const handleChangeDate = (newValue) => {
    setDate(newValue);
  };

  const handleClick = () => {
    dispatch(
      addPost(
        name,
        profession,
        tel,
        tel2,
        dayjs(date).format("YYYY-MM-DD HH:mm:ss"),
        categoryValue.label,
        clickedBtn,
        linkValue,
        title,
        desc,
        fullDesc,
        file
      )
    );
  };
  return (
    <div className="add container">
      <div className="add__top">
        <img src={home} alt="" />
        <h2>E’lon berish</h2>
      </div>
      <div className="add__post">
        <div className="add__block">
          <h2>E’lon berish</h2>
          <div className="add__block__top">
            <h3>Vaqt va yo’nalishni tanlang</h3>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <h4>O’tkaziladigan sanani kiriting</h4>
              <Stack style={{ flexDirection: "revert", gap: "40px" }}>
                <DesktopDatePicker
                  inputFormat="dd/MM/yyyy"
                  value={date}
                  onChange={handleChangeDate}
                  renderInput={(params) => <TextField {...params} />}
                />
                <TimePicker
                  value={date}
                  onChange={handleChangeDate}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
            <div>
              <h4>Yo’nalishni belgilang</h4>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                value={categoryValue}
                onChange={(event, newValue) => {
                  setCategoryValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                options={category}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="" />}
              />
            </div>
            <div style={{ display: "flex", gap: "30px" }}>
              <div>
                <h4>Tadbir turi</h4>
                <ButtonGroup
                  className="btn"
                  aria-label="outlined primary button group"
                >
                  <Button
                    className={
                      clickedBtn === "online" ? "contained" : "outlined"
                    }
                    onClick={() => setClickedBtn("online")}
                  >
                    Online
                  </Button>
                  <Button
                    className={
                      clickedBtn === "offline" ? "contained" : "outlined"
                    }
                    onClick={() => setClickedBtn("offline")}
                  >
                    Offline
                  </Button>
                </ButtonGroup>
              </div>
              <div className="link">
                <h4>Link kiriting</h4>
                <TextField
                  id="outlined-basic"
                  label=""
                  variant="outlined"
                  onChange={(evt) => setLinkValue(evt.target.value)}
                />
              </div>
            </div>
          </div>

          <h3 className="direction">Tashkilotchi</h3>
          <div className="add__block__middle">
            <div className="factory">
              <div>
                <h4>Ismi sharifi</h4>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  onChange={(evt) => setName(evt.target.value)}
                />

                <h4>Professiya</h4>
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  onChange={(evt) => setProfession(evt.target.value)}
                />
              </div>
              <div>
                <h4>Telefon raqami</h4>
                <TextField
                  id="outlined-basic"
                  type="number"
                  label=""
                  variant="outlined"
                  onChange={(evt) => setTel(evt.target.value)}
                />

                <h4>Qo’shimcha tel raqam</h4>
                <TextField
                  id="outlined-basic"
                  type="number"
                  label=""
                  variant="outlined"
                  onChange={(evt) => setTel2(evt.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="add__block__post" style={{ marginBottom: "150px" }}>
          <h3>Post</h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "50px",
              marginBottom: "30px",
              alignItems: "flex-start",
            }}
          >
            <TextField
              className="theme"
              id="outlined-basic"
              placeholder="Mavzuni sarlavhasi"
              variant="outlined"
              style={{ width: "100%" }}
              onChange={(evt) => setTitle(evt.target.value)}
            />

            <TextField
              id="outlined-basic"
              placeholder="Description"
              variant="outlined"
              style={{ width: "100%" }}
              onChange={(evt) => setDesc(evt.target.value)}
            />
            <label htmlFor="file-upload" className="upload-image">
              <img src={cloud} alt="" />
              <span>Upload img</span>
            </label>
            <input
              type="file"
              placeholder="choose file"
              accept="image/*"
              id="file-upload"
              onChange={(evt) => setFile(evt.target.files[0])}
            />
            <p>Yuklanyotgan rasm o’lchami 1080x1080 hajmi 2 mb dan oshmasin</p>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Mavzu matni"
              className="theme"
              style={{ width: "100%", height: "250px", background: '#33333338', padding: '20px', borderRadius: '3px', opacity: '0.4'}}
              onChange={(evt) => setFullDesc(evt.target.value)}
            />
          </div>
          <Button className="cancel" style={{ marginRight: "30px" }}>
            Bekor qilish
          </Button>
          <Button className="accept" onClick={handleClick}>
            E’lonni yuborish
          </Button>
        </div>
      </div>
    </div>
  );
}
