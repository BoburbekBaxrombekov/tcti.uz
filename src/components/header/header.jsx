import Logo from "../../images/logo.png";
import uzFlag from "../../images/uz.png";
import ruFlag from "../../images/ru.png";
import enFlag from "../../images/eng.png";
import Institute from "../../images/university.svg";
import Structure from "../../images/structure.svg";
import Entrant from "../../images/profile.svg";
import Students from "../../images/student.svg";
import Functions from "../../images/activity.svg";
import Relation from "../../images/relation.svg";
import Interactive from "../../images/interactive.svg";
import Corruption from "../../images/corruption.svg";
import IconBurger from "../../images/burger_icon.svg";
import IconClose from "../../images/close-menu.svg";
import Symbols from "../../images/gerb.png";
import { useState, useEffect, useContext, useRef } from "react";
import { Context as LanguageContext } from "../../Context/Language";
import context from "../../lang/lang";
import { Link } from "react-router-dom";
import MAIN_API from '../api'

function Header() {
  const innerMenu = useRef();
  const header = useRef();
  const { lang, setLang } = useContext(LanguageContext);
  const [allSc, setAllSc] = useState([]);
  const [consistsSc, setConsistsSc] = useState([]);
  const [subStudentSc, setSubStudentSc] = useState([]);
  const [studentSc, setStudentSc] = useState([]);
  const [workingSc, setWorkingSc] = useState([]);
  const [contactsSc, setContactsSc] = useState([]);
  const [interactiveSc, setInteractiveSc] = useState([]);
  const [corruptionSc, setCorruptionSc] = useState([]);
  const [allList, setAllList] = useState([]);
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetch(`${MAIN_API}/sub_categories/all_sc`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllSc(data);
      });
      fetch(`${MAIN_API}/sub_categories/consists_sc`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setConsistsSc(data);
      });
      fetch(`${MAIN_API}/sub_categories/sub_student_sc`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSubStudentSc(data);
      });
      fetch(`${MAIN_API}/sub_categories/student_sc`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setStudentSc(data);
      });
      fetch(`${MAIN_API}/sub_categories/working_sc`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setWorkingSc(data);
      });
      fetch(`${MAIN_API}/sub_categories/contacts_sc`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setContactsSc(data);
      });
      fetch(`${MAIN_API}/sub_categories/interactive_sc`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setInteractiveSc(data);
      });
      fetch(`${MAIN_API}/sub_categories/corruption_sc`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCorruptionSc(data);
      });
      fetch(`${MAIN_API}/sub_categories/all`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllList(data);
      });
  }, []);
  
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  const burgerIcon = useRef();
  return (
    <div class="wrapperheader" ref={header}>
      <div class="containerheader container-fluid">
        <div class="page_header_wrapper">
          <div class="header_Logo">
            <a href="/">
              <img src={`${Logo}`} alt="" />
            </a>
            <div className="logo_name">
              <a href="/">
                <h5>
                  {context[lang].logo.first} <br />
                  {context[lang].logo.second} <br />
                  {context[lang].logo.third}
                </h5>
              </a>
            </div>
          </div>
          <p
            class="burger_wrapper"
            onClick={(e) => {
              e.preventDefault();
              innerMenu.current.classList.toggle("opened");
              header.current.classList.toggle("fixed_block");
              if (
                burgerIcon.current.src ===
                `${MAIN_API}/static/media/burger_icon.ab3ea912d85a390aeef9090cd37608e7.svg`
              ) {
                console.log(IconClose);
                burgerIcon.current.setAttribute("src", IconClose);
                // burgerIcon.current.setAttribute('width', "50")
              } else {
                burgerIcon.current.setAttribute("src", IconBurger);
                // burgerIcon.current.setAttribute('width', "50")
              }
            }}
          >
            <img ref={burgerIcon} src={IconBurger} alt="menu" width={50} />
          </p>
          <div class="header_nav">
            <ul>
              <li class="header_nav_li">
                <a
                  class="btn font-weight-bold   dropdown-toggle btn_qabul"
                  href=" "
                  role="button"
                  id="dropdownMenuLink"
                 
                  aria-expanded="false"
                >
                  {context[lang].qabul22.qabul1}
                </a>
                <ul
                  class="dropdown-menu  innerDropDown_8"
                  aria-labelledby="dropdownMenuLink"
                  >
                  <div className="d-flex dropdown-menu p-2 innerDropDown">
                    <div className="content_block col-5">
                      <div className="block_top d-flex">
                        <div className="block_icon">
                          <img src={Entrant} className="nav-icons" alt="icon" />
                        </div>
                        <div className="block_name">
                          <h4 className="text-light">
                            {context[lang].header.third}
                          </h4>
                        </div>
                      </div>
                      <div className="block_bottom">
                        <p className="block_text">
                          {context[lang].navbarTexts.third}
                        </p>
                      </div>
                    </div>
                    <div className="col-7">
                      <ul className="dropdown_list d-flex flex-wrap">
                        <li className="my-2">
                          <a
                            className="dropdown-item all_sc"
                            href={`http://tcti.uz/page/get/31`}
                          >
                            {context[lang].entrantLinks.komissiaQabul}
                          </a>
                        </li>
                        <li className="my-2">
                          <a
                            className="dropdown-item all_sc"
                            href={`/page/static/get/xorijAbitur`}
                          >
                            {context[lang].entrantLinks.first}
                          </a>
                        </li>
                        <li className="my-2">
                          <a
                            className="dropdown-item all_sc"
                            href={`/page/static/get/utishBall`}
                          >
                            {context[lang].entrantLinks.second}
                          </a>
                        </li>
                        <li className="my-2">
                          <a
                            className="dropdown-item all_sc"
                            href={`/page/static/get/TestFanlari`}
                          >
                            {context[lang].entrantLinks.sixth}
                          </a>
                        </li>
                        <li className="my-2">
                          <a
                            className="dropdown-item all_sc"
                            href={`/page/static/get/NotFound`}
                          >
                            {context[lang].entrantLinks.nineth}
                          </a>
                        </li>
                        {subStudentSc.map((item) => (
                          <li className="my-2">
                            <a
                              className="dropdown-item all_sc"
                              href={`/page/get/${item.id}`}
                            >
                              {item[`section_name_${lang}`]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li class="header_nav_li dropdown">
                <a
                  class="btn font-weight-bold dropdown-toggle"
                  href=" "
                  role="button"
                  id="dropdownMenuLink"
                  
                  aria-expanded="false"
                >
                  {context[lang].header.first}
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <div className="d-flex dropdown-menu p-2 innerDropDown">
                    <div className="content_block col-5">
                      <div className="block_top d-flex">
                        <div className="block_icon">
                          <img
                            src={Institute}
                            className="nav-icons"
                            alt="icon"
                          />
                        </div>
                        <div className="block_name">
                          <h4 className="text-light">
                            {context[lang].header.first}
                          </h4>
                        </div>
                      </div>
                      <div className="block_bottom">
                        <p className="block_text">
                          {context[lang].navbarTexts.first}
                        </p>
                      </div>
                    </div>
                    <div className="col-7">
                      <ul className="dropdown_list d-flex flex-wrap">
                        {allSc.map((item) => (
                          <li className="my-2">
                            <a
                              className="dropdown-item all_sc"
                              href={`/page/get/${item.id}`}
                            >
                              {item[`section_name_${lang}`]}
                            </a>
                          </li>
                        ))}
                      </ul>
                      <ul className="dropdown_list d-flex flex-wrap">
                        {context[lang].underCategory.first ? (
                          <>
                            <li className="my-2">
                              <a
                                className="dropdown-item all_sc"
                                href={`/page/static/get/univer_haqida`}
                              >
                                {context[lang].generalInformation.first}
                              </a>
                            </li>
                            <li className="my-2">
                              <a
                                className="dropdown-item all_sc"
                                href={`/page/static/get/bizning_manzil`}
                              >
                                {context[lang].generalInformation.second}
                              </a>
                            </li>
                           
                            <li className="my-2">
                              <a
                                className="dropdown-item all_sc"
                                href={`/page/static/get/biz_bn_aloqa`}
                              >
                                {context[lang].generalInformation.fifth}
                              </a>
                            </li>
                            <li className="my-2">
                              <a
                                className="dropdown-item all_sc"
                                href={`/page/static/get/otm_ustavi`}
                              >
                                {context[lang].generalInformation.sixth}
                              </a>
                            </li>
                          </>
                        ) : (
                          ""
                        )}
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li class="header_nav_li dropdown">
                <a
                  class="btn font-weight-bold   dropdown-toggle"
                  href=" "
                  role="button"
                  id="dropdownMenuLink"
                 
                  aria-expanded="false"
                >
                  {context[lang].header.second}
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <div className="d-flex row dropdown-menu p-2 innerDropDown">
                    <div className="content_block col-5">
                      <div className="block_top d-flex">
                        <div className="block_icon">
                          <img
                            src={Structure}
                            className="nav-icons"
                            alt="icon"
                          />
                        </div>
                        <div className="block_name">
                          <h4 className="text-light">
                            {context[lang].header.second}
                          </h4>
                        </div>
                      </div>
                      <div className="block_bottom">
                        <p className="block_text">
                          {context[lang].navbarTexts.second}
                        </p>
                      </div>
                    </div>
                    <div className="col-7">
                      <ul className="dropdown_list d-flex flex-wrap">
                        {context[lang].underCategory.first ? (
                          <>
                            <li className="my-2">
                              <a
                                className="dropdown-item all_sc"
                                href={`/page/static/get/rectorat`}
                              >
                                {context[lang].underCategory.first}
                              </a>
                            </li>
                            <li className="my-2">
                              <a
                                className="dropdown-item all_sc"
                                href={`/page/static/get/faculties`}
                              >
                                {context[lang].underCategory.third}
                              </a>
                            </li>
                            <li className="my-2">
                              <a
                                className="dropdown-item all_sc"
                                href={`/page/static/get/1`}
                              >
                                {context[lang].underCategory.second}
                              </a>
                            </li>
                            <li className="my-2">
                              <a
                                className="dropdown-item all_sc"
                                href={`/page/static/get/3`}
                              >
                                {context[lang].underCategory.fourth}
                              </a>
                            </li>
                            <li className="my-2">
                              <a
                                className="dropdown-item all_sc"
                                href={`/page/static/get/filial`}
                              >
                                {context[lang].underCategory.sixth}
                              </a>
                            </li>
                            <li className="my-2">
                              <a
                                className="dropdown-item all_sc"
                                href={`/page/static/get/yoshlar`}
                              >
                                {context[lang].underCategory.seventh}
                              </a>
                            </li>
                            <li className="my-2">
                              <a
                                className="dropdown-item all_sc"
                                href={`/page/static/get/litsey`}
                              >
                                {context[lang].underCategory.eighth}
                              </a>
                            </li>
                          </>
                        ) : (
                          ""
                        )}
                        {consistsSc.map((item) => (
                          <li className="my-2">
                            <a
                              className="dropdown-item all_sc"
                              href={`/page/get/${item.id}`}
                            >
                              {item[`section_name_${lang}`]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              
              <li class="header_nav_li dropdown">
                <a
                  class="btn font-weight-bold   dropdown-toggle"
                  href=" "
                  role="button"
                  id="dropdownMenuLink"
                  
                  aria-expanded="false"
                >
                  {context[lang].header.fourth}
                </a>
                <ul
                  class="dropdown-menu innerDropDown_4"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="d-flex dropdown-menu p-2 innerDropDown">
                    <div className="content_block col-5">
                      <div className="block_top d-flex">
                        <div className="block_icon">
                          <img
                            src={Students}
                            className="nav-icons"
                            alt="icon"
                          />
                        </div>
                        <div className="block_name">
                          <h4 className="text-light">
                            {context[lang].header.fourth}
                          </h4>
                        </div>
                      </div>
                      <div className="block_bottom">
                        <p className="block_text">
                          {context[lang].navbarTexts.fourth}
                        </p>
                      </div>
                    </div>
                    <div className="col-7">
                      <ul className="dropdown_list d-flex flex-wrap">
                        <li className="my-2">
                          <a
                            className="dropdown-item all_sc"
                            href={`/page/static/get/bakalavr`}
                          >
                            {context[lang].Talabalar.first}
                          </a>
                        </li>
                        <li className="my-2">
                          <a
                            className="dropdown-item all_sc"
                            href={`/page/static/get/DarsJadval`}
                          >
                            {context[lang].Talabalar.third}
                          </a>
                        </li>
                        {studentSc.map((item) => (
                          <li className="my-2">
                            <a
                              className="dropdown-item all_sc"
                              href={`/page/get/${item.id}`}
                            >
                              {item[`section_name_${lang}`]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li class="header_nav_li dropdown">
                <a
                  class="btn font-weight-bold   dropdown-toggle"
                  href=" "
                  role="button"
                  id="dropdownMenuLink"
                  
                  aria-expanded="false"
                >
                  {context[lang].header.fivth}
                </a>
                <ul
                  class="dropdown-menu innerDropDown_5"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="d-flex dropdown-menu p-2 innerDropDown">
                    <div className="content_block col-5">
                      <div className="block_top d-flex">
                        <div className="block_icon">
                          <img
                            src={Functions}
                            className="nav-icons"
                            alt="icon"
                          />
                        </div>
                        <div className="block_name">
                          <h4 className="text-light">
                            {context[lang].header.fivth}
                          </h4>
                        </div>
                      </div>
                      <div className="block_bottom">
                        <p className="block_text">
                          {context[lang].navbarTexts.fifth}
                        </p>
                      </div>
                    </div>
                    <div className="col-7">
                      <ul className="dropdown_list d-flex flex-wrap">
                        {workingSc.map((item) => (
                          <li className="my-2">
                            <a
                              className="dropdown-item all_sc"
                              href={`/page/get/${item.id}`}
                            >
                              {item[`section_name_${lang}`]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li class="header_nav_li dropdown">
                <a
                  class="btn font-weight-bold   dropdown-toggle"
                  href=" "
                  role="button"
                  id="dropdownMenuLink"
                  
                  aria-expanded="false"
                >
                  {context[lang].header.sixth}
                </a>
                <ul
                  class="dropdown-menu innerDropDown_6"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="d-flex dropdown-menu p-2 innerDropDown">
                    <div className="content_block col-5">
                      <div className="block_top d-flex">
                        <div className="block_icon">
                          <img
                            src={Relation}
                            className="nav-icons"
                            alt="icon"
                          />
                        </div>
                        <div className="block_name">
                          <h4 className="text-light">
                            {context[lang].header.sixth}
                          </h4>
                        </div>
                      </div>
                      <div className="block_bottom">
                        <p className="block_text">
                          {context[lang].navbarTexts.sixth}
                        </p>
                      </div>
                    </div>
                    <div className="col-7">
                      <ul className="dropdown_list d-flex flex-wrap">
                        {contactsSc.map((item) => (
                          <li className="my-2">
                            <a
                              className="dropdown-item all_sc"
                              href={`/page/get/${item.id}`}
                            >
                              {item[`section_name_${lang}`]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li class="header_nav_li dropdown">
                <a
                  class="btn font-weight-bold   dropdown-toggle"
                  href=" "
                  role="button"
                  id="dropdownMenuLink"
                
                  aria-expanded="false"
                >
                  {context[lang].sub_header.first}
                </a>
                <ul
                  class="dropdown-menu innerDropDown_7"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="d-flex dropdown-menu p-2 innerDropDown">
                    <div className="content_block col-5">
                      <div className="block_top d-flex">
                        <div className="block_icon">
                          <img
                            src={Interactive}
                            className="nav-icons"
                            alt="icon"
                          />
                        </div>
                        <div className="block_name">
                          <h4 className="text-light">
                            {context[lang].sub_header.first}
                          </h4>
                        </div>
                      </div>
                      <div className="block_bottom">
                        <p className="block_text">
                          {context[lang].navbarTexts.seventh}
                        </p>
                      </div>
                    </div>
                    <div className="col-7">
                      <ul className="dropdown_list d-flex flex-wrap">
                        {interactiveSc.map((item) => (
                          <li className="my-2">
                            <a
                              className="dropdown-item all_sc"
                              href={`/page/get/${item.id}`}
                            >
                              {item[`section_name_${lang}`]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li class="header_nav_li dropdown">
                <a
                  class="btn font-weight-bold  dropdown-toggle"
                  href=" "
                  role="button"
                  id="dropdownMenuLink"
                 
                  aria-expanded="false"
                >
                  {context[lang].sub_header.second}
                </a>
                <ul
                  class="dropdown-menu innerDropDown_8"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="d-flex dropdown-menu p-2 innerDropDown">
                    <div className="content_block col-5">
                      <div className="block_top d-flex">
                        <div className="block_icon">
                          <img
                            src={Corruption}
                            className="nav-icons"
                            alt="icon"
                          />
                        </div>
                        <div className="block_name">
                          <h4 className="text-light">
                            {context[lang].sub_header.second}
                          </h4>
                        </div>
                      </div>
                      <div className="block_bottom">
                        <p className="block_text">
                          {context[lang].navbarTexts.eighth}
                        </p>
                      </div>
                    </div>
                    <div className="col-7">
                      <ul className="dropdown_list d-flex flex-wrap">
                        {corruptionSc.map((item) => (
                          <li className="my-2">
                            <a
                              className="dropdown-item all_sc"
                              href={`/page/get/${item.id}`}
                            >
                              {item[`section_name_${lang}`]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
          <div class="header_nav_news">
            <ul class="sub_menu__wrapper">
              <li class="header_nav_li dropdown">
                <a
                  href="qabul2022"
                  target="blank"
                  rel="noopener noreferrer"
                  class="header_nav_link font-weight-normal font-weight-normal dropbtn nav_news_link"
                >
                  <span class="sub_header_2">
                    {context[lang].sub_header.seventh}
                  </span>
                  {/* <span class="sub_header_2">
                      {context[lang].sub_header.third}: (+99871)244-79-23
                    </span> */}
                </a>
              </li>
              <li class="header_nav_li dropdown">
                <a
                  href="https://student.tcti.uz/dashboard/login"
                  target="blank"
                  rel="noopener noreferrer"
                  class="header_nav_link font-weight-normal dropbtn nav_news_link"
                >
                  <span class="sub_header_2">
                    {context[lang].sub_header.sixth}
                  </span>
                </a>
              </li>
              <li class="header_nav_li dropdown">
                <a
                  href="http://rector.tcti.uz/"
                  target="blank"
                  rel="noopener noreferrer"
                  class="header_nav_link font-weight-normal dropbtn nav_news_link"
                >
                  <span class="sub_header_2">
                    {context[lang].sub_header.fourth}
                  </span>
                </a>
              </li>
              <li class="header_nav_li dropdown">
                <a
                  href="https://hemis.tcti.uz/dashboard/login"
                  target="blank"
                  rel="noopener noreferrer"
                  class="header_nav_link font-weight-normal dropbtn nav_news_link"
                >
                  <span class="sub_header_2">
                    {context[lang].sub_header.fivth}
                  </span>
                </a>
              </li>
              <li class="header_nav_li none_hover dropdown">
                <div class="commands">
                  <div class="gerb">
                    <Link to="/page/static/get/symbols">
                      <img src={Symbols} alt="" width="28" />
                    </Link>
                  </div>
                  <button
                    class="zoom_btn zoom_minus"
                    onClick={(e) => {
                      e.preventDefault();
                      var Page = document.body;
                      var zoom = parseInt(Page.style.zoom) - 10 + "%";
                      Page.style.zoom = zoom;
                      return false;
                    }}
                  >
                    A-
                  </button>
                  <button
                    class="zoom_btn zoom_default"
                    onClick={(e) => {
                      e.preventDefault();
                      var Page = document.body;
                      var zoom = "100%";
                      Page.style.zoom = zoom;
                      return false;
                    }}
                  >
                    A
                  </button>
                  <button
                    class="zoom_btn zoom_plus"
                    onClick={(e) => {
                      e.preventDefault();
                      var Page = document.body;
                      var zoom = parseInt(Page.style.zoom) + 10 + "%";
                      Page.style.zoom = zoom;
                      return false;
                    }}
                  >
                    A+
                  </button>
                  <button
                    class="zoom_btn theme_btn"
                    onClick={(e) => {
                      e.preventDefault();
                      var Page = document.body;
                      Page.classList.toggle("greyscale");
                    }}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/61/61410.png"
                      alt=""
                      width="17"
                    />
                  </button>
                </div>
              </li>
              <li class="lang-selector ml-3">
                <button
                  class="translator"
                  onClick={(e) => {
                    e.preventDefault();
                    setLang("uz");
                  }}
                >
                  <img src={`${uzFlag}`} alt="translator" width="25px" />
                </button>
                <button
                  class="translator"
                  onClick={(e) => {
                    e.preventDefault();
                    setLang("ru");
                  }}
                >
                  <img src={`${ruFlag}`} alt="translator" width="25px" />
                </button>
                <button
                  class="translator"
                  onClick={(e) => {
                    e.preventDefault();
                    setLang("en");
                  }}
                >
                  <img src={`${enFlag}`} alt="translator" width="25px" />
                </button>
              </li>
            </ul>
          </div>
          <div ref={innerMenu} className="inner_menu">
            <ul className="catalog-list">
              <li>
                <h4 className="main_text">{context[lang].header.first}</h4>
                <ul>
                  {allSc.map((item) => (
                    <li key={item.id}>
                      <a href={`/page/get/${item.id}`} class="all_sc">
                        {item[`section_name_${lang}`]}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <h4 className="main_text">{context[lang].header.second}</h4>
                <ul>
                  {consistsSc.map((item) => (
                    <li key={item.id}>
                      <a href={`/page/get/${item.id}`} class="all_sc">
                        {item[`section_name_${lang}`]}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <h4 className="main_text">{context[lang].header.third}</h4>
                <ul>
                  {subStudentSc.map((item) => (
                    <li key={item.id}>
                      <a href={`/page/get/${item.id}`} class="all_sc">
                        {item[`section_name_${lang}`]}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <h4 className="main_text">{context[lang].header.fourth}</h4>
                <ul>
                  {studentSc.map((item) => (
                    <li key={item.id}>
                      <a href={`/page/get/${item.id}`} class="all_sc">
                        {item[`section_name_${lang}`]}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <h4 className="main_text">{context[lang].header.fivth}</h4>
                <ul>
                  {workingSc.map((item) => (
                    <li key={item.id}>
                      <a href={`/page/get/${item.id}`} class="all_sc">
                        {item[`section_name_${lang}`]}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <h4 className="main_text">{context[lang].header.sixth}</h4>
                <ul>
                  {contactsSc.map((item) => (
                    <li key={item.id}>
                      <a href={`/page/get/${item.id}`} class="all_sc">
                        {item[`section_name_${lang}`]}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <h4 className="main_text">{context[lang].sub_header.first}</h4>
                <ul>
                  {interactiveSc.map((item) => (
                    <li key={item.id}>
                      <a href={`/page/get/${item.id}`} class="all_sc">
                        {item[`section_name_${lang}`]}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <h4 className="main_text">{context[lang].sub_header.second}</h4>
                <ul>
                  {corruptionSc.map((item) => (
                    <li key={item.id}>
                      <a href={`/page/get/${item.id}`} class="all_sc">
                        {item[`section_name_${lang}`]}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
