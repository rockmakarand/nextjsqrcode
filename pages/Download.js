import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db, storage } from "./firebase";
import { deleteObject, ref } from "firebase/storage";

export default function Download({ id }) {
    const downloadQRCode = () => {
        const qrCodeURL = document.getElementById('id')
          .toDataURL("image/png")
          .replace("image/png", "image/octet-stream");
        console.log(qrCodeURL)
        let aEl = document.createElement("a");
        aEl.href = qrCodeURL;
        aEl.download = "QR_Code.png";
        document.body.appendChild(aEl);
        aEl.click();
        document.body.removeChild(aEl);
      }
  return (
    <div>
      <i
        className="fa fa-times"
        onClick={downloadQRCode}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}
