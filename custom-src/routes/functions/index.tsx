import { component$, useSignal, useTask$ } from '@builder.io/qwik';
import { server$ } from '@builder.io/qwik-city';
import { getItems } from './functions';

let globalDB = {count: 0};

export default component$(() => {

  const counter = useSignal(0);
  const counterDoubled = useSignal(0);

  const message = useSignal('');
  const items = useSignal<string[]>([]);

  useTask$(async ({track}) => {
    const nu = track(() => counter.value);
    counterDoubled.value = await computeOnTheServer(nu);
  });
  return (
    <>
      <button id="increment" onClick$={() => {
        counter.value++;
      }}>
        Increment {counter.value} {counterDoubled.value}
      </button>

      <button id="save" onClick$={server$(() => {
        globalDB.count = counter.value;
        console.log('Current count is', counter.value);
      })}>
        SAVE
      </button>
      <button
        id="load"
        onClick$={async () => {
          message.value = `Stuff is: ${await getstuff(counter.value)}`;
        }}>
        LOAD
      </button>
      <p id="result">
        {message.value}
      </p>
      <button onClick$={async () => {
        items.value = await getItems(counter.value);
      }}>Get items</button>
      <ul>
        {items.value.map(item => <li>{item}</li>)}
      </ul>

    </>
  );
})

const getstuff = server$((nu: number) => {
  return globalDB.count + nu;
});

const computeOnTheServer = server$((nu: number) => {
  return nu * 2;
})