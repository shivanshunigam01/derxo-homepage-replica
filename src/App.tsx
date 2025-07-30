import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AllMedicines from "./components/AllMedicines";
import MedicineDetail from "./components/MedicineDetail";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetails";
import ProductPage from "./components/ProductPage";
import ContactUs from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/all-medicines" element={<AllMedicines />} />
          <Route path="/medicine/:id" element={<MedicineDetail />} />
          <Route path="/product/:id" element={<ProductPage />} />

          {/* Blog routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />

          <Route path="/contact" element={<ContactUs />} />

          <Route path="/medicines" />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
