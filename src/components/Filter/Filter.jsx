import React, { useEffect, useState } from "react";
import "./_styles.scss";
import { Autocomplete, TextField } from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import io from "socket.io-client";
import { category } from "../../lib/categories";
import dayjs from "dayjs";
import CheckBox from "../CheckBox/CheckBox";
const socket = io.connect(process.env.REACT_APP_API);

const type = [
  {
    label: "online",
  },
  {
    label: "offline",
  },
];


export default function Filter() {
  const [date, setDate] = React.useState(new Date(Date.now()));
  const [categoryValue, setCategoryValue] = useState(category[0].label);
  const [inputValue, setInputValue] = useState("");
  const [typeValue, setTypeValue] = useState(0);

  useEffect(() => {
    socket.emit("post", {
      status: "active",
      date: dayjs(date).format("YYYY-MM-DD HH:mm:ss"),
      category: "salom",
      type: typeValue,
    });
  }, [date, categoryValue, typeValue]);

  const handleChange = (newValue) => {
    setDate(newValue);
  };
  return (
    <form className="filter-form">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          className="input"
          border="none"
          style={{ border: "none" }}
          inputFormat="dd/MM/yyyy"
          value={date}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
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
        sx={{ width: 260 }}
        renderInput={(params) => <TextField {...params} />}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={type}
        sx={{ width: 280 }}
        onChange={(evt) => setTypeValue(evt.target.value)}
        renderInput={(params) => (
          <TextField {...params} label="Online / Offline" />
        )}
      />
      <CheckBox />
      <button className="btn">Izlash</button>
    </form>
  );
}
