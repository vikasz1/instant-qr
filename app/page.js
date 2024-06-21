"use client";
import Image from "next/image";
import qrcode from "qrcode-generator";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState("Hello");

  const handleChange = (event) => {
    event.preventDefault();
    setData(event.target.value);
  };

  const generateQRImage = () => {
    var typeNumber = 20;
    var errorCorrectionLevel = "L";
    var qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(data);
    qr.make();
    document.getElementById("placeHolder").innerHTML = qr.createImgTag();
  };

  return (
    <>
      <div className="container qr-input-form">
        <label>Enter URL to generate The QR Code</label>
        <br />
        <input type="text" value={data} onChange={handleChange} />
        <button onClick={generateQRImage}>Generate</button>
        
      </div>
      <div className="display-qr " id="placeHolder">
        <Image
          src="/world.png"
          width={400}
          height={400}
          alt="Picture of the author"
        />
      </div>
    </>
  );
}
