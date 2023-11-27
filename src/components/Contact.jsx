import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Footer from "./Footer";


const Contact = () => {
  const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = form.current.querySelector('input[name="user_name"]').value;
    const userEmail = form.current.querySelector('input[name="user_email"]').value;
    const message = form.current.querySelector('textarea[name="message"]').value;
    if (userName && userEmail && message) {
      emailjs
        .sendForm("service_lkh9awo", "template_qzhhwjs", form.current, "nHOlfoaHJQt7t232Q")
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      alert("Lütfen tüm alanları doldurun.");
    }
  };

  return (
    <div className="">
        <div className="flex flex-col items-center justify-center m-8">
            <p>Görüş ve önerilerinizi <a href="mailto:rukiyeaydinlive@gmail.com" className="hover:underline decoration-blue-500 text-blue-500">bu linke</a> tıklayarak ya da aşağıdaki formu doldurarak iletebilirsiniz.</p>
        </div>
        <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
            <label className="ad">Adınız ve Soyadınız</label>
            <input type="text" name="user_name" />
            <label className="email">Email adresiniz</label>
            <input type="email" name="user_email" />
            <label className="mesaj">Mesajınız</label>
            <textarea name="message" />
            <input type="submit" value="Gönder" className="send"/>
        </form>
        <div className="flex flex-col mb-10 items-center justify-center">
            <p>Formdan ulaşamadığınız taktirde link ile ulaşmayı deneyin.</p>
        </div>
        </StyledContactForm>
        <Footer />
    </div>
  );
};

export default Contact;

const StyledContactForm = styled.div`

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

.send{
  margin-bottom: 5vh;
}

form {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 50%;
  font-size: large;

  input {
    width: 100%;
    height: 35px;
    padding: 7px;
    outline: none;
    border-radius: 5px;
    border: 1px solid #6d6d6d;

    &:focus {
      border: 1px solid #c11e43;
    }
  }

  textarea {
    max-width: 100%;
    min-width: 100%;
    width: 100%;
    max-height: 100px;
    min-height: 100px;
    padding: 7px;
    outline: none;
    border-radius: 5px;
    border: 1px solid #6d6d6d;

    &:focus {
      border: 1px solid #c11e43;
    }
  }

  label {
    margin: 2rem 0px 0.5rem 0px;
    color: #c11e43;
    font-weight:500;
  }

  input[type="submit"] {
    margin-top: 2rem;
    cursor: pointer;
    background: #185a9d;
    color: white;
    border: none;
    transition: ease-in-out 0.2s;
    &:hover{
      background: #65a9ee;
    }
  }
  @media screen and (max-width : 850px){
    width: 90%;
  }
}
`;