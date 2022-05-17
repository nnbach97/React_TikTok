import Home from './../pages/Home';
import Fowlling from './../pages/Fowlling';
import Profile from './../pages/Profile';
import Upload from './../pages/Upload';
import HeaderOnly from './../Components/layouts/HeaderOnly';

// Public page
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/fowlling', component: Fowlling },
  { path: '/profile', component: Profile, layout: null },
  { path: '/upload', component: Upload, layout: HeaderOnly },
];
// Private page
const privateRoutes = [];

export { publicRoutes, privateRoutes };
