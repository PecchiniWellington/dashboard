import "./Logo.scss";

interface ILogo {
  size: number;
  logoSrc: string;
}

function Logo({ logoSrc, size }: ILogo) {
  return (
    <div className="vot__logo" style={{ width: `${size}px` }}>
      <img src={logoSrc} alt="site_logo" />
    </div>
  );
}

export default Logo;
