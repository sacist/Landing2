import { Routes, Route } from 'react-router-dom'
import { PageContent } from './components/homepage/page-content'

// Имимтация роутинга, если бы делал полноценный сайт


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={
                <PageContent/>
            }/>
        </Routes>
    )
}