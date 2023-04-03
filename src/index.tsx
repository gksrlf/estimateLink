import { createRoot } from 'react-dom/client';
import App from './main';

const container = document.getElementById('root');
const root = createRoot(container as Element);

root.render(<App />);
