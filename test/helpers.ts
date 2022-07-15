import { render } from "@testing-library/react";

export const nextFrame = () => new Promise((resolve) => requestAnimationFrame(resolve));

export async function renderComponent<T extends HTMLElement>(
  component: () => Parameters<typeof render>[0]
) {
  const rendered = await render(component());

  await nextFrame();

  return {
    element: rendered.container.firstElementChild as T,
    rerender: async () => rendered.rerender(component()),
  };
}

