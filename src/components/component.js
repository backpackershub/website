import React from 'react';

// Header Component
const Header = () => (
  <div className="header">
    <h1>BENUS DARJEELING HOME</h1>
    <h2>A Backpackers Hub</h2>
  </div>
);

// Body Component
const Body = () => (
  <div className="body">
    <div className="info">
      <div className="address">
        <p>Golai Bazar, Lebong</p>
        <p>Darjeeling, West Bengal</p>
        <p>734105</p>
      </div>
      <div className="contact">
        <p>Call: +91-7063036791, +91-8388009037</p>
        <p>Email: benus@stayindarjeeling.com</p>
      </div>
    </div>
    <hr />
    <div className="availability">
      <p className="blinking">Beds Available from Rs 299/- Only</p>
    </div>
    <div className="book-now">
      <p>BOOK NOW!</p>
      <div className="thumbnails">
        <a href="https://www.vrbo.com/3727126"><img src="vrbo.png" alt="BENUS DARJEELING HOME" /></a>
        <a href="https://www.hostelworld.com/st/hostels/p/323128/benus-darjeeling-home-a-backpackers-hub"><img src="hostel.jpg" alt="BENUS DARJEELING HOME" /></a>
                <a href="https://www.agoda.com/benus-darjeeling-home-a-backpackers-hub/hotel/darjeeling-in.html?cid=1555740"><img src="agoda.png" alt="BENUS DARJEELING HOME" /></a>
        <a href="https://www.booking.com/hotel/in/benus-darjeeling-home-a-backpacker-hub.en-gb.html?label=gen173nr-1BCAsobEImYmVudXMtZGFyamVlbGluZy1ob21lLWEtYmFja3BhY2tlci1odWJIM1gEaGyIAQGYAQm4ARjIAQzYAQHoAQGIAgGoAgS4Aq_yz68GwAIB0gIkY2Q2OGY2NDgtOThlYi00ODhmLWIxOWUtZDM3MWMyYjgwOTgx2AIF4AIB&sid=3f35150f3dae9986aa04b121d65bcf00&dist=0&group_adults=1&group_children=0&keep_landing=1&no_rooms=1&sb_price_type=total&type=total&
"><img src="booking.png" alt="BENUS DARJEELING HOME" /></a>
      </div>
    </div>
<div className="footer">
  <p><a href="http://www.anupamarya.com" target="_blank" rel="noopener noreferrer">anupamarya.com</a> | 2024</p>
</div>

  </div>
);

export { Header, Body };
