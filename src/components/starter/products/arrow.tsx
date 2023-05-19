import type { QwikIntrinsicElements } from '@builder.io/qwik';

export default (props: QwikIntrinsicElements['svg'], key: string) => {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props} key={key}>
    <path d="M13.0506 12.361L7.39371 18.0179L5.97949 16.6037L11.6363 10.9468L6.6866 5.99707H18.0003V17.3108L13.0506 12.361Z" fill="white" fill-opacity="0.72" />
  </svg>
}
