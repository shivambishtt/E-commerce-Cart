import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Cart from "./pages/Cart.tsx"
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { store } from './store/store.ts'
import CheckoutPage from './pages/CheckoutPage.tsx'
import WishlistPage from './pages/WishlistPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/checkout",
    element: <CheckoutPage />
  },
  {
    path: "/wishlist",
    element: <WishlistPage />
  }
])

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>

)
