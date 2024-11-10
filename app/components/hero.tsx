import React from 'react';
import fotosaya from '../1731211130550.jpg';

function Profile() {
  return (
    <img
        src={fotosaya.src}
        alt="foto rizky"
        className="fotoku"
      />
    );
  }

export default function Hero(){
    return(
        <div className="container mx-auto p-2 text-center">
        <h1 className="text-black-300 font-bold">CV Onlne</h1>
        <h2 className="text-3x1">Rizky Haikal Umaro</h2>
        <Profile />
        <p>
        Saya adalah seorang mahasiswa Masoem University angkatan 2022 
        jurusan Komputerisasi Akuntansi. Sebelumnya saya bersekolah di SMA Al-Masoem.
        </p>
      </div>
    )
}
