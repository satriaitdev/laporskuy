import { useState } from 'react';
import { rust_icp_backend } from 'declarations/rust_icp_backend';

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
              <div class="flex justify-center items-center px-16 py-2.5 w-full text-white whitespace-nowrap bg-zinc-300 bg-opacity-10 max-md:px-5 max-md:max-w-full">
                <div class="flex gap-5 justify-between w-full max-w-[1143px] max-md:flex-wrap max-md:max-w-full">
                  <div class="flex justify-center pt-4 text-2xl">INTcash</div>
                  <nav class="flex flex-col justify-center my-auto text-sm">
                    <div class="flex gap-5 justify-between">
                      <a href="#about">About</a>
                      <a href="#features">Features</a>
                    </div>
                  </nav>
                </div>
              </div>
              <main class="flex flex-col justify-center items-start self-center py-20 mt-16 max-w-full w-[1266px] max-md:pr-5 max-md:mt-10">
                <section class="flex flex-col justify-center mt-20 mb-12 max-w-full w-[700px] max-md:my-10">
                  <h1 class="flex flex-col text-white max-md:max-w-full text-5xl font-bold max-md:max-w-full max-md:text-4xl">
                    Mudah, Transparant, and Aman
                  </h1>
                  <p class="mt-5 text-lg max-md:max-w-full">
                    Adukan keluhan anda dengan anonimus dan rahasia
                  </p>
                  <div class="flex gap-5 self-start mt-12 text-2xl font-medium tracking-wider max-md:mt-10">
                    <button class="justify-center p-2.5 text-black bg-white rounded-xl">
                      Tentang Kami
                    </button>
                    <button class="justify-center p-2.5 text-white rounded-xl border border-white border-solid">
                      Isi Pengaduan
                    </button>
                  </div>
                </section>
              </main>
            </div>
            <div class="flex flex-col justify-center items-start self-start px-7 rounded-full border-2 border-red-200 border-solid">
              <div class="flex gap-0 rounded-full border-2 border-red-200 border-solid">
                <div class="flex z-10 flex-col justify-center items-start self-start px-5 rounded-full border-2 border-red-200 border-solid">
                  <div class="flex flex-col justify-center items-end px-16 py-20 rounded-full border-2 border-red-200 border-solid max-md:pl-5">
                    <div class="shrink-0 mt-24 mb-20 rounded-full bg-[linear-gradient(141deg,#FFF_12.24%,rgba(255,255,255,0.00)_82.27%)] h-[39px] stroke-[0.201px] w-[39px] max-md:my-10"></div>
                  </div>
                </div>
                <div class="shrink-0 rounded-full border-2 border-red-200 border-solid h-[416px] w-[74px]"></div>
              </div>
            </div>
          </div>
          <div class="flex gap-5 justify-between self-center mt-20 w-full max-w-[1338px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div class="shrink-0 self-end mt-6 h-3 rounded-full bg-[linear-gradient(141deg,#FFF_12.24%,rgba(255,255,255,0.00)_82.27%)] stroke-[0.201px] w-[39px]"></div>
            <div class="shrink-0 rounded-full bg-[linear-gradient(141deg,#FFF_12.24%,rgba(255,255,255,0.00)_82.27%)] h-[34px] stroke-[0.201px] w-[39px]"></div>
          </div>
        </header>
      </div>
      <section class="flex justify-center items-center px-16 py-9 w-full bg-neutral-400 max-md:px-5 max-md:max-w-full">
        <div class="flex gap-5 justify-between items-center w-full max-w-[1200px] max-md:flex-wrap max-md:max-w-full">
          <img class="shrink-0 self-stretch my-auto max-w-full aspect-[5.88] w-[200px]" loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/93fc933ec9278e408617b179a1fe9a8e5a8eb5a5798b19cc3f38bd02438f370a?apiKey=64570b4ebbd14571bc0f37f617206081&" alt="" />
          <img class="shrink-0 self-stretch my-auto max-w-full aspect-[5.56] w-[200px]" loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fb0aade213bd642d9e35085add0b5595caad53c62f47bb96333eb2f7580e6a2?apiKey=64570b4ebbd14571bc0f37f617206081&" alt="" />
          <img class="shrink-0 self-stretch aspect-[1.09] w-[79px]" loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/580481159983ac8b0a2f90f85753ab1731f8adb2af8d86bdb371c101167da1d5?apiKey=64570b4ebbd14571bc0f37f617206081&" alt="" />
          <img class="shrink-0 self-stretch my-auto max-w-full aspect-[3.85] w-[140px]" loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/72336eb3eddae7102067cf56a85af23c2d4edc9b1cf7db746ba2bac56df44841?apiKey=64570b4ebbd14571bc0f37f617206081&" alt="" />
          <img class="shrink-0 self-stretch my-auto max-w-full aspect-[2] w-[109px]" loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4db673b07e0d1dea9ae295fc217f24c5c13231556f5afe074dd8f8d80e0290e?apiKey=64570b4ebbd14571bc0f37f617206081&" alt="" />
        </div>
      </section>
      <section class="flex flex-col justify-center self-center px-2 pb-16 mt-20 w-full max-w-[1238px] max-md:mt-10 max-md:max-w-full">
        <div class="flex flex-col justify-center pt-8 max-md:max-w-full">
          <img class="z-10 mb-0 w-full aspect-[2.17] max-md:mb-2.5 max-md:max-w-full" loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd86ddb1917569511960cc88662706e971142d82431371de91b485658289ad5d?apiKey=64570b4ebbd14571bc0f37f617206081&" alt="" />
        </div>
      </section>
      <h2 class="self-center mt-24 text-4xl font-medium tracking-wider text-center text-black max-md:mt-10">
        Form Pengaduan
      </h2>
      <section class="flex flex-col justify-center mt-16 w-full max-md:mt-10 max-md:max-w-full">
        <div class="flex gap-5 pb-4 w-full bg-zinc-900 max-md:flex-wrap max-md:max-w-full">
          <div class="shrink-0 self-end w-6 h-10 rounded-full bg-[linear-gradient(141deg,#FFF_12.24%,rgba(255,255,255,0.00)_82.27%)] mt-[796px] stroke-[0.201px] max-md:mt-10"></div>
          <div class="flex-auto max-md:max-w-full">
            <div class="flex gap-5 max-md:flex-col max-md:gap-0">
              <div class="flex flex-col w-[74%] max-md:ml-0 max-md:w-full">
                <form class="flex grow justify-center items-center px-16 py-20 mt-5 w-full bg-white rounded-lg shadow-lg leading-[150%] max-md:px-5 max-md:mt-10 max-md:max-w-full" onSubmit={handleSubmit}>
                  <div class="flex flex-col justify-center max-w-full w-[564px]">
                    <label for="judulPengaduan" class="text-stone-500 text-xs font-semibold max-md:max-w-full">
                      Judul Pengaduan
                    </label>
                    <input
                      id="judulPengaduan"
                      type="text"
                      class="flex flex-col justify-center p-4 mt-2 text-base bg-white rounded-lg border border-solid border-stone-300 max-md:max-w-full"
                      placeholder="Masukkan Judul Pengaduan"
                      aria-label="Masukkan Judul Pengaduan"
                    />
                    <label for="isiPengaduan" class="text-stone-500 text-xs font-semibold max-md:max-w-full mt-8">
                      Isi Pengaduan
                    </label>
                    <textarea
                      id="isiPengaduan"
                      class="flex flex-col justify-center px-4 py-20 mt-2 text-base bg-white rounded-lg border border-solid border-stone-300 max-md:max-w-full"
                      aria-label="Masukkan Isi Pengaduan"
                      placeholder="Masukkan Isi Pengaduan"
                    ></textarea>
                    <label for="lokasiKejadian" class="text-stone-500 text-xs font-semibold max-md:max-w-full mt-8">
                      Lokasi Kejadian
                    </label>
                    <input
                      id="lokasiKejadian"
                      type="text"
                      class="flex flex-col justify-center p-4 mt-2 text-base bg-white rounded-lg border border-solid border-stone-300 max-md:max-w-full"
                      placeholder="Masukkan Lokasi Kejadian"
                      aria-label="Masukkan Lokasi Kejadian"
                    />
                    <label for="uploadBukti" class="text-stone-500 text-xs font-semibold max-md:max-w-full mt-8">
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
                    <div class="mt-2 text-rose-500 max-md:max-w-full" role="alert">
                      Error message informing me of a problem
                    </div>
                    <div class="flex gap-5 justify-between mt-8 text-base text-center whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                      <button class="flex flex-col justify-center p-4 text-violet-500 bg-white rounded-lg border border-violet-500 border-solid">
                        Cancel
                      </button>
                      <button type="submit" class="flex flex-col justify-center p-4 text-white bg-violet-500 rounded-lg">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
                <section id="report">{report}</section>
              </div>
              <aside class="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
                <img class="w-full rounded-full border-2 border-red-200 border-solid aspect-[0.66]" loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3966e26e9ddafa74cd8ee8060c1757b254c68973fff8738406899a551b0bbd83?apiKey=64570b4ebbd14571bc0f37f617206081&" alt="" />
                <div class="shrink-0 self-center mt-96 rounded-full bg-[linear-gradient(141deg,#FFF_12.24%,rgba(255,255,255,0.00)_82.27%)] h-[39px] stroke-[0.201px] w-[39px] max-md:mt-10"></div>
              </aside>
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
              <form class="flex flex-col mt-8 text-base tracking-normal">
                <label for="email" class="sr-only">Email address</label>
                <div class="flex gap-5 justify-between items-end max-md:pr-5">
                  <input type="email" id="email" placeholder="Email address" class="my-auto p-2 border-2 border-gray-300 rounded" />
                  <img class="shrink-0 aspect-square w-[50px]" loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cea2538da73c30553bef3df6208ed616fefe931b0fa455d566858487f1f429a?apiKey=64570b4ebbd14571bc0f37f617206081&" alt="" />
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