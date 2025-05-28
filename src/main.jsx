import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingFallback from './components/LoadingFallback';
import './index.css';

// Lazy load the main App component
const App = lazy(() => import('./App'));

// Create root
const root = createRoot(document.getElementById('root'));

const RootComponent = () => (
  <StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <App />
      </Suspense>
    </ErrorBoundary>
  </StrictMode>
);

// Render the app
root.render(<RootComponent />);

export default RootComponent;
