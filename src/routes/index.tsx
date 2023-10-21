import { component$, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { MyComponent } from '~/components/my-component';

export default component$(() => {
  const ref = useSignal<HTMLDivElement>()

  return <>
    <MyComponent ref={ref} />
  </>;
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
