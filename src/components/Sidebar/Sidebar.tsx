import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent, useContext } from 'react';
import { LayoutContext } from '../../context/LayoutContext';
import { UserContext } from '../../context/UserContext';

export const Sidebar: FunctionComponent = () => {
  const {
    user: { level, phrase, username, avatar },
  } = useContext(UserContext);

  const { isSidemenuVisible } = useContext(LayoutContext);

  return (
    <aside className={`sidebar bg-blue ${!isSidemenuVisible && 'd-none-mobile'}`}>
      <div className="">
        <img className="logo" src="logo.png" alt="logo" />
        <img className="avatar" src={avatar} alt="avatar" />
        <h4 className="username">{username}</h4>
        <h5 className="level">Level {level}</h5>
        <h5 className="phrase">"{phrase}"</h5>
      </div>
      <button className="logout-btn">
        <FontAwesomeIcon icon={faSignOutAlt} />
        <span className="">Log Out</span>
      </button>
    </aside>
  );
};
