import contact from '@/assets/contact.svg'
import style from './Contact.module.css'
import Buttons from '@/components/Buttons/Buttons'
import { MdMessage } from 'react-icons/md'
import { IoCallSharp } from "react-icons/io5";

const Contactheader = () => {
  return (
    <div className={`container ${style.contact_section}`}>
      <h1>CONTACT US...</h1>
      <p>
        LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.
      </p>

      <section className={style.hero}>
        <div className="text-section">
          <div className={style.btn_row}>
            <Buttons text="VIA SUPPORT CHAT" Icon={ MdMessage } fontSize="24px"/>
            <Buttons text="VIA CALL" Icon={ IoCallSharp }   fontSize="24px"/>
          </div>

          <button className={style.email_btn}>VIA EMAIL FORM</button>

          <h4>Name</h4>
          <input type="text" id="name" placeholder="" />

          <h4>E-Mail</h4>
          <input type="email" id="email" placeholder="" />

          <h4>Text</h4>
          <input type="text" id="msg" placeholder="" />

          <div className="submit-btn">
            <button>Submit</button>
          </div>
        </div>

        <img src={contact} alt="cntct" />
      </section>
    </div>
  );
};

export default Contactheader;

