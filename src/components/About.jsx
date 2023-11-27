import React, { useEffect, useState } from 'react';
import "../components/About.css"
import { AiFillGithub } from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import { AiFillMail } from "react-icons/ai"
import Footer from './Footer';

const About = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Sayfa boyutu değiştiğinde genişliği güncelleyin
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Temizleme işlevi eklemeyi unutmayın
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>

      {windowWidth <= 1024 ? (
      <div className="hakkimda h-max flex flex-col justify-center">
        <div className='about'>
          <h1 className='hfirst'>Ben Rukiye Aydın</h1>
          <div class="typewriter">
              <h1>Web Yazılımcısıyım</h1>
          </div>
          <p className='mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis fugiat alias commodi eum eaque magni labore iure, nostrum at. Nisi expedita amet provident? Omnis neque, veniam explicabo error dolore voluptas adipisci optio ducimus iste nobis molestiae tempora reiciendis accusantium dolorem ab sed sunt eius maxime fugiat aspernatur! Eum, consequuntur esse accusamus deserunt aperiam accusantium possimus ab. Vitae inventore et mollitia deleniti voluptatibus distinctio iste optio, nemo iusto voluptates laudantium porro obcaecati at repellat id amet exercitationem quam cupiditate eligendi blanditiis! Corporis, eum? Delectus, est eligendi hic quasi sequi quaerat perspiciatis modi expedita illum, natus unde esse excepturi ea sunt quod autem optio voluptas culpa, quisquam officia! Quibusdam doloremque assumenda necessitatibus. Amet nostrum aspernatur consequuntur quisquam provident tempore maxime maiores similique dolor expedita, ipsum, quasi, deserunt cupiditate! Reiciendis accusantium, blanditiis officiis vero commodi veritatis quidem obcaecati perspiciatis maxime odit, consequatur natus quos dolore? Velit aperiam aliquid magni omnis error corrupti voluptatibus?</p>
        </div>
        <div className="icons">
          <a href="https://github.com/rukiyeaydin"><AiFillGithub className='icon'/></a>
          <a href="https://www.linkedin.com/in/rukiye-ayd%C4%B1n-015743207/"><AiFillLinkedin className='icon'/></a>
          <a href="mailto:rukiyeaydinlive@gmail.com"><AiFillMail className='icon'/></a>
        </div>
      </div>
      ) : (
        <div className="hakkimda h-screen flex flex-col justify-center">
          <div className='about'>
            <h1 className='hfirst'>Ben Rukiye Aydın</h1>
            <div class="typewriter">
              <h1>Web Yazılımcısıyım</h1>
            </div>
            <p className='mt-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis fugiat alias commodi eum eaque magni labore iure, nostrum at. Nisi expedita amet provident? Omnis neque, veniam explicabo error dolore voluptas adipisci optio ducimus iste nobis molestiae tempora reiciendis accusantium dolorem ab sed sunt eius maxime fugiat aspernatur! Eum, consequuntur esse accusamus deserunt aperiam accusantium possimus ab. Vitae inventore et mollitia deleniti voluptatibus distinctio iste optio, nemo iusto voluptates laudantium porro obcaecati at repellat id amet exercitationem quam cupiditate eligendi blanditiis! Corporis, eum? Delectus, est eligendi hic quasi sequi quaerat perspiciatis modi expedita illum, natus unde esse excepturi ea sunt quod autem optio voluptas culpa, quisquam officia! Quibusdam doloremque assumenda necessitatibus. Amet nostrum aspernatur consequuntur quisquam provident tempore maxime maiores similique dolor expedita, ipsum, quasi, deserunt cupiditate! Reiciendis accusantium, blanditiis officiis vero commodi veritatis quidem obcaecati perspiciatis maxime odit, consequatur natus quos dolore? Velit aperiam aliquid magni omnis error corrupti voluptatibus?</p>
          </div>
          <div className="icons">
            <a href="https://github.com/rukiyeaydin"><AiFillGithub className='icon'/></a>
            <a href="https://www.linkedin.com/in/rukiye-ayd%C4%B1n-015743207/"><AiFillLinkedin className='icon'/></a>
            <a href="mailto:rukiyeaydinlive@gmail.com"><AiFillMail className='icon'/></a>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default About
