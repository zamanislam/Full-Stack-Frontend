import '../styles/Footer.css'

const HomeFooter = () => {
  return (
    <div style={{marginTop:"30px"}}>
    <hr style={{paddingTop:"0px"}}/>
    <div id="ParentF">
      <div>
        <h2>About Us</h2>
        <p>About Wayfair</p>
        <p>Wayfair Rewards</p>
        <p>Gift Cards</p>
        <p>Wayfair Professional</p>
        <p>Wayfair Credit Card</p>
        <p>Wayfair Financing</p>
        <p>Careers</p>
        <p>Creators</p>
        <p>Locations</p>
        <p>Investor Relations</p>
      </div>

      <div>
        <h2>Customer Service</h2>
        <p>My Orders</p>
        <p>My Account</p>
        <p>Track My Order</p>
        <p>Wayfair Accessibility</p>
        <p>Return Policy</p>
        <p>Help Center</p>
        <p>Ideas & Advice</p>
        <p>Product Recalls</p>
      </div>

      <div>
        <h2>Contact Us</h2>
        <button id='b1'>Quick Help</button>
        <br/>
        <button id='b2'>Call Us</button>
        <h3 id='c1'>Customer Service</h3>
        <p>Open. Closes at 11:59 PM</p>
        <p>Sat: 8:00AM-8:00PM</p>
        <p>Sun: 9:00AM- 6:00PM</p>
        <br/>
        <h3 id="c2">Shopping Assistance</h3>
        <p>Open. Closes at 11:59 PM</p>
        <p>Sat: 8:00AM-8:00PM</p>
        <p>Sun: 9:00AM- 6:00PM</p>
      </div>
    </div>
    <hr/>
    <div>
        <img id='image' src="https://i.postimg.cc/YS8S506r/Screenshot-Capture-2024-12-04-09-19-22.png" alt="logo" />
    </div>
    </div>
  );
};
export default HomeFooter;
