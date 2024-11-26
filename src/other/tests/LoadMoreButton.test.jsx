/* eslint-disable no-undef */
// ItemsPerPageSelector.test.jsx
import { render, screen } from '@testing-library/react';
import { LoadMoreButton } from '../../components/elements/LoadMoreButton/LoadMoreButton';

describe('Компонент LoadMoreButton', () => {
  it('отображает кнопку "Load More"', () => {
    render(<LoadMoreButton onLoadMore={() => {}} />);
    const button = screen.getByText('Load More');
    expect(button).toBeInTheDocument();
  });
});
