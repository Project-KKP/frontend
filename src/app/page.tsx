import Image from 'next/image';
import { CiFacebook } from 'react-icons/ci';

export default function Home() {
  return (
    <main className="w-full relative">
      <div>
        <div className="header h-80 z-10 relative">
          <div className="flex flex-col justify-center items-center h-full bg-black/35">
            <h1 className="font-thin text-white text-xl">Halaman</h1>
            <h1 className="font-bold text-white text-2xl">Bidang Pengelolaan Teknologi Informasi dan Komunikasi</h1>
          </div>
        </div>

        <div className="bg-[#002E5B] top-[18rem] max-w-6xl w-full text-white flex items-center px-3 mx-auto h-20 absolute justify-between z-20 left-1/2 transform -translate-x-1/2">
          <div className="flex gap-2 items-center">
            <p className="text-xl">Bagikan</p>
            <div className="text-[#FBD46D]">
              <CiFacebook className="text-2xl" />
            </div>
          </div>
          <div>
            <p>Halaman/Beranda</p>
          </div>
        </div>

        <div className="max-w-6xl mt-28 mb-10 shadow-md mx-auto bg-white">
          <div>
            <Image src={'/kantor.png'} width={1000} height={200} alt="gambar-kantor-diskominfotik" className="w-full" />
          </div>
          <div className='p-4'>
            <p>
              {' '}
              Bidang Pengelolaan Teknologi Informasi dan Komunikasi memiliki tugas pokok Merumuskan dan melaksanakan kebijakan, menyusun norma, standar, prosedur, kriteria penyelenggaraan TIK, melaksanakan bimbingan teknis, supervisi,
              pemantauan, evaluasi, dan pelaporan, pengembangan akses intranet dan internet, layanan sistem komunikasi intra Pemerintah Daerah Provinsi, layanan pengembangan dan pengelolaan aplikasi terintegrasi, Pengembangan Sumber Daya
              TIK Pemerintah Daerah Provinsi dan Masyarakat, dengan fungsi sebagai berikut :
              <br />
              <br />
              Penyusunan bahan perumusan kebijakan di bidang layanan infrastruktur dasar manajemen data TIK, layanan pengembangan akses intranet dan internet, serta layanan sistem komunikasi intra Pemerintah Daerah Provinsi; Penyusunan
              bahan perumusan kebijakan layanan pengembangan dan pengelolaan aplikasi terintegrasi serta Pengembangan Sumber Daya TIK Pemerintah Daerah Provinsi dan Masyarakat
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
