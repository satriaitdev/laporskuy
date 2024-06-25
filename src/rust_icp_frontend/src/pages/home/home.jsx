import { useState } from 'react';
// import { rust_icp_backend } from 'declarations/rust_icp_backend';
import TentangKami from '../../components/TentangKami';

function MyComponent () {
  const [report, setReport] = useState('');
  const [judul, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [location, setLocation] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const title = event.target.elements.judulPengaduan.value;
    const body = event.target.elements.isiPengaduan.value;
    const location = event.target.elements.lokasiKejadian.value;
    rust_icp_backend.report(title, body, location).then((report) => {
      setTitle(title);
      setBody(body);
      setLocation(location);
      setReport(report);
    });
    return false;
  }

  return (
    <div class="flex flex-col bg-white">
      <div class="flex flex-col justify-center w-full max-md:max-w-full">
        <header class="flex flex-col w-full bg-zinc-900 max-md:max-w-full">
          <div class="flex gap-0 w-full max-md:flex-wrap max-md:max-w-full">
            <div class="flex z-10 flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
              <div class="flex justify-center items-center px-4 py-4 w-full text-white whitespace-nowrap bg-zinc-300 bg-opacity-10 max-md:px-5 max-md:max-w-full">
                <div class="flex gap-5 justify-between w-full max-w-[1143px] max-md:flex-wrap max-md:max-w-full">
                  <div class="flex justify-center text-lg lg:text-2xl">LaporSkuy</div>
                  <nav class="flex flex-col justify-center my-auto text-sm">
                    <div class="flex gap-5 justify-between">
                      <a href="#aboutUs">About</a>
                      <a href="#features">Features</a>
                    </div>
                  </nav>
                </div>
              </div>
              <main id="heroContent" class="relative flex flex-col justify-center items-start self-center w-full z-30">
                <svg class="absolute" width="191" height="386" viewBox="0 0 191 386" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g opacity="0.3" filter="url(#filter0_f_102_1126)">
  <circle cx="-2.1375" cy="192.863" r="167.863" transform="rotate(-90 -2.1375 192.863)" fill="url(#paint0_linear_102_1126)"/>
  <circle cx="-2.1375" cy="192.863" r="167.003" transform="rotate(-90 -2.1375 192.863)" stroke="url(#paint1_linear_102_1126)" stroke-width="1.71873"/>
  </g>
  <defs>
  <filter id="filter0_f_102_1126" x="-194.99" y="0.00979996" width="385.706" height="385.706" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
  <feGaussianBlur stdDeviation="12.4951" result="effect1_foregroundBlur_102_1126"/>
  </filter>
  <linearGradient id="paint0_linear_102_1126" x1="-78.53" y1="25.0001" x2="130.544" y2="281.317" gradientUnits="userSpaceOnUse">
  <stop stop-color="white"/>
  <stop offset="1" stop-color="white" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="paint1_linear_102_1126" x1="-170" y1="65.1038" x2="184.367" y2="180.831" gradientUnits="userSpaceOnUse">
  <stop offset="0.0572917" stop-color="white"/>
  <stop offset="0.244792" stop-color="#6CE5FF"/>
  <stop offset="0.651042" stop-color="#B570FE"/>
  <stop offset="0.869792" stop-color="white"/>
  </linearGradient>
  </defs>
                </svg>
                <svg class="absolute top-0 end-0" width="190" height="417" viewBox="0 0 190 417" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.9">
                  <path d="M285.081 415.58C331.559 415.58 373.577 390.742 403.948 350.704C434.318 310.666 453.078 255.392 453.078 194.373C453.078 133.353 434.318 78.0787 403.948 38.0412C373.577 -1.9969 331.559 -26.8345 285.081 -26.8345C238.603 -26.8345 196.585 -1.9969 166.214 38.0412C135.844 78.0787 117.083 133.353 117.083 194.373C117.083 255.392 135.844 310.666 166.214 350.704C196.585 390.742 238.603 415.58 285.081 415.58Z" stroke="#F1C9C9" stroke-width="1.66602"/>
                  <path d="M259.074 415.58C305.552 415.58 347.57 390.742 377.94 350.704C408.311 310.666 427.071 255.392 427.071 194.373C427.071 133.353 408.311 78.0787 377.94 38.0412C347.57 -1.9969 305.552 -26.8345 259.074 -26.8345C212.596 -26.8345 170.578 -1.9969 140.207 38.0412C109.836 78.0787 91.0762 133.353 91.0762 194.373C91.0762 255.392 109.836 310.666 140.207 350.704C170.578 390.742 212.596 415.58 259.074 415.58Z" stroke="#F1C9C9" stroke-width="1.66602"/>
                  <path d="M231.21 415.58C277.688 415.58 319.706 390.742 350.077 350.704C380.447 310.666 399.208 255.392 399.208 194.373C399.208 133.353 380.447 78.0787 350.077 38.0412C319.706 -1.9969 277.688 -26.8345 231.21 -26.8345C184.732 -26.8345 142.714 -1.9969 112.343 38.0412C81.9729 78.0787 63.2126 133.353 63.2126 194.373C63.2126 255.392 81.9729 310.666 112.343 350.704C142.714 390.742 184.732 415.58 231.21 415.58Z" stroke="#F1C9C9" stroke-width="1.66602"/>
                  <path d="M190.342 400.115C236.82 400.115 278.838 375.278 309.209 335.24C339.579 295.202 358.34 239.928 358.34 178.908C358.34 117.889 339.579 62.6143 309.209 22.5768C278.838 -17.4613 236.82 -42.2988 190.342 -42.2988C143.864 -42.2988 101.846 -17.4613 71.4754 22.5768C41.105 62.6143 22.3447 117.889 22.3447 178.908C22.3447 239.928 41.105 295.202 71.4754 335.24C101.846 375.278 143.864 400.115 190.342 400.115Z" stroke="#F1C9C9" stroke-width="1.66602"/>
                  <path d="M169.802 400.115C216.28 400.115 258.298 375.278 288.669 335.24C319.039 295.202 337.799 239.928 337.799 178.908C337.799 117.889 319.039 62.6143 288.669 22.5768C258.298 -17.4613 216.28 -42.2988 169.802 -42.2988C123.324 -42.2988 81.3057 -17.4613 50.9349 22.5768C20.5645 62.6143 1.8042 117.889 1.8042 178.908C1.8042 239.928 20.5645 295.202 50.9349 335.24C81.3057 375.278 123.324 400.115 169.802 400.115Z" stroke="#F1C9C9" stroke-width="1.66602"/>
                  </g>
                </svg>
                <svg class="absolute top-[30%] end-0" width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle opacity="0.3" cx="20.1946" cy="20.5893" r="19.5388" transform="rotate(-90 20.1946 20.5893)" fill="url(#paint0_linear_102_756)" stroke="url(#paint1_linear_102_756)" stroke-width="0.201086"/>
                  <defs>
                  <linearGradient id="paint0_linear_102_756" x1="11.2569" y1="0.949871" x2="35.7179" y2="30.9382" gradientUnits="userSpaceOnUse">
                  <stop stop-color="white"/>
                  <stop offset="1" stop-color="white" stop-opacity="0"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_102_756" x1="0.555176" y1="5.64187" x2="42.015" y2="19.1817" gradientUnits="userSpaceOnUse">
                  <stop offset="0.0572917" stop-color="white"/>
                  <stop offset="0.244792" stop-color="#6CE5FF"/>
                  <stop offset="0.651042" stop-color="#B570FE"/>
                  <stop offset="0.869792" stop-color="white"/>
                  </linearGradient>
                  </defs>
                </svg>
                <section class="flex flex-col justify-center mt-20 mb-12 max-w-full w-[700px] max-md:my-10 py-20 px-10">
                  <h1 class="flex flex-col text-white max-md:max-w-full text-5xl font-bold max-md:max-w-full max-md:text-4xl">
                    Mudah, Transparant, and Aman
                  </h1>
                  <p class="mt-5 text-lg text-white max-md:max-w-full">
                    Adukan keluhan anda dengan anonimus dan rahasia
                  </p>
                  <div class="flex gap-5 self-start mt-12 text-2xl font-medium tracking-wider max-md:mt-10">
                    <button class="justify-center p-2.5 text-black text-base bg-white rounded-xl">
                      Tentang Kami
                    </button>
                    <button class="justify-center p-2.5 text-white text-base rounded-xl border border-white border-solid">
                      Isi Pengaduan
                    </button>
                  </div>
                </section>
              </main>
            </div>
          </div>
        </header>
      </div>
      <section class="flex justify-center group items-center px-16 py-9 w-full bg-neutral-400 max-md:px-5 max-md:max-w-full overflow-hidden space-x-16">
        <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a74bdeff5d68a555ad61bb377516b6fbc453a275aae696648446ad326547ead4?"
            className="shrink-0 aspect-square w-[65px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/66c45665e6b63ca81da3b4cffc79cfe2d7f304a218020212a408513dad3026c9?"
            className="shrink-0 aspect-square w-[65px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/73b107ec59c31cbbaeed09bf0798730b99ea9ff5dcb7c3599f0a4ac31518b18d?"
            className="shrink-0 aspect-square w-[65px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3c95fdd18fdd880f2d5ad09e31186d1ec37b287c6032c65ed9c8b54f5e9997c?"
            className="shrink-0 aspect-square w-[65px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f32836f9dcef0e1b544b091a82a629dd448f696d495f6cdd3e04ae9c036b945d?"
            className="shrink-0 aspect-square w-[65px]"
          />
        </div>
        <div className="flex space-x-16 animate-loop-scroll group-hover:paused" aria-hidden="true">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a74bdeff5d68a555ad61bb377516b6fbc453a275aae696648446ad326547ead4?"
            className="shrink-0 aspect-square w-[65px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/66c45665e6b63ca81da3b4cffc79cfe2d7f304a218020212a408513dad3026c9?"
            className="shrink-0 aspect-square w-[65px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/73b107ec59c31cbbaeed09bf0798730b99ea9ff5dcb7c3599f0a4ac31518b18d?"
            className="shrink-0 aspect-square w-[65px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3c95fdd18fdd880f2d5ad09e31186d1ec37b287c6032c65ed9c8b54f5e9997c?"
            className="shrink-0 aspect-square w-[65px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f32836f9dcef0e1b544b091a82a629dd448f696d495f6cdd3e04ae9c036b945d?"
            className="shrink-0 aspect-square w-[65px]"
          />
        </div>
      </section>
      <section class="flex flex-col bg-world-map justify-center self-center px-6 pb-16 mt-20 w-full max-w-[1238px] max-md:mt-10 max-md:max-w-full lg:min-h-screen" id="aboutUs">
        <TentangKami />
      </section>
      <h2 class="self-center mt-10 text-2xl md:text-3xl lg:text-4xl font-medium tracking-wider text-center text-black max-md:mt-10">
        Form Pengaduan
      </h2>
      <section class="flex flex-col justify-center mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div class="flex gap-5 pb-4 w-full bg-zinc-900 max-md:flex-wrap max-md:max-w-full">
          {/* <div class="shrink-0 self-end w-6 h-10 rounded-full bg-[linear-gradient(141deg,#FFF_12.24%,rgba(255,255,255,0.00)_82.27%)] mt-[796px] stroke-[0.201px] max-md:mt-10"></div> */}
          <div class="flex-auto max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col max-md:gap-0 px-6 sm:px-0 relative">
              <svg class="absolute top-[30%]" width="191" height="386" viewBox="0 0 191 386" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g opacity="0.3" filter="url(#filter0_f_102_1126)">
  <circle cx="-2.1375" cy="192.863" r="167.863" transform="rotate(-90 -2.1375 192.863)" fill="url(#paint0_linear_102_1126)"/>
  <circle cx="-2.1375" cy="192.863" r="167.003" transform="rotate(-90 -2.1375 192.863)" stroke="url(#paint1_linear_102_1126)" stroke-width="1.71873"/>
  </g>
  <defs>
  <filter id="filter0_f_102_1126" x="-194.99" y="0.00979996" width="385.706" height="385.706" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
  <feGaussianBlur stdDeviation="12.4951" result="effect1_foregroundBlur_102_1126"/>
  </filter>
  <linearGradient id="paint0_linear_102_1126" x1="-78.53" y1="25.0001" x2="130.544" y2="281.317" gradientUnits="userSpaceOnUse">
  <stop stop-color="white"/>
  <stop offset="1" stop-color="white" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="paint1_linear_102_1126" x1="-170" y1="65.1038" x2="184.367" y2="180.831" gradientUnits="userSpaceOnUse">
  <stop offset="0.0572917" stop-color="white"/>
  <stop offset="0.244792" stop-color="#6CE5FF"/>
  <stop offset="0.651042" stop-color="#B570FE"/>
  <stop offset="0.869792" stop-color="white"/>
  </linearGradient>
  </defs>
              </svg>
              <svg class="absolute top-0 end-0" width="190" height="417" viewBox="0 0 190 417" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.9">
                <path d="M285.081 415.58C331.559 415.58 373.577 390.742 403.948 350.704C434.318 310.666 453.078 255.392 453.078 194.373C453.078 133.353 434.318 78.0787 403.948 38.0412C373.577 -1.9969 331.559 -26.8345 285.081 -26.8345C238.603 -26.8345 196.585 -1.9969 166.214 38.0412C135.844 78.0787 117.083 133.353 117.083 194.373C117.083 255.392 135.844 310.666 166.214 350.704C196.585 390.742 238.603 415.58 285.081 415.58Z" stroke="#F1C9C9" stroke-width="1.66602"/>
                <path d="M259.074 415.58C305.552 415.58 347.57 390.742 377.94 350.704C408.311 310.666 427.071 255.392 427.071 194.373C427.071 133.353 408.311 78.0787 377.94 38.0412C347.57 -1.9969 305.552 -26.8345 259.074 -26.8345C212.596 -26.8345 170.578 -1.9969 140.207 38.0412C109.836 78.0787 91.0762 133.353 91.0762 194.373C91.0762 255.392 109.836 310.666 140.207 350.704C170.578 390.742 212.596 415.58 259.074 415.58Z" stroke="#F1C9C9" stroke-width="1.66602"/>
                <path d="M231.21 415.58C277.688 415.58 319.706 390.742 350.077 350.704C380.447 310.666 399.208 255.392 399.208 194.373C399.208 133.353 380.447 78.0787 350.077 38.0412C319.706 -1.9969 277.688 -26.8345 231.21 -26.8345C184.732 -26.8345 142.714 -1.9969 112.343 38.0412C81.9729 78.0787 63.2126 133.353 63.2126 194.373C63.2126 255.392 81.9729 310.666 112.343 350.704C142.714 390.742 184.732 415.58 231.21 415.58Z" stroke="#F1C9C9" stroke-width="1.66602"/>
                <path d="M190.342 400.115C236.82 400.115 278.838 375.278 309.209 335.24C339.579 295.202 358.34 239.928 358.34 178.908C358.34 117.889 339.579 62.6143 309.209 22.5768C278.838 -17.4613 236.82 -42.2988 190.342 -42.2988C143.864 -42.2988 101.846 -17.4613 71.4754 22.5768C41.105 62.6143 22.3447 117.889 22.3447 178.908C22.3447 239.928 41.105 295.202 71.4754 335.24C101.846 375.278 143.864 400.115 190.342 400.115Z" stroke="#F1C9C9" stroke-width="1.66602"/>
                <path d="M169.802 400.115C216.28 400.115 258.298 375.278 288.669 335.24C319.039 295.202 337.799 239.928 337.799 178.908C337.799 117.889 319.039 62.6143 288.669 22.5768C258.298 -17.4613 216.28 -42.2988 169.802 -42.2988C123.324 -42.2988 81.3057 -17.4613 50.9349 22.5768C20.5645 62.6143 1.8042 117.889 1.8042 178.908C1.8042 239.928 20.5645 295.202 50.9349 335.24C81.3057 375.278 123.324 400.115 169.802 400.115Z" stroke="#F1C9C9" stroke-width="1.66602"/>
                </g>
              </svg>
              <svg class="absolute top-[20%] end-0" width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.3" cx="20.1946" cy="20.5893" r="19.5388" transform="rotate(-90 20.1946 20.5893)" fill="url(#paint0_linear_102_756)" stroke="url(#paint1_linear_102_756)" stroke-width="0.201086"/>
                <defs>
                <linearGradient id="paint0_linear_102_756" x1="11.2569" y1="0.949871" x2="35.7179" y2="30.9382" gradientUnits="userSpaceOnUse">
                <stop stop-color="white"/>
                <stop offset="1" stop-color="white" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="paint1_linear_102_756" x1="0.555176" y1="5.64187" x2="42.015" y2="19.1817" gradientUnits="userSpaceOnUse">
                <stop offset="0.0572917" stop-color="white"/>
                <stop offset="0.244792" stop-color="#6CE5FF"/>
                <stop offset="0.651042" stop-color="#B570FE"/>
                <stop offset="0.869792" stop-color="white"/>
                </linearGradient>
                </defs>
              </svg>
              <svg class="absolute top-[80%] end-20" width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.3" cx="20.1946" cy="20.5893" r="19.5388" transform="rotate(-90 20.1946 20.5893)" fill="url(#paint0_linear_102_756)" stroke="url(#paint1_linear_102_756)" stroke-width="0.201086"/>
                <defs>
                <linearGradient id="paint0_linear_102_756" x1="11.2569" y1="0.949871" x2="35.7179" y2="30.9382" gradientUnits="userSpaceOnUse">
                <stop stop-color="white"/>
                <stop offset="1" stop-color="white" stop-opacity="0"/>
                </linearGradient>
                <linearGradient id="paint1_linear_102_756" x1="0.555176" y1="5.64187" x2="42.015" y2="19.1817" gradientUnits="userSpaceOnUse">
                <stop offset="0.0572917" stop-color="white"/>
                <stop offset="0.244792" stop-color="#6CE5FF"/>
                <stop offset="0.651042" stop-color="#B570FE"/>
                <stop offset="0.869792" stop-color="white"/>
                </linearGradient>
                </defs>
              </svg>
              <form class="flex grow justify-center items-center px-16 py-10 lg:py-20 mt-5 w-full bg-white rounded-lg shadow-lg leading-[150%] max-md:px-5 max-md:mt-10 max-w-[600px] z-20" onSubmit={handleSubmit}>
                <div class="flex flex-col justify-center max-w-full w-[564px]">
                  <label for="judulPengaduan" class="text-stone-500 text-sm font-semibold max-md:max-w-full">
                    Judul Pengaduan
                  </label>
                  <input
                    id="judulPengaduan"
                    type="text"
                    class="flex flex-col justify-center p-4 mt-2 text-base bg-white rounded-lg border border-solid border-stone-300 max-md:max-w-full"
                    placeholder="Masukkan Judul Pengaduan"
                    aria-label="Masukkan Judul Pengaduan"
                  />
                  <label for="isiPengaduan" class="text-stone-500 text-sm font-semibold max-md:max-w-full mt-8">
                    Isi Pengaduan
                  </label>
                  <textarea
                    id="isiPengaduan"
                    class="flex flex-col justify-center px-4 py-20 mt-2 text-base bg-white rounded-lg border border-solid border-stone-300 max-md:max-w-full"
                    aria-label="Masukkan Isi Pengaduan"
                    placeholder="Masukkan Isi Pengaduan"
                  ></textarea>
                  <label for="lokasiKejadian" class="text-stone-500 text-sm font-semibold max-md:max-w-full mt-8">
                    Lokasi Kejadian
                  </label>
                  <input
                    id="lokasiKejadian"
                    type="text"
                    class="flex flex-col justify-center p-4 mt-2 text-base bg-white rounded-lg border border-solid border-stone-300 max-md:max-w-full"
                    placeholder="Masukkan Lokasi Kejadian"
                    aria-label="Masukkan Lokasi Kejadian"
                  />
                  <label for="uploadBukti" class="text-stone-500 text-sm font-semibold max-md:max-w-full mt-8">
                    Upload Bukti
                  </label>
                  <div class="flex flex-col justify-center items-start py-px mt-2 text-sm leading-5 text-black bg-white rounded-lg border border-solid border-stone-300 max-md:pr-5 max-md:max-w-full">
                    <button
                      id="uploadBukti"
                      class="justify-center px-12 py-6 rounded-lg bg-zinc-300 max-md:px-5"
                    >
                      Choose File
                    </button>
                  </div>
                  <div class="mt-2 text-sm text-rose-500 max-md:max-w-full" role="alert">
                    Error message informing me of a problem
                  </div>
                  <div class="flex justify-end mt-8 text-base text-center gap-4">
                    <button class="flex flex-col justify-center p-4 text-violet-500 bg-white rounded-lg border border-violet-500 border-solid">
                      Cancel
                    </button>
                    <button type="submit" class="flex flex-col justify-center p-4 text-white bg-violet-500 rounded-lg m-0">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <h2 class="self-center mt-24 text-4xl font-medium tracking-wider text-center text-black max-md:mt-10">
        Jumlah Laporan
      </h2>
      <section class="flex gap-5 items-start pt-14 pr-3 pb-5 pl-20 mt-12 w-full text-4xl font-bold leading-10 text-white capitalize bg-neutral-400 max-md:flex-wrap max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        <p class="flex-auto self-start max-md:max-w-full">
          190,199 Laporan Masuk
        </p>
        <div class="shrink-0 self-end mt-6 rounded-full bg-[linear-gradient(141deg,#FFF_12.24%,rgba(255,255,255,0.00)_82.27%)] h-[39px] stroke-[0.201px] w-[39px]"></div>
      </section>
      <section class="flex flex-col self-center px-5 pt-2 mt-52 w-full text-black capitalize max-w-[1235px] max-md:mt-10 max-md:max-w-full">
        <h3 class="self-start text-4xl font-bold leading-10 max-md:max-w-full">
          Frequently asked questions
        </h3>
        <div class="flex flex-col mt-8 text-xl leading-10 max-md:max-w-full">
          <div class="flex flex-col max-md:max-w-full">
            <details>
              <summary class="flex gap-5 justify-between py-2.5 pr-7 pl-1.5 border-b border-solid border-neutral-200 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                What are the benefits of using INTcash money transfer services?
                <img class="shrink-0 my-auto w-6 aspect-square" loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a4985fe03b4a39e1b4d553cd51cfed40f2e0036c57ed745799b13aa119a3fb5?apiKey=64570b4ebbd14571bc0f37f617206081&" alt="" />
              </summary>
            </details>
            <details class="mt-8">
              <summary class="flex gap-5 justify-between py-2.5 pr-2.5 pl-1.5 border-b border-solid border-neutral-200 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                What are the transaction limits for INTcash money transfer services?
                <img class="shrink-0 my-auto w-6 aspect-square" loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a4985fe03b4a39e1b4d553cd51cfed40f2e0036c57ed745799b13aa119a3fb5?apiKey=64570b4ebbd14571bc0f37f617206081&" alt="" />
              </summary>
            </details>
            <details class="mt-8">
              <summary class="flex gap-5 justify-between py-2.5 pr-2.5 pl-1.5 border-b border-solid border-neutral-200 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                What happens if there is an issue with my INTcash money transfer transaction, and how do I resolve it?
                <img class="shrink-0 my-auto w-6 aspect-square" loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a4985fe03b4a39e1b4d553cd51cfed40f2e0036c57ed745799b13aa119a3fb5?apiKey=64570b4ebbd14571bc0f37f617206081&" alt="" />
              </summary>
            </details>
          </div>
          <div class="flex flex-col mt-8 max-md:max-w-full">
            <details>
              <summary class="flex gap-5 justify-between py-2.5 pr-2.5 pl-1.5 border-b border-solid border-neutral-200 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                Can I track my INTcash money transfer transaction, and how do I do that?
                <img class="shrink-0 my-auto w-6 aspect-square" loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a4985fe03b4a39e1b4d553cd51cfed40f2e0036c57ed745799b13aa119a3fb5?apiKey=64570b4ebbd14571bc0f37f617206081&" alt="" />
              </summary>
            </details>
            <details class="mt-8">
              <summary class="flex gap-5 justify-between py-2.5 pr-2.5 pl-1.5 border-b border-solid border-neutral-200 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                How long does it take to transfer money using INTcash money transfer services?
                <img class="shrink-0 my-auto w-6 aspect-square" loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a4985fe03b4a39e1b4d553cd51cfed40f2e0036c57ed745799b13aa119a3fb5?apiKey=64570b4ebbd14571bc0f37f617206081&" alt="" />
              </summary>
            </details>
            <details class="mt-8">
              <summary class="flex gap-5 justify-between py-2.5 pr-2.5 pl-1.5 border-b border-solid border-neutral-200 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                What are the fees associated with using INTcash money transfer services?
                <img class="shrink-0 my-auto w-6 aspect-square" loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a4985fe03b4a39e1b4d553cd51cfed40f2e0036c57ed745799b13aa119a3fb5?apiKey=64570b4ebbd14571bc0f37f617206081&" alt="" />
              </summary>
            </details>
          </div>
        </div>
      </section>
      <footer class="flex justify-center items-center px-16 py-12 mt-24 w-full bg-zinc-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div class="flex flex-col w-full max-w-[1154px] max-md:max-w-full">
          <div class="flex gap-5 justify-between items-start w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
            <div class="justify-center pt-4 mt-3 text-2xl text-white whitespace-nowrap">
              INTcash
            </div>
            <div class="flex gap-5 justify-center max-md:flex-wrap max-md:max-w-full">
              <div class="grow my-auto text-2xl tracking-tight text-white">
                Ready to get started?
              </div>
              <button class="flex flex-col justify-center text-lg tracking-tight text-black bg-white rounded-lg px-10 py-5 max-md:px-5">
                Get started
              </button>
            </div>
          </div>
          <div class="shrink-0 mt-7 h-px bg-white max-md:max-w-full"></div>
          <div class="flex gap-5 justify-between mt-11 text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div class="flex flex-col justify-center self-start">
              <div class="text-2xl tracking-tight">
                Subscribe to our <br /> newsletter
              </div>
              <form class="flex flex-col mt-8 text-base tracking-normal max-w-md mx-auto">
                <label for="email" class="sr-only">Email address</label>
                <div class="flex gap-5 justify-between items-end max-md:pr-5 max-md:flex-col max-md:gap-2">
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="Email address" 
                    class="my-auto p-2 border-2 border-gray-300 rounded w-full max-md:w-auto max-md:my-0" 
                  />
                  <img 
                    class="shrink-0 aspect-square w-[50px] max-md:w-[30px]" 
                    loading="lazy" 
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cea2538da73c30553bef3df6208ed616fefe931b0fa455d566858487f1f429a?apiKey=64570b4ebbd14571bc0f37f617206081&" 
                    alt="" 
                  />
                </div>
                <div class="shrink-0 h-px bg-white"></div>
              </form>
            </div>
            <div class="flex flex-col justify-center text-base tracking-normal">
              <div class="text-lg tracking-tight">Services</div>
              <div class="mt-7">Email Marketing</div>
              <div class="mt-7">Campaigns</div>
              <div class="mt-7">Branding</div>
              <div class="mt-7">Offline</div>
            </div>
            <div class="flex flex-col justify-center text-base tracking-normal">
              <div class="text-lg tracking-tight">About</div>
              <div class="mt-7">Our Story</div>
              <div class="mt-7">Benefits</div>
              <div class="mt-7">Team</div>
              <div class="mt-7">Careers</div>
            </div>
            <div class="flex flex-col justify-center self-start text-base tracking-normal">
              <div class="text-lg tracking-tight">Help</div>
              <div class="mt-7">FAQs</div>
              <div class="mt-7">Contact Us</div>
            </div>
          </div>
          <div class="flex gap-5 justify-between self-start mt-6">
            <img class="shrink-0 self-start w-2.5 aspect-[0.5]" loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2da8b8f2f4c29b7c9f150a06e183fe7d4f78939ee0b5c0c0b7db7bb8d7eba42?apiKey=64570b4ebbd14571bc0f37f617206081&" alt="" />
            <img class="shrink-0 my-auto aspect-[1.22] w-[22px]" loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5323b9c16b12caadac84c1e93a461787705f53fc89bab51e6d85884cc379c9a?apiKey=64570b4ebbd14571bc0f37f617206081&" alt="" />
            <img class="shrink-0 aspect-square w-[22px]" loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7c78d5a1cdee86b16688ead2c904294660d8719f004c4344cb01c7e22ff6566?apiKey=64570b4ebbd14571bc0f37f617206081&" alt="" />
          </div>
          <div class="flex gap-5 justify-between mt-20 w-full text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div class="text-sm">© 2023 GTCSYS. All rights reserved.</div>
            <div class="flex gap-5 justify-between text-base tracking-normal">
              <div>Terms & Conditions</div>
              <div>Privacy Policy</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MyComponent;