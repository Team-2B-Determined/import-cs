// contributors: Kali
import Logo from '../images/import_cs_logo.png'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="text-center text-capitalize">
          <img src={Logo} width="50" height = "50"/><br/>
          copyright import cs &copy; {year}
      </footer>
    </>
  );
};

export default Footer;
