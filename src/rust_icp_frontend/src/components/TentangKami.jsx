import React from 'react'

const TentangKami = () => {
  return (
    <div className="flex flex-col justify-center items-start py-8">
      <div className="text-4xl font-medium tracking-wide text-black max-md:max-w-full">
        Tentang Kami
      </div>
      <div className="mt-2.5 text-base text-justify text-black w-[739px] max-md:max-w-full">
        Nihaw Platfrom adalah platform pengaduan yang dapat di ajukan oleh siapa
        saja dengan tanpa harus menyertakan identitas. Seluruh masyarakat dapat
        mengadukan keluhan secara bebas tanpa takut identitasnya ketahuan.
      </div>
      <div className="self-stretch px-5 mt-12 w-full max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-4 pt-5 pb-10 w-full tracking-wide text-black rounded-xl shadow-lg bg-white bg-opacity-40 max-md:mt-9">
           <div className='flex items-start justify-start'>    
             <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb7226459a85204372193aff6929b9d827ff1024c128c37951e271bc9cc6b4b2?"
                className="w-6"
              />
              </div>
         
              <div className="mt-4 text-4xl font-medium leading-10">
                Mudah digunakan
              </div>
              <div className="mt-4 text-sm text-justify">
                Dengan desain yang simpel, platform Nihaw menawarkan antarmuka
                intuitif, aksesibilitas tinggi, fitur lengkap, keamanan
                terjamin, dukungan pelanggan responsif, kustomisasi, dan kinerja
                cepat untuk berbagai kalangan pengguna.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-4 pt-5 pb-10 w-full text-black bg-white rounded-xl shadow-lg max-md:pr-5 max-md:mt-9">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/907a3bdc1737ad5a124477a8dd7e95756ff68298d0004683e4b147a84529082d?"
                className="w-6 aspect-square"
              />
              <div className="mt-4 text-4xl font-medium tracking-wide leading-10">
                Aman dan Terjamin
              </div>
              <div className="mt-4 text-sm tracking-wide">
                Platform Nihaw menjamin keamanan dan privasi data pengguna
                dengan berbagai lapisan proteksi yang canggih dan andal.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-4 pt-5 pb-10 w-full text-black rounded-xl shadow-lg bg-white bg-opacity-40 max-md:mt-9">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8a9300242b39712a699730b245f5b6221875a9b435f92c71ce874319eb63410?"
                className="w-6 aspect-square"
              />
              <div className="mt-4 text-4xl font-medium tracking-wide leading-10">
                Transparan
              </div>
              <div className="mt-4 text-sm tracking-wide text-justify">
                Kami mengutamakan keamanan informasi laporan dan identitas
                pengguna dengan memanfaatkan teknologi web3 atau desentralisasi
                web serta menerapkan praktik terbaik untuk melindungi data Anda.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TentangKami