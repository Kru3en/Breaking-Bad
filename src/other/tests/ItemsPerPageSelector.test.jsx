/* eslint-disable no-undef */
// ItemsPerPageSelector.test.jsx
import { render, screen } from '@testing-library/react'
import { ItemsPerPageSelector } from '../../components/elements/ItemsPerPageSelector/ItemsPerPageSelector'

describe('Компонент ItemsPerPageSelector', () => {
	it('отображает выпадающий список с правильным значением по умолчанию', () => {
		render(
			<ItemsPerPageSelector itemsPerPage={10} onItemsPerPageChange={() => {}} />
		)
		const select = screen.getByLabelText('Количество отображения:')
		expect(select.value).toBe('10')
	})
})
