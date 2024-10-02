import React, { useState } from 'react';
import {Copy ,ClipboardCheck} from "lucide-react";

const TitleWithCopyLink = ({ title,link }) => {
  const [copySuccess, setCopySuccess] = useState(''); // สถานะสำหรับข้อความแจ้งเตือน

  // ฟังก์ชันสำหรับการคัดลอกลิงก์ไปยังคลิปบอร์ด
  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(link).then(() => {
      setCopySuccess('copied!'); // ตั้งข้อความแจ้งเตือน
      setTimeout(() => setCopySuccess(''), 3000); // ซ่อนข้อความหลัง 3 วินาที
    });
  };

return (
    <div className="relative inline-block">
        <a href={link} className="text-2xl font-bold pr-20" target='_blank' rel="noreferrer">{title}</a>
        {/* ไอคอน Copy Link ที่ลอยอยู่ด้านขวา */}
        <div className="absolute top-0 right-6 flex items-center">
            <button
                onClick={copyLinkToClipboard}
                className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 ml-4"
            >
                {
                    copySuccess ? <ClipboardCheck className="h-6 w-6" /> : <Copy className="h-6 w-6" />
                }
            </button>
        </div>
    </div>
);
};

export default TitleWithCopyLink;
//<a href={url} onClick={() => window.location.href = url}>{title}</a>