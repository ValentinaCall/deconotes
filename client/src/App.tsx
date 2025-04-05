import React from "react";
import { Router, Route, Switch } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import { Helmet } from "react-helmet";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Helmet>
        <title>Deconotes - Innovative Solutions</title>
        <meta name="description" content="Deconotes provides innovative solutions for businesses and individuals. Explore our products and services." />
      </Helmet>
      <Router base="/deconotes">
        <Switch>
          <Route path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
