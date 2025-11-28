
import React from "react";
import {
  AppBar, Toolbar, Button, IconButton, Drawer, List, ListItemButton, ListItemText, Box, useScrollTrigger,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const baseSections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
];

export default function Header({ projects = [] }) {
  const sections = [
    ...baseSections,
    ...projects.map(p => ({ id: p.id ?? p.Name.toLowerCase().replace(/\s+/g, "-"), label: p.Name })),
  ];

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [activeId, setActiveId] = React.useState("home");
  const trigger = useScrollTrigger({ threshold: 12, disableHysteresis: true });

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  React.useEffect(() => {
    const headerHeight = 72;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible?.target?.id) {
          const id = visible.target.id;
          setActiveId(id);
          history.replaceState(null, "", `#${id}`);
        }
      },
      { rootMargin: `-${headerHeight + 8}px 0px -40% 0px`, threshold: 0.5 }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [projects.length]);

  const NavButton = ({ id, label }) => (
    <Button
      key={id}
      onClick={() => scrollToSection(id)}
      sx={{
        mx: 0.5,
        color: activeId === id ? "primary.main" : "text.primary",
        fontWeight: activeId === id ? 700 : 500,
        borderRadius: 0,
        position: "relative",
        "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          bottom: -6,
          height: 2,
          background: activeId === id ? "currentColor" : "transparent",
          transform: `scaleX(${activeId === id ? 1 : 0})`,
          transition: "transform 200ms ease",
        },
      }}
    >
      {label}
    </Button>
  );

  return (
    <>
      <AppBar
        position="sticky"
        elevation={trigger ? 8 : 0}
        sx={{
          backgroundColor: trigger ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.82)",
          boxShadow: trigger ? "0 4px 24px rgba(46,125,50,0.07)" : "none",
          transition: "background-color 150ms, box-shadow 150ms",
        }}
      >
        <Toolbar sx={{ minHeight: 80, display: "flex", gap: 1 }}>
          <Box sx={{ flexGrow: 1, fontWeight: 800, letterSpacing: 0.4, color: "black" , fontSize: 20 }}>
            Fabian Reyes
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {sections.map((s) => <NavButton key={s.id} {...s} />)}
          </Box>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton aria-label="menu" onClick={() => setDrawerOpen(true)} color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 260 }} role="presentation">
          <List>
            {sections.map(({ id, label }) => (
              <ListItemButton
                key={id}
                onClick={() => { scrollToSection(id); setDrawerOpen(false); }}
                selected={activeId === id}
              >
                <ListItemText
                  primary={label}
                  primaryTypographyProps={{ fontWeight: activeId === id ? 700 : 500 }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
