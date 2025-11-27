
import React from "react";
import { Typography, Box, Paper } from "@mui/material";

export default function AboutSection() {
  return (
    <div className="container">
      <Paper elevation={1} sx={{ p: { xs: 3, md: 5 }, maxWidth: 700, mx: "auto", borderRadius: 15, boxShadow: "0 4px 24px rgba(46,125,50,0.07)" }}>
        <Typography variant="h4" className="section-title">About</Typography>
        <Typography variant="body1" sx ={{ color: "#5b6b7b"}}>
          Ik ben Fabian Reyes, Applied Computer Science (PXL) en Data Analyst (Duvel Moortgat).
          Gepassioneerd door data, visualisatie en web. In mijn werk focus ik op
          duidelijke inzichten, performance en een fijne user experience.
        </Typography>
      </Paper>
    </div>
  );
}
