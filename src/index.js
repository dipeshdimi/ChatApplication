import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {AuthContextProvider} from './context/AuthContext';
import {ChatContextProvider} from './context/ChatContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  	<AuthContextProvider>
		<ChatContextProvider>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</ChatContextProvider>
	</AuthContextProvider>

// React prints your console.log() statements twice when your App component is wrapped in a StrictMode component in your index.js file. The same happens when using the useEffect hook (e.g., used in AuthContext.js file).
);