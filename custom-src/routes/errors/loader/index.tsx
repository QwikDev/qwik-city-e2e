import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useSetData = routeLoader$(() => {
  const a = 0 / 0;
  if (Number.isNaN(a)) {
    throw new Error("Is NaN");
  }
  return {
    title: a,
  };
});

export default component$(() => {
  const data = useSetData();

  return <div>{data.value.title}</div>;
});
