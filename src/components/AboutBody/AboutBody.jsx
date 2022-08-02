import React from "react";
import house from "../../assets/img/main/house.png";
import "./_styles.scss";


export default function AboutBody() {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__us">
          <img src={house} alt="" />
          <span>Biz haqimizda</span>
        </div>

        <h2>Biz haqimizda</h2>

        <p>
          Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
          musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi
          uch soha vakillari, ya'ni UX/UI dizayner, frontend va backend
          dasturchilarni "bir dasturxon atrofida" to'plashga qaror qildik.
        </p>

        <p>
          Najot Ta'lim jamoasi o'z o'quvchilari uchun manfaatli bo'lgan
          musobaqalarni tashkil etishda davom etadi. Biz bu gal markazimizdagi
          uch soha vakillari, ya'ni UX/UI dizayner, frontend va backend
          dasturchilarni "bir dasturxon atrofida" to'plashga qaror qildik.
        </p>
        <p>
          Kuni kecha bo'lib o'tgan uchrashuvda to'rt kishidan iborat 8 ta guruh
          tashkil qilinib, ularga ikki hafta muddat ichida Toshkent shahridagi
          har qanday onlayn va oflayn tadbirlar to'g'risida e'lonli ma'lumot
          beruvchi uch bosqichli veb sahifa tayyorlash vazifasi topshirildi.
        </p>
        <p>
          Demak, roppa-rosa 2 haftadan keyin ishtirokchilarning qilgan ishlari
          chetdan kelgan mehmonlar tomonidan xolis baholanib, dastlabki uchta
          o'rin egalari qimmatbaho sovg'alar bilan taqdirlanadi. Biz barchaga
          omad tilab qolamiz.{" "}
        </p>
      </div>
    </div>
  );
}
