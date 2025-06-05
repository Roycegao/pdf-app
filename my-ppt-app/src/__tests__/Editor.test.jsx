import { render, screen } from '@testing-library/react';
import Editor from '../components/Editor';

test('renders editor with default markdown', () => {
  const mockSetMarkdown = vi.fn();
  render(<Editor markdown="## Hello" setMarkdown={mockSetMarkdown} />);
  expect(screen.getByText(/Hello/)).toBeInTheDocument();
});