export default function Footer() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-purple-700">
      <div className="absolute inset-0 z-0">
        <div className="animation-bg"></div>
      </div>
      <div className="bg-black bg-opacity-70 mx-auto flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 gap-12">

        <div className="w-full lg:w-1/3 text-center lg:text-left p-6 flex flex-col justify-center">
          <div className="flex flex-col items-center text-lg text-gray-300 mt-8">
            <h3 className="title-font text-3xl font-semibold text-sky-100 mb-6 ">Sosyal Medya Hesaplarımız</h3>

            <div className="flex space-x-4 mb-8">
              <ul className="text-gray-300">
                <li className="flex items-center mb-2"><a href="https://www.instagram.com/izmirekonomitob" className="hover:text-violet-700 transition-colors flex items-center"><svg className="h-8 w-8 text-gradient-to-r  text-violet-700 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>izmirekonomitob</a></li>
                <li className="flex items-center mb-2"><a href="https://www.instagram.com/ieu_tipkulubu" className="hover:text-violet-700 transition-colors flex items-center"><svg className="h-8 w-8 text-gradient-to-r  text-violet-700 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></a>ieu_tipkulubu</li>
                <li className="flex items-center mb-2"><a href="https://www.instagram.com/ecoemsa" className="hover:text-violet-700 transition-colors flex items-center"><svg className="h-8 w-8 text-gradient-to-r  text-violet-700 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></a>ecoemsa</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3 text-left p-6 flex flex-col justify-center items-center">
          <h3 className="title-font flex text-center justify-center text-3xl font-semibold text-sky-100 mb-6">Bize Ulaşın</h3>

          <div className="flex flex-col lg:flex-row items-start justify-start gap-8 px-6 lg:px-12">

            {/*Alara Rodoplu contact info*/}
            <div className="flex flex-col w-full lg:w-1/2 items-start">
              <div className="flex items-center space-x-2 mb-2">
                <h2 className="text-lg text-sky-50 font-semibold">Alara Rodoplu</h2>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <h2 className="text-lg text-sky-50">İzmir Ekonomi TÖB Başkanı</h2>
              </div>
              <ul className="text-gray-300">
                <li className="flex items-center mb-2"><a href="mailto:alararodoplu1@gmail.com " className="hover:text-white transition-colors flex items-center"><svg className="h-6 w-6 text-violet-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>alararodoplu1@gmail.com</a></li>
                <li className="flex items-center mb-2"><svg className="h-6 w-6 text-violet-700 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>05393878177</li>
              </ul>
            </div>

            {/*Aysu Buse Zamandar contact info*/}
            <div className="flex flex-col w-full lg:w-1/2 items-start">
              <div className="flex items-center space-x-2 mb-2">
                <h2 className="text-lg text-sky-50 font-semibold">Aysu Buse Zamandar</h2>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <h2 className="text-lg text-sky-50">İzmir Ekonomi Tıp Kulubü Başkanı</h2>
              </div>
              <ul className="text-gray-300">
                <li className="flex items-center mb-2"><a href="mailto:buse.zamandar@std.izmirekonomi.edu.tr " className="hover:text-white transition-colors flex items-center"><svg className="h-6 w-6 text-violet-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>buse.zamandar@std.izmirekonomi.edu.tr</a></li>
                <li className="flex items-center mb-2"><svg className="h-6 w-6 text-violet-700 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>05458087876</li>
              </ul>
            </div>
          </div>

          {/*Location*/}
          <div className="flex flex-col items-center text-lg text-gray-300 mt-8">
            <div className="flex items-center justify-center mb-1">
              <svg className="h-6 w-6 text-violet-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p>İzmir Ekonomi Üniversitesi</p>
            </div>
            <p className="text-center">Fevzi Çakmak, Sakarya Cd. No:156, 35330 Balçova/Izmir/Türkiye</p>
          </div>

        </div>
      </div>
    </section>
  );
}