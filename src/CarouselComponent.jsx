
import React from "react";
import { Box, Card, CardMedia, IconButton, useMediaQuery } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function CarouselComponent({ projects }) {
  const isMdUp = useMediaQuery("(min-width:900px)");
  const VISIBLE = isMdUp ? 3 : 2;
  const CARD_W = isMdUp ? 280 : 200;
  const CARD_H = isMdUp ? 180 : 120;
  const GAP = 40;
  const RAIL_W = VISIBLE * CARD_W + (VISIBLE - 1) * GAP;
  const STEP = CARD_W + GAP;

  const [index, setIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => handleNext(), 3200);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, VISIBLE]);

  const handlePrev = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIndex(prev => (prev + 1) % projects.length);
      setAnimating(false);
    }, 420);
  };

  const handleNext = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setIndex(prev => (prev - 1 + projects.length) % projects.length);
      setAnimating(false);
    }, 420);
  };

  const windowItems = Array.from({ length: VISIBLE }).map((_, i) => {
    const idx = (index + i) % projects.length;
    return projects[idx];
  });

  return (
    <Box sx={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", width: "100%", mt: 10}}>
    <IconButton
    onClick={handlePrev}
    sx={{
        position: "absolute",
        left: { xs: -10, md: -32 },
        zIndex: 2,
        bgcolor: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
        "&:hover": { bgcolor: "#f0f0f0" },
    }}
    >
        <ArrowBackIosNewIcon />
      </IconButton>

      <Box sx={{ width: RAIL_W, overflow: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            gap: `${GAP}px`,
            width: RAIL_W,
            transform: animating ? `translateX(${STEP}px)` : "translateX(0)",
            transition: animating ? "transform 420ms cubic-bezier(.22,.61,.36,1)" : "none",
          }}
        >
          {windowItems.map((project) => (
            <a
              key={project.id ?? project.Name}
              href={`#${(project.id ?? project.Name).toLowerCase().replace(/\s+/g, "-")}`}
              style={{ display: "block", width: CARD_W, height: CARD_H, flexShrink: 0 }}
            >
              <Card sx={{ width: CARD_W, height: CARD_H, overflow: "hidden" }}>
                {project.Img ? (
                  <CardMedia
                    component="img"
                    image={project.Img}
                    alt={project.Name}
                    sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                ) : (
                  <Box sx={{ width: "100%", height: "100%", bgcolor: "#e0e0e0" }} />
                )}
              </Card>
            </a>
          ))}
        </Box>
      </Box>

      <IconButton onClick={handleNext} 
      sx={{
        position: "absolute",
        right: { xs: 0, md: 12 }, 
        zIndex: 2,bgcolor: "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.07)", 
        "&:hover": { bgcolor: "#f0f0f0"},
    }}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}
