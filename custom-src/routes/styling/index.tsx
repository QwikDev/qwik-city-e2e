import { component$ } from "@builder.io/qwik";
import { css } from "../../styled-system/css";

export default component$(() => {
  return (
    <section>
      <h1>Styling 👩‍👩‍👦‍👦🎨</h1>
      <div
        id="panda-css-1"
        class={css({
          padding: 10,
          bg: "red.400",
          height: "dvh",
          margin: 100,
          fontSize: 30,
        })}
      >
        This box is styled with PandaCSS.
      </div>
    </section>
  );
});
