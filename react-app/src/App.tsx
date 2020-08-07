import React, { Suspense } from 'react';
import { lowerCaseFirstLetter } from 'app/utils/stringUtils';

interface AppProps {
  reactApp: string;
  reactConfig: {};
}

const LazyComponent = React.memo(({ reactApp, reactConfig }: AppProps) => {
  const lowerCaseReactApp = lowerCaseFirstLetter(reactApp);
  const Lazy = React.lazy(
    async () =>
      await import(
        `./features/${lowerCaseReactApp}/components/${reactApp}/${reactApp}`
      )
  );
  return <Lazy reactConfig={reactConfig} />;
});

export const App = ({ reactApp, reactConfig }: AppProps) => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent reactApp={reactApp} reactConfig={reactConfig} />
    </Suspense>
  </div>
);

export default App;
