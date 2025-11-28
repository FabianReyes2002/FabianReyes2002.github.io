
import React from "react";
import { Typography, Box, Card, CardMedia, Button, Stack } from "@mui/material";

export default function ProjectSection({ Name, Img, url, Desc }) {
  return (
    <div className="container">
      <Stack spacing={2} alignItems="center">
        <Card sx={{ width: { xs: 340, md: 720 }, height: { xs: 200, md: 360 }, mb: 2, boxShadow: "0 8px 32px rgba(46,125,50,0.08)", borderRadius: 3,}}>
          {Img ? (
            <CardMedia
              component="img"
              image={Img}
              alt={Name}
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : null}
        </Card>
        <Typography variant="h6" sx={{ mt: 2, mb: 1, fontWeight: 700}}>{Name}</Typography>
        <Typography sx={{ maxWidth: 720, textAlign: "center", color: "#5b6b7b" }}>{Desc}</Typography>
        {url && (
          <Button variant="contained" color="primary" href={url} target="_blank" rel="noopener noreferrer">
            Bekijk project
          </Button>
        )}
      </Stack>
    </div>
  );
}
