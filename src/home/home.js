/* eslint-disable no-unused-vars */
/* eslint-disable indent */
import './home.scss';

import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionBody,
    Alert,
    Nav,
    NavItem
} from 'reactstrap';
import { Button } from '../stories/Button';
import { Link, useHistory } from 'react-router-dom';
import { Input } from 'antd';
import LanguageSelectorComp from '../components/LanguageSelectorComp';
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Slider from 'react-slick';
import LearnMentor from '../assets/media/learn.png';
import upshift from '../assets/media/UPSHIFT-diagram.jpg';
import testi1 from '../assets/media/testi/Herve_Morin_Global_head.jpg';
import testi2 from '../assets/media/testi/Swathi.JPG';
import IdeaBulb from '../assets/media/idea-bulb.png';

import map_icon_awa from '../assets/media/icon_aweraness.png';
import map_icon_reg from '../assets/media/icon_registration.png';
import map_icon_prob from '../assets/media/icon_problem_solving.png';
import map_icon_test from '../assets/media/icon_solution_testing.png';
import map_icon_pitch from '../assets/media/icon_solution_pichting.png';
import map_icon_incu from '../assets/media/icon_incubation.png';

// Brands
import SIC_tamilnadu from '../assets/media/brands/2_SSA-AP.png';
import EDII_tamilnadu from '../assets/media/brands/3_nif_ts.png';
import UpShift_Tamilnadu from '../assets/media/brands/4_UpShift_ts.png';
import Yuwaah_Tamilnadu from '../assets/media/brands/5_Yuwaah_ts.png';
import IIF_Tamilnadu from '../assets/media/brands/6_IIF_ts.png';
import SS_Tamilnadu from '../assets/media/brands/7_SS_ts.png';
import Unicef_OOI_Tamilnadu from '../assets/media/brands/8_Unicef_ts.png';
import scert from '../assets/media/brands/scert_amaravathi.png';
import LogoTn from '../assets/media/brands/AP_logo.png';

import Blog1 from '../assets/media/blog/walker_elders.jpg';
import Blog2 from '../assets/media/blog/agriculture_bag.jpeg';
import Blog3 from '../assets/media/blog/sweeping_machine.png';
import axios from 'axios';
import ScrollToTop from 'react-scroll-to-top';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Vimeo from '@u-wave/react-vimeo';
import AndraPradeshMap from '../components/MapCard/AndraPradeshMap';
// new push
const Home = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState('1');

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    const [diesCode, setDiesCode] = useState('');
    const [orgData, setOrgData] = useState({});
    const [show, setShow] = useState(false);

    const [sidebar, setSidebar] = useState(false);

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    });

    const inputField = {
        type: 'text',
        className: 'defaultInput'
    };

    const handleOnChange = (e) => {
        setDiesCode(e.target.value);
        setShow(false);
    };

    const handleSearch = (e) => {
        const body = JSON.stringify({
            organization_code: diesCode
        });
        var config = {
            method: 'post',
            url: process.env.REACT_APP_API_BASE_URL + '/organizations/checkOrg',
            headers: {
                'Content-Type': 'application/json'
            },
            data: body
        };
        axios(config)
            .then(function (response) {
                if (response.status == 200) {
                    setOrgData(response?.data?.data[0]);
                    setShow(true);
                }
            })
            .catch(function (error) {
                console.log(error);
                setOrgData();
                setShow(true);
            });
        e.preventDefault();
    };

    const toggle = (id) => {
        open === id ? setOpen() : setOpen(id);
    };
    const partners = [
        {
            id: 1,
            key: 'scert',
            imageUrl: scert
        },
        {
            id: 2,
            key: 'SIC',
            imageUrl: SIC_tamilnadu
        },
        {
            id: 3,
            key: 'EDII',
            imageUrl: EDII_tamilnadu
        },
        {
            id: 4,
            key: 'UpShift',
            imageUrl: UpShift_Tamilnadu
        },
        {
            id: 5,
            key: 'Yuwaah',
            imageUrl: Yuwaah_Tamilnadu
        },
        {
            id: 6,
            key: 'IIF',
            imageUrl: IIF_Tamilnadu
        },
        {
            id: 7,
            key: 'SS',
            imageUrl: SS_Tamilnadu
        },
        {
            id: 8,
            key: 'Unicef',
            imageUrl: Unicef_OOI_Tamilnadu
        }
    ];

    const testimonials = [
        {
            id: 1,
            imageUrl: testi2,
            desc: `${t('home_tl.testimonials_desc_1')}`,
            name: `${t('home_tl.testimonials_name_1')}`,
            title: `${t('home_tl.testimonials_title_1')}`
        },
        {
            id: 2,
            imageUrl: testi1,
            desc: `${t('home_tl.testimonials_desc_2')}`,
            name: `${t('home_tl.testimonials_name_2')}`,
            title: `${t('home_tl.testimonials_title_2')}`
        }
    ];

    const testimonials_settings = {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,

        responsive: [
            {
                breakpoint: 991,
                settings: {
                    dots: true
                }
            }
        ]
    };

    const blog_settings = {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        focusOnSelect: true,
        asNavFor: '.slider-nav',

        responsive: [
            {
                breakpoint: 767,
                settings: {
                    arrows: false
                }
            },
            {
                breakpoint: 991,
                settings: {
                    centerMode: false
                }
            }
        ]
    };

    const blog_settings_thumbs = {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '10px'
    };

    const accordion = [
        {
            id: 1,
            title: `${t('home_tl.faq_qn_1')}`,
            desc: `${t('home_tl.faq_ans_1')}`
        },
        {
            id: 2,
            title: `${t('home_tl.faq_qn_2')}`,
            desc: `${t('home_tl.faq_ans_2')}`
        },
        {
            id: 3,
            title: `${t('home_tl.faq_qn_3')}`,
            desc: `${t('home_tl.faq_ans_3')}`
        },
        {
            id: 4,
            title: `${t('home_tl.faq_qn_4')}`,
            desc: `${t('home_tl.faq_ans_4')}`
        },
        {
            id: 5,
            title: `${t('home_tl.faq_qn_5')}`,
            desc: `${t('home_tl.faq_ans_5')}`
        }
    ];

    const blogs = [
        {
            id: 1,
            imgUrl: Blog2,
            title: `${t('home_tl.idea_heading_1')}`,
            desc: `${t('home_tl.idea_desc_1')}`
        },
        {
            id: 2,
            imgUrl: Blog3,
            title: `${t('home_tl.idea_heading_2')}`,
            desc: `${t('home_tl.idea_desc_2')}`
        },
        {
            id: 3,
            imgUrl: Blog1,
            title: `${t('home_tl.idea_heading_3')}`,
            desc: `${t('home_tl.idea_desc_3')}`
        }
    ];

    return (
        <div className="home-main">
            <ScrollToTop smooth color="#0da650" />
            {/* Mobile menu */}
            <Menu
                right
                className="landing-menu"
                isOpen={sidebar}
                onOpen={() => setSidebar(!sidebar)}
                onClose={() => setSidebar(!sidebar)}
            >
                <a href={`${process.env.REACT_APP_FE_URL}/login`}>
                    {t('home_nav_links.btn_login')}
                </a>
                <a href={`${process.env.REACT_APP_FE_URL}/register`}>
                    {t('home_tl.register')}
                </a>
                <Nav className="ml-auto">
                    <NavItem onClick={() => setSidebar(false)}>
                        <AnchorLink
                            className="menu-item text-black"
                            href="#about"
                        >
                            {t('home_nav_links.about')}
                        </AnchorLink>
                    </NavItem>
                    <NavItem onClick={() => setSidebar(false)}>
                        <AnchorLink
                            className="menu-item mx-4 text-black"
                            href="#roadmap"
                        >
                            {t('home_nav_links.road_map')}
                        </AnchorLink>
                    </NavItem>
                    <NavItem onClick={() => setSidebar(false)}>
                        <AnchorLink
                            className="menu-item text-black"
                            href="#impact"
                        >
                            {t('home_nav_links.impact')}
                        </AnchorLink>
                    </NavItem>
                    <NavItem onClick={() => setSidebar(false)}>
                        <AnchorLink
                            className="menu-item mx-4 text-black"
                            href="#partners"
                        >
                            {t('home_nav_links.partners')}
                        </AnchorLink>
                    </NavItem>
                    <NavItem onClick={() => setSidebar(false)}>
                        <AnchorLink
                            className="menu-item text-black"
                            href="#faq"
                        >
                            {t('home_nav_links.faq')}
                        </AnchorLink>
                    </NavItem>
                    <NavItem className="mt-3 ms-3">
                        <LanguageSelectorComp module="general" />
                    </NavItem>
                </Nav>
            </Menu>
            <section className="header ">
                <div className="home-banner">
                    <Container>
                        <Row className="justify-content-between fixed-top p-5 pb-lg-0 pb-3 pt-sm-2 mb-5 nav_row">
                            <Col md={5} className="my-auto mobile-menu">
                                <h2 className="logo mb-0">
                                    <figure className="m-0">
                                        <img
                                            src={LogoTn}
                                            alt="logo"
                                            className="w-5 logoImg"
                                        />
                                    </figure>
                                </h2>
                            </Col>
                            <Col
                                md={7}
                                className="text-right multi-actions main-menu my-auto"
                            >
                                <div className="nav p-4 justify-content-end">
                                    <Nav className="ml-auto ">
                                        <NavItem className="my-auto">
                                            <AnchorLink
                                                className="menu-item text-black mx-5"
                                                href="#about"
                                            >
                                                {t('home_nav_links.about')}
                                            </AnchorLink>
                                        </NavItem>
                                        <NavItem className="my-auto">
                                            <AnchorLink
                                                className="menu-item  text-black"
                                                href="#roadmap"
                                            >
                                                {t('home_nav_links.road_map')}
                                            </AnchorLink>
                                        </NavItem>
                                        <NavItem className="my-auto">
                                            <AnchorLink
                                                className="menu-item text-black mx-5"
                                                href="#impact"
                                            >
                                                {t('home_nav_links.impact')}
                                            </AnchorLink>
                                        </NavItem>
                                        <NavItem className="my-auto">
                                            <AnchorLink
                                                className="menu-item  text-black"
                                                href="#partners"
                                            >
                                                {t('home_nav_links.partners')}
                                            </AnchorLink>
                                        </NavItem>
                                        <NavItem className="my-auto">
                                            <AnchorLink
                                                className="menu-item text-black mx-5"
                                                href="#faq"
                                            >
                                                {t('home_nav_links.faq')}
                                            </AnchorLink>
                                        </NavItem>
                                        <NavItem>
                                            <LanguageSelectorComp module="general" />
                                        </NavItem>
                                    </Nav>
                                </div>
                            </Col>
                        </Row>
                        <Row className="h-100">
                            <Col xs={12} md={10} lg={4} className="center">
                                <h1>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: t(
                                                'home_tl.Hero_section-header'
                                            )
                                        }}
                                    ></div>
                                </h1>

                                <>
                                    <p>
                                        <div
                                            dangerouslySetInnerHTML={{
                                                __html: t(
                                                    'home_tl.Hero_section-description'
                                                )
                                            }}
                                        ></div>
                                    </p>
                                    <div className="d-flex mini123">
                                        <>
                                            <a
                                                href={`${process.env.REACT_APP_FE_URL}/register`}
                                            >
                                                <Button
                                                    label={t(
                                                        'home_tl.register'
                                                    )}
                                                    btnClass="primary mx-3"
                                                    size="small"
                                                />
                                            </a>
                                            <a href={`${process.env.REACT_APP_FE_URL}/login`}>
                                                <Button
                                                    label={t('home_tl.login')}
                                                    btnClass="primary "
                                                    size="small"
                                                />
                                            </a>
                                        </>
                                    </div>
                                </>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <section className="about-us" id="about">
                <Container>
                    <Row>
                        <Col md={12} className="text-center">
                            <div className="heading">
                                <h5>{t('home_tl.about_us')}</h5>
                                <h2 className="sub-heading text-center">
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: t(
                                                'home_tl.about_us_heading'
                                            )
                                        }}
                                    ></div>
                                </h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className="sidp_row p-3">
                        <Col md={6} className="pe-md-4">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: t('home_tl.about_us_desc')
                                }}
                            ></div>
                        </Col>
                        <Col
                            md={6}
                            className="position-relative"
                            style={{ minHeight: '35rem' }}
                        >
                            <div
                                className="position-absolute"
                                style={{ width: '100%', height: '100%' }}
                            >
                                <Vimeo video={772458274} />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="bg-white mx-0 p-md-5 p-2">
                    <Row className="my-5 p-5 upshift p-3 ">
                        <Col md={12} lg={5} className="teacher ">
                            <figure className="text-center">
                                <img
                                    src={upshift}
                                    alt="mentor"
                                    className="img-fluid"
                                />
                            </figure>
                        </Col>
                        <Col
                            md={12}
                            lg={7}
                            className="my-auto teacher-heading pe-md-5"
                        >
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: t('home_tl.about_upshift_heading')
                                }}
                            ></div>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: t('home_tl.about_upshift_desc')
                                }}
                            ></div>
                        </Col>
                    </Row>
                </div>
                <Container className="py-md-4 py-2">
                    <Row className="student py-md-4 py-2">
                        <Col
                            md={12}
                            lg={6}
                            className="my-auto mx-auto student-heading px-5 "
                        >
                            <h2
                                className="mb-5 sub-heading"
                                dangerouslySetInnerHTML={{
                                    __html: t('home_tl.power_by')
                                }}
                            ></h2>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: t('home_tl.upshift_power_desc')
                                }}
                            ></div>
                        </Col>
                        <Col md={12} lg={6}>
                            <figure className="my-0">
                                <img
                                    src={LearnMentor}
                                    alt="learn"
                                    className="img-fluid"
                                />
                            </figure>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="road-map" id="roadmap">
                <div className="heading">
                    <h2 className="sub-heading w-100 text-center">
                        {t('home_tl.roadmpa_heading')}
                    </h2>
                </div>

                <div className="timeline">
                    <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
                        <div className="timeline__event__icon ">
                            <img src={map_icon_awa} />
                        </div>
                        <div className="timeline__event__date text-white">
                            {t('home_tl.step')}-1
                        </div>
                        <div className="timeline__event__content ">
                            <div className="timeline__event__title">
                                {t('home_tl.roadmpa_one')}
                            </div>
                            <div className="timeline__event__description">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: t('home_tl.roadmpa_one_desc')
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                        <div className="timeline__event__icon">
                            <img src={map_icon_reg} />
                        </div>
                        <div className="timeline__event__date text-white">
                            {t('home_tl.step')}-2
                        </div>
                        <div className="timeline__event__content">
                            <div className="timeline__event__title">
                                {t('home_tl.roadmpa_two')}
                            </div>
                            <div className="timeline__event__description">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: t('home_tl.roadmpa_two_desc')
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                        <div className="timeline__event__icon">
                            <img src={map_icon_prob} />
                        </div>
                        <div className="timeline__event__date text-white">
                            {t('home_tl.step')}-3
                        </div>
                        <div className="timeline__event__content">
                            <div className="timeline__event__title">
                                {t('home_tl.roadmpa_three')}
                            </div>
                            <div className="timeline__event__description">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: t('home_tl.roadmpa_three_desc')
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                        <div className="timeline__event__icon">
                            <img src={map_icon_test} />
                        </div>
                        <div className="timeline__event__date text-white">
                            {t('home_tl.step')}-4
                        </div>
                        <div className="timeline__event__content">
                            <div className="timeline__event__title">
                                {t('home_tl.roadmpa_four')}
                            </div>
                            <div className="timeline__event__description">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: t('home_tl.roadmpa_four_desc')
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                        <div className="timeline__event__icon">
                            <img src={map_icon_pitch} />
                        </div>
                        <div className="timeline__event__date text-white">
                            {t('home_tl.step')}-5
                        </div>
                        <div className="timeline__event__content">
                            <div className="timeline__event__title">
                                {t('home_tl.roadmpa_five')}
                            </div>
                            <div className="timeline__event__description">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: t('home_tl.roadmpa_five_desc')
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline__event animated fadeInUp timeline__event--type1">
                        <div className="timeline__event__icon">
                            <img src={map_icon_incu} />
                        </div>
                        <div className="timeline__event__date text-white">
                            {t('home_tl.step')}-6
                        </div>
                        <div className="timeline__event__content">
                            <div className="timeline__event__title">
                                {t('home_tl.roadmpa_six')}
                            </div>
                            <div className="timeline__event__description">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: t('home_tl.roadmpa_six_desc')
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="state-map" id="impact">
                <div className="heading">
                    <h2 className="sub-heading text-center">
                        {t('home_tl.engagement')}
                    </h2>
                </div>
                <AndraPradeshMap />
            </section>
            <section className="blog">
                <Container>
                    <Row className="text-center justify-content-md-center">
                        <div className="heading">
                            <h2 className="sub-heading">
                                {t('home.student_ideas')}
                                <span className="blue">
                                    {t('home.student_ideas_span')}
                                </span>
                                <img
                                    src={IdeaBulb}
                                    alt="Student Idea"
                                    className="img-fluid"
                                    style={{ marginLeft: '2rem' }}
                                />
                            </h2>
                        </div>

                        <Col md={12} className="blog-slider">
                            <Slider
                                {...blog_settings}
                                asNavFor={nav2}
                                ref={(slider) => setSlider1(slider)}
                            >
                                {blogs.map((blog, i) => {
                                    return (
                                        <div key={i}>
                                            <div
                                                className="blog-card"
                                                style={{
                                                    backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(35, 31, 32, 0.99)),
                        url(${blog.imgUrl})`
                                                }}
                                            >
                                                <CardBody className="text-left ">
                                                    <h4 className="pt-5 text-white">
                                                        {blog.title}
                                                    </h4>
                                                    <blockquote className="blockquote text-white">
                                                        <p className="pb-5 text-white">
                                                            {blog.desc}
                                                        </p>
                                                    </blockquote>
                                                </CardBody>
                                            </div>
                                        </div>
                                    );
                                })}
                            </Slider>
                            <div className="thumbnail-slider-wrap">
                                <Slider
                                    {...blog_settings_thumbs}
                                    asNavFor={nav1}
                                    ref={(slider) => setSlider2(slider)}
                                >
                                    {blogs.map((slide, i) => (
                                        <div className="slick-slide" key={i}>
                                            <img
                                                className="slick-slide-image"
                                                src={slide.imgUrl}
                                                alt="thumbnail"
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="testimonials ">
                <Container>
                    <Row className="text-center justify-content-md-center">
                        <div className="heading" style={{ zIndex: 1 }}>
                            <h2 className="sub-heading">
                                {t('home.testimonials')}
                            </h2>
                        </div>

                        <Col md={10} className="testimonials-slider">
                            <Slider {...testimonials_settings}>
                                {testimonials.map((testimonial, i) => {
                                    return (
                                        <Card key={i}>
                                            <figure className="text-center">
                                                <img
                                                    src={testimonial.imageUrl}
                                                    className="img-fluid rounded-circle"
                                                    alt="How Unisolve Works"
                                                />
                                            </figure>
                                            <CardBody>
                                                <blockquote className="blockquote text-center">
                                                    <p className="mb-0">
                                                        {testimonial.desc}
                                                    </p>
                                                    <footer className="blockquote-footer pt-5">
                                                        {' '}
                                                        <h6>
                                                            {testimonial.name}
                                                        </h6>
                                                        <cite title="Source Title">
                                                            {testimonial.title}
                                                        </cite>
                                                    </footer>
                                                </blockquote>
                                            </CardBody>
                                        </Card>
                                    );
                                })}
                            </Slider>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="uni-partners counter" id="partners">
                <Container className="text-center">
                    <Row className="counter-card">
                        <Col md={3} className="my-auto">
                            <h4>{t('home.key_partners')}</h4>
                        </Col>
                        <Col md={9} className="testimonials-slider">
                            <Slider
                                dots={false}
                                slidesToShow={5}
                                slidesToScroll={1}
                                autoplay={true}
                                autoplaySpeed={3000}
                                arrows={false}
                                className="major"
                            >
                                {partners.map((partners, i) => {
                                    return (
                                        <figure
                                            className="text-center my-auto w-100"
                                            key={i}
                                        >
                                            <img
                                                src={partners.imageUrl}
                                                className="img-fluid mx-1"
                                                alt="How Unisolve Works"
                                            />
                                        </figure>
                                    );
                                })}
                            </Slider>
                            <Row className="mini">
                                {partners.map((partners, i) => {
                                    return (
                                        <Col sm={12} md={6} lg={4} key={i}>
                                            <figure className="text-center my-auto">
                                                <img
                                                    src={partners.imageUrl}
                                                    className="img-fluid mx-1"
                                                    alt="How Unisolve Works"
                                                />
                                            </figure>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            ``
            <section className="locate-unisolve">
                <Container>
                    <Row>
                        <Col md={12} className="text-center">
                            <h2>{t('home.join_us')}</h2>
                            <div className="heading">
                                <h5 className="text-center">
                                    {t('home.unisolve_partner_paragraph')}
                                </h5>
                            </div>
                        </Col>
                    </Row>
                    <Row className="text-center justify-content-md-center my-5">
                        <Col md={12} lg={6}>
                            <Row>
                                <Col md={9} className="my-auto">
                                    <Input
                                        {...inputField}
                                        id="organization_code"
                                        onChange={(e) => handleOnChange(e)}
                                        value={diesCode}
                                        name="organization_code"
                                        placeholder={t('home_tl.search_school')}
                                        className="w-100 mb-3 mb-md-0"
                                        style={{
                                            borderRadius: '60px',
                                            padding: '9px 11px'
                                        }}
                                    />
                                </Col>
                                <Col
                                    md={3}
                                    style={{ zIndex: '999' }}
                                    className="partner-btn"
                                >
                                    <Button
                                        label={t('home_tl.search_btn')}
                                        btnClass="primary mx-3 w-100"
                                        size="small"
                                        onClick={(e) => handleSearch(e)}
                                    />
                                </Col>
                            </Row>

                            {orgData && show ? (
                                <Card className="mt-3 text-left p-4">
                                    <CardBody>
                                        <Alert color="primary ">
                                            School: {orgData.organization_name}{' '}
                                            <br />
                                            City: {orgData.city}
                                            <br />
                                            {orgData.mentor === null ? (
                                                <span>
                                                    Teacher is not yet
                                                    registered
                                                </span>
                                            ) : (
                                                <spa>
                                                    Teacher is already
                                                    registered
                                                </spa>
                                            )}
                                        </Alert>
                                    </CardBody>
                                </Card>
                            ) : show ? (
                                <Card className="mt-3 text-left p-4">
                                    <CardBody>
                                        <Alert color="warning">
                                            <Row>
                                                <Col className="text-center">
                                                    <span>
                                                        Entered UDISE Code &
                                                        School details are not
                                                        registered with us.
                                                    </span>
                                                    <span>
                                                        <br />
                                                        Thank you for your
                                                        interest! Please contact
                                                        your program coordinator
                                                        to enroll and
                                                        participate in this
                                                        program.
                                                    </span>
                                                </Col>
                                            </Row>
                                        </Alert>
                                    </CardBody>
                                </Card>
                            ) : null}
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="faq " id="faq">
                <Container>
                    <Row className="text-center justify-content-md-center">
                        <div className="heading">
                            <h2 className="sub-heading">
                                {t('home.unisolve_faq')}
                            </h2>
                        </div>

                        <Col md={12} lg={9} className="testimonials-slider">
                            <Accordion open={open} toggle={toggle}>
                                {accordion.map((item, i) => {
                                    return (
                                        <AccordionItem
                                            className="mb-5 b-0"
                                            key={i}
                                        >
                                            <AccordionHeader targetId={item.id}>
                                                {item.title}
                                            </AccordionHeader>
                                            <AccordionBody
                                                accordionId={item.id}
                                            >
                                                {/* <p>{item.desc}</p> */}
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.desc
                                                    }}
                                                ></div>
                                            </AccordionBody>
                                        </AccordionItem>
                                    );
                                })}
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>
            <footer className="footer">
                <Container>
                    <Row>
                        <Col
                            md={12}
                            className="footer-section-one my-auto logo"
                        >
                            <figure className="text-center">
                                <img
                                    src={LogoTn}
                                    alt="logo"
                                    className="img-fluid w-25 logoImg"
                                />
                            </figure>
                        </Col>
                        <Col md={12} className="text-center nav-section my-3">
                            {/* <h3>{t('home.footer_imp_links')}</h3> */}
                            <Nav className=" justify-content-center d-inline-flex">
                                <NavItem className="my-auto">
                                    <AnchorLink
                                        className="menu-item text-black  "
                                        href="#about"
                                    >
                                        {t('home_nav_links.about')}
                                    </AnchorLink>
                                </NavItem>
                                <NavItem className="my-auto mx-5">
                                    <AnchorLink
                                        className="menu-item  text-black"
                                        href="#roadmap"
                                    >
                                        {t('home_nav_links.road_map')}
                                    </AnchorLink>
                                </NavItem>
                                <NavItem className="my-auto">
                                    <AnchorLink
                                        className="menu-item text-black "
                                        href="#impact"
                                    >
                                        {t('home_nav_links.impact')}
                                    </AnchorLink>
                                </NavItem>
                                <NavItem className="my-auto mx-5">
                                    <AnchorLink
                                        className="menu-item  text-black"
                                        href="#partners"
                                    >
                                        {t('home_nav_links.partners')}
                                    </AnchorLink>
                                </NavItem>
                                <NavItem className="my-auto ">
                                    <AnchorLink
                                        className="menu-item text-black "
                                        href="#faq"
                                    >
                                        {t('home_nav_links.faq')}
                                    </AnchorLink>
                                </NavItem>
                                <Link
                                    className="mx-4"
                                    exact="true"
                                    to="/termsandconditions"
                                >
                                    {t('home.footer_terms')}
                                </Link>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
                <Row className="w-100 mt-5 mx-0 footer-sub">
                    <Col md={12} className="text-center">
                        <p className="my-0 py-3 text-white text-center">
                            © UNISOLVE, UNICEF {new Date().getFullYear()}.{' '}
                            {t('home_nav_links.rights')}{' '}
                        </p>
                    </Col>
                </Row>
            </footer>
        </div>
    );
};

export default Home;
