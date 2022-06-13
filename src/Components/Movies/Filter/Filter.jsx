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
    <div>
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
            <FormControlLabel value="all" control={<Radio />} label="Все" />
            <FormControlLabel
              value="Намозов Улугбек Тагойбекович"
              control={<Radio />}
              label="Намозов У.Т."
            />
            <FormControlLabel
              value="Магоматова Лариса Руслановна"
              control={<Radio />}
              label="Магоматова Л.Р."
            />
            <FormControlLabel
              value="Ряскин Владимир Иванович"
              control={<Radio />}
              label="Ряскин В.И."
            />
            <FormControlLabel
              value="Жаринова Мария Владимировна"
              control={<Radio />}
              label="Жаринова М.В."
            />
            <FormControlLabel
              value="Маленков Дмитрий Андреевич"
              control={<Radio />}
              label="Маленков Д.А."
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
