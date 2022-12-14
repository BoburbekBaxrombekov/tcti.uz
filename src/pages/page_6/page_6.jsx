import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { useRef } from 'react'
import { useContext } from 'react';
import context from '../../lang/lang';
import { Context as LanguageContext } from '../../Context/Language';
import Image from '../../images/1.jpg'
import Image3 from '../../images/3.jpg'
import Image4 from '../../images/4.jpg'
import Image5 from '../../images/5.jpg'
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
                            <h3>{context[lang].centre.tenth}</h3>
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
                                <p>K??drl??r bo???limi o???z ish f??oliyatini O???zbekiston Respublik??si Prezidenti qonunl??ri F??rmon v?? f??rmoyishl??ri, Oliy M??jlisi q??rorl??ri, Mehn??t kodeksi, K??drl??r t??yyorl??sh milliy d??sturi, V??zirl??r M??hk??m??sining q??rorl??ri, shuningdek,  Oliy v?? o???rt?? m??xsus t?????lim v??zirligi buyruql??ri, institut K??drl??r bo???limi Nizomi v?? h??r yili institut rektori tomonid??n t??sdiql??ng??n K??drl??r bo???limining yillik ish rej??sig?? muvofiq yurit??di.
                                    <br />
                                    Institut k??drl??r bo???limi quyid??gi v??zif??l??rni ??m??lg?? oshir??di:
                                    <br />
                                    <br /> institut r??hb??riyati v?? bo???lim boshliql??ri bil??n ???K??drl??r t??yyorl??sh milliy d??sturi???g?? muvofiq z??mon??viy t??l??bl??rg?? j??vob beruvchi k??drl??r t??yyorl??sh j??r??yoni uchun l??yoq??tli, yuqori m??l??k??li, chuqur k??sbiy bilimg?? eg??, ilmiy yutuql??rg?? erishg??n ijodiy-ilmiy s??lohiyatli, yuqori idrok v?? ??xloqli xodiml??rni t??nl??sh-s??r??l??sh, ishg?? q??bul qilish;
                                    <br /> professor-o???qituvchi, o???quv-yord??mchi v?? m?????muriy-xo???j??lik xodiml??rni mehn??t sh??rtnom??si ??sosid?? ishg?? q??bul qilish, boshq?? l??vozimg?? o???tk??zish v?? ishd??n ozod qilish to???g???risid??gi hujj??tl??rni r??smiyl??shtirish;
                                    <br /> mehn??t d??ft??rch??l??rini s??ql??sh, to???ldirish, k??drl??r bo???yich?? belgil??ng??n hujj??tl??rni r??smiyl??shtirish;
                                    <br /> t?????tilg?? chiqish gr??fikl??rini tuzish v?? uning b??j??rilishini n??zor??t qilish;
                                    <br />mehn??tg?? l??yoq??tsizlik v??r??q??l??rini r??smiyl??shtirish v?? ro???yx??tg?? olish;
                                    <br /> r??g???b??tl??ntirish v?? mukofotl??sh bo???yich?? m?????lumotl??rni hisobg?? olish;
                                    <br />xodiml??rg?? n??f??q?? belgil??sh bo???yich?? xujj??tl??rni t??yyorl??sh;
                                    <br />institut xodiml??ri bo???yich?? m?????lumotl??r b??z??sini sh??kl??ntirish v?? doimiy yangil??b borish;
                                    <br />t?????limning b??rch?? sh??kll??ri bo???yich?? institut t??l??b??l??rining sh??xsiy hujj??tl??rini q??bul qilish, yuritish v?? s??ql??sh;
                                    <br />t??l??b??l??r bo???yich?? buyruql??rni q??yd etish v?? tekshirish (q??bul qiling??nligi, boshq?? oliy o???quv yurtig?? o???tk??zilg??nligi, tikl??ng??nligi, t??l??b??l??r s??fid??n chiq??rilg??nligi, r??g???b??tl??ntirilg??nligi v?? boshq??l??r);
                                    <br />bitiruvchil??r v?? t??l??b??l??r s??fid??n chiq??rilg??n t??l??b??l??r sh??xsiy hujj??tl??rini belgil??ng??n t??rtibd?? yuritish v?? ??rxivg?? topshirish;
                                    <br />bitiruvchi t??l??b??l??rg?? diploml??rni r??smiyl??shtirish, q??yd etish v?? topshirish;
                                    <br />h??r oyd?? tum??n b??ndlikk?? ko???m??kl??shish m??rk??zig?? bo???sh ish o???rinl??ri bo???yich?? m?????lumotl??rni topshirish.</p>
                            </div>

                            <div id="Functions" ref={tabTwo} class="tabcontent">
                                <h3>Bizning maqsadimiz</h3>
                                <p>K??drl??r  bo???limi boshlig???i o???z f??oliyatini rektorning bevosit?? r??hb??rligid?? olib bor??di.

                                    K??drl??r bo???limi boshlig???ig?? quyid??gi v??zif??l??r yukl??til??di;

                                    <br />  -institut bo???linm??l??ring r??hb??rl??ri bil??n h??mkorlikd?? o???quv-yord??mchi, o???quv ishl??b chiq??rish, m?????muriy-boshq??ruvchilik v?? xizm??t ko???rs??tuvchi xodiml??rni mut??x??ssisligi v?? m??l??k??sig?? mos r??vishd?? t??nl??sh, ul??rni tegishli l??voziml??rg?? belgil??ng??n t??rtibd?? r??smiyl??shtirish, boshq??ruv l??voziml??rig?? z??rur bo???lg??n k??sbiy v?? t??shkilotchilik qobiliyatl??rig??, t?????lim soh??sid?? r??hb??rlik ish t??jrib??si v?? st??jig??, f??oliyat turi v?? v??kol??tl??ri doir??sid?? tegishli bilim v?? ko???nikm??l??rig?? eg??  z??hir?? k??drl??r ro???yx??tini munt??z??m r??vishd?? yangil??b borish;

                                    <br /> -nomenkl??tur??g?? kirg??n institutning b??rch?? toif??d??gi xodiml??rini ishg?? q??bul qilish, boshq?? ishg?? o???tk??zilishi v?? qonunchilik doir??sid?? mehn??t sh??rtnom??sini bekor qilish h??md?? o???z v??qtid?? mehn??t d??ft??rch??si tegishli yozuvl??rni q??yd qilib xodimg?? berish;

                                    <br />  -k??drl??r bo???limi f??oliyati v?? xodiml??rining o???z mehn??t v??zif??l??rini o???z v??qtid?? b??j??rilishl??rini n??zor??t qilib borish v?? boshq??rish;

                                    <br /> -bo???lim ish rej??l??rini tuzish v?? ul??rning ijrosini t?????minl??sh;

                                    <br />   -xodiml??r bil??n tuzil??dig??n mehn??t sh??rtnom?? bl??nk??l??rini to???ldirilishini t??shkil qilish;

                                    <br />   -xodiml??r v?? t??l??b??l??r bo???yich?? buyruq loyih??l??rini t??yyorl??sh v?? tegishli t??rtibd?? r??smiyl??shtirish;

                                    <br />   -institut xodiml??rig?? t??vsifnom?? v?? m?????lumotnom??-obektivk??l??rini  t??yyorl??sh v?? r??smiyl??shtirish n??zor??tini olib borish;

                                    <br />  -institut j??mo??sining ichki mehn??t t??rtib qoid??l??rig?? v?? mehn??t intizomig?? rioya qilishini n??zor??t qilib borish;

                                    <br /> -xodiml??rni t??bell??rini hisobg?? olib borish, yillik mehn??t t?????till??rini tuzish v?? ul??rning b??j??rilishini n??zor??t qilish;

                                    <br /> -tum??n b??ndlikk?? ko???m??kl??shuvchi m??rk??zl??rg?? yangi ishg?? kirg??n xodiml??r uchun mehn??t d??ft??rch??l??rini o???z v??qtid?? buyurtm?? qilish, mehn??t d??ft??rch??l??rini to???ldirilishini n??zor??t qilish, d??vl??t st??nd??rtl??ri ??sosid?? s??ql??nishini t?????minl??sh,  h??md?? mehn??t d??ft??rch??l??rining q??bul qilish v?? s??rf qilish hisobotl??rni olib borish;

                                    <br />-k??drl??rning sh??xsiy t??rkibining hisobotl??rini olib borish;

                                    <br />-Oliy v?? o???rt?? m??xsus t?????lim v??zirligi tomonid??n modemnom??l??ri, buyruql??ri v?? me???yoriy xujj??tl??rini o???z v??qtid?? t??l??b qiling??n sh??kll??rg?? muvofiq b??j??rilishini t?????minl??sh;

                                    <br /> - Oliy v?? o???rt?? m??xsus t?????lim v??zirligi tomonid??n yuritil??dig??n k??drl??rning sh??xsiy t??rkibi, professor-o???qituvchil??rning sh??xsiy m?????lumotl??rini elektron m??nzilg?? o???z v??qtid?? tegishli t??rtibd?? kiritilishini t?????minl??sh;

                                    <br /> -h??r yili o???z v??qtid?? d??vl??t st??tistik?? qo???mit??sig?? 4-t?????lim OT (3-NK) hisobotl??rini, 1-T hisobotini sh??kll??ntirish v?? topshirish;

                                    <br /> -institutning b??k??l??vri??tur?? v?? m??gistr??tur?? bitiruvchil??rig?? diplom v?? diplom ilov??l??rni olish bo???yich?? buyurtm?? qilish, q??bul qilish, s??ql??sh, diploml??rni tegishli t??rtibd?? yozib r??smiyl??shtirilishi, o???z v??qtid?? bitiruvchil??rg?? t??rq??tilishi, diplom v?? diplom ilov??l??rini hisobotini t??yyorl??b topshirish ;

                                    <br /> -??k??demik m?????lumotnom??l??rini r??smiyl??shtirish, berilishi v?? hisobotini yuritish;</p>
                            </div>

                            <div id="Management" ref={tabThree} class="tabcontent">
                                <h3>Bizning vazifamiz</h3>
                                <p>
                                    <br /> -institut j??mo??sining ichki mehn??t t??rtib qoid??l??rig?? v?? mehn??t intizomig?? rioya qilishini n??zor??t qilib borish;

                                    <br /> -xodiml??rni t??bell??rini hisobg?? olib borish, yillik mehn??t t?????till??rini tuzish v?? ul??rning b??j??rilishini n??zor??t qilish;

                                    <br />-tum??n b??ndlikk?? ko???m??kl??shuvchi m??rk??zl??rg?? yangi ishg?? kirg??n xodiml??r uchun mehn??t d??ft??rch??l??rini o???z v??qtid?? buyurtm?? qilish, mehn??t d??ft??rch??l??rini to???ldirilishini n??zor??t qilish, d??vl??t st??nd??rtl??ri ??sosid?? s??ql??nishini t?????minl??sh,  h??md?? mehn??t d??ft??rch??l??rining q??bul qilish v?? s??rf qilish hisobotl??rni olib borish;

                                    <br /> -k??drl??rning sh??xsiy t??rkibining hisobotl??rini olib borish;

                                    <br /> -Oliy v?? o???rt?? m??xsus t?????lim v??zirligi tomonid??n modemnom??l??ri, buyruql??ri v?? me???yoriy xujj??tl??rini o???z v??qtid?? t??l??b qiling??n sh??kll??rg?? muvofiq b??j??rilishini t?????minl??sh;

                                    <br /> - Oliy v?? o???rt?? m??xsus t?????lim v??zirligi tomonid??n yuritil??dig??n k??drl??rning sh??xsiy t??rkibi, professor-o???qituvchil??rning sh??xsiy m?????lumotl??rini elektron m??nzilg?? o???z v??qtid?? tegishli t??rtibd?? kiritilishini t?????minl??sh;

                                    <br />-h??r yili o???z v??qtid?? d??vl??t st??tistik?? qo???mit??sig?? 4-t?????lim OT (3-NK) hisobotl??rini, 1-T hisobotini sh??kll??ntirish v?? topshirish;

                                    <br /> -institutning b??k??l??vri??tur?? v?? m??gistr??tur?? bitiruvchil??rig?? diplom v?? diplom ilov??l??rni olish bo???yich?? buyurtm?? qilish, q??bul qilish, s??ql??sh, diploml??rni tegishli t??rtibd?? yozib r??smiyl??shtirilishi, o???z v??qtid?? bitiruvchil??rg?? t??rq??tilishi, diplom v?? diplom ilov??l??rini hisobotini t??yyorl??b topshirish ;

                                    <br /> -??k??demik m?????lumotnom??l??rini r??smiyl??shtirish, berilishi v?? hisobotini yuritish;
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-10">
                            <div class="teachers">
                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree">Bo'lim boshlig'i</span>
                                                <span class="info">Sattorov Sardor Qahramonjon o???g???li
                                                    Ma???lumoti oliy

                                                    Lavozimga tayinlangan sana: 27.10.2021 yil

                                                    Xizmat telefoni: (71) 244-79-31

                                                    E-mail: mail.tcti.uz.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">Sattorov Sardor Qahramonjon o???g???li</h6>
                                </div>

                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image3} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree">Inspektor</span>
                                                <span class="info">Chorshanbiyeva Go'zal Abdurashid qizi

                                                    Ma???lumoti oliy

                                                    Lavozimga tayinlangan sana: 13.10.2020 yil

                                                    Xizmat telefoni: (71) 244-79-31</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">Chorshanbiyeva Go'zal Abdurashid qizi</h6>
                                </div>
                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image4} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree">1-toifali muhandisi</span>
                                                <span class="info">Samadova Rushana Abdumalik qizi

                                                    Ma???lumoti oliy

                                                    Lavozimga tayinlangan sana: 10.03.2021
                                                    Xizmat telefoni: (71) 244-79-31.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">Samadova Rushana Abdumalik qizi</h6>
                                </div>
                                <div class="wrapper-personal">
                                    <div class="photo-personal">
                                        <img class="images-personal" src={Image5} alt="About us" />
                                        <div class="photo__large">
                                            <div class="bg-text">
                                                <span class="degree">1-toifali muhandis</span>
                                                <span class="info">Saidazimov shag???zod Xasan o???g???li

                                                    Ma???lumotiii oliy

                                                    Lavozimga tayinlangan sanasi 11.11.2021 yil

                                                    Xizmat telefoni: (71) 244-79-31.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 class="fullname-personal">Saidazimov shag???zod Xasan o???g???li</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar-side">
                    <ul className="nav-ull">
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Bo`limlar</p></li>
                        <li className="nav-ul-li active"><a href="kafedra">Kadrlar bo'limi</a></li>
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
                        <Link to={'/page/static/get/12'}>
                        <li className="nav-ul-li"><a href="kafedra">Sirtqi bo'lim</a></li>
                        </Link>
                        <li className='nav-ull-header'><p> <img src={`${Logo}`} alt="" /> Markazlar</p></li>
                        <Link to={'/page/static/get/11'}>
                        <li className="nav-ul-li"><a href="kafedra">Raqamli ta'lim texnologiyalari markazi</a></li>
                        </Link>
                        <Link to={'/page/static/get/14'}>
                        <li className="nav-ul-li"><a href="kafedra">TKTI huzuridagi ???Pedagogik kadrlarni qayta tayyorlash va malakasini oshirish??? tarmoq markazi</a></li>
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
