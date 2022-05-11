import logo from '../images/logo.svg';
import documentIcon from '../images/icon-document.svg';
import folderIcon from '../images/icon-folder.svg';
import uploadIcon from '../images/icon-upload.svg';

function Header() {
  return (
    <header className="c-header">
      <img src={logo} />
      <div className="c-header__options">
        <div>
          <img src={documentIcon} />
        </div>
        
        <div>
          <img src={folderIcon} />
        </div>

        <div>
          <img src={uploadIcon} />
        </div>
      </div>
    </header>
  )
}
export default Header