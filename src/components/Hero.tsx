import CountdownTimer from './Countdown';
import './Hero.css';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Hero() {
    return (
        <div className="h-screen flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-28 justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="animation-bg"></div>
            </div>

            <div className='space-y-10 px-4 lg:px-0'>
                <h1 className="text-4xl lg:text-5xl font-extrabold text-yellow-300 text-center drop-shadow-lg">MEDIVERSE KONFERANS</h1>
                <div className='space-y-5'>
                    <div className='flex justify-center lg:justify-start'>
                        <CountdownTimer />
                    </div>
                    <div className="flex flex-col lg:flex-row items-center text-center text-pink-300 text-lg lg:text-xl font-bold space-y-2 lg:space-y-0 lg:space-x-2 drop-shadow-md">
                        <FaCalendarAlt />
                        <span>15-16 Şubat 2025</span>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center text-center text-green-300 text-md lg:text-lg font-semibold space-y-2 lg:space-y-0 lg:space-x-2 drop-shadow-md">
                        <FaMapMarkerAlt />
                        <span>İzmir Ekonomi Üniversitesi Konferans Salonu</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row items-center lg:space-x-12 space-y-5 lg:space-y-0'>
                <div className="flex flex-col items-center space-y-5 z-10">
                    <div className="flex flex-col items-center space-y-0.5 w-full lg:w-96">
                        <div className="text-center text-md lg:text-lg text-cyan-300 font-extrabold tracking-wide drop-shadow-md">KATILIMCI BAŞVURUSU</div>
                        <button className="btn w-full bg-yellow-500 hover:bg-yellow-600 text-black rounded-lg shadow-lg transform transition-transform hover:scale-105">Form Linki</button>
                    </div>
                    <div className="flex flex-col items-center space-y-0.5 w-full lg:w-96">
                        <div className="text-center text-md lg:text-lg text-purple-300 font-extrabold tracking-wide drop-shadow-md">POSTER SUNUMLARI BAŞVURUSU</div>
                        <button className="btn w-full bg-green-500 hover:bg-green-600 text-black rounded-lg shadow-lg transform transition-transform hover:scale-105">Form Linki</button>
                    </div>
                </div>
            </div>
        </div>
    );
}