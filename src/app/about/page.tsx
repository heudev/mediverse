
import Image from 'next/image';

export default function About() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-gradient-to-r from-blue-950 to-purple-950">

            <div className="absolute inset-0 z-0">
                <div className="animation-bg"></div>
            </div>

            <section className="min-h-screen flex flex-col items-center py-10 lg:py-20 px-5 space-y-10">

                {/* MEDİVERSE NEDİR? */}
                <div className="relative max-w-5xl w-full mx-auto text-white">
                    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <div className="relative p-6">
                        <h1 className="text-xl lg:text-3xl font-bold mb-4 lg:mb-6 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                MEDİVERSE NEDİR?
                            </div>
                            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </h1>
                        <div className="border-t border-gray-300 my-4"></div>
                        <p className="text-base lg:text-lg leading-relaxed mb-6 text-justify">
                            MediVerse, tıp öğrencilerini ve sağlık alanındaki uzmanları yenilikçi bir platformda buluşturmayı amaçlayan bir bilgi paylaşım kongresidir. MediVerse, sağlığın geleceğini şekillendiren teknolojik gelişmeler, yapay zeka, nadir hastalıklar, 3D organ nakilleri ve Alzheimer gibi çeşitli konuları bir araya getiren, multidisipliner bir yaklaşımla tasarlanmış bir etkinliktir.MediVerse, tıp öğrencilerini ve sağlık alanındaki uzmanları yenilikçi bir platformda buluşturmayı amaçlayan bir bilgi paylaşım kongresidir. İlk kez Türkiye genelinde, sağlığın geleceğini şekillendiren teknolojik gelişmeler, yapay zeka, nadir hastalıklar, 3D organ nakilleri ve Alzheimer gibi çeşitli konuları bir araya getiren MediVerse, alanında lider uzmanları ve hevesli tıp öğrencilerini bir araya getirerek hem öğrenmeye hem de ılham almaya zemin hazırlıyor.
                            <br /><br />
                            Bu benzersiz kongrede, katılımcılar interaktif oturumlar, yenilikçi çalıştaylar ve bilimsel paneller aracılığıyla sağlık sektörünün geleceğine dair farklı bakış açıları geliştirme şansı yakalayacaklar. Ayrıca, kongrede hem klinik hem de preklinik alanda katılımcıların bilgi ve deneyimlerini artırabilecekleri çeşitli atölyeler düzenlenmektedir. MediVerse, akademik bilgi ve deneyimlerin paylaşıldığı bir platform olmanın ötesinde, tıp ve teknolojiyi buluşturan geleceğe yön veren bir topluluk yaratmayı hedefliyor.
                        </p>
                    </div>
                </div>

                {/* İETK NEDİR */}
                <div className="relative max-w-5xl w-full mx-auto text-white">
                    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                    <div className="relative p-6">
                        <h1 className="text-xl lg:text-3xl font-bold mb-4 lg:mb-6 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                İETK NEDİR?
                            </div>
                            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </h1>
                        <div className="border-t border-gray-300 my-4"></div>
                        <p className="text-base lg:text-lg leading-relaxed mb-6 text-justify">
                            İzmir Ekonomi Tıp Kulübü (İETK), İzmir Ekonomi Üniversitesi bünyesinde, tıp öğrencilerinin akademik ve kişisel gelişimlerini desteklemek amacıyla faaliyet gösteren bir öğrenci topluluğudur. İETK, İzmir Ekonomi Üniversitesi&apos;ni temsilen iki güçlü topluluk olan Tıp ve ECOEMSA&apos;nın birleşimini içermektedir.
                            <br /><br />
                            İzmir Ekonomi Tıp Kulübü, tıp öğrencilerinin akademik ve kişisel gelişimlerini desteklemek amacıyla çeşitli etkinlikler düzenleyen, yenilikçi ve dinamik bir öğrenci topluluğudur.
                            <br /><br />
                            Kulübümüz, iki topluluğun gücünü birleştirerek tıp öğrencilerinin mesleki bilgi birikimini artıracak seminerlerden, uygulamalı çalıştaylara kadar geniş bir etkinlik yelpazesi sunar. Aynı zamanda, etik tartışmalar, bilimsel araştırmalar ve sosyal sorumluluk projeleri gibi alanlarda da farkındalık yaratır.
                            <br /><br />
                            İzmir Ekonomi Tıp Kulübü, geleceğin hekimlerini, multidisipliner bir bakışa sahip, topluma duyarlı ve liderlik vasıflarıyla donatmış bireyler olarak yetiştirmeyi kendine misyon edinmiştir. Katılımcıların hem akademik hem de sosyal ağlarını genişletmelerini sağlayan kulübümüz, herkesi birlikte daha parlak bir geleceğı şekillendirmeye davet ediyor.
                        </p>
                    </div>
                </div>

                {/* LOGOLAR */}
                <div className="flex flex-wrap">
                    <Image src="/images/logo/echoBot.svg" alt="SVG 1" width={144} height={144} />
                    <Image src="/images/logo/ecoEmsa.svg" alt="SVG 2" width={144} height={144} />
                    <Image src="/images/logo/medClub.svg" alt="SVG 3" width={144} height={144} />
                    <Image src="/images/logo/medStd.svg" alt="SVG 4" width={144} height={144} />
                </div>
            </section>
        </main>
    );
}

