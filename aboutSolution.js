```javascript
// pages/aboutSolution.js
import { ErrorBoundary } from 'next/error-boundary';

function MyErrorBoundary({ error }) {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
    </div>
  );
}

export default function About() {
  return (
    <ErrorBoundary
        FallbackComponent={MyErrorBoundary}
    >
      <div>
        <h1>About Us</h1>
      </div>
    </ErrorBoundary>
  );
}
```