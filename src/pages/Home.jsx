import { Box, Heading, Text, Button, Link } from "@primer/react";
import { RocketIcon, HeartIcon } from "@primer/octicons-react";

function Home() {
  return (
    <Box
      sx={{
        maxWidth: 960,
        margin: "0 auto",
        padding: 4,
        textAlign: "center",
      }}
    >
      <Box sx={{ py: 6 }}>
        <RocketIcon size={64} />
        <Heading as="h1" sx={{ fontSize: 6, mt: 3, mb: 2 }}>
          Welcome to My React App
        </Heading>
        <Text as="p" sx={{ fontSize: 3, color: "fg.muted", mb: 4 }}>
          Built with React, Vite, and Primer Design System
        </Text>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <Button variant="primary" size="large">
            Get Started
          </Button>
          <Button size="large">Learn More</Button>
        </Box>
      </Box>

      <Box
        sx={{
          mt: 6,
          p: 4,
          bg: "canvas.subtle",
          borderRadius: 2,
          textAlign: "left",
        }}
      >
        <Heading as="h2" sx={{ fontSize: 4, mb: 3 }}>
          Features
        </Heading>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 3,
          }}
        >
          <Box>
            <Heading as="h3" sx={{ fontSize: 2, mb: 2 }}>
              ⚡ Fast Development
            </Heading>
            <Text color="fg.muted">
              Built with Vite for lightning-fast hot module replacement
            </Text>
          </Box>
          <Box>
            <Heading as="h3" sx={{ fontSize: 2, mb: 2 }}>
              🎨 Beautiful UI
            </Heading>
            <Text color="fg.muted">
              Using GitHub's Primer Design System components
            </Text>
          </Box>
          <Box>
            <Heading as="h3" sx={{ fontSize: 2, mb: 2 }}>
              📦 Modern Stack
            </Heading>
            <Text color="fg.muted">
              React 18 with React Router for seamless navigation
            </Text>
          </Box>
        </Box>
      </Box>

      <Box sx={{ mt: 6, color: "fg.muted" }}>
        <Text>
          Made with <HeartIcon /> using React
        </Text>
      </Box>
    </Box>
  );
}

export default Home;
