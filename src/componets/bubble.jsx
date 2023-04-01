// Import React and Bubble CSS file
import React from "react";
import "./bubble.css";

// Define Bubbles component
function Bubbles() {
// Return JSX for bubble container with different sized bubbles
return (
<div className="bubble-container">
<div className="bubble" style={{ backgroundImage: "radial-gradient(circle, #838FFF, #030092)", width: "170px", height: "170px" }}><span>Investments</span></div>
<div className="bubble" style={{ backgroundImage: "radial-gradient(circle, #FFE3D3, #C500F7)", width: "130px", height: "130px" }}><span>Design</span></div>
<div className="bubble" style={{ backgroundImage: "radial-gradient(circle, #838FFF, #030092)", width: "40px", height: "40px" }}><span></span></div>
<div className="bubble" style={{ backgroundImage: "radial-gradient(circle, #00c3ff, #ffff1c)", width: "65px", height: "65px" }}><span></span></div>
<div className="bubble" style={{ backgroundImage: "radial-gradient(circle, #FFE3D3, #C500F7)", width: "135px", height: "135px" }}><span>Development</span></div>
<div className="bubble" style={{ backgroundImage: "radial-gradient(circle, #FFB84D, #FF8A00;)", width: "75px", height: "75px" }}><span></span></div>
<div className="bubble" style={{ backgroundImage: "radial-gradient(circle, #FFE3D3, #C500F7)", width: "80px", height: "80px" }}><span>Business</span></div>
<div className="bubble" style={{ backgroundImage: "radial-gradient(circle, #FFE3D3, #C500F7)", width: "110px", height: "110px" }}><span></span></div>
<div className="bubble" style={{ backgroundImage: "radial-gradient(circle, #838FFF, #030092)", width: "30px", height: "30px" }}><span></span></div>
<div className="bubble" style={{ backgroundImage: "radial-gradient(circle, #838FFF, #030092)", width: "20px", height: "20px" }}><span></span></div>
<div className="bubble" style={{ backgroundImage: "radial-gradient(circle, #838FFF, #030092)", width: "55px", height: "55px" }}><span></span></div>
<div className="bubble" style={{ backgroundImage: "radial-gradient(circle, #838FFF, #030092)", width: "60px", height: "60px" }}><span></span></div>
<div className="bubble" style={{ backgroundImage: "radial-gradient(circle, #838FFF, #030092)", width: "70px", height: "70px" }}><span></span></div>
</div>

);
}

// Export Bubbles component as default
export default Bubbles;

/* This is a simple React functional component that renders bubbles with different sizes and colors on the page. 
The bubbles are created using div elements with background images and widths/heights defined with inline styles.
 The component imports a separate CSS file for styling. 
 The bubbles are organized within a container using a flexbox layout.*/