"use client";
import Image from "next/image";
import qrcode from "qrcode-generator";
import { useState } from "react";


export default function Home() {
  const [data, setData] = useState("https://www.google.com/");

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
    document.getElementById("result").innerText = `QR Generated for: ${data}`


    const imgElement = document.querySelector("#placeHolder img");
    const pngUrl = imgElement.src.replace('image/gif', 'image/octet-stream');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'qr-code.png';
    downloadLink.innerText = 'Download QR Code';
    // document.getElementById("downloadLink").innerHTML = 'Download';
    document.getElementById("downloadLink").appendChild(downloadLink);

    const downloadLinkContainer = document.getElementById("downloadLink");
    downloadLinkContainer.innerHTML = ''; // Clear previous content
    downloadLinkContainer.appendChild(downloadLink);
  };

  return (
    <>
      <div className="container qr-input-form">
        <label>Enter URL to generate The QR Code</label>
        <br />
        <input type="text" value={data} onChange={handleChange} />
        <button onClick={generateQRImage}>Generate</button>
        <p id="result"></p>
      <div id="downloadLink"></div>
      </div>
      <div className="display-qr " id="placeHolder">      </div>
    </>
  );
}
