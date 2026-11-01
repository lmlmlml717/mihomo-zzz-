import { Suspense } from 'react';
import { ResponsiveProvider } from '../../ResponsiveProvider/ResponsiveProvider';

const HomePage = ({ children }) => {
    return (
        <Suspense fallback={<div className="text-center text-3xl font-bold text-white">Loading...</div>}>
            <ResponsiveProvider>
                {children}
            </ResponsiveProvider>
        </Suspense>
    );
}

export default HomePage;
