import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppProvider } from './CotesAdmin/AppContext';
import { AppProviderStateUsers } from './CotesAdmin/UseStateUsers';
import { AppProviderStateArticleBlog } from './CotesAdmin/UseStateArticleBlog';
import { AppProviderStateRestaurant } from './CotesAdmin/UseStateRestaurant';
import { AppProviderStateChambre } from './CotesAdmin/UseStateChambre';
import { AppProviderStateReservation } from './CotesAdmin/UseStateReservation';


// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <AppProviderStateUsers>
      <AppProviderStateArticleBlog>
        <AppProviderStateRestaurant>
          <AppProviderStateChambre>
            <AppProviderStateReservation>
              <AppProvider>
                <App />
              </AppProvider>
            </AppProviderStateReservation>
          </AppProviderStateChambre>
        </AppProviderStateRestaurant>
      </AppProviderStateArticleBlog>
    </AppProviderStateUsers>
  </React.StrictMode>,
  document.getElementById('root')
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
