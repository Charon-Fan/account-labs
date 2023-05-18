import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import Header from '~/components/starter/header';
import Footer from '~/components/starter/footer';

import styles from './styles.css?inline';
import layoutStyles from './layout.module.css';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export const useServerYearLoader = routeLoader$(() => {
  return new Date().getFullYear();
});

export default component$(() => {
  useStyles$(styles);
  return (
    <>
      <Header />
      <div class={layoutStyles.bg} />
      <main class="flex flex-col items-center mx-auto" style="max-width: 72vw">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
