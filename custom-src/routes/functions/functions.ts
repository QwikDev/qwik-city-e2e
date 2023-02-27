import { server$ } from "@builder.io/qwik-city";

export const getItems = server$((nu: number) => {
  return [
    `Item 1: ${nu}`,
    `Item 2: ${nu}`,
  ];
})