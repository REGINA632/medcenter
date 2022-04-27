import React from "react";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

// Foto
import Scrat from "./Foto/Scrat.PNG";
import Tor from "./Foto/Tor.PNG";
import disneyLand from "./Foto/disneyLand.PNG";
import Shop from "./Foto/Shop.PNG";
import Subscribe from "../Subscribe/Subscribe";

const Header = () => {
  return (
    <div
    // style={{ backgroundColor: "#eceff1" }}
    >
      <Box>
        {/* <img src="https://i.gifer.com/PDxH.gif" alt="" /> */}
        <img
          width="100%"
          src="https://i.pinimg.com/originals/11/ab/c1/11abc1d3e7c9bbbeccf3d2fb92ebe312.jpg"
          // src="https://i.gifer.com/JESX.gif"
          alt=""
        />
      </Box>
      <Container sx={{ marginTop: "40px" }}>
        <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            // alignItems: "baseline",
            justifyContext: "space-evenly",
            textAlign: "center",
            // backgroundColor: "#669bcc",
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: "flex",
            }}
          >
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={Tor}
                  alt=" Thor: Love and Thunder"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Thor: Love and Thunder
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Marvel Studios' Thor: Love and Thunder Arrives Only in
                    Theaters July 8
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a
                  style={{ textAlign: "center" }}
                  href="https://video.disney.com/watch/marvel-studios-thor-love-and-thunder-official-teaser-5dcf0ac696dccebd6b4f2a72"
                >
                  Watch Trailer
                </a>
              </CardActions>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: "flex",
            }}
          >
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={Scrat}
                  alt="Ice Age: Scrat Tales"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Ice Age: Scrat Tales
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Six New Original Shorts Now Streaming on Disney+
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a
                  style={{ textAlign: "center" }}
                  href="https://video.disney.com/watch/marvel-studios-thor-love-and-thunder-official-teaser-5dcf0ac696dccebd6b4f2a72"
                >
                  Stream Now
                </a>
              </CardActions>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: "flex",
            }}
          >
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={disneyLand}
                  alt="Walt Disney World"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Walt Disney World
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Stay in the Magic! Save Up to $500 on a 5-Night Stay at
                    Select Disney Resort Hotels
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a
                  style={{ textAlign: "center" }}
                  href="https://disneyworld.disney.go.com/special-offers/spring-2022-room-offer/?CMP=AFC-DPFY22Q1DIENT0036&DISCID=DI_HP_cardgrid"
                >
                  Offer Details
                </a>
              </CardActions>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: "flex",
            }}
          >
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="350"
                  image={Shop}
                  alt="shopDisney"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    shopDisney
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    See Where Wishes Come True, and Experience the Wonders That
                    Await
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a
                  style={{ textAlign: "center" }}
                  href="https://www.shopdisney.com/?cmp=OTL-Dcom&att=DcomM_CG_Evergreen&efc=280559"
                >
                  Shop Now
                </a>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <h2
          style={{ textAlign: "center", fontSize: "30px", marginTop: "50px" }}
        >
          Disney News
        </h2>
        <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            alignItems: "baseline",
            justifyContext: "space-evenly",
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: "flex",
            }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://lumiere-a.akamaihd.net/v1/images/moonknightnew_1970dd6b.png"
                  alt="NEWS DISNEY+"
                />
                <CardContent>
                  <Typography gutterBottom variant="caption" component="div">
                    NEWS DISNEY+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Oscar Isaac Shines as Dual Characters in Marvel Studios’
                    Moon Knight
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: "flex",
            }}
          >
            <Card sx={{ maxWidth: 345, height: "256px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://lumiere-a.akamaihd.net/v1/images/cheaperbythedoz1_2d409397.png"
                  alt="NEWS DISNEY+"
                />
                <CardContent>
                  <Typography gutterBottom variant="caption" component="div">
                    NEWS DISNEY+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Cheaper by the Dozen Offers a Fresh Take on the Classic Hit
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: "flex",
            }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://lumiere-a.akamaihd.net/v1/images/betternate1_68ecdbc9.jpeg"
                  alt="NEWS DISNEY+"
                />
                <CardContent>
                  <Typography gutterBottom variant="caption" component="div">
                    NEWS DISNEY+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The New Disney Original Film Better Nate Than Ever Shares
                    the True Meaning of Destiny
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: "flex",
            }}
          >
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://lumiere-a.akamaihd.net/v1/images/screen_shot_2022-03-22_at_9_f7e3db65.png"
                  alt="NEWS DISNEY+"
                />
                <CardContent>
                  <Typography gutterBottom variant="caption" component="div">
                    NEWS DISNEY+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    All the Reasons Why Disney and Pixar’s Turning Red Deserves
                    a Closer Look
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ backgroundColor: "#1A153F" }}>
        <Container sx={{ marginTop: "50px", padding: "10px 0 40px 0" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "30px",
              // marginTop: "50px",
              color: "white",
              paddingBottom: "10px",
            }}
          >
            Trending on Disney+
          </h2>
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              alignItems: "baseline",
              justifyContext: "space-evenly",
              textAlign: "center",
              color: "white",
            }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src="https://m.media-amazon.com/images/M/MV5BODY0Y2QzM2MtYzFlNC00MDBjLTkwM2ItYWIxYjA3NjhmNmExXkEyXkFqcGdeQXVyMzExODEzNDA@._V1_.jpg"
                alt=""
              />
              <Typography gutterBottom variant="h6" component="div">
                Now on Disney+
              </Typography>
              <Typography variant="body2" color="white">
                OLIVIA RODRIGO: driving home 2 u (a SOUR film) is streaming on
                Disney+.
              </Typography>
              <a style={{ color: "white", margin: "10px 0" }} href="">
                {" "}
                Stream Now
              </a>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                width="93%"
                src="http://www.hollywoodchicago.com/sites/default/files/003aNateEver.jpg"
                // src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2528/1162528-h-350d7f5aa551"
                alt=""
              />
              <Typography gutterBottom variant="h6" component="div">
                Better Nate Than Ever
              </Typography>
              <Typography variant="body2" color="white">
                Now streaming, only on Disney+!
              </Typography>
              <a style={{ color: "white", margin: "10px 0" }} href="">
                {" "}
                Stream Now
              </a>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container sx={{ paddingBottom: "40px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "30px",
            margin: "30px 0",
          }}
        >
          Vacation with Disney Parks
        </h2>
        <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            alignItems: "baseline",
            justifyContext: "space-evenly",
            textAlign: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
            }}
          >
            <Card sx={{ maxWidth: 700, height: 430 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="270"
                  image="https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2021-09/95e7d963-79dc-46f5-9388-4a128a086b2a.jpeg?h=58c8a5e7&itok=c4aYEBPF"
                  alt="NEWS DISNEY+"
                />
                <CardContent>
                  <Typography gutterBottom variant="caption" component="div">
                    Start Planning Today{" "}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    View special offers for your Walt Disney World ® Resort
                    vacation during The World's Most Magical Celebration!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <a href="https://disneyworld.disney.go.com/special-offers/?CMP=AFC-DPFY21Q1DIENT0099&DISCID=DI_HP_cardgrid_h">
                Learn More
              </a>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
            }}
          >
            <Card sx={{ maxWidth: 700, height: 430 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="270"
                  image="https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/900/160/75/vision-dam/digital/parks-platform/parks-global-assets/disneyland/resorts/disneyland-hotel/0818ZW_07125DZ-45x8.jpg?2022-03-10T23:11:29+00:00"
                  alt=""
                />
                <CardContent>
                  <Typography gutterBottom variant="caption" component="div">
                    Enjoy a Spectacular Spring Offer!
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Save Up to 25% on Select Stays at a Disneyland ® Resort
                    hotel.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <a href="https://disneyland.disney.go.com/offers-discounts/spring-room-offer/?CMP=AFC-DPFY22Q1DIENT0077&DISCID=DI_HP_promo">
                Learn More
              </a>
            </Card>
          </Grid>
        </Grid>
        {/* <Subscribe /> */}
      </Container>
    </div>
  );
};

export default Header;
