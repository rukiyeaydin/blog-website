import React, { useEffect, useState } from 'react';
import "../components/Home.css";
import data from '../assets/Data';
import dottedworld from "../images/dottedworld.png"
import { Link as ScrollLink } from 'react-scroll';
import Footer from "../components/Footer"
import { Link } from 'react-router-dom';

const Home = () => {

  const { yazilar } = data;

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
    <>
    <div className='home flex flex-col'>
    {windowWidth <= 920 ? (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="solfirst flex flex-col items-center justify-center text-center">
        <p className='p1'>Merak etmeyen insan</p>
        <p className='p2'>GELİŞEMEZ.</p>
        <p className='p3'>Gelişmeyen insan</p>
        <p className='p4'>YERİNDE SAYAR.</p>
        <ScrollLink to="baslik1" spy={true} smooth={true} offset={50} duration={1500}><button className='btnhome'>Son Yazılar</button></ScrollLink>
        <p className='mt-10'>Tüm yazılarıma ulaşmak için <a href="/arsiv" className='hover:underline decoration-blue-500 text-blue-500'>arşive</a> uğrayabilirsiniz.</p>
      </div>
    </div>
    ) : (
    <div className="sekiller h-screen flex justify-between">
      <div className="txt">
        <div className="sol flex flex-col">
          <p className='p1'>Merak etmeyen insan</p>
          <p className='p2'>GELİŞEMEZ.</p>
          <p className='p3'>Gelişmeyen insan</p>
          <p className='p4'>YERİNDE SAYAR.</p>
          <ScrollLink to="baslik2" spy={true} smooth={true} offset={50} duration={1500}><button className='btnhome'>Son Yazılar</button></ScrollLink>
          <p className='mt-10'>Tüm yazılarıma ulaşmak için <a href="/arsiv" className='hover:underline text-blue-500'>arşive</a> uğrayabilirsiniz.</p>
        </div>
      </div>
      <img src={dottedworld} alt="" className='world'/>
    </div>
    )}

    {windowWidth <= 750 ? (
      <div className="farkli-icerik2 items-center flex flex-col" id='baslik1'>
        <p className='mb-2 font-bold text-3xl text-sky-700'>Son Yazılar</p>
        <hr className='border border-sky-700 w-full mb-10' />
        {yazilar
        .sort((a, b) => b.id - a.id) // id'ye göre büyükten küçüğe sırala
        .slice(0, 10) // en buyuk id ye sahip 10 ogeyi al
        .map((yazi) => (
          <div className="blog flex flex-col justify-center h-96 border border-b-2 border-x-0 border-t-0 pb-2" key={yazi.id}>
            <div className="flex flex-col items-center text-center">
              <Link to={yazi.link}><img src={yazi.image} alt="" className='h-36 w-36 rounded-sm m-3 cursor-pointer'/></Link>
              <Link to={yazi.link} className='font-bold text-sm cursor-pointer'>{yazi.baslik}</Link>        
            </div>
            <p className='icerik mt-2 overflow-hidden'>{yazi.icerik}</p>
            <Link to={yazi.link} className=' text-blue-500 mt-2 hover:text-blue-300 cursor-pointer'>Devamı...</Link>
          </div>
        ))}
      </div>
    ) : (
    <div className="blogs flex flex-col items-center justify-center" id='baslik2'>
      <p className='mb-2 font-bold text-3xl text-sky-700'>Son Yazılar</p>
      <hr className='border border-sky-700 w-full mb-10' />
      {yazilar
        .sort((a, b) => b.id - a.id) // id'ye göre büyükten küçüğe sırala
        .slice(0, 10) // en buyuk id ye sahip 10 ogeyi al
        .map((yazi) => (
          <div className="blog flex mb-10" key={yazi.id}>
            <Link to={yazi.link}><img src={yazi.image} alt="" className='h-52 w-52 cursor-pointer'/></Link>
            <div className="yazi h-52 w-96 flex flex-col justify-between ml-5">
              <Link to={yazi.link} className='font-bold text-lg cursor-pointer'>{yazi.baslik}</Link>
              <p className='overflow-hidden h-28'>{yazi.icerik}</p>
              <Link to={yazi.link} className=' text-blue-500 hover:text-blue-300 cursor-pointer'>Devamı...</Link>
            </div>
          </div>
        ))}
    </div>

    )}
    </div>
    <Footer />
    </>
  );
}

export default Home;