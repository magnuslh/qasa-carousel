import React from "react";
import Carousel from "./components/Carousel.jsx";
import Image from "./components/Image.jsx";

function App() {
  return (
    <div className="h-screen w-full bg-gray-800 flex flex-col justify-center items-center">
      <Carousel>
        <Image
          alt="Whale Jump"
          src="https://lh6.googleusercontent.com/proxy/fc5GMz7Ba7PSY4QMKNFEa-TmsB4j267HglOaH_Ty0NspsD6sz_wBD37KnnsUVJoV-H4NygGXYbyLVrpm3o82wm-tQZp5nnRZmpWLUBjavZ4OeCfyEfkQszBOLzJtMFHBhob16CVed_4GQALURpfUR6OH4KhtSCtXfBEDCvubnRcBDcpJwmGsByWvZkY-FH1bS5wliS4x53fnRClz-IC07IUP_Y6YmKo1qPDpVJnRsuEN-u0Y80Vs-A0OG56HoTdMFdU80VXGimOsknnCGeIe1sj-oQ7ONQnGEQ9CJOiRbX9ALzE=s1920-w1920-h1080-p-k-no-nd-mv"
        />
        <Image
          alt="Bird"
          src="https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg"
        />
        <Image
          alt="Caravaggio"
          src="https://d16kd6gzalkogb.cloudfront.net/magazine_images/Caravaggio-The-Calling-of-Saint-Matthew-detail.jpg"
        />
        <Image
          alt="Mona Lisa"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
        />
        <Image alt="Amy" src="./images/amy.jpg" />
        <Image alt="Elvis" src="./images/elvis.jpg" />
        <Image
          alt="Qasa"
          src="https://s3-eu-west-1.amazonaws.com/qasa/uploads/qasa_share.jpg"
        />
      </Carousel>
    </div>
  );
}

export default App;
