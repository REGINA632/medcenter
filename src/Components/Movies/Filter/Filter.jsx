import React, { useState } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Slider from "@mui/material/Slider";
import { Button, Typography } from "@mui/material";

const Filter = ({
  type,
  setType,
  setPage,
  slider,
  setSlider,
  maxSliderValue,
  minSliderValue,
  handleReset,
}) => {
  const [filter, setFilter] = useState(true);

  // const btnFilter = () => {
  //   if (filter) {
  //     setFilter(false);
  //   } else {
  //     setFilter(true);
  //   }
  // };

  return (
    <div style={{ textAlign: "center" }}>
      {/* <Button onClick={btnFilter}>
        <h2 style={{ color: "black" }}>Filter</h2>
      </Button> */}
      <div style={{ display: filter ? "block" : "none" }}>
        <FormControl sx={{ marginBottom: "20px" }}>
          {/* <FormLabel id="demo-radio-buttons-group-label">Type</FormLabel> */}
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            style={{ display: "flex", flexDirection: "row" }}
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              setPage(1);
            }}
          >
            <FormControlLabel value="all" control={<Radio />} label="All" />
            <FormControlLabel
              value="Action/Adventure"
              control={<Radio />}
              label="Action/Adventure"
            />
            <FormControlLabel
              value="Animation"
              control={<Radio />}
              label="Animation"
            />
            <FormControlLabel
              value="Classics"
              control={<Radio />}
              label="Classics"
            />
            <FormControlLabel
              value="Comedy"
              control={<Radio />}
              label="Comedy"
            />
            <FormControlLabel value="Drama" control={<Radio />} label="Drama" />
            <FormControlLabel
              value="Fantasy"
              control={<Radio />}
              label="Comedy"
            />
            <FormControlLabel
              value="Musical"
              control={<Radio />}
              label="Musical"
            />
            <FormControlLabel
              value="Romance"
              control={<Radio />}
              label="Romance"
            />
            <FormControlLabel
              value="Science Fiction"
              control={<Radio />}
              label="Science Fiction"
            />
          </RadioGroup>
        </FormControl>
        {/* <Typography color="text.secondary">Price</Typography>
        <Slider
          sx={{ maxWidth: "350px" }}
          value={slider}
          onChange={(e, newValue) => {
            setSlider(newValue);
            setPage(1);
          }}
          valueLabelDisplay="auto"
          max={maxSliderValue}
          min={minSliderValue}
        />
        <br /> */}
        {/* <Button varianr="outlined" onClick={handleReset}>
          Reset
        </Button> */}
      </div>
    </div>
  );
};

export default Filter;
