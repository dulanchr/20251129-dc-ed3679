import { Header, Avatar } from "@primer/react";
import { MarkGithubIcon } from "@primer/octicons-react";
import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <Header>
      <Header.Item>
        <Header.Link as={Link} to="/" fontSize={2}>
          <MarkGithubIcon
            size={32}
            style={{ marginRight: "8px", verticalAlign: "middle" }}
          />
          <span>My React App</span>
        </Header.Link>
      </Header.Item>
      <Header.Item full>
        <Header.Link as={Link} to="/">
          Home
        </Header.Link>
      </Header.Item>
      <Header.Item>
        <Header.Link as={Link} to="/about">
          About
        </Header.Link>
      </Header.Item>
      <Header.Item sx={{ mr: 0 }}>
        <Avatar
          src="https://github.com/github.png"
          size={32}
          alt="User avatar"
        />
      </Header.Item>
    </Header>
  );
}

export default AppHeader;
