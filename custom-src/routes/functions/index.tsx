import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";
import { getItems } from "./functions";

export function delay(nu: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, nu);
  });
}

export const streamingFunc = server$(async function* () {
  for (let i = 0; i < 5; i++) {
    await delay(1000);
    yield i;
  }
});

export default component$(() => {
  const counter = useSignal(0);
  const counterDoubled = useSignal(0);
  const streamingLogs = useSignal("");
  const message = useSignal("");
  const items = useSignal<string[]>([]);

  useTask$(async ({ track }) => {
    const nu = track(() => counter.value);
    counterDoubled.value = await computeOnTheServer(nu);
  });
  return (
    <>
      <button
        id="increment"
        onClick$={() => {
          counter.value++;
        }}
      >
        Increment {counter.value} {counterDoubled.value}
      </button>

      <p id="result">{message.value}</p>
      <button
        onClick$={async () => {
          items.value = await getItems(counter.value);
        }}
      >
        Get items
      </button>
      <ul>
        {items.value.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <section>
        <h2>Streaming</h2>

        <div class="server-streaming">{streamingLogs.value}</div>

        <button
          id="server-streaming-button"
          // TODO: Streaming fails. Unknown reason other than the Fastly runtime is missing a signal API
          onClick$={async () => {
            for await (const nu of await streamingFunc()) {
              streamingLogs.value += nu;
            }
          }}
        >
          5 seconds streaming
        </button>
      </section>
    </>
  );
});


const computeOnTheServer = server$((nu: number) => {
  return nu * 2;
});
