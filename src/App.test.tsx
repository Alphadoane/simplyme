import { render, screen } from '@testing-library/react'
import { expect, test, vi } from 'vitest'
import App from './App'
import React from 'react'

// Mock the components that are lazy loaded to make testing easier
vi.mock('./components/Projects', () => ({
  default: () => <div data-testid="projects">Projects</div>
}))
vi.mock('./components/EngineeringThinking', () => ({
  default: () => <div data-testid="engineering-thinking">Engineering Thinking</div>
}))
vi.mock('./components/Blog', () => ({
  default: () => <div data-testid="blog">Blog</div>
}))
vi.mock('./components/Footer', () => ({
  default: () => <div data-testid="footer">Footer</div>
}))

test('renders hero section', () => {
  render(<App />)
  const heroElement = screen.getByText((content, node) => {
    const hasText = (node: Element) => node.textContent === "Fullstack Engineer building scalable Systems.";
    const nodeHasText = hasText(node as Element);
    const childrenDontHaveText = Array.from(node?.children || []).every(
      (child) => !hasText(child as Element)
    );
    return nodeHasText && childrenDontHaveText;
  });
  expect(heroElement).toBeDefined()
})
