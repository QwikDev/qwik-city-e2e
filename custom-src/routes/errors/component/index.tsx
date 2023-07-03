import { component$ } from "@builder.io/qwik";

export const usetData = () => {
  const a = 0 / 0;
  if (Number.isNaN(a)) {
    throw new Error("Is NaN");
  }
  return {
    title: a,
  };
};

export default component$(() => {
  const data = usetData();

  return <div>{data.title}</div>;
});
