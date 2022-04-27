import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";

const More = () => {
  return (
    <>
      <Container sx={{ marginBottom: "25px" }}>
        <Typography variant="h4" align="center" m="25px 0">
          Disney News
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "baseline",
            // alignItems: "stretch",
            justifyContext: "space-between",
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
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  // height="140"
                  image="https://img.game-news24.com/2022/01/First-Look-At-Oscar-Isaac-s-Moon-Knight-Revealed-Rewealed.jpeg"
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
            sx={{
              display: "flex",
            }}
          >
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  // height="140"
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

          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              display: "flex",
            }}
          >
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  // height="140"
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
            sx={{
              display: "flex",
            }}
          >
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  // height="140"
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

          <Grid item xs={12}>
            <Card>
              <CardActionArea
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <CardMedia
                  sx={{ width: "30%" }}
                  component="img"
                  image="https://lumiere-a.akamaihd.net/v1/images/screen_shot_2022-03-10_at_7_d53f9be8.png"
                  alt="NEWS DISNEY+"
                />
                <CardContent>
                  <Typography gutterBottom variant="caption" component="div">
                    NEWS DISNEY+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    An Inside Look at Pixar’s Turning Red With Director Domee
                    Shi and Producer Lindsey Collins
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardActionArea
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <CardMedia
                  sx={{ width: "30%" }}
                  component="img"
                  image="https://lumiere-a.akamaihd.net/v1/images/screen_shot_2022-03-01_at_12_6e946411.png?region=0,30,2488,1302"
                  alt="NEWS DISNEY+"
                />
                <CardContent>
                  <Typography gutterBottom variant="caption" component="div">
                    NEWS DISNEY+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Disney and Pixar’s Turning Red Features a Fresh Form of
                    Animation and Other Surprises
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardActionArea
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <CardMedia
                  sx={{ width: "30%" }}
                  component="img"
                  image="https://lumiere-a.akamaihd.net/v1/images/screen_shot_2022-02-25_at_10_238c0850.png"
                  alt="NEWS DISNEY+"
                />
                <CardContent>
                  <Typography gutterBottom variant="caption" component="div">
                    NEWS DISNEY+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Death on the Nile Is an Alluring Tale of Lies, Love, and
                    Loss
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardActionArea
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <CardMedia
                  sx={{ width: "30%" }}
                  component="img"
                  image="https://lumiere-a.akamaihd.net/v1/images/screen_shot_2022-02-01_at_10_917bded5.png"
                  alt="NEWS DISNEY+"
                />
                <CardContent>
                  <Typography gutterBottom variant="caption" component="div">
                    NEWS DISNEY+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The Ice Age Adventures of Buck Wild Explores the Nuances of
                    Family
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardActionArea
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <CardMedia
                  sx={{ width: "30%" }}
                  component="img"
                  image="https://lumiere-a.akamaihd.net/v1/images/screen_shot_2021-12-16_at_1_8663ae2c.png"
                  alt="NEWS DISNEY+"
                />
                <CardContent>
                  <Typography gutterBottom variant="caption" component="div">
                    NEWS DISNEY+
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Steven Spielberg’s West Side Story Hits All the Right Notes
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default More;
