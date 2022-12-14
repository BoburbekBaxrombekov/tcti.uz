import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';

import Image from '../../images/356a192b79_1617447562.jpg'
import Image2 from '../../images/da4b9237ba_1617447572.jpg'
import Image3 from '../../images/77de68daec_1617447579.jpg'
import { Link } from 'react-router-dom';
import Logo from '../../images/logo-circle.png'


function PageStaticOne() {
    const tabOne = useRef()
    const tabTwo = useRef()
    const tabThree = useRef()
    const { lang } = useContext(LanguageContext);
    return (
        <>
           
            <div className="container-pages">
                <Header />
                <div className="mainsss">
                <div className='page_main'>
                    <div class="row">
                        <div class="col-lg-10 col-md-12">
                            <h3>{context[lang].centre.thirteenth}</h3>
                            <div class="tab">
                                <button class="tablinks" onClick={() => {
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.remove("opened")
                                    tabOne.current.classList.add("opened")
                                }} id="defaultOpen">Bo'lim haqida</button>
                                <button class="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabThree.current.classList.remove("opened")
                                    tabTwo.current.classList.add("opened")
                                }} id="defaultOpen">Bizning
                                    maqsadimiz</button>
                                <button class="tablinks" onClick={() => {
                                    tabOne.current.classList.remove("opened")
                                    tabTwo.current.classList.remove("opened")
                                    tabThree.current.classList.add("opened")
                                }} id="defaultOpen">Bizning
                                    vazifamiz</button>
                            </div>
                            <div id="About" ref={tabOne} class="tabcontent opened">
                                <h3>Bo'lim haqida</h3>
                                <p>Toshkent kimyo-texnologiya instituti huzuridagi ???Pedagog kadrlarni qayta tayyorlash va ularning malakasini oshirish??? tarmoq markazi dastlab O??zbekiston Respublikasi Oliy va o??rta maxsus ta??lim vazirligining 1999 yil 19 fevraldagi 57-sonli buyrug??iga asosan ???Malaka oshirish fakulteti??? sifatida tashkil etilgan. Fakultet tomonidan 2012 yilgacha respublikamizdagi oliy ta??lim muassasalarining mutaxassislik fanlari o??qituvchilari o??z bilim va ko??nikmalarini oshirishlari uchun malaka oshirish kurslari tashkil etilgan bo??lsa, 2012 yildan O??zbekiston Respublikasi Prezidentining 2012 yil 28 maydagi ???Malakali pedagog kadrlar tayyorlash hamda o??rta maxsus, kasb-hunar ta??limi muassasalarini shunday kadrlar bilan ta??minlash tizimini yanada takomillashtirishga oid chora-tadbirlar to??g??risida???gi PQ-1761-sonli qarori asosida fakultetda o??rta maxsus, kasb-hunar ta??limi tizimi pedagog kadrlari malakasini oshirish kurslari ham yo??lga qo??yilgan. 2015 yildan boshlab esa O??zbekiston Respublikasi Prezidentining 2015 yil 12-iyundagi ???Oliy ta??lim muassasalarining rahbar va pedagog kadrlarini qayta tayyorlash va ularning malakasini oshirish tizimini yanada takomillashtirish chora-tadbirlari to??g??risida???gi PF-4732???sonli farmoniga muvofiq, Vazirlar Mahkamasining 2015 yil 20-avgustdagi ???Oliy ta??lim muassasalarining rahbar va pedagog kadrlarini qayta tayyorlash va malakasini oshirishni tashkil etish chora-tadbirlari to??g??risida???gi 242???sonli qarori, O??zbekiston Respublikasi Vazirlar Mahkamasining 2014 yil 27-martdagi ???Davlat va xo??jalik boshqaruvi, mahalliy davlat hokimiyati organlari xodimlarini axborot???kommunikatsiya texnologiyalari sohasida malakalarini oshirish bo??yicha qo??shimcha chora-tadbirlar to??g??risida???gi 73-sonli qarori hamda Vazirlar Mahkamasining 2015 yil 21-sentyabrdagi ???Oliy ta??lim muassasalari pedagog kadrlarini qayta tayyorlash va ularning malakasini oshirish tizimini yanada takomillashtirish chora-tadbirlari to??g??risida???gi 273-sonli qarori asosida ???Pedagog kadrlarni qayta tayyorlash va ularning malakasini oshirish??? tarmoq markazi??? sifatida o??z faoliyatini davom ettirib kelmoqda. Tarmoq markazida Qayta tayyorlash va malaka oshirish ta??lim jarayonini tashkil etish va sifatini o??rganish bo??limi, Qayta tayyorlash va malaka oshirish ta??lim dasturlari va ilg??or tajribani joriy etish bo??limi, Xalqaro hamkorlik bo??limi mavjud.</p>
                            </div>

                            <div id="Functions" ref={tabTwo} class="tabcontent">
                                <h3>Bizning maqsadimiz</h3>
                                <p>O??zbekiston Respublikasi Prezidentining 2019 yil 27 avgustdagi PF-5789-sonli qaroriga muvofiq oliy ta??lim muassasalari pedagog kadrlarining uzluksiz malakasini oshirish tizimini joriy etish maqsadida tarmoq markazida kunduzgi (bevosita) o??qitish bilan bir qatorda masofaviy o??qitish tizimi ham tashkil etilgan. ???Pedagog kadrlarni qayta tayyorlash va ularning malakasini oshirish??? tarmoq markazida o??qitish jarayonini yanada takomillashtirish va sifatini oshirish maqsadida oliy ta??lim muassasalari professor-o??qituvchilari uchun quyidagi 5 ta yo??nalish bo??yicha qayta tayyorlash va malaka oshirish kurslari tashkil etilgan</p>
                            </div>


                            <div id="Management" ref={tabThree} class="tabcontent">
                                <h3>Bizning vazifamiz</h3>
                                <p>Shuningdek, tarmoq markazi tinglovchilarining amaliy ko??nikmalarini oshirish maqsadida zamonaviy moddiy-texnika bazasi va yuqori texnologiyalarga ega korxona va tashkilotlarda ko??chma va amaliy mashg??ulotlari tashkil etilmoqda. Hozirda tarmoq markazi respublikamizning 30 dan ortiq yirik ishlab chiqarish korxona va tashkilotlari, vazirlik hamda qo??mitalar, O??zbekiston Respublikasi Fanlar ??kademiyasi huzuridagi ilmiy tadqiqot institutlari hamda xorijning yetakchi universitetlari bilan shartnomalar imzolagan.
                                    <br />
                                    Shuningdek, markaz tinglovchilarining xorijiy professor-o??qituvchilar bilan xorijiy tajriba va fikr almashishlari uchun har yili markazga xorijiy davlat universitetlari hamda xalqaro uyushmalar va agentliklardan, jumladan, ??QShning Chikago Ekolab laboratoriyasi, Buyuk Britaniyaning Xalqaro oziq-ovqat xavfsizligi agentligi, Janubiy Koreyaning Ulsan texnoparki, Belarussiyaning Mogilyov davlat oziq-ovqat universiteti, Rossiyaning Tambov davlat universiteti kabilarning yetakchi professor-o??qituvchilar va xalqaro ekspertlari jalb etib kelinmoqda.
                                    <br />
                                    2019 yil davomida Janubiy Koreya, Daniya, ??QSh, Belarussiya, Xitoy xalq Respublikasi, Rossiya Federatsiyasi va Ukrainadan jami 12 nafar xorijiy mutaxassislar taklif etilgan. 2020 yil davomida Janubiy Koreya, Belarussiya, ??QSh, Rossiya Federatsiyasi, Buyuk Britaniyadan 22 nafar xorijiy mutaxassislar jalb etilgan. 2021 yilda esa jami 14 nafar yetakchi mutaxassislar tarmoq markazi tinglovchilariga o??z tajribalarini almashishlari rejalashtirilgan.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-10">
                            <div class="teachers justify-content-center">
                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree">Bo'lim boshlig'i</span>
                                                <span class="info">Mirzaqulov Xoltura Chorievich

                                                    ??loqalar: Tel.: +998712447928

                                                    E-mail: tkti.tm@mail.ru</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">Mirzaqulov Xoltura Chorievich</h6>
                                </div>
                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image2} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree">Bosh hisobchi</span>
                                                <span class="info">Rabbimov ????zam Sur??atovich
                                                    <br />
                                                    ??loqalar: Tel.: +998712447928
                                                    <br />
                                                    E-mail: tkti.tm@mail.ru.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">Rabbimov ????zam Sur??atovich</h6>
                                </div>
                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image3} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree">Mutaxassisi</span>
                                                <span class="info">??shurova Shahina Burxonjon qizi
                                                    <br />
                                                    ??loqalar: Tel.: +998712447928
                                                    <br />
                                                    E-mail: tkti.tm@mail.ru</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">??shurova Shahina Burxonjon qizi</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Bo`limlar</p></li>
                        <li className="nav-ul-li"><a href="kafedra">Sirtqi bo'lim</a></li>
                        <Link to={'/page/static/get/8'}>
                        <li className="nav-ul-li"><a href="kafedra">Marketing va talabalar amaliyoti bo??limi</a></li>
                        </Link>
                        <Link to={'/page/static/get/9'}>
                        <li className="nav-ul-li"><a href="kafedra">Jismoniy va yuridik shaxslarning murojaatlari bilan ishlash, nazorat va monitoring bo'limi</a></li>
                        </Link>
                        <Link to={'/page/static/get/15'}>
                        <li className="nav-ul-li"><a href="kafedra">Xalqaro aloqalar bo`limi</a></li>
                        </Link>
                        <Link to={'/page/static/get/13'}>
                        <li className="nav-ul-li"><a href="kafedra">Ta???lim sifatini nazorat qilish bo???limi</a></li>
                        </Link>
                        <Link to={'/page/static/get/10'}>
                        <li className="nav-ul-li"><a href="kafedra">O???quv-uslubiy bo???limi</a></li>
                        </Link>
                        <Link to={'/page/static/get/7'}>
                        <li className="nav-ul-li"><a href="kafedra">Magistratura bo???limi</a></li>
                        </Link>
                        <Link to={'/page/static/get/4'}>
                        <li className="nav-ul-li"><a href="kafedra">Ilmiy innovatsion ishlanmalarni tijoratlashtirish bo???limi</a></li>
                        </Link>
                        <Link to={'/page/static/get/6'}>
                        <li className="nav-ul-li"><a href="kafedra">Kadrlar bo`limi</a></li>
                        </Link>
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Markazlar</p></li>
                        <Link to={'/page/static/get/11'}>
                        <li className="nav-ul-li active"><a href="kafedra">TKTI huzuridagi ???Pedagogik kadrlarni qayta tayyorlash va malakasini oshirish??? tarmoq markazi</a></li>
                        </Link>
                        <Link to={'/page/static/get/11'}>
                        <li className="nav-ul-li"><a href="kafedra">Raqamli ta'lim texnologiyalari markazi</a></li>
                        </Link>
                        <Link to={'/page/static/get/5'}>
                        <li className="nav-ul-li"><a href="kafedra">Innovasion markazi</a></li>
                        </Link>
                    </ul>
                    </div>
                    </div>
            </div>
            <Footer />
        </>
    );
}

export default PageStaticOne;
