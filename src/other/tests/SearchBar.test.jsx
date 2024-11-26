/* eslint-disable no-undef */
// ItemsPerPageSelector.test.jsx
import { render, screen } from '@testing-library/react';
import { SearchBar } from '../../components/elements/SearchBar/SearchBar';

describe('Компонент SearchBar', () => {
  it('отображает поле для ввода с плейсхолдером', () => {
    render(<SearchBar searchTerm="" onSearchChange={() => {}} />);
    const input = screen.getByPlaceholderText('Введите имя персонажа');
    expect(input).toBeInTheDocument();
  });
});
