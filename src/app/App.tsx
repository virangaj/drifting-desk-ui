import { ToastContainer } from 'react-toastify';
import AppRouter from '../routes/Router';

import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<div>
			<ToastContainer
				position='top-right'
				autoClose={5000}
				limit={1}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='light'
			/>
			<AppRouter />
		</div>
	);
}

export default App;
