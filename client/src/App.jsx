import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, AuthProvider } from './context/AppContext';
import MainLayout from './components/layout/MainLayout';
import RouteLoadingScreen from './components/layout/RouteLoadingScreen';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Home from './pages/Home';
import About from './pages/About';
import Services, { ServiceDetail } from './pages/Services';
import { CaseStudiesList, CaseStudyDetail } from './pages/CaseStudies';
import { BlogList, BlogPostDetail } from './pages/Blog';
import Contact from './pages/Contact';
import AdminLogin from './pages/admin/AdminLogin';
import AdminLayout from './pages/admin/AdminLayout';
import AdminOverview from './pages/admin/AdminOverview';
import AdminBlog from './pages/admin/AdminBlog';
import AdminCaseStudies from './pages/admin/AdminCaseStudies';
import AdminServices from './pages/admin/AdminServices';
import AdminContacts from './pages/admin/AdminContacts';
import AdminUsers from './pages/admin/AdminUsers';
import AdminSettings from './pages/admin/AdminSettings';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <RouteLoadingScreen />
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="services/:slug" element={<ServiceDetail />} />
              <Route path="case-studies" element={<CaseStudiesList />} />
              <Route path="case-studies/:slug" element={<CaseStudyDetail />} />
              <Route path="blog" element={<BlogList />} />
              <Route path="blog/:slug" element={<BlogPostDetail />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
              <Route index element={<AdminOverview />} />
              <Route path="blog" element={<AdminBlog />} />
              <Route path="case-studies" element={<AdminCaseStudies />} />
              <Route path="services" element={<AdminServices />} />
              <Route path="contacts" element={<AdminContacts />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="settings" element={<AdminSettings />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
