import React, { lazy } from 'react'
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'

// Layouts
import Layout from './components/common/layout/layoutContainer'
import BasicLayout from './components/basic/Layout/layout'
import AdminLayout from './components/admin/Layout/layout'
import AuthLayout from './components/auth/layout/layout'
import HostLayout from './components/host/layout/layout'
import GuestLayout from './components/guest/layout/layout'

// Basic
const Products = lazy(() => import('./components/basic/Products/productsContainer'))
const Users = lazy(() => import('./components/basic/users/usersConteiner'))
const Categories = lazy(() => import('./components/basic/categories/categoriesContainer'))
const Bicycle = lazy(() => import('./components/basic/bicycle/bicycleContainer'))
const Book = lazy(() => import('./components/basic/book/bookContainer'))

// Admin
const AdminCategories = lazy(() => import('./components/admin/categories/categoriesContainer'))
const AdminCreateCategory = lazy(() => import('./components/admin/categories/create/createContainer'))
const AdminUpdateCategory = lazy(() => import('./components/admin/categories/update/updateContainer'))
const AdminViewCategory = lazy(() => import('./components/admin/categories/view/viewContainer'))

const AdminBooks = lazy(() => import('./components/admin/books/booksContainer'))
const AdminCreateBook = lazy(() => import('./components/admin/books/create/createContainer'))
const AdminUpdateBook = lazy(() => import('./components/admin/books/update/updateContainer'))
const AdminViewBook = lazy(() => import('./components/admin/books/view/viewContainer'))

const AdminProducts = lazy(() => import('./components/admin/products/productsContainer'))

const AdminUsers = lazy(() => import('./components/admin/users/usersContainer'))
const AdminCreateUser = lazy(() => import('./components/admin/users/create/createContainer'))
const AdminUpdateUser = lazy(() => import('./components/admin/users/update/updateContainer'))
const AdminViewUser = lazy(() => import('./components/admin/users/view/viewContainer'))

const AdminCurrencies = lazy(() => import('./components/admin/currencies/currenciesContainer'))
const AdminCreateCurrency = lazy(() => import('./components/admin/currencies/create/createContainer'))
const AdminUpdateCurrency = lazy(() => import('./components/admin/currencies/update/updateContainer'))
const AdminViewCurrency = lazy(() => import('./components/admin/currencies/view/viewContainer'))

const AdminBicycles = lazy(() => import('./components/admin/bicycles/bicyclesContainer'))
const AdminCreateBicycle = lazy(() => import('./components/admin/bicycles/create/createContainer'))
const AdminUpdateBicycle = lazy(() => import('./components/admin/bicycles/update/updateContainer'))
const AdminViewBicycle = lazy(() => import('./components/admin/bicycles/view/viewContainer'))

const AdminOrders = lazy(() => import('./components/admin/orders/ordersContainer'))
const AdminUpdateOrder = lazy(() => import('./components/admin/orders/update/updateContainer'))
const AdminViewOrder = lazy(() => import('./components/admin/orders/view/viewContainer'))

// Auth
const Login = lazy(() => import('./components/auth/login/loginContainer'))
const Registration = lazy(() => import('./components/auth/registration/registrationContainer'))

// Host
const HostProducts = lazy(() => import('./components/host/products/productsContainer'))
const HostOrders = lazy(() => import('./components/host/orders/ordersContainer'))
const HostChats = lazy(() => import('./components/host/chats/chatsContainer'))

// Guest
const GuestOrders = lazy(() => import('./components/guest/orders/ordersContainer'))
const GuestFavourites = lazy(() => import('./components/guest/favourites/favouritesContainer'))
const GuestChats = lazy(() => import('./components/guest/chats/chatsContainer'))

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            <Route path="/" element={<BasicLayout />}>
                <Route path="/" element={<Products />} />
                <Route path="/products" element={<Products />} />
                <Route path="/books/:bookId" element={<Book />} />
                <Route path="/bicycles/:bicycleId" element={<Bicycle />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/:userId" element={<Users />} /> TODO
                <Route path="/categories" element={<Categories />} />
                <Route path="/login" element={<Login />} />
                <Route path="/favourites" element={<div>favourites</div>} /> TODO
                <Route path="/box" element={<div>box</div>} /> TODO
            </Route>
            <Route path='/admin' element={<AdminLayout />}>
                <Route path='categories' element={<AdminCategories />} />
                <Route path='categories/create' element={<AdminCreateCategory />} />
                <Route path='categories/:categoryId/update' element={<AdminUpdateCategory />} />
                <Route path='categories/:categoryId/view' element={<AdminViewCategory />} />

                <Route path='users' element={<AdminUsers />} />
                <Route path='users/create' element={<AdminCreateUser />} />
                <Route path='users/:userId/update' element={<AdminUpdateUser />} />
                <Route path='users/:userId/view' element={<AdminViewUser />} />

                <Route path='products' element={<AdminProducts />} />

                <Route path='books' element={<AdminBooks />} />
                <Route path='books/create' element={<AdminCreateBook />} />
                <Route path='books/:bookId/update' element={<AdminUpdateBook />} />
                <Route path='books/:bookId/view' element={<AdminViewBook />} />

                <Route path='bicycles' element={<AdminBicycles />} />
                <Route path='bicycles/create' element={<AdminCreateBicycle />} />
                <Route path='bicycles/:bicycleId/update' element={<AdminUpdateBicycle />} />
                <Route path='bicycles/:bicycleId/view' element={<AdminViewBicycle />} />

                <Route path='currencies' element={<AdminCurrencies />} />
                <Route path='currencies/create' element={<AdminCreateCurrency />} />
                <Route path='currencies/:currencyId/update' element={<AdminUpdateCurrency />} />
                <Route path='currencies/:currencyId/view' element={<AdminViewCurrency />} />

                <Route path='orders' element={<AdminOrders />} />
                <Route path='orders/:orderId/update' element={<AdminUpdateOrder />} />
                <Route path='orders/:orderId/view' element={<AdminViewOrder />} />
            </Route>
            <Route path={'/host'} element={<HostLayout />}>
                <Route index element={<HostProducts />} />
                <Route path='products' element={<HostProducts />} />
                <Route path='orders' element={<HostOrders />} />
                <Route path='inbox' element={<HostChats />} />
                <Route path='inbox/:inboxId' element={<HostChats />} />
            </Route>
            <Route path={'/guest'} element={<GuestLayout />}>
                <Route index element={<GuestOrders />} />
                <Route path='orders' element={<GuestOrders />} />
                <Route path='favourites' element={<GuestFavourites />} />
                <Route path='inbox' element={<GuestChats />} />
                <Route path='inbox/:inboxId' element={<GuestChats />} />
            </Route>
            <Route path='/auth' element={<AuthLayout />}>
                <Route path='login' element={<Login />} />
                <Route path='registration' element={<Registration />} />
            </Route>
        </Route>
    )
)

const routerContainer = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default routerContainer