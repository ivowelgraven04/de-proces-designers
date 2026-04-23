import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Diensten from "./pages/Diensten";
import OverOns from "./pages/OverOns";
import Werkwijze from "./pages/Werkwijze";
import Contact from "./pages/Contact";
import Partners from "./pages/Partners";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Portfolio from "./pages/Portfolio";
import Privacybeleid from "./pages/Privacybeleid";
import AlgemeneVoorwaarden from "./pages/AlgemeneVoorwaarden";
import ScrollProgress from "./components/ScrollProgress";
import { SmoothScroll, CustomCursor, PageTransition } from "./components/premium";

function Router() {
  return (
    <PageTransition>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/diensten" component={Diensten} />
        <Route path="/over-ons" component={OverOns} />
        <Route path="/werkwijze" component={Werkwijze} />
        <Route path="/contact" component={Contact} />
      <Route path="/partners" component={Partners} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/privacybeleid" component={Privacybeleid} />
        <Route path="/algemene-voorwaarden" component={AlgemeneVoorwaarden} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </PageTransition>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <SmoothScroll>
            <CustomCursor />
            <ScrollProgress />
            <Router />
          </SmoothScroll>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
