import { Outlet } from 'react-router-dom';
import MobileMeun from './component/MobileMeun';
function App() {
  return (
    <>
    <span className='absolute top-2 right-2 z-40'>
      <MobileMeun/>
    </span>
    <div className='mainImage w-screen h-screen overflow-hidden flex justify-center items-center flex-col'>
    <span className='text-white text-sm tracking-widest absolute right-1 bottom-1'><p>Develped & Designed By <b className='text-green-500'>DesignSpecturm</b></p></span>
    <Outlet/>
    </div>
    </>
  );
}
export default App;
