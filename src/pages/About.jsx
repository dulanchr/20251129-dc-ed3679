import { Box, Heading, Text, Avatar, Label, Link } from "@primer/react";
import { MarkGithubIcon, MailIcon, LocationIcon } from "@primer/octicons-react";

function About() {
  return (
    <Box
      sx={{
        maxWidth: 960,
        margin: "0 auto",
        padding: 4,
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          py: 5,
          borderBottom: "1px solid",
          borderColor: "border.default",
        }}
      >
        <Avatar
          src="https://github.com/github.png"
          size={128}
          alt="Profile"
          sx={{ mb: 3 }}
        />
        <Heading as="h1" sx={{ fontSize: 5, mb: 2 }}>
          About Us
        </Heading>
        <Text as="p" sx={{ fontSize: 2, color: "fg.muted" }}>
          Building amazing web experiences with modern technologies
        </Text>
      </Box>

      <Box sx={{ py: 5 }}>
        <Heading as="h2" sx={{ fontSize: 4, mb: 3 }}>
          Our Story
        </Heading>
        <Text as="p" sx={{ fontSize: 2, lineHeight: 1.6, mb: 3 }}>
          We are passionate developers dedicated to creating beautiful and
          functional web applications. Our mission is to leverage the latest
          technologies to build products that users love.
        </Text>
        <Text as="p" sx={{ fontSize: 2, lineHeight: 1.6, mb: 4 }}>
          This project showcases our expertise in React, modern build tools, and
          design systems. We believe in writing clean, maintainable code and
          delivering exceptional user experiences.
        </Text>

        <Box sx={{ mb: 4 }}>
          <Heading as="h3" sx={{ fontSize: 3, mb: 2 }}>
            Technologies We Use
          </Heading>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Label variant="accent">React</Label>
            <Label variant="success">Vite</Label>
            <Label variant="attention">JavaScript</Label>
            <Label variant="sponsors">Primer</Label>
            <Label variant="primary">React Router</Label>
          </Box>
        </Box>

        <Box
          sx={{
            p: 4,
            bg: "canvas.subtle",
            borderRadius: 2,
          }}
        >
          <Heading as="h3" sx={{ fontSize: 3, mb: 3 }}>
            Get in Touch
          </Heading>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <MarkGithubIcon />
              <Link href="https://github.com" target="_blank">
                github.com/yourusername
              </Link>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <MailIcon />
              <Link href="mailto:contact@example.com">contact@example.com</Link>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <LocationIcon />
              <Text>San Francisco, CA</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
