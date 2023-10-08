import React from "react";
import page3 from "/page3.png";

export default function PageThree() {

    return (
        <>
     <div className="relative h-[800px] font-futura" style={{overflow:"hidden"}}>
        <img src={page3} alt="bg img" className="absolute w-full" style={{zIndex:1}}/>
        <div className="absolute" style={{zIndex:2, top:"20%", left:"15%"}}>
        <p style={{fontSize:"4vw", fontWeight:"600", lineHeight:"50px", textAlign:"center"}}>Wanna</p>
         <p style={{fontSize:"4vw", fontWeight:"600", lineHeight:"50px"}}>Contribute
         to</p>
         <p style={{fontSize:"4vw", fontWeight:"600", lineHeight:"50px", textAlign:"center" }}>BeatBridge?</p>
        </div>
        <div className="absolute" style={{zIndex:2, backgroundColor:"#FFFFFF00", border:"2px solid black", textAlign:"center", bottom:"45%", left:"15%", width:"25vw", height:"60px", borderRadius:"50%", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <a href="https://github.com/pooranjoyb/BeatBridge" style={{fontSize:"1.2vw", fontWeight:"600"}}>github.com/pooranjoyb/BeatBridge</a>
        </div>
      </div>
      </>
    )
}