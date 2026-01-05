const Footer = () => {
  return (
    <footer className="border-t py-6">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
