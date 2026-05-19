import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/user/SignupPage';
import UserManagePage from './pages/user/UserManagePage';
import MyInfoPage from './pages/user/MyInfoPage';
import ProfilePage from './pages/user/ProfilePage';
import NoticePage from './pages/notice/NoticePage';
import ProductManagePage from './pages/product/ProductManagePage';
import AuctionRoomListPage from './pages/auction/AuctionRoomListPage';
import PlayerLoadPage from './pages/auction/PlayerLoadPage';
import PlayerEditPage from './pages/auction/PlayerEditPage';
import PlayerWaitPage from './pages/auction/PlayerWaitPage';
import RandomOrderPage from './pages/auction/RandomOrderPage';
import PlayerBidPage from './pages/auction/PlayerBidPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/user-manage" element={<UserManagePage />} />
      <Route path="/my-info" element={<MyInfoPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/notice" element={<NoticePage />} />
      <Route path="/product-manage" element={<ProductManagePage />} />
      <Route path="/auction/rooms" element={<AuctionRoomListPage />} />
      <Route path="/auction/load-players" element={<PlayerLoadPage />} />
      <Route path="/auction/edit-players" element={<PlayerEditPage />} />
      <Route path="/auction/waiting" element={<PlayerWaitPage />} />
      <Route path="/auction/order" element={<RandomOrderPage />} />
      <Route path="/auction/bid" element={<PlayerBidPage />} />
    </Routes>
  );
}
