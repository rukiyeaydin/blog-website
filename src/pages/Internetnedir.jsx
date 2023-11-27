import React from 'react'
import "./Internetnedir.css"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import onek from "../images/onek.png"
import network from  "../images/network.jpg"

const Internetnedir = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className="w-full">
        <Navbar/>
      </div>
      <div className="icerikin flex flex-col items-start p-6 mt-5 mb-10">
        <h1 className='m-1 mb-5 text-2xl  md:text-3xl font-bold text-center'>İNTERNET NEDİR VE NASIL ÇALIŞIR?</h1>
        <div className="flex flex-col items-start">
        <img src={network} alt="" className='mb-10 mt-5'/>
            <p><b>İnternet, cihazların birbiriyle iletişim kurmasını sağlayan bir iletişim ağıdır.</b> Çok yakın tarihte hayatımıza girmesine rağmen diğer bütün oluşumlardan çok daha hızlı yayıldı ve yayılmaya devam ediyor. Bugün hepimiz internet sayesinde sinemaya gitmeden film izleyebiliyor, kitap almadan kitap okuyabiliyor, dünyanın bir ucundaki sevdiklerimizle anlık görüntülü konuşabiliyor ve hatta özel bir hoca tutmadan bir enstrüman çalmayı öğrenebiliyoruz.</p>
            <p>Bu yüzden birçoğumuz bazen bize bir çeşit sihir gibi gelen internetin nasıl çalıştığını hep merak etmişizdir. Hepimiz interneti profesyonelce kullanan bireyler olsak da çok azımız internetin nasıl çalıştığını biliyor. Peki nasıl oluyor da internet çalışıyor?</p>
            <br />
            <p className='font-extrabold text-2xl mb-1'>İnternet Nasıl Çalışır?</p>
            <p>En basit cevapla internet tabiki bir çeşit sihir değil. Özellikle aklımızı karıştıran Wi-fi (wireless fidelity), yani kablosuz bağlantılar, uzak iletişimler için radyo frekansı kullanırlar. <b>Cihazlar arasındaki veri iletimi, belirli frekans aralıklarındaki (genelde 2.4 GHz ve 5 GHz) radyo dalgaları ile sağlanır.</b></p>
            <p>Elbette her şey bu kadar basit değil. Sadece kablosuz ağlar yok. Kablosuz bağlantı dediğimiz yapılarda bile kablolu bir sistemin olması gerekir.</p>
            <p> İnternet iletişimi için yönlendiriciler (routers), baz istasyonları, fiber optik kablolar gibi fiziksel yapılar da gereklidir.  Okyanuslarda bile internet iletişimi için kablolar döşenmiş durumda. </p>
            <br />
            <p>İnternetin nasıl çalıştığını az çok anladık gibi. Taşlar yerine oturuyor. Ama kafa karıştırıcı bir nokta var. <b>Bilgi alışverişi nasıl sağlanıyor?</b> Nasıl oluyor da tek tıkla öğrenmek istediğimiz bilgiye ulaşabiliyoruz? Nasıl oluyor da bir web sayfası benim telefonumu diğer bütün cihazlardan ayırt edip bilgiyi adres karışıklığı olmadan bana ulaştırabiliyor?</p>
            <p>Konuyu tam olarak anlamamız için bilmemiz gereken bir terim var; IP adresi.</p>
            <br />
            <p className='font-extrabold text-2xl mb-1'>IP Adresi Nedir?</p>
            <p>IP adreslerine, daha iyi anlamamız için, cihazların sahip olduğu kimlik numaralarıdır diyebiliriz. Her cihazın kendine ait bir IP adresi vardır ve bu adresler sayesinde bir paket gideceği adrese karışıklık olmadan ulaşabilir. IPv4 adresleri 32 bitten oluşur. Bitler insanlar tarafından okunamadığı için adresleri 32-bit noktalı decimal gösterimle ifade ediyoruz.</p>
            <ul className='ml-5'><li className='inli'><p>Örnek: Bir IPv4 adresi <b>10000001 00110100 00000110 00000000</b> iken decimal gösterimle <b>129.52.6.0</b> şeklinde gösterilir.</p></li></ul>
            <br />
            <p>IP adresleri önek ve soneklerden oluşur. Önek, cihazın bağlı olduğu ağı temsil ederken sonek, cihazın kendi numarasıdır.</p>
            <img src={onek} alt="" />
            <p>Örneğin; ev internetinize bağlı bir bilgisayarınızın olduğunu ve bilgisayarınızın <b>129.52.6.1</b> IP adresine sahip olduğunu varsayarsak buradaki <b>129.52.6</b> kısmı evinizdeki modemin adresiyken sondaki <b>1</b> kısmı da o modeme bağlı olan bilgisayarınızın kimliğidir. Bu sistem sayesinde farklı bir ağdan bir bilgisayar size veri göndermek isterse, ilk önce IP adresinizin önekiyle modeminizi, daha sonra IP adresinizin sonekiyle bilgisayarınızı tespit edip veriyi bilgisayarınıza iletecektir.</p>
            <br />
            <p>Bu örneği daha iyi kavramak için iki farklı ağdan, bilgisayar A ve bilgisayar B olduğunu düşünelim. A bilgisayarı, B bilgisayarına veri göndermek istiyor. A ilk önce veriyi parçalara böler. Bölünen her parça B'nin IP adresini içeriyor olmalı. Daha sonra A cihazı, bu parçalardan bir paket oluşturur. Bu paket nereden gönderildiğini belirtmek için A'nın IP adresini ve nereye gideceğini belirtmek için B'nin IP adresini içerir. A cihazı paketi ilk önce yönlendiriciye (router) gönderir. Yönlendirici, paketin içindeki hedef adresi yani B'nin IP adresini inceler. Eğer B'nin adresi aynı ağdan olsaydı yönlendirici bu paketi direkt B'ye gönderebilirdi fakat B farklı bir ağda olduğu için yönlendirici, paketi ISP (internet servis sağlayıcısı) 'ye gönderir. ISP, bu paketi daha büyük bir ağa gönderir. Bu ağ, hedef IP adresinin yerel ağını belirler ve paketi oraya gönderir. Yerel ağ, hedef IP adresinin sonekine bakarak paketin hangi cihaza teslim olacağını belirleyip teslim işlemini bitirir.</p>
            <p>Buradan ağların katmanlar şeklinde çalıştığını görebiliriz. Birçok adımdan sonra paket ancak teslim edilebiliyor. Her ne kadar anlatması uzun olsa da bu adımların saliseler içinde gerçekleşiyor olduğunu unutmamalıyız.</p>
            <br />
            <p>Peki biz bir web sitesinin IP adresini nasıl aklımızda tutuyoruz? </p>
            <p>Tutmuyoruz. İnternette kullandığımız, işimize yarayan çok fazla site var ve bunların hepsinin IP adreslerini akılda tutmak imkansız . Bunun yerine domain dediğimiz <b>webuzayi.com</b> gibi alan adlarını kullanarak sitelere erişiyoruz. Gitmek istediğimiz web sitesinin alan adını tarayıcıya girdiğimizde; <a href="/" className='text-blue-500 mt-2 hover:underline'>DNS (Domain Name System)</a> , o sayfanın domain adını IP adresine çevirir ve tarayıcıya bu IP adresine erişmek istediğimizi iletir. Böylece hatırlaması daha kolay olan domain isimler ile web sitelerine kolayca erişebiliyoruz.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Internetnedir
