import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { ExampleTest } from './example';

test(`[ExampleTest Component]: Should render ⭐`, async () => {
  const { screen, render } = await createDOM();
  await render(<ExampleTest flag={true} />);
  expect(screen.outerHTML).toContain('⭐');
  const div = screen.querySelector('.icon') as HTMLElement;
  expect(div.outerHTML).toContain('⭐');
});

test(`[ExampleTest Component]: Should render 💣`, async () => {
  const { screen, render } = await createDOM();
  await render(<ExampleTest flag={false} />);
  expect(screen.outerHTML).toContain('💣');
});

test(`[ExampleTest Component]: Click counter +1`, async () => {
  const { screen, render, userEvent } = await createDOM();
  await render(<ExampleTest flag={true} />);
  expect(screen.outerHTML).toContain('Count:0');

  const spanBefore = screen.querySelector('span') as HTMLDivElement;
  await userEvent('.btn-counter', 'click');
  expect(spanBefore.innerHTML).toEqual('Count:1');

  const spanAfter = screen.querySelector('span') as HTMLDivElement;
  await userEvent('button', 'click');
  expect(spanAfter.innerHTML).toEqual('Count:2');
});


test(`[ExampleTest Component]: build conditions`, async () => {
  const { screen, render } = await createDOM();
  await render(<ExampleTest flag={false} />);
  expect(screen.querySelector('#is-browser')?.textContent).toContain('false');
  expect(screen.querySelector('#is-server')?.textContent).toContain('true');
  expect(screen.querySelector('#is-dev')?.textContent).toContain('true');
});


test(`[ExampleTest Component]: test image jpeg`, async () => {
  const { screen, render } = await createDOM();
  await render(<ExampleTest flag={false} />);
  const img = screen.querySelector('#image-jpeg') as HTMLImageElement;
  expect(img?.width).toEqual(200);
  expect(img?.height).toEqual(200);
});


test(`[ExampleTest Component]: test image svg`, async () => {
  const { screen, render } = await createDOM();
  await render(<ExampleTest flag={false} />);
  const img = screen.querySelector('#image-svg') as SVGElement;
  expect(img?.innerHTML).toContain('<path fill="#18B6F6"');
});