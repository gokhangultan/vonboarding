import React from 'react';
import Header from '../layouts/Header';
import LeftSide from '../layouts/LeftSide';
import Footer from '../layouts/Footer';

const PublicLayout = ({ children }) => (
  <>
    <LeftSide />
    <Header />
    {children}
    <Footer />
  </>
);

export default PublicLayout;
