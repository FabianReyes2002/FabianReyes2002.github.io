
import React from "react";
import { Typography, Box } from "@mui/material";
import CarouselComponent from "./CarouselComponent";

export default function HomeSection({ projects }) {
  return (
    <div className="container">
      <Typography variant="h4" className="section-title">Fabian Reyes</Typography>
      <Box sx={{ display: "grid", placeItems: "center" }}>
        <CarouselComponent projects={projects} />
      </Box>
    </div>
  );
}
