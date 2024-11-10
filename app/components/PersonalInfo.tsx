import React from 'react';

const MyInfos = {
    TTL: "Bandung, 14 Oktober 2000",
    Gender: "Laki-laki",
    TinggiBadan: "168 cm",
    BeratBadan: "70 kg",
    StatusPernikahan: "Belum Menikah",
    Whatsapp: "+6281214582750",
    Email: "rizkyhaikal1134@gmail.com"
};

export default function PersonalInfo() {
    return (
        <div className="container mx-auto p-6 bg-white rounded-lg shadow-md max-w-md mt-10">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Informasi Pribadi</h2>
            <ul className="space-y-4">
                {Object.entries(MyInfos).map(([key, value]) => (
                    <li key={key} className="flex justify-between items-center bg-gray-100 p-3 rounded-md shadow-sm">
                        <span className="font-medium text-gray-700">
                            {key.replace(/([A-Z])/g, ' $1')}:
                        </span>
                        <span className="text-gray-900">{value}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
