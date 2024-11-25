import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './_reset.scss'
import App from './App.jsx'
import './index.scss'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
	</StrictMode>
)
