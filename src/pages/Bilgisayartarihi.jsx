import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import "./Bilgisayartarihi.css"
import abakus from "../images/abakus.jpg"
import napier from "../images/napier.jpg"
import pascaline from "../images/pascaline.jpg"
import leibniz from "../images/leibniz.jpeg"
import difference from "../images/difference.jpg"
import analytic from "../images/analytic.jpg"
import tabulating from "../images/tabulating.jpg"
import mark from "../images/mark.jpg"
import eniac from "../images/eniac.jpg"
import edvac from "../images/edvac.png"
import univac from "../images/univac.jpg"
import pc from "../images/pc.jpg"

const Bilgisayartarihi = () => {
  return (
    <div className='bt flex flex-col items-center'>
      <div className="w-full">
      <Navbar/>
      </div>
      <div className="icerikbt flex flex-col items-start p-6 mt-5 mb-10">
        <h1 className='text-2xl font-bold text-center mb-5'>GEÇMİŞTEN BUGÜNE BİLGİSAYAR TARİHİ VE GELİŞİMİ</h1>
        <div className="flex flex-col items-start">
          <img src={pc} alt=""  className='mb-10 mt-5 w-96'/>
            <p>İnsanoğlu tarihte her zaman matematikle içli dışlı olmuştur. Özellikle teknoloji ve ticaretin hızla gelişmeye başlaması matematiğe olan ihtiyacı arttırdı ve yapılan işlemler hassaslaşmaya başladı. Bilgisayarın gelişimi de bundan pek bağımsız değildir. </p>
            <p>Bilgisayar, basitçe bir veri alan ve bu veriyi kendisine öğretilen yöntemle çözüp sonucu döndüren makinedir. Bilgisayar, matematik için kullanıldı ve geliştirildi. Günümüzde ise artık birçok alanda kullandığımız, çok hızlı sonuç üreten makineler haline geldiler. Şimdi birlikte bilgisayarın geçmişine bir göz atalım.</p>
            <p className='font-bold mt-5 text-lg'>ABAKÜS</p>
            <img src={abakus} alt="abaküs" className='w-40 h-40 my-2'/>
            <p>Abaküs yani eski adıyla mihsap, MÖ. 2400 yıllarında Çin'de geliştirilen basit toplama ve çarpma işlemleri için kullanılan, boncuklardan oluşmuş bir alettir. Birçok kaynakta ilk bilgisayar olarak kabul edilmekte.</p>
            <p className='font-bold mt-5 text-lg'>NAPIER'İN KEMİKLERİ (NAPIER'S BONE)</p>
            <img src={napier} alt="napier's bone" className='w-40 h-40 my-2'/>
            <p>Napier'in kemikleri, John Napier tarafından oluşturulan bir tür abaküstür. Çarpma, bölme, karekök alma gibi işlemleri gerçekleştirebilen bu alet hesaplama yapmak için, 9 ayrı fildişine sahipti. Ayrıca bu alet, desimal sayı sistemiyle hesaplama yapabilen ilk makinedir.</p>
            <p className='font-bold mt-5 text-lg'>PASCAL'IN HESAP MAKİNESİ (PASCALINE)</p>
            <img src={pascaline} alt="pascaline" className='w-40 h-40 my-2'/>
            <p>Bu makine, 1642 yılında Blaise Pascal tarafından icat edilen ve ilk mekanik hesap makinesi olarak kabul edilen alettir. Ahşap bir kutu ve kutunun içinde dişli ile tekerleklerin olduğu bir sisteme sahiptir.</p>
            <p className='font-bold mt-5 text-lg'>LEIBNIZ ÇARKI</p>
            <img src={leibniz} alt="" className='w-40 h-40 my-2'/>
            <p>Alman filozof-matematikçi Gottfried Wilhelm Leibniz tarafından geliştirilen ve Pascal'ın hesap makinesinin geliştirilmiş hali olan makinedir. Leibniz çarkı; toplama, çıkarma bölme çarpma ve karekök alma işlemlerini yapabiliyordu. Hesaplamaları gerçekleştirmek için dişli ve kam mekanizmalarını kullanıyordu.</p>
            <p className='font-bold mt-5 text-lg'>FARK MAKİNESİ (DIFFERENCE ENGINE)</p>
            <img src={difference} alt="" className='w-40 h-40 my-2'/>
            <p>1820'li yıllarda, bilgisayarın babası diye tanımlanan Charles Babbage tarafından yapıldı. Bu makine, hesaplama yapmak için buhar kullanıyordu.</p>
            <p className='font-bold mt-5 text-lg'>ANALİTİK MAKİNE (ANALYTICAL ENGİNE)</p>
            <img src={analytic} alt="" className='w-40 h-40 my-2'/>
            <p>Charles Babbage tarafından oluşturulan bir başka makinedir. İlk mekanik bilgisayar olarak tanımlanır. Analitik makine, modern bilgisayarlar gibi giriş/çıkış üniteleri ve depolama birimlerini içeren bir makineydi. Babbage, Analitik Makine'yi tamamlamak için yeterli finansal ve teknolojik desteği bulamadı bu nedenle makineyi tam olarak inşa edemedi ama bu tasarım daha sonra başarıyla tamamlandı.</p>
            <p>Ada Lovelace, Babbage'in Analitik Makine tasarımına önemli katkılarda bulunmuş ve bu makine için ilk bilgisayar programını yazmıştır.</p>
            <p className='font-bold mt-5 text-lg'>TABLOLAMA MAKİNESİ (TABULATİNG MACHİNE)</p>
            <img src={tabulating} alt="" className='w-40 h-40 my-2'/>
            <p>Amerikalı istatistikçi Herman Hollerith bu makineyi 1890 yılında icat etti. Bu makine delikli kartlar (punch cards) kullanıyordu. Bu kartlar, saklanabildikleri ve gerektiğinde tekrar erişilebildikleri için bellek olarak kullanılabiliniyordu. Bu nedenle tablolama makinesi, istatistikleri hesaplama, verileri kaydetme veya sıralama işlemlerini gerçekleştirebiliyordu. Hollerith bu makineyi, kurucularından biri olduğu International Business Machines (IBM) şirketinde üretmeye başladı.</p>
            <p className='font-bold mt-5 text-lg'>MARK 1</p>
            <img src={mark} alt="" className='w-40 h-40 my-2'/>
            <p>Howard Hathaway Aiken, 1937 yılında bu bilgisayarı icat etti. Aiken'in amacı, Mark 1'in çok büyük hesaplamalar yapabilecek bir makine olmasıydı. Mark 1'de yarı elektronik devreler ve delikli kartlar kullanıldı. Makine, öncekilerden farklı olarak logaritma ve trigonometriyi hesaplayabiliyordu. Yavaştı ama tam otomatik, uzun işlemleri çözebilen ilk bilgisayardı.</p>
            <p className='font-bold mt-5 text-lg'>ENIAC</p>
            <img src={eniac} alt="" className='w-40 h-40 my-2'/>
            <p>ABD, 1941 yılında ikinci dünya savaşına katıldığında Pensilvanya Üniversitesi Elektronik mühendisliği bölümüne bu bilgisayarın siparişini verdi. ABD'nin bu makineden beklentisi, uzun menzilli topların isabet oranının yüksek olması ve füzelerin hesaplanmalarında kullanılmasıydı. Eniac, saniyede 5000 toplama işlemi yapabilen, yapımında 18.000 adet elektronik tüp kullanılan, 50 ton ağırlığında devasa bir bilgisayardı. Yaklaşık 4 yılda tamamlanan ve gerçek anlamda çalışması 1947 yılını bulan bu bilgisayarın maliyeti 500.000 dolar olmuştu. </p>
            <p className='font-bold mt-5 text-lg'>EDVAC</p>
            <img src={edvac} alt="" className='w-40 h-40 my-2'/>
            <p>EDVAC aynı EDIAC gibi ABD askeri güçleri için tasarlandı. EDVAC’ın tasarımı, ENIAC’ın tasarımı sırasında ortaya çıkan problemlerin çoğunu çözmeye yönelikti. Tasarımında John Von Neumann yer alan isimlerdendi. Bu bilgisayar ENIAC‘tan on kez daha küçük ve yüz defa daha hızlı çalışabiliyordu.</p>
            <p className='font-bold mt-5 text-lg'>UNIVAC</p>
            <img src={univac} alt="" className='w-40 h-40 my-2'/>
            <p>1951 yılında ENIAC bilgisayarlarını yapanlar tarafından geliştirildi. Manyetik teyp kullanarak verileri depolayan ilk bilgisayardır.</p>
        </div>

        <div className="kusak flex flex-col items-center">
          <h1 className='text-2xl font-bold mt-20 mb-5'>BİLGİSAYAR KUŞAKLARI (JENERASYONLARI)</h1>
          <div className="flex flex-col items-start">
            <p className='font-bold mt-5 text-lg'>Birinci Kuşak (Vakum Tüplü) Bilgisayarlar (1946-1959)</p>
            <ul style={{listStyle:"upper-roman"}} className='px-5'>
              <li>Bu dönemde makine dili geliştirildi. </li>
              <li>Devreler için vakum tüpler, hafıza için delikli kartlar kullanıldı. </li>
              <li>Bilgisayarlar çok büyük ve pahalıydı.</li>
              <li>ENIAC, UNIVAC VE EDVAC bu jenerasyonun örneklerindendir.</li>
            </ul>
            <p className='font-bold mt-5 text-lg'>İkinci Kuşak (Transistörlü) Bilgisayarlar (1959-1964)</p>
            <ul style={{listStyle:"upper-roman"}} className='px-5'>
              <li>Vakum tüpler yerine transistörler kullanılmaya başlandı.</li>
              <li>Transistörler sayesinde bilgisayarlar daha hızlı, daha az maliyetli, daha küçük ve daha verimli olmaya başladılar.</li>
              <li>Bilgisayarlar çok büyük ve pahalıydı.</li>
              <li>COBOL ve FORTRAN programlama dilleri bu jenerasyonda kullanıldı.</li>
            </ul>
            <p className='font-bold mt-5 text-lg'>Üçüncü Kuşak (Entegre Devreli) Bilgisayarlar (1964-1970)</p>
            <ul style={{listStyle:"upper-roman"}} className='px-5'>
              <li>Transistörlerin bir araya getirilip entegre devrelerin oluşmasıyla yeni bir jenerasyon doğdu.</li>
              <li>Maliyet düşmeye ve hız artmaya devam etti.</li>
              <li>PASCAL programlama dili bu jenerasyonda kullanıldı.</li>
            </ul>
            <p className='font-bold mt-5 text-lg'>Dördüncü Kuşak (Mikroişlemcili) Bilgisayarlar (1970-1980)</p>
            <ul style={{listStyle:"upper-roman"}} className='px-5'>
              <li>Mikroişlemcilerin icadı, dördüncü nesil bilgisayarları beraberinde getirdi.</li>
              <li>Bilgisayarlar küçülerek kullanışlı ve taşınabilir hale geldiler.</li>
              <li>Bu jenerasyonla beraber C, C++ ve JAVA dilleri kullanılmaya başlandı.</li>
            </ul>
            <p className='font-bold mt-5 text-lg'>Beşinci Kuşak (Yapay Zekâlı) Bilgisayarlar (1980-Günümüz)</p>
            <ul style={{listStyle:"upper-roman"}} className='px-5'>
              <li>Bu jenerasyonda yeni bir araştırma konusu olan yapay zeka ön plana çıkmaya başladı.</li>
              <li>Amaç; enerji ve kaynak israfını minimum düzeye indirmektir.</li>
              <li>Bu jenerasyonun en önemli özelliği insan ve bilgisayar arasında eş zamanlı çalışma sağlamaktır.</li>
            </ul>
         </div>
        </div>

        <div className="kronoloji flex flex-col items-center">
          <h1 className='text-2xl font-bold mt-20 mb-5'>BİLGİSAYARIN ZAMAN ÇİZELGESİ</h1>
          <div className="flex flex-col items-start">
            <ul>
              <li><b>1822-</b> Charles Babbage, polinom hesaplarında kullanmak için fark makinesi adını verdiği makinenin yapımına başladı.</li>
              <li><b>1837-</b> Charles Babbage; programlanabilir, logaritmik ve trigonometrik hesap yapabilen ilk mekanik bilgisayar olan Analitik Makine'nin yapımına başladı.</li>
              <li><b>1842-</b> Ada Lovelace; Analitik Makine için Bernoulli sayılarını hesaplayan ve tarihin ilk bilgisayar programı olarak kabul edilen algoritmayı geliştirdi.</li>
              <li><b>1854-</b> George Boole, boole cebrini yayınladı.</li>
              <li><b>1890-</b> ABD, nüfus sayımında Herman Hollerith'in geliştirdiği delikli kartları kullandı.</li>
              <li><b>1911-</b> IBM (International Business Machines) kuruldu.</li>
              <li><b>1936-</b> Alan Turing, "On Computable Numbers, with an Application to the Entscheidungsproblem" isimli makalesini yayımladı ve Turing Makinesi kavramını ortaya attı.</li>
              <li><b>1941-</b> Konrad Zuse, Almanya'da Z3 isimli ilk programlanabilir elektro-mekanik bilgisayarı tamamladı.</li>
              <li><b>1944-</b> Colossus bilgisayarı, hem elektronik hem kısmen programlanabilir olarak İngiltere'de kullanıldı.</li>
              <li><b>1944-</b> Mark 1 bilgisayarı tamamlandı.</li>
              <li><b>1945-</b> ENIAC bilgisayarı tamamlandı.</li>
              <li><b>1946-</b> John Von Neumann, Neumann Mimarisini yayımladı.</li>
              <li><b>1947-</b> Transistör icat edildi.</li>
              <li><b>1949-</b> Assembly programlama dili yayımlandı.</li>
              <li><b>1951-</b> Alan Turing, yapay zeka alanının başlangıcı olarak kabul edilen makalesini Mind dergisinde yayımladı ve Turing Testi kavramını ortaya attı.</li>
              <li><b>1957-</b> Fortran programlama dili yayımlandı.</li>
              <li><b>1959-</b> Cobol programlama dili yayımlandı.</li>
              <li><b>1964-</b> Douglas Engelbart, fareyi(mouse) icat etti.</li>
              <li><b>1969-</b> İnternetin atası olarak kabul gören ARPANET ağı kuruldu.</li>
              <li><b>1972-</b> Dennis Ritchie, C programlama dilini yayımladı.</li>
              <li><b>1973-</b> Dennis Ritchie, ve Ken Thampson önderliğinde UNIX işletim sistemi duyuruldu.</li>
              <li><b>1974-</b> İlk kişisel bilgisayar olan Altair 8800 tanıtıldı.</li>
              <li><b>1975-</b> Microsoft kuruldu.</li>
              <li><b>1976-</b> Apple kuruldu.</li>
              <li><b>1983-</b> Windows'un beta sürümü çıktı ve ilk kez Windows adı kullanıldı.</li>
              <li><b>1983-</b> C++ programlama geliştirildi.</li>
              <li><b>1989-</b> Tim Berners Lee, internetin altyapısını oluşturan "www" bilgi paylaşım sistemini icat etti.</li>
              <li><b>1991-</b> Linux ilk defa tanıtıldı.</li>
              <li><b>1995-</b> Java programlama dili geliştirildi.</li>
              <li><b>1995-</b> Javascript programlama dili geliştirildi.</li>
              <li><b>1998-</b> Google kuruldu.</li>
              
            </ul>
         </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Bilgisayartarihi
