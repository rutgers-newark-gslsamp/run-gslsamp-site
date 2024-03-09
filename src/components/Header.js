import React from 'react';
import BackArrow from './BackArrow';
import "../../app/styles/cms-globals.css"

const Header = ({pageTitle='Page Title', back=false}) => {
  return (
    <>
      <header>
        <div className='title'>
          <div className='arrow-div'>
            {back && <BackArrow isVisible={back}/>}
          </div>
          <h1 id='page-heading'>{pageTitle}</h1>
        </div>
      </header>
    </>    
  );
};

export default Header;