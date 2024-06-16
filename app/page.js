"use client";
import Image from "next/image";
import qrcode from "qrcode-generator";

export default function Home() {
  const generateQRImage = () => {
    var typeNumber = 4;
    var errorCorrectionLevel = "L";
    var qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData("This is Sample QR by Vikas :). Take a chill pill. Peace.✌️");
    qr.make();
    document.getElementById("placeHolder").innerHTML = qr.createImgTag();
  };

  return (
    <>
      <div className="container qr-input-form">
        <label>Enter URL to generate The QR Code</label>
        <br />
        <input type="text" />
        <button onClick={generateQRImage}>Generate</button>
      </div>
      <div className="display-qr " id="placeHolder">
        <Image
          src="/world.png"
          width={300}
          height={300}
          alt="Picture of the author"
        />
      </div>
    </>
  );
}
