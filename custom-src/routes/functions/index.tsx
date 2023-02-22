import { component$, useSignal } from '@builder.io/qwik';
import { server$ } from '@builder.io/qwik-city';


let globalDB = {count: 0};

export default component$(() => {

  const counter = useSignal(0);
  const message = useSignal('');

  return (
    <>
      <button id="increment" onClick$={() => {
        counter.value++;
      }}>
        Increment {counter.value}
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

    </>
  );
})

const getstuff = server$((_, nu: number) => {
  return globalDB.count + nu;
})