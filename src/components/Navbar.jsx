import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';
import { FaBars } from 'react-icons/fa'; // Import the menu icon

const Navbar = () => {
  const { t } = useTranslation();
  const [elearningDropdown, setElearningDropdown] = useState(false);
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [menuDropdown, setMenuDropdown] = useState(false);
  const { i18n } = useTranslation();
  const [schoolsDropdown, setSchoolsDropdown] = useState(false);

  const handleMouseEnters = () => {
    setElearningDropdown(true);
  };

  const handleMouseLeaves = () => {
    setElearningDropdown(false);
  };

  const toggleSchoolsDropdown = () => {
    setSchoolsDropdown(!schoolsDropdown);
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdown(!languageDropdown);
  };

  const toggleMenuDropdown = () => {
    setMenuDropdown(!menuDropdown);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguageDropdown(false); // Close dropdown after selecting a language
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">{i18n.t('Adama School Portal')}</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">{i18n.t('Home')}</Link></li>
        <li className="schools-menu" onMouseEnter={toggleSchoolsDropdown} onMouseLeave={toggleSchoolsDropdown}>
          <span>{i18n.t('Schools')}</span>
          {schoolsDropdown && (
            <ul className="schools-dropdown-menu">
              <li><Link to="/PrimarySchool">{i18n.t('Public School')}</Link></li>
              <li><Link to="/PrivateSchool">{i18n.t('Private School')}</Link></li>
            </ul>
          )}
        </li>
        <li className="elearning-menu" onMouseEnter={handleMouseEnters} onMouseLeave={handleMouseLeaves}>
          <span>{i18n.t('E-Learning')}</span>
          {elearningDropdown && (
            <ul className="elearning-dropdown-menu">
              <li><Link to="/LibraryPage">{i18n.t('Primary E-Learning')}</Link></li>
              <li><Link to="/ELearning">{i18n.t('Secondary E-Learning')}</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/about">{i18n.t('About')}</Link></li>
        <li><Link to="/SignInPage">Admin</Link></li>
        <li><Link to="/contact">{i18n.t('Contact')}</Link></li>
        {/* <li><Link to="/Datas">{i18n.t('Datas')}</Link></li> */}
        <li className="language-menu" onClick={toggleLanguageDropdown}>
          <span>{i18n.t('Language')}</span>
          {languageDropdown && (
            <ul className="language-dropdown-menu">
              <li><button onClick={() => changeLanguage('am')}>አማርኛ</button></li>
              <li><button onClick={() => changeLanguage('or')}>Afan Oromo</button></li>
              <li><button onClick={() => changeLanguage('en')}>English</button></li>
            </ul>
          )}
        </li>
      </ul>
      <div className="menu-icon" onClick={toggleMenuDropdown}>
        <FaBars />
        {menuDropdown && (
          <ul className="menu-dropdown-menu">
            <li><Link to="/language">{i18n.t('Language')}</Link></li>
            <li><Link to="/AdminDashboardPage">{i18n.t('Administration')}</Link></li>
            <li><Link to="/profile">{i18n.t('Profile')}</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
