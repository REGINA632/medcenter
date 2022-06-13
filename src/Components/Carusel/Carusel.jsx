import React, { Component, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./styleC.css";

import img1 from "./Foto/docMen.png";
import img2 from "./Foto/docWomen.png";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default class Responsive extends Component {
  render() {
    const settings = {
      dots: true,
      scrollBy: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 425,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    };
    let arr = [
      {
        img: img1,
        title: "Намозов Улугбек Тагойбекович",
        description:
          "Главный врач. Врач-кардиолог высшей категории. Кандидат медицинских наук",
      },
      {
        img: img2,
        title: "Магоматова Лариса Руслановна",
        description:
          "Главный врач. Врач-кардиолог высшей категории. Кандидат медицинских наук",
      },
      {
        img: img1,
        title: "Ряскин Владимир Иванович",
        description:
          "Главный врач. Врач-кардиолог высшей категории. Кандидат медицинских наук",
      },
      {
        img: img2,
        title: "Жаринова Мария Владимировна",
        description:
          "Главный врач. Врач-кардиолог высшей категории. Кандидат медицинских наук",
      },
      {
        img: img1,
        title: "Маленков Дмитрий Андреевич",
        description:
          "Главный врач. Врач-кардиолог высшей категории. Кандидат медицинских наук",
      },
    ];

    return (
      <>
        <Slider {...settings}>
          {arr.map((item, index) => {
            return (
              <div key={index}>
                {/* <Card sx={{ maxWidth: 350 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      // height="400"
                      image={item.img}
                      alt="photo"
                      className="photo-shoes"
                    />
                    <CardContent>
                      <Typography
                        fontSize={"1rem"}
                        gutterBottom
                        variant="h6"
                        component="div"
                      >
                        {item.title}
                      </Typography>{" "}
                    </CardContent>
                  </CardActionArea>
                </Card> */}
                <div id="carusel">
                  <img src={item.img} alt="" />
                  <div>
                    <div id="docTitle">{item.title}</div>
                    <div>{item.description}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </>
    );
  }
}
