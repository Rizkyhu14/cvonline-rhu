interface ItemRiwayat {
  jenjang: string;
  sekolah: string;
  tahun: string;
}

function ItemRiwayat(props: ItemRiwayat) {
  return (
    <div className="border-2 m-2 rounded-lg bg-red-300 text-blue-900 p-3">
      <div>{props.jenjang}</div>
      <div>{props.sekolah}</div>
      <div>{props.tahun}</div>
    </div>
  );
}

export default function RiwayatPendidikan() {
  return (
    <div className="container">
      <h2 className="mt-40 text-2xl text-blue-900 font-bold">Riwayat Pendidikan</h2>

      <ItemRiwayat jenjang="SD" sekolah="Al Ma'soem" tahun="2006-2012" />
      <ItemRiwayat jenjang="SMP" sekolah="Al Ma'soem" tahun="2012-2015" />
      <ItemRiwayat jenjang="SMA" sekolah="Al Ma'soem" tahun="2015-2018" />
      <ItemRiwayat jenjang="Diploma" sekolah="Al Ma'soem" tahun="2018-2021" />
      <ItemRiwayat jenjang="Sarjana" sekolah="IKOPIN" tahun="2021-2023" />
      <ItemRiwayat jenjang="Magister" sekolah="UNPAD" tahun="2023-Sekarang" />
    </div>
  );
}
