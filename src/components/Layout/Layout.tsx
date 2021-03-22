import { FunctionComponent } from 'react';
import { Sidebar, MobileHeader } from '../';

export const Layout: FunctionComponent = ({ children }) => {
  return (
    <>
      <MobileHeader />
      <div className="home-grid">
        <Sidebar />
        {children}
      </div>
    </>
  );
};
