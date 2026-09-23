import contact from "../../assets/contact.svg";
import style from "./Contact.module.css";

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

      <section className="hero">
        <div className="text-section">
          <div className="btn-row">
            <button>VIA SUPPORT CHAT</button>
            <button>VIA CALL</button>
          </div>

          <button className="email-btn">VIA EMAIL FORM</button>

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

