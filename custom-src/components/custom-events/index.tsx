import { type PropFunction, component$, useTask$ } from "@builder.io/qwik";

interface CmpProps {
  onClick0$?: () => void;
  onClick1$: () => void;
  onClick2$?(): void;
  onClick3$(): void;
  onClick4$?: PropFunction<() => void>;
  render$?(): JSX.Element;
}

export const Cmp = component$<CmpProps>((props) => {
  useTask$(() => {
    console.log(props);
  });

  return (
    <div>
      <button onClick$={props.onClick0$}>Click</button>
      <button onClick$={props.onClick1$}>Click</button>
      <button onClick$={props.onClick2$}>Click</button>
      <button onClick$={props.onClick3$}>Click</button>
      <button onClick$={props.onClick4$}>Click</button>
      <Cmp2 onClick$={props.onClick0$} render$={props.render$}>Click</Cmp2>
      <Cmp2 onClick$={props.onClick1$} render$={props.render$}>Click</Cmp2>
      <Cmp2 onClick$={props.onClick2$} render$={props.render$}>Click</Cmp2>
      <Cmp2 onClick$={props.onClick3$} render$={props.render$}>Click</Cmp2>
      <Cmp2 onClick$={props.onClick4$} render$={props.render$}>Click</Cmp2>

    </div>
  )
});

interface Cmp2Props {
  onClick$?: () => void;
  render$?(): JSX.Element;
}
export const Cmp2 = component$<Cmp2Props>((props) => {
  useTask$(() => {
    console.log(props);
  });

  return (
    <div>
      <button onClick$={props.onClick$}>Click</button>
    </div>
  )
});