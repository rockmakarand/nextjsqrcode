import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db, storage } from "./firebase";
import { deleteObject, ref } from "firebase/storage";
import { Button } from "react-bootstrap";


export default function Deletepost({ id }) {
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this ?")) {
      try {
        await deleteDoc(doc(db, "qrcode", id));
        alert("deleted successfully", { type: "success" });
        const storageRef = ref(storage);
        await deleteObject(storageRef);
      } catch (error) {
        alert("Error deleting ", { type: "error" });
        console.log(error);
      }
    }
  };
  return (
    <div>
      <Button
        
        onClick={handleDelete}
        style={{ cursor: "pointer" }}
      >Delete QR</Button>
    </div>
  );
}
