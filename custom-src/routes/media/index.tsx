import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import theLogo from "../../assets/test.jpeg";
import TheLogo from "../../assets/test.jpeg?jsx";
import qwikLogo from "../../assets/qwik-logo.svg";
import QwikLogo from "../../assets/qwik-logo.svg?jsx";

export default component$(() => {
  return (
    <>
      <h1>Media</h1>
      <div>
        <h2>/public</h2>
      </div>
      <div>
        <h2>import png</h2>
        <img id="image-png" src={theLogo} width="10" height="10" />
      </div>
      <div>
        <h2>import svg</h2>
        <img id="image-svg" src={qwikLogo} width="10" height="10" />
      </div>
      <div>
        <h2>import png as jsx</h2>
        <TheLogo id="jsx-png" />
      </div>
      <div>
        <h2>import svg as jsx</h2>
        <QwikLogo id="jsx-svg" />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Homepage",
};
