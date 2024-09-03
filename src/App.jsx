import React, { createContext, useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ELearning from './components/elearning/ELearning';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrimarySchool from './components/primary/PrimarySchool';
import PrivateSchool from './components/private/PrivateSchool';
import School from './components/primary/schools/School';
import './App.css';
import './i18n';
import NewsPage from './components/news/NewsPage';
import NewsAdmin from './components/admin/NewsAdmin';
import AdminDashboard from './components/AdminDashboard';
import AdminDashboardPage from './components/admin/AdminDashboardPage';
import ELearningAdmin from './components/admin/ELearningAdmin';
import NewsDetailPage from './components/news/NewsDetailPage'; // Import NewsDetailPage
import SignInPage from './components/admin/SignInPage'
import Datas from './Datas';


// Lazy loading components
const LibraryPage = lazy(() => import('./components/elearning/LibraryPage'));
const NotFound = lazy(() => import('./components/NotFound'));

// Initial books data
const initialBooks = [
  {
    title: 'Sample Book 1',
    author: 'Author 1',
    year: 2022,
    example: 'Fiction',
    cover: 'https://via.placeholder.com/150',
    description: 'Description of Sample Book 1',
    pdf: null,
    image: null,
    video: null,
  },
  // Add more sample books if needed
];

// Initial news data
const initialNews = [
  { id: 1, title: "Adama City News 4", category: "Technology", content: "Urbanazation", image: ".././photos/adama1.jpg", date: "2024-08-15" },
  { id: 2, title: "Adama City News 4", category: "Category 1", content: "Content 1", image: ".././photos/adama2.jpg", date: "2024-08-16" },
  { id: 3, title: "Adama City News 4", category: "Category 2", content: "Content 2", image: ".././photos/adama3.jpg", date: "2024-08-17" },
  { id: 4, title: "Adama City News 4", category: "Category 3", content: "Content 3", image: ".././photos/adama4.jpg", date: "2024-08-18" },
  // Add more sample news if needed
];

// Create BooksContext
export const BooksContext = createContext();

function App() {
  const [books, setBooks] = useState(initialBooks);
  const [news, setNews] = useState(initialNews);

  const addNews = (article) => {
    setNews((prevNews) => [...prevNews, { ...article, id: prevNews.length + 1 }]);
  };

  return (
    <BooksContext.Provider value={{ books, setBooks }}>
      <Router>
        <div className="App">
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/ELearning" element={<ELearning />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/PrimarySchool" element={<PrimarySchool />} />
              <Route path="/PrivateSchool" element={<PrivateSchool />} />
              <Route path="/libraryPage" element={<LibraryPage />} />
              
              <Route path="/AdminDashboard" element={<AdminDashboard />} />
              <Route path="/SignInPage" element={<SignInPage />} />
              <Route path="/AdminDashboardPage" element={<AdminDashboardPage />} />
              <Route path="/ELearningAdmin" element={<ELearningAdmin />} />
              <Route path="/news" element={<NewsPage news={news} />} /> {/* List of news */}
              <Route path="/news/:id" element={<NewsDetailPage news={news} />} /> {/* News details */}
              <Route path="/NewsAdmin" element={<NewsAdmin addNews={addNews} />} /> {/* Admin for adding news */}
              <Route path="/NewsPage" element={<NewsPage news={news} />} />
              <Route path="/school/:name" element={<School />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/privateSchool/:name" element={<privateSchool />} />
              <Route path="/Datas" element={<Datas />} />

            </Routes>
          </Suspense>
          <Footer />
        </div>
      </Router>
    </BooksContext.Provider>
  );
}

export default App;
