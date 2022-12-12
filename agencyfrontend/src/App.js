import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import registerPage from "./pages/registerPage"
import ToursPage from "./pages/ToursPage"
import BookingsPage from "./pages/BookingsPage"
import ReviewsPage from "./pages/ReviewsPage"

const App= () => {
  return (
    <BrowserRouter >
      <layout>
        <Routes>
          <Route path = '/' element = {<HomePage/>}/>
          <Route path = '/tours' element = {<ToursPage/>}/>
          <Route path = '/signin' element = {<signInPage/>}/>
          <Route path = '/register' element = {<registerPage/>}/>
          <Route path = '/bookings' element = {<BookingsPage/>}/>
          <Route path = '/reviews' element = {<ReviewsPage/>}/>
        </Routes>
      </layout>
    </BrowserRouter>
  );
}

export default App;
