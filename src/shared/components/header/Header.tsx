import './Header.scss';

interface IHeader {
  preTitle: string;
  title: string;
  hasSubtitle: boolean;
  subtitleFirstline: string;
  subtitleSecondLine: string;
}

export function Header({
  preTitle,
  title,
  hasSubtitle = false,
  subtitleFirstline,
  subtitleSecondLine,
}: IHeader) {
  return (
    <>
      <div className="breadcrumb set-bg">
        <div className="breadcrumb-option spad set-bg" data-setbg="img/breadcrumb-bg.jpg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="section-title">
                  <span>{preTitle}</span>
                  <h2>{title}</h2>
                </div>
              </div>
            </div>
            {hasSubtitle && (
              <div className="row">
                <div className="col-lg-12">
                  <span className="header-title">{subtitleFirstline}</span>
                  <h6 className="vigencia-details">{subtitleSecondLine}</h6>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
