import { render } from "@testing-library/react";

export const nextFrame = () =>
  new Promise((resolve) => requestAnimationFrame(resolve));

export async function renderComponent<T extends HTMLElement>(
  component: () => Parameters<typeof render>[0]
): Promise<[T, () => void]> {
  const rendered = await render(component());

  await nextFrame();

  const element = rendered.container.firstElementChild! as T;
  const rerender = () => rendered.rerender(component());

  return [element, rerender];
}
