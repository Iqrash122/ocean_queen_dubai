import { Outlet } from "react-router-dom";
import TopHeader from "../components/TopHeader";
import BottomHeader from "../components/BottomHeader";
import Footer from "../components/Footer";
import StickyHeader from "../components/StickyHeader";
export default function Layout() {
  return (
    <div className="bg-gray-100">
        {/* <TopHeader /> */}
        <BottomHeader />
        <StickyHeader />
        <Outlet />
        <Footer />
    </div>
  );
}