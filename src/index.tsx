import ReactDOM from 'react-dom/client'
import App from './App'

import {store} from './redux/store'
import {Provider} from 'react-redux'

// css переменные и глобальные стили
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<Provider store={store}>
		<App />
	</Provider>,
)
