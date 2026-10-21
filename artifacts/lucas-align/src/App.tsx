import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Engage from "@/pages/engage";
import Collab from "@/pages/collab";
import Wraparound from "@/pages/wraparound";
import KeyFamDashboard from "@/pages/dashboard";
import WraparoundPricing from "@/pages/wraparound-pricing";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/collab" component={Collab} />
      <Route path="/wraparound" component={Wraparound} />
      <Route path="/engage" component={Engage} />
      <Route path="/dashboard" component={KeyFamDashboard} />
      <Route path="/wraparound/pricing" component={WraparoundPricing} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
