import React from 'react';
import './_styles.scss';
import { Button } from '@mui/material';
import dayjs from 'dayjs';
import { api } from '../../redux/api';

export default function AdminCase({ title, username, tel, date, profession, id }) {
  const handleAcceptClick =  () => {
    api().put(`/post/${id}`).then(res=>{
      alert(res.data.message)
    })
  };
  const handleDeleteClick =  () => {
    api().delete(`/post/${id}`).then(res=>{
      alert(res.data.message)
    })
  };
  return (
    <>
      <li className="admin-body__item">
        <div className="case">
          <h3>{title}</h3>
          <ul className="case__list">
            <li className="case__item">{username}</li>
            <li>{tel}</li>
            <li>{dayjs(date).format('DD/MM/YYYY')}</li>
            <li>{dayjs(date).format('HH:mm')}</li>
            <li>{profession}</li>
          </ul>
        </div>
        <div className="case__btn">
          <Button className="rejected" onClick={handleDeleteClick}>Bekor qilish</Button>
          <Button className="accepted" onClick={handleAcceptClick}>Tasdiqlash</Button>
        </div>

      </li>
    </>
  );
}
