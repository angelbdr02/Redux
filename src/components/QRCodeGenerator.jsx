import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeGenerator = ({ text }) => {
  return <QRCodeCanvas value={text} size={150} className="mx-auto mt-4" />;
};

export default QRCodeGenerator;
