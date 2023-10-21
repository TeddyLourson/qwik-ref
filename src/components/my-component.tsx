import {
  QwikIntrinsicElements,
  component$,
  useSignal,
  useVisibleTask$,
} from '@builder.io/qwik';

export type MyComponentProps = QwikIntrinsicElements['div'];

export const MyComponent = component$((props: MyComponentProps) => {
  const isVisible = useSignal(false);

  useVisibleTask$(() => {
    setTimeout(() => {
      isVisible.value = true;
    }, 8000);
  });

  return isVisible.value ? <div {...props}>My Component</div> : null;
});
