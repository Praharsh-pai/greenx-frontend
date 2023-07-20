import React from "react";
import "../css/Advertisement.css";

const Advertisement = () => {
  return (
    <div className='advertisementmain'>
     <div className="container-main">
      <div className="description" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        {/* <h2 style={{color:'black'}}>Have excess goods to sell?</h2> */}
        <h2 style={{color:'black'}}>Have excess goods to sell?</h2>
        {/* <h1 style={{color:'white'}}>Start your business Today</h1> */}
        <h1 style={{color:'white'}}>Start your business Today</h1>
        <button style={{height:'70px',width:"200px", fontWeight:"900",borderRadius:"20px"}}>JOIN FOR FREE</button>
      </div>
      <div className="circle">
        <img src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/63403c4eec6ea6001cfc84c8.jpg" alt="Description of" />
      </div>
    </div> 
    </div>
 
  );
};

export default Advertisement;
