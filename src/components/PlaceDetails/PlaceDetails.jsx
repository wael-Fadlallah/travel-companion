import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import useStyles from "./style";
import { Chip } from "@material-ui/core";
import { CardActions } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
function PlaceDetails({ place, selected, refProp }) {
  const classes = useStyles();
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  return (
    <Card elevation={6} style={{ margin: "15px" }}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094833/the-red-cafe.png"
        }
        title={place.name}
      ></CardMedia>
      <CardContent>
        <Typography gutterBottom={true} variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom={true} variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Rating size="small" value={Number(place.rating)} readOnly />
          <Typography gutterBottom={true} variant="subtitle1">
            out of {place.num_reviews} reviews
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom={true} variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award, index) => (
          <Box my={1} key={index} display="flex" justifyContent="space-between">
            <img src={award.images.small} alt="award" />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}

        {place?.cuisine?.map(({ name }) => (
          <Chip
            key={name}
            size="small"
            label={name}
            className={classes.chip}
          ></Chip>
        ))}

        {place?.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon /> {place.address}
          </Typography>
        )}

        {place?.phone && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.web_url, "_blank")}
        >
          Trip Advisor
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.website, "_blank")}
        >
          website
        </Button>
      </CardActions>
    </Card>
  );
}

export default PlaceDetails;
