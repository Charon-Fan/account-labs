import type { QwikIntrinsicElements } from '@builder.io/qwik';

export function Logo(props: QwikIntrinsicElements['svg'], key: string) {
  return <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} key={key}>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.474 17.5C8.40444 21.0847 5.49081 25.2851 2.94727 28.7768C3.71655 31.0485 4.927 33.1167 6.47664 34.8794C10.7711 34.4227 15.863 34 20.0003 34C24.1376 34 29.2295 34.4227 33.5239 34.8794C35.0736 33.1166 36.284 31.0484 37.0533 28.7767C34.5098 25.285 31.5962 21.0846 29.5266 17.5C27.4573 13.9159 25.2767 9.29316 23.5248 5.34491C22.385 5.11865 21.2065 5 20.0003 5C18.7941 5 17.6156 5.11864 16.4759 5.34488C14.7239 9.29312 12.5434 13.9158 10.474 17.5ZM8.85791 27.7009L10.3579 30.299C16.3246 26.8541 23.6758 26.8541 29.6425 30.299L31.1425 27.7009C25.1758 24.2561 21.5002 17.8897 21.5002 11H18.5002C18.5002 17.8897 14.8246 24.2561 8.85791 27.7009Z" fill="url(#paint0_linear_30_54)" />
    <defs>
      <linearGradient id="paint0_linear_30_54" x1="3.21372" y1="19.9397" x2="37.0533" y2="19.9397" gradientUnits="userSpaceOnUse">
        <stop stop-color="#1BE077" />
        <stop offset="1" stop-color="#51E0CD" />
      </linearGradient>
    </defs>
  </svg>
}
export default Logo;
