import { component$ } from "@builder.io/qwik";
import { loader$ } from "@builder.io/qwik-city";

export const usetData = loader$(() => {
  const a = 0 / 0;
  if (Number.isNaN(a)) {
    throw new Error("Is NaN");
  }
  return {
    title: a,
  }
});

export default component$(() => {
  const data = usetData();

  return <div>{data.value.title}</div>;
});