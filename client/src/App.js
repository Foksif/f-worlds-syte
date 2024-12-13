import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { HomePage } from './pages/Home'
import { InfoPage } from './pages/Info'
import { NotFoundPage } from './pages/NotFound'
import { RulesPage } from './pages/Rules'
import { DonatePage } from './pages/Donate'
import { useDispatch, useSelector } from 'react-redux'

import 'react-toastify/dist/ReactToastify.css'
import { Success } from './pages/Success'
import { Login } from './pages/Auth/Login'
import { Logout } from './pages/Logout'
import { Dashboard } from './pages/Admin/Dashboard/Dashboard'

function App() {
	const isAuth = () => {
		const access_token = window.localStorage.getItem('access_token')

		if (access_token) {
			return true
		}

		return false
	}

	console.log(isAuth())

	return (
		<>
			<Routes>
				<Route
					path='/'
					element={
						<>
							<Header /> <HomePage /> <Footer />
						</>
					}
				/>
				<Route
					path='/info'
					element={
						<>
							<Header />
							<InfoPage /> <Footer />
						</>
					}
				/>
				<Route
					path='/rules'
					element={
						<>
							<Header />
							<RulesPage /> <Footer />
						</>
					}
				/>
				<Route
					path='/donate'
					element={
						<>
							<Header />
							<DonatePage /> <Footer />
						</>
					}
				/>
				<Route
					path='/success'
					element={
						<>
							<Header />
							<Success /> <Footer />
						</>
					}
				/>
				<Route
					path='/auth/hardms/login'
					element={
						<>
							<Header />
							<Login /> {/*<Footer /> */}
						</>
					}
				/>
				<Route
					path='/logout'
					element={
						<>
							{/* <Header /> */}
							<Logout /> {/*<Footer /> */}
						</>
					}
				/>
				{isAuth() ? (
					<>
						<Route
							path='/admin/dashboard'
							element={
								<>
									<Dashboard />
								</>
							}
						/>
					</>
				) : (
					<></>
				)}

				<Route path='*' element={<NotFoundPage />} />
			</Routes>

			<ToastContainer
				position='top-right'
				autoClose={2500}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
			/>
		</>
	)
}

export default App
