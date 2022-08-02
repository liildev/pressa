import React from "react";
import next from "../../assets/img/main/next.png";
import prev from "../../assets/img/main/prev.png";
import calendar from "../../assets/img/main/calendar.png";
import clock from "../../assets/img/main/clock.png";
import share from "../../assets/img/main/share.png";
import home from "../../assets/img/main/house.png";
import right from "../../assets/img/main/right.png";
import online from "../../assets/img/main/status-online.png";
import offline from "../../assets/img/main/status-offline.png";

import facebook from "../../assets/img/brands/facebook-blue.png";
import instagram from "../../assets/img/brands/instagram-blue.png";
import telegram from "../../assets/img/brands/telegram-blue.png";
import tumblr from "../../assets/img/brands/tumblr.png";
import twitter from "../../assets/img/brands/twitter.png";

import "./_styles.scss";

export default function SingleBody() {
  return (
    <div className="single">
      <div className="single__left">
        <div className="info">
          <div className="info__body">
            <img src={home} alt="" />
            <p>Biznes</p>
            <img src={right} alt="" />
            <span>Alisher Isaevdan...</span>
          </div>

          <div className="info__block">
            <h2>Alisher Isaevdan biznes va IT bo’yicha master klass</h2>
            <ul>
              <li>
                <img src={calendar} alt="" />
                <span>17 / 01 / 2022</span>
              </li>
              <li>
                <img src={clock} alt="" />
                <span>15:00</span>
              </li>
              <li>
                <img src={online} alt="" />
                <span>Online</span>
              </li>
            </ul>

            <div>
              <img src={share} alt="" /> <span>Ulashing</span>
            </div>

            <div className="brands">
              <img src={facebook} alt="facebook" />
              <img src={tumblr} alt="tumblr" />
              <img src={instagram} alt="instagram" />
              <img src={twitter} alt="twitter" />
              <img src={telegram} alt="telegram" />
            </div>
          </div>
        </div>

        <div className="single__right">
          <h2>Alisher Isaevdan biznes va IT bo’yicha master klass</h2>
          <p>
            Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
            musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi
            uch soha vakillari, ya'ni UX/UI dizayner, frontend va backend
            dasturchilarni "bir dasturxon atrofida" to'plashga qaror qildik.
          </p>
          <img
            className="img"
            src="https://picsum.photos/760/500"
            alt="picsum"
          />
          <p>
            Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
            musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi
            uch soha vakillari, ya'ni UX/UI dizayner, frontend va backend
            dasturchilarni "bir dasturxon atrofida" to'plashga qaror qildik.
          </p>

          <p>
            Kuni kecha bo'lib o'tgan uchrashuvda to'rt kishidan iborat 8 ta
            guruh tashkil qilinib, ularga ikki hafta muddat ichida Toshkent
            shahridagi har qanday onlayn va oflayn tadbirlar to'g'risida e'lonli
            ma'lumot beruvchi uch bosqichli veb sahifa tayyorlash vazifasi
            topshirildi.
          </p>

          <p>
            {" "}
            Demak, roppa-rosa 2 haftadan keyin ishtirokchilarning qilgan ishlari
            chetdan kelgan mehmonlar tomonidan xolis baholanib, dastlabki uchta
            o'rin egalari qimmatbaho sovg'alar bilan taqdirlanadi. Biz barchaga
            omad tilab qolamiz.{" "}
          </p>
        </div>
      </div>

        <p className="recommended">Tavsiya etamiz</p>
     
     
      <div className="single__slide">
        <img src={prev} alt="prev" />
        <img src={next} alt="next" />
      </div>
    </div>
  );
}
