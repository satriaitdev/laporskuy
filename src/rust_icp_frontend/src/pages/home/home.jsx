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
                <svg width="183" height="50" viewBox="0 0 183 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.625 39.0625C15.625 38.1996 16.3246 37.5 17.1875 37.5C18.0504 37.5 18.75 38.1996 18.75 39.0625V45.3125C18.75 46.1754 18.0504 46.875 17.1875 46.875C16.3246 46.875 15.625 46.1754 15.625 45.3125V39.0625Z" fill="#B90F0F"/>
<path d="M32.8125 31.25H10.9375C9.69468 31.2488 8.50312 30.7545 7.62431 29.8757C6.7455 28.9969 6.25124 27.8053 6.25 26.5625V10.9375C6.25 10.0746 5.55044 9.375 4.6875 9.375C3.82456 9.375 3.125 10.0746 3.125 10.9375V26.5625C3.12748 28.6337 3.95138 30.6194 5.41597 32.084C6.88056 33.5486 8.86626 34.3725 10.9375 34.375H32.8125C34.4736 34.3791 34.8707 36.3574 33.6962 37.5319L27.6672 43.5609C27.0571 44.171 27.0571 45.1602 27.6672 45.7703C28.2773 46.3804 29.2665 46.3804 29.8766 45.7703L34.6205 41.0263C36.7993 38.8476 40.6142 39.1063 40.625 42.1875V45.3125C40.625 46.1754 41.3246 46.875 42.1875 46.875C43.0504 46.875 43.75 46.1754 43.75 45.3125V42.1875C43.7459 39.288 42.5922 36.5084 40.5419 34.4581C38.4916 32.4078 35.712 31.2541 32.8125 31.25Z" fill="#B90F0F"/>
<path d="M39.4921 6.31093L28.5546 3.18593C28.2738 3.10561 27.9761 3.10561 27.6952 3.18593L16.7577 6.31093C16.3684 6.42244 16.0376 6.68075 15.835 7.0314C15.6325 7.38205 15.5739 7.79766 15.6718 8.19062L17.1874 14.2547V17.1875C17.1874 18.6238 17.4703 20.0461 18.02 21.3731C18.5697 22.7001 19.3753 23.9058 20.3909 24.9215C21.4066 25.9371 22.6123 26.7428 23.9393 27.2924C25.2663 27.8421 26.6886 28.125 28.1249 28.125C29.5613 28.125 30.9835 27.8421 32.3105 27.2924C33.6375 26.7428 34.8433 25.9371 35.8589 24.9215C36.8745 23.9058 37.6802 22.7001 38.2299 21.3731C38.7795 20.0461 39.0624 18.6238 39.0624 17.1875V14.2547L40.5781 8.19218C40.6764 7.799 40.6181 7.383 40.4155 7.03199C40.2128 6.68098 39.8818 6.42244 39.4921 6.31093ZM28.1249 6.31249L37.1796 8.89999L36.2812 12.5H29.6874V9.37499H26.5624V12.5H19.9702L19.0702 8.89999L28.1249 6.31249ZM28.1249 25C26.0537 24.9975 24.068 24.1736 22.6034 22.709C21.1388 21.2444 20.3149 19.2587 20.3124 17.1875V15.625H35.9374V17.1875C35.9349 19.2587 35.1111 21.2444 33.6465 22.709C32.1819 24.1736 30.1962 24.9975 28.1249 25Z" fill="#B90F0F"/>
<path d="M82.3398 32.5H73.8086V30.6719H82.3398V32.5ZM74.2539 32.5H71.9805V15.4375H74.2539V32.5ZM92.0547 23.8047C92.0547 23.0469 91.8281 22.4453 91.375 22C90.9297 21.5469 90.2695 21.3203 89.3945 21.3203C88.8555 21.3203 88.3789 21.4141 87.9648 21.6016C87.5586 21.7891 87.2422 22.0352 87.0156 22.3398C86.7891 22.6445 86.6758 22.9766 86.6758 23.3359H84.4844C84.4844 22.7266 84.6914 22.1367 85.1055 21.5664C85.5195 20.9883 86.1016 20.5156 86.8516 20.1484C87.6094 19.7734 88.5 19.5859 89.5234 19.5859C90.4453 19.5859 91.2617 19.7422 91.9727 20.0547C92.6836 20.3672 93.2383 20.8398 93.6367 21.4727C94.043 22.0977 94.2461 22.8828 94.2461 23.8281V29.7344C94.2461 30.1562 94.2812 30.6055 94.3516 31.082C94.4297 31.5586 94.543 31.9688 94.6914 32.3125V32.5H92.4062C92.2969 32.25 92.2109 31.918 92.1484 31.5039C92.0859 31.082 92.0547 30.6914 92.0547 30.332V23.8047ZM92.4531 26.3359H90.2734C89.0391 26.3359 88.0859 26.5312 87.4141 26.9219C86.7422 27.3125 86.4062 27.8984 86.4062 28.6797C86.4062 29.2891 86.6094 29.8047 87.0156 30.2266C87.4297 30.6484 88.0312 30.8594 88.8203 30.8594C89.4844 30.8594 90.0703 30.7188 90.5781 30.4375C91.0859 30.1562 91.4883 29.8086 91.7852 29.3945C92.082 28.9805 92.2422 28.582 92.2656 28.1992L93.2031 29.2422C93.1484 29.5703 93 29.9336 92.7578 30.332C92.5156 30.7305 92.1914 31.1133 91.7852 31.4805C91.3867 31.8398 90.9102 32.1406 90.3555 32.3828C89.8086 32.6172 89.1914 32.7344 88.5039 32.7344C87.6445 32.7344 86.8906 32.5703 86.2422 32.2422C85.6016 31.9062 85.1016 31.4531 84.7422 30.8828C84.3906 30.3125 84.2148 29.6797 84.2148 28.9844C84.2148 27.6172 84.7305 26.582 85.7617 25.8789C86.793 25.168 88.1797 24.8125 89.9219 24.8125H92.4297L92.4531 26.3359ZM99.8477 37.375H97.6562V19.8203H99.6484L99.8477 22.2578V37.375ZM108.379 26.3008C108.379 27.5352 108.188 28.6367 107.805 29.6055C107.422 30.5742 106.863 31.3398 106.129 31.9023C105.402 32.457 104.516 32.7344 103.469 32.7344C102.383 32.7344 101.473 32.5 100.738 32.0312C100.004 31.5625 99.4297 30.8984 99.0156 30.0391C98.6016 29.1719 98.332 28.1484 98.207 26.9688V25.6094C98.332 24.3672 98.6016 23.2969 99.0156 22.3984C99.4375 21.5 100.012 20.8086 100.738 20.3242C101.473 19.832 102.371 19.5859 103.434 19.5859C104.496 19.5859 105.395 19.8555 106.129 20.3945C106.863 20.9336 107.422 21.6914 107.805 22.668C108.188 23.6367 108.379 24.7656 108.379 26.0547V26.3008ZM106.188 26.0547C106.188 25.2109 106.066 24.4375 105.824 23.7344C105.59 23.0234 105.219 22.457 104.711 22.0352C104.211 21.6133 103.566 21.4023 102.777 21.4023C102.238 21.4023 101.77 21.4961 101.371 21.6836C100.973 21.8711 100.633 22.125 100.352 22.4453C100.07 22.7578 99.8398 23.1172 99.6602 23.5234C99.4883 23.9219 99.3594 24.3359 99.2734 24.7656V27.8242C99.4297 28.3711 99.6445 28.8867 99.918 29.3711C100.199 29.8477 100.57 30.2344 101.031 30.5312C101.5 30.8281 102.09 30.9766 102.801 30.9766C103.582 30.9766 104.223 30.7617 104.723 30.332C105.223 29.9023 105.59 29.3359 105.824 28.6328C106.066 27.9219 106.188 27.1445 106.188 26.3008V26.0547ZM110.57 26.0312C110.57 24.8047 110.805 23.707 111.273 22.7383C111.742 21.7695 112.406 21.0039 113.266 20.4414C114.125 19.8711 115.145 19.5859 116.324 19.5859C117.52 19.5859 118.551 19.8711 119.418 20.4414C120.285 21.0039 120.949 21.7695 121.41 22.7383C121.879 23.707 122.113 24.8047 122.113 26.0312V26.3008C122.113 27.5195 121.879 28.6172 121.41 29.5938C120.949 30.5625 120.285 31.3281 119.418 31.8906C118.559 32.4531 117.535 32.7344 116.348 32.7344C115.16 32.7344 114.133 32.4531 113.266 31.8906C112.406 31.3281 111.742 30.5625 111.273 29.5938C110.805 28.6172 110.57 27.5195 110.57 26.3008V26.0312ZM112.762 26.3008C112.762 27.1367 112.895 27.9102 113.16 28.6211C113.426 29.332 113.82 29.9023 114.344 30.332C114.875 30.7617 115.543 30.9766 116.348 30.9766C117.145 30.9766 117.805 30.7617 118.328 30.332C118.859 29.9023 119.258 29.332 119.523 28.6211C119.789 27.9102 119.922 27.1367 119.922 26.3008V26.0312C119.922 25.1953 119.789 24.4219 119.523 23.7109C119.258 23 118.859 22.4297 118.328 22C117.797 21.5625 117.129 21.3438 116.324 21.3438C115.535 21.3438 114.875 21.5625 114.344 22C113.812 22.4297 113.414 23 113.148 23.7109C112.891 24.4219 112.762 25.1953 112.762 26.0312V26.3008ZM127.035 32.5H124.844V19.8203H126.977L127.035 21.8125V32.5ZM130.984 21.7539C130.797 21.7148 130.621 21.6914 130.457 21.6836C130.301 21.668 130.121 21.6602 129.918 21.6602C129.254 21.6602 128.691 21.7969 128.23 22.0703C127.777 22.3438 127.426 22.7227 127.176 23.207C126.926 23.6836 126.77 24.2305 126.707 24.8477L126.086 25.1992C126.086 24.1758 126.223 23.2422 126.496 22.3984C126.77 21.5469 127.195 20.8672 127.773 20.3594C128.359 19.8438 129.109 19.5859 130.023 19.5859C130.172 19.5859 130.348 19.6055 130.551 19.6445C130.762 19.6758 130.906 19.7109 130.984 19.75V21.7539ZM142.398 28.1875C142.398 27.6484 142.285 27.1914 142.059 26.8164C141.832 26.4414 141.426 26.1016 140.84 25.7969C140.254 25.4922 139.422 25.1836 138.344 24.8711C137.5 24.6289 136.738 24.3555 136.059 24.0508C135.387 23.7383 134.809 23.3828 134.324 22.9844C133.84 22.5859 133.469 22.1289 133.211 21.6133C132.953 21.0977 132.824 20.5078 132.824 19.8438C132.824 18.9531 133.062 18.1602 133.539 17.4648C134.023 16.7617 134.699 16.2109 135.566 15.8125C136.434 15.4062 137.449 15.2031 138.613 15.2031C139.902 15.2031 140.996 15.4492 141.895 15.9414C142.793 16.4258 143.477 17.0625 143.945 17.8516C144.414 18.6328 144.648 19.4688 144.648 20.3594H142.363C142.363 19.7188 142.227 19.1484 141.953 18.6484C141.688 18.1484 141.277 17.7578 140.723 17.4766C140.168 17.1875 139.465 17.043 138.613 17.043C137.816 17.043 137.156 17.1641 136.633 17.4062C136.117 17.6484 135.734 17.9766 135.484 18.3906C135.234 18.8047 135.109 19.2773 135.109 19.8086C135.109 20.2852 135.246 20.7109 135.52 21.0859C135.793 21.4531 136.223 21.7852 136.809 22.082C137.395 22.3789 138.152 22.6602 139.082 22.9258C140.371 23.2852 141.43 23.7031 142.258 24.1797C143.086 24.6562 143.695 25.2188 144.086 25.8672C144.484 26.5156 144.684 27.2812 144.684 28.1641C144.684 29.0859 144.438 29.8906 143.945 30.5781C143.453 31.2656 142.762 31.7969 141.871 32.1719C140.98 32.5469 139.934 32.7344 138.73 32.7344C137.941 32.7344 137.164 32.625 136.398 32.4062C135.641 32.1875 134.949 31.8594 134.324 31.4219C133.707 30.9844 133.211 30.4453 132.836 29.8047C132.469 29.1562 132.285 28.4062 132.285 27.5547H134.559C134.559 28.1406 134.672 28.6445 134.898 29.0664C135.125 29.4883 135.434 29.8359 135.824 30.1094C136.215 30.3828 136.66 30.5859 137.16 30.7188C137.66 30.8438 138.184 30.9062 138.73 30.9062C139.52 30.9062 140.184 30.7969 140.723 30.5781C141.27 30.3516 141.684 30.0352 141.965 29.6289C142.254 29.2227 142.398 28.7422 142.398 28.1875ZM149.43 32.5H147.238V14.5H149.43V32.5ZM151.656 25.7266L148.539 28.9375L148.363 26.6406L150.59 24.0039L154.504 19.8203H157.164L151.656 25.7266ZM150.66 26.4414L151.797 24.5195L157.75 32.5H155.172L150.66 26.4414ZM167.172 19.8203H169.363V32.5H167.277L167.172 29.5703V19.8203ZM168.496 26.875C168.496 28 168.336 29.0039 168.016 29.8867C167.695 30.7695 167.172 31.4648 166.445 31.9727C165.719 32.4805 164.746 32.7344 163.527 32.7344C162.285 32.7344 161.281 32.3672 160.516 31.6328C159.75 30.8984 159.367 29.6875 159.367 28V19.8203H161.559V28.0234C161.559 28.7891 161.668 29.3828 161.887 29.8047C162.113 30.2188 162.402 30.5078 162.754 30.6719C163.113 30.8281 163.488 30.9062 163.879 30.9062C164.801 30.9062 165.531 30.7305 166.07 30.3789C166.609 30.0195 166.996 29.5352 167.23 28.9258C167.465 28.3164 167.582 27.6406 167.582 26.8984L168.496 26.875ZM179.746 19.8203H182.078L176.992 34.457C176.875 34.7695 176.719 35.1055 176.523 35.4648C176.336 35.832 176.094 36.1797 175.797 36.5078C175.508 36.8359 175.152 37.1016 174.73 37.3047C174.309 37.5156 173.809 37.6211 173.23 37.6211C173.113 37.6211 172.973 37.6094 172.809 37.5859C172.645 37.5625 172.488 37.5352 172.34 37.5039C172.191 37.4805 172.078 37.457 172 37.4336V35.6875C172.062 35.6953 172.16 35.707 172.293 35.7227C172.434 35.7383 172.531 35.7461 172.586 35.7461C173.32 35.7461 173.895 35.5938 174.309 35.2891C174.723 34.9844 175.059 34.4414 175.316 33.6602L176.219 31.1875L179.746 19.8203ZM176.934 29.6758L177.496 31.9609L175.926 32.7461L171.273 19.8203H173.664L176.934 29.6758Z" fill="white"/>
</svg>
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
                    <a href='#from' class="justify-center p-2.5 text-white text-base rounded-xl border border-white border-solid">
                      Isi Pengaduan
                    </a>
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
              <form id="from" class="flex grow justify-center items-center px-16 py-10 lg:py-20 mt-5 w-full bg-white rounded-lg shadow-lg leading-[150%] max-md:px-5 max-md:mt-10 max-w-[600px] z-20" onSubmit={handleSubmit}>
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
      <div className="flex justify-center items-center px-16 py-14 bg-zinc-800 max-md:px-5">
      <div className="flex flex-col w-full max-w-6xl max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start w-full max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 mt-3 text-2xl text-white">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bda6eaa45d4e93d5f1392e8ed671b41700be76e9c80571665bc0efc382390121?"
              className="shrink-0 aspect-square w-[50px]"
            />
            <div className="my-auto">LaporSkuy </div>
          </div>
          <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
            <div className="grow my-auto text-2xl tracking-tight text-white">
              Ready to get started?
            </div>
            <div className="justify-center items-start px-10 py-5 text-lg tracking-tight text-black bg-white rounded-lg max-md:px-5">
              Isi Fornulir
            </div>
          </div>
        </div>
        <div className="shrink-0 mt-7 h-px bg-white max-md:max-w-full" />
        <div className="flex gap-5 justify-between mt-16 max-w-full text-white w-[222px] max-md:mt-10">
          <div className="flex flex-col text-base tracking-normal">
            <div className="text-lg tracking-tight">Quick Lnk</div>
            <div className="mt-7">About</div>
            <div className="mt-7">Features</div>
          </div>
          <div className="flex flex-col self-start whitespace-nowrap">
            <div className="text-lg tracking-tight">Help</div>
            <div className="mt-7 text-base tracking-normal">FAQs</div>
          </div>
        </div>
        <div className="flex gap-5 justify-between mt-20 w-full text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="text-sm">© 2024 Satria IT. All rights reserved.</div>
          <div className="flex gap-5 justify-between text-base tracking-normal">
            <div>Terms & Conditions</div>
            <div>Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default MyComponent;