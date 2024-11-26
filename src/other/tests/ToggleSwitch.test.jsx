/* eslint-disable no-undef */
// ItemsPerPageSelector.test.jsx
import { render, screen } from '@testing-library/react'
import { ToggleSwitch } from '../../components/elements/ToggleSwitch/ToggleSwitch'

describe('Компонент ToggleSwitch', () => {
	it('отображает переключатель', () => {
		render(<ToggleSwitch isCardView={true} onToggle={() => {}} />)
		const toggle = screen.getByRole('checkbox')
		expect(toggle).toBeInTheDocument() 
		expect(toggle.checked).toBe(true) 
	})
})
