import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { LayoutContext } from '../../context/LayoutContext';

export const MobileHeader = () => {
  const { toggle, isSidemenuVisible } = useContext(LayoutContext);

  return (
    <div className="mobile-header">
      <button onClick={() => toggle()}>
        <FontAwesomeIcon icon={ isSidemenuVisible ? faTimes : faBars} />
      </button>
      <img src="logo.png" alt="" />
    </div>
  );
};
