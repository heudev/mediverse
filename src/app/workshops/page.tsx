"use client";
import { useState } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    person: PersonDetails | null;
}

interface PersonDetails {
    name: string;
    photoUrl: string;
    subtitle: string;
    description: string;
}
const Modal: React.FC<ModalProps> = ({ isOpen, onClose, person }) => {
    if (!isOpen || !person) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
           <div  className="bg-white text-black p-6 rounded-lg shadow-lg  max-w-sm md:max-w-lg lg:max-w-2xl w-full max-h-[90vh] overflow-auto relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-700 text-4xl"
                    aria-label="Close"
                >
                    &times;
                </button>

                <img
                    src={person.photoUrl}
                    alt={person.name}
                    className="w-full h-auto max-h-[300px] object-contain rounded-md"
                />
                <h2 className="text-2xl font-bold mt-4">{person.name}</h2>
                <h3 className="text-gray-500 mt-1">{person.subtitle}</h3>
                <p className="mt-4 text-gray-700">{person.description}</p>
            </div>
        </div>
    );
};

interface EventCardProps {
    title: string;
    people: string[];
    onPersonClick: (person: string) => void;
}

const EventCard: React.FC<EventCardProps> = ({ title, people, onPersonClick }) => {
    return (
        <div className="p-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">{title}</h3>
            <ul className="mt-2 space-y-1">
                {people.map((person, index) => (
                    <li
                        key={index}
                        className="text-sm cursor-pointer hover:underline"
                        onClick={() => onPersonClick(person)}
                    >
                        {person}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default function Workshops() {
    const [selectedPerson, setSelectedPerson] = useState<PersonDetails | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const personDetailsMap: Record<string, PersonDetails> = {
        "Prof. Dr. İncim Bezircioğlu": {
            name: "Prof. Dr. İncim Bezircioğlu",
            photoUrl: "/images/workshops/",
            subtitle: "The Case Files: Diagnosis Edition",
            description: "1964 yılında Ankara'da doğmuştur. 1987 yılında Ege Üniversitesi Tıp Fakültesi'nden tıp doktoru olarak mezun olmuştur. Uzmanlık eğitimini 1992 yılında Sağlık Bakanlığı, Ege Kadın Doğum Hastanesi'nde tamamlamıştır. 2013 yılında Sağlık Bakanlığı, İzmir Katip Çelebi Üniversitesi, İzmir Atatürk Eğitim ve Araştırma Hastanesi, Kadın Hastalıkları ve Doğum Anabilim Dalı'nda doçent unvanını almıştır.",
        },
        "Prof. Dr. Oğuz Kılınç": {
            name: "Prof. Dr. Oğuz Kılınç",
            photoUrl: "/images/workshops/oguz_kilinc.jpeg",
            subtitle: "The Case Files: Diagnosis Edition",
            description: "1965 yılında Burdur’da doğmuştur. İzmir Atatürk Lisesi’nden 1982 yılında mezun olduktan sonra, Ege Üniversitesi Tıp Fakültesi’nden 1988 yılında mezun olmuştur. Aynı yıl Tıpta Uzmanlık sınavını kazanarak İzmir Göğüs Hastalıkları Hastanesi’nde uzmanlık eğitimine başlamıştır. 1992-1996 yılları arasında göğüs hastalıkları uzmanı olarak aynı hastanede görev yapmış, 1996 yılında Dokuz Eylül Üniversitesi Göğüs Hastalıkları Anabilim Dalında öğretim görevlisi olarak göreve başlamıştır. 2003 yılında doçent, 2009 yılında profesör unvanı alarak profesörlük görevine devam etmektedir. Prof. Dr. Kılınç, 2004-2008 yılları arasında Dokuz Eylül Üniversitesi Hastanesi Başhekim Yardımcılığı, 2012-2014 yılları arasında İzmir Tabip Odası Onur Kurulu Sekreterliği, 2014-2017 yılları arasında Anabilim Dalı Başkanlığı ve 2016-2018 yılları arasında Dokuz Eylül Üniversitesi Tıp Fakültesi Dekan Yardımcılığı görevlerini üstlenmiştir.Yurtiçi ve yurtdışında yayımlanmış yüzlerce bilimsel eserinin yanı sıra, Türk Toraks Derneği’nde de aktif olarak görev almaktadır. Türk Toraks Derneği merkez yönetim kurulu üyeliği, Türk Toraks Derneği tütün kontrolü çalışma grubu başkanlığı (2010-2012), Solunum Sistemi İnfeksiyonları çalışma grubu yürütme kurulu üyeliği ve Türk Toraks Derneği kongrelerinde organizasyon komitesi üyeliği gibi önemli görevlerde bulunmuştur. Halen, Turkish Thoracic Journal Dergisi baş editörlüğü, Türk Toraks Derneği Tütün Kontrolü Çalışma Grubu Danışma Kurulu Üyeliği ve Ulusal Tütün Kontrol Kurulu Üyeliği gibi görevlerde aktif olarak yer almaktadır.",
        },
        "Doğa Özdengülsün": {
            name: "Doğa Özdengülsün",
            photoUrl: "/images/workshops/doga_ozdengulsun.jpeg",
            subtitle: "Tıpta Girişimcilik: Yapay Zeka",
            description: "2020-2026 yılları arasında Cerrahpaşa Tıp Fakültesi’nde eğitimine devam etmektedir. 2023 yılında MediTechLabs’ın kurucu ortaklarından biri olmuş, 2022 yılında ise Medipreneurs’ün kuruluşuna ortaklık etmiştir.",
        },
        "Prof. Dr. Görsel Altınışık Ergür": {
            name: "Prof. Dr. Görsel Altınışık Ergür",
            photoUrl: "/images/workshops/gorsel_altinisik_ergur.jpeg",
            subtitle: "Teletıp",
            description: "İstanbul Atatürk Fen Lisesi’nden 1985 yılında mezun oldu. Ege Üniversitesi Tıp Fakültesinden 1991 yılında mezun olarak 1998 yılında Dokuz Eylül Üniversitesi’nde Göğüs Hastalıkları uzmanlık eğitimini tamamladı. Royal Brompton Hospital İnterstisyel Akciğer Hastalıkları Kliniğinde konuyla ilgili eğitimi için 2003 yılında bulundu.Pamukkale Üniversitesi’nde 2000 yılından beri Göğüs Hastalıkları uzmanı olarak çalışmaktadır. Haziran 2020’den beri teletıp yöntemiyle COVID ve COVID-dışı göğüs hastalıkları hastalarına ücretsiz sağlık hizmeti vermektedir. Bu alanda ülkede birçok öncü uygulamayı gerçekleştirmektedir. İlk sigara e-bırakma uygulaması, klinik eğitimde tele-tıbbın kullanılması gibi alanlar bunlar arasındadır. Hasta-hekim iletişimi konusunda seminerler vermekte, ekran aracılı iletişim üzerine deneyimlerini paylaşmaktadır.Anadolu Üniversitesi Açıköğretim Fakültesi Sosyoloji Bölümünden 2017 yılında lisans, İstanbul Üniversitesi Edebiyat Fakültesi Sosyoloji Bölümünden 2021 yılında yüksek lisans mezunudur.Ateş ve İhanet: COVID Kliniğinde Sağlık Çalışanlarının Deneyimleri kitabının, hekimlerin COVID dönemindeki istifa ve erken emeklilik kararlarını ele alan araştırmanın yazarlarından ve Cam Duvar Ardındaki COVID Hastaları kitabının yazarıdır. Ayrıca öykü ve şiir kitapları bulunmaktadır. ",
        },
        "Özge Ertener": {
            name: "Özge Ertener",
            photoUrl: "/images/workshops/ozge_ertener.jpg",
            subtitle: "Tanı Dedektifleri: Patolojinin Gizemi",
            description: "1980 yılında İstanbul ‘da doğdu. 2004 yılında Celal Bayar Üniversitesi Tıp Fakültesinden mezun oldu. 2005- 2007 yılları arasında İzmir Eğitim Araştırma Hastanesinde Aile Hekimliği Asistanlığı yaptı. 2008 yılında İzmir Dokuz Eylül Üniversitesi Tıp Fakültesi Tıbbi Patoloji Anabilim Dalında başladığı uzmanlık eğitimini 2013 yılında tamamladı. 2013-2016 yılları arasında Ağrı Devlet Hastanesinde Devlet Hizmet Yükümlülüğünü yerine getirdi. 2016 yılı Nisan ayında İzmir Ekonomi Üniversitesi Tıp Fakültesi Tıbbi Patoloji departmanında Yardımcı Doçent olarak göreve başladı. ORCID id: http://orcid.org/0000-0002-4957-7877",
        },
        "Uzm. Dr. Gül Kulan": {
            name: "Uzm. Dr. Gül Kulan",
            photoUrl: "/images/workshops/gul_kulan.jpeg",
            subtitle: "Sağlıklı Yaşam",
            description: "1977 yılında Kütahya’da doğmuştur. İlk ve orta öğrenimini Kütahya Anadolu Lisesi’nde tamamlamış, ardından 1995 yılında Hacettepe Üniversitesi Tıp Fakültesi’ne başlamıştır. Tıp eğitimine devam ederken fizik tedavi stajında rehabilitasyonun etkileyici sonuçlarından etkilenmiş ve bu alanda uzmanlaşmaya karar vermiştir. Uzmanlık eğitimini Ankara Üniversitesi Tıp Fakültesi Fiziksel Tıp ve Rehabilitasyon Anabilim Dalı’nda tamamlamıştır ￼.Meslek hayatında Gediz Devlet Hastanesi, Kütahya Evliya Çelebi Eğitim ve Araştırma Hastanesi ve Özel Kütahya Parkhayat Hastanesi gibi çeşitli kurumlarda çalışmış, nörolojik, pediatrik ve ortopedik rehabilitasyon ile lenfödem tedavisi gibi konular üzerinde deneyim kazanmıştır. Şu anda İzmir’de Özel Balçova Fizik Tedavi ve Rehabilitasyon Dal Merkezi’nde görev yapmaktadır￼. Dr. Kulan, geleneksel ve tamamlayıcı tıp (GETAT) uygulamalarında da uzmanlaşmıştır. Akupunktur, proloterapi, ozon terapi, nöralterapi, hacamat (kupa tedavisi) ve kuru iğne tedavisi gibi alanlarda eğitim almıştır. Ayrıca fonksiyonel tıp yaklaşımlarını benimseyerek hastalarına bütüncül bir sağlık hizmeti sunmaktadır. Yaşam koçluğu ve nefes terapisi gibi yöntemlerle de bireylerin fiziksel ve ruhsal sağlıklarını desteklemektedir",
        },
        "Psikolog Dr. Işıl Çoklar Okutkan": {
            name: "Psikolog Dr. Işıl Çoklar Okutkan",
            photoUrl: "/images/workshops/isil_coklar_okutan.jpg",
            subtitle: "Yapay Zeka ve Giyilebilir Teknolojiler",
            description: "Sosyal psikoloji alanında uzmanlaşmış bir akademisyen ve araştırmacıdır. Ege Üniversitesi Psikoloji Bölümü’nden 2004 yılında mezun olduktan sonra, aynı üniversitede sosyal psikoloji alanında yüksek lisans yapmıştır. Doktora eğitimini ise 2015 yılında Ankara Üniversitesi’nde tamamlamıştır. Dr. Çoklar Okutkan, akademik kariyeri boyunca pek çok uluslararası deneyim edinmiştir. Şu anda Trinity College Dublin’de SEURO Projesi kapsamında postdoctoral researcher (doktora sonrası araştırmacı) olarak görev yapmaktadır. Aynı üniversitenin Hemşirelik ve Ebelik Fakültesi’nde araştırma görevlisi olarak da bulunmuş, bu alanlarda araştırmalara katkıda bulunmuştur. Akademik ders verme tecrübesini ise hem Dublin Business School hem de Bahçeşehir Üniversitesi gibi kurumlarda lisans ve yüksek lisans düzeyinde dersler vererek zenginleştirmiştir. Dr. Çoklar Okutkan, aynı zamanda Child and Family Training bünyesinde 2013 yılından beri eğitmen ve danışman olarak görev yapmakta, aile ve çocuklara yönelik eğitim ve danışmanlık hizmetleri sağlamaktadır. Çalışma alanları sosyal psikoloji, aile dinamikleri ve çocuk gelişimi gibi konuları kapsamakta, araştırmaları ise genellikle multidisipliner bir yaklaşımla sürdürülmektedir. Bornova Anadolu Lisesi mezunu olan Dr. Çoklar Okutkan, İngilizce ve Almanca bilmektedir.",
        },
        "Gemini Bilgi - Özlem Aksu": {
            name: "Özlem Aksu",
            photoUrl: "/images/workshops/",
            subtitle: "Tıp Eğitiminde Dijital Yöntemler",
            description: "Gemini Bilgi Teknolojileri A.Ş. Klinik Çözümler Satış Müdürü, analitik yeteneklerini geliştirerek eğitim ve teknoloji alanında kapsamlı bir kariyer oluşturmuştur. Eğitim hayatına Hacettepe Üniversitesi'nde başlamış, ardından Nicolaus Copernicus Üniversitesi ve Ankara Üniversitesi'nde öğrenim görerek akademik bilgisini uluslararası bir perspektifle zenginleştirmiştir. Profesyonel kariyerinde Gemini Bilgi Teknolojileri A.Ş. bünyesinde akademik ve özel kurumlara yönelik klinik çözümler sunan bir Satış Müdürü olarak görev yapmaktadır. Bu rolünde, özellikle sağlık sektörü ve eğitim teknolojileri alanında müşteri ihtiyaçlarına uygun yenilikçi çözümler geliştirmekte ve uygulamaktadır. Daha önce Eğitim Uzmanı olarak çalışmış, eğitim programlarının tasarımı ve uygulanmasında önemli katkılarda bulunmuştur. Bilkent Üniversitesi ve TAI Engineering’de staj yaparak mühendislik ve teknoloji odaklı projelerde tecrübe kazanmıştır. Kariyeri boyunca, hem satış hem de eğitim alanlarındaki yetkinlikleriyle dikkat çeken profesyonel, akademik arka planını sektörel deneyimiyle birleştirerek etkili çözümler sunmaktadır.",
        },
        "Prof. Dr. Metiner Tosun": {
            name: "Prof. Dr. Metiner Tosun",
            photoUrl: "/images/workshops/metiner_tosun.jpeg",
            subtitle: "Kendi İlacını Tasarla: Farmakoloji ve Moleküler Simülasyon",
            description: "Farmakoloji alanında geniş bir akademik ve profesyonel geçmişe sahiptir. Ege Üniversitesi Eczacılık Fakültesi'nden 1986 yılında lisans derecesi ile mezun olmuş, 1989 yılında Farmakoloji alanında yüksek lisans eğitimini tamamlamıştır. Doktora derecesini ise Cincinnati Üniversitesi Tıp Fakültesi Farmakoloji ve Hücre Biyofiziği Departmanı'nda 1997 yılında almıştır. Akademik kariyerine 1998 yılında Ege Üniversitesi Eczacılık Fakültesi'nde Yardımcı Doçent olarak başlamış, aynı dönemde Ordu İlaç Fabrikası Komutanlığı'nda Kalite Kontrol Laboratuvarı Şef Yardımcılığı yapmıştır. 2001-2009 yılları arasında Doçent, 2009-2016 yılları arasında ise Profesör olarak Ege Üniversitesi'nde görev almıştır. 2016 yılından itibaren, İzmir Ekonomi Üniversitesi Tıp Fakültesi Dahili Tıp Bilimleri bölümünde öğretim üyesi olarak çalışmaya devam etmektedir. Farmakoloji alanındaki uzmanlığıyla hem akademik hem de uygulamalı çalışmalara katkı sağlamaktadır.",
        },
        "Dr. Elif Barış": {
            name: "Dr. Elif Barış",
            photoUrl: "/images/workshops/",
            subtitle: "Kendi İlacını Tasarla: Farmakoloji ve Moleküler Simülasyon",
            description: "Farmakoloji ve eczacılık alanlarında uzmanlaşmış bir akademisyendir. Doğu Akdeniz Üniversitesi Eczacılık Fakültesi'nden 2017 yılında, fakülte birincisi olarak mezun olmuştur. Aynı yıl Dokuz Eylül Üniversitesi Farmakoloji Bölümünde doktora çalışmalarına başlamıştır. Dr. Barış, 2017'den bu yana İzmir Ekonomi Üniversitesi Tıp Fakültesi'nde Araştırma Görevlisi olarak çalışmaktadır. 2022 yılından itibaren İzmir Ekonomi Üniversitesi'nde Yardımcı Doçent unvanıyla akademik kariyerine devam etmektedir. Farmakoloji alanındaki çalışmalarıyla bilimsel araştırmalara ve eğitim faaliyetlerine katkıda bulunmaktadır.",
        },
        "Dr. Yalın Kılıç": {
            name: "Dr. Yalın Kılıç",
            photoUrl: "/images/workshops/",
            subtitle: "Glokometre Probu",
            description: "Hacettepe Üniversitesi Tıp Fakültesi'nden Tıp Doktoru (MD) ve Dokuz Eylül Üniversitesi'nden Tıbbi Biyoloji ve Genetik alanında Doktora (PhD) derecelerini almıştır. Doktora çalışmaları, kanserlerde tümör baskılayıcı genlerin ekspresyon ve metilasyon profillerini inceleyerek prognoz tahmini üzerine odaklanmıştır. Doktora sonrası araştırmalarında hastalıkların moleküler tanısına yönelik düşük maliyetli tıbbi cihazlar geliştirme üzerine yoğunlaşmıştır. Kurucusu ve yöneticisi olduğu GalvanoPlot ve SolarBiotec gibi şirketlerde mikrofluidik sistemler, biyoteknoloji cihazları ve moleküler analiz hizmetleri üzerine çalışmakta, Coral Biotechnology, Inc. ile biyoteknoloji cihazlarının geliştirilmesini ve araştırma amaçlı moleküler analiz hizmetlerini sürdürmektedir. Dr. Kılıç, aynı zamanda akademik kariyerinde Dokuz Eylül Üniversitesi Adli Tıp Anabilim Dalı'nda öğretim üyeliği yapmış ve Florida International University’de konuk öğretim üyesi olarak araştırma iş birlikleri gerçekleştirmiştir. Yenilikçi teknolojiler geliştirme ve multidisipliner iş birlikleri oluşturma konularında liderlik yapmaya devam etmektedir. Ayrıca, glokometre probunun geliştirilmesinde yer alan ekipte bulumaktadır.",
        },
        "CordaMed - Okan Ünsal": {
            name: "Okan Ünsal ",
            photoUrl: "/images/workshops/okan_unsal.jpeg",
            subtitle: "Da Vinci Cerrahisi",
            description: "Cordamed şirketinde Clinical Sales Manager olarak görev yapmakta olup, özellikle Da Vinci Robotik Cerrahisi, Tele-Sağlık ve Tele-Tıp çözümleri, Tele-Cerrahi iş birliği ve Tele-Konsültasyon gibi ileri teknolojilere odaklanmaktadır. Ayrıca LivaNova Kalp-Akciğer Makinesi (CPB) konusunda deneyimlidir. Bahçeşehir Üniversitesi Biyomedikal Mühendisliği mezunu olan Ünsal, robotik cerrahi alanında geniş bir uzmanlığa sahiptir.",
        },
        "Prof. Dr. Özgür Aslan": {
            name: "Prof. Dr. Özgür Aslan",
            photoUrl: "/images/workshops/ozgur_aslan.jpeg",
            subtitle: "Hayat Tıbbı",
            description: "Ege Üniversitesi Tıp Fakültesi’nden mezun olduktan sonra Kardiyoloji uzmanlık eğitimini İzmir Atatürk Eğitim Hastanesi Kardiyoloji Kliniği’nde tamamlamıştır. 1996 yılında, İspanya'nın Barselona şehrinde Otonom Üniversite’nin Sant Pau Hastanesi’nde kardiyak elektrofizyoloji alanında eğitim alarak, bu alanda derinleşmiştir. 1997 yılında Kardiyoloji Uzmanı unvanını kazanarak, 1997-2004 yılları arasında Dokuz Eylül Üniversitesi Kardiyoloji Anabilim Dalı’nda Yardımcı Doçent olarak görev yapmıştır. 2004 yılında Kardiyoloji Doçenti unvanını almış, 2010 yılında ise Kardiyoloji Profesörü olarak atandı. Prof. Dr. Özgür Aslan, kalp ritim bozuklukları ve elektrofizyolojisi üzerine yoğunlaşarak, bu alanda akademik çalışmalar yapmış ve klinik hizmetler sunmuştur. Yurt içi ve yurt dışındaki çeşitli akademik çalışmalarda yer almış, birçok makale ve araştırma yayınlamıştır.",
        },
        "Sude Pehlivan Akbuğday": {
            name: "Sude Pehlivan Akbuğday",
            photoUrl: "/images/workshops/",
            subtitle: "Biyomedikal Perspektiften Zihin ve Duyular",
            description:"2015 yılında Ankara Cumhuriyet Anadolu Öğretmen Lisesi'nden mezun oldu. 2019 yılında İzmir Katip Çelebi Üniversitesi Biyomedikal Mühendisliği bölümünden lisans derecesi aldı. Eylül 2021’de İzmir Ekonomi Üniversitesi’nde Elektrik-Elektronik Mühendisliği bütünleşik doktora eğitimine başladı.",
        },
        "Burak Akbuğday": {
            name: "Burak Akbuğday",
            photoUrl: "/images/workshops/",
            subtitle: "Biyomedikal Perspektiften Zihin ve Duyular",
            description: "2017 yılında Zonguldak Bülent Ecevit Üniversitesi, Biyomedikal Mühendisliği Bölümü'nden birincilikle mezun olmuştur ve aynı zamanda Mühendislik Fakültesi'nin selamlayıcı konuşmacısı olmuştur. Lisans eğitiminde, TÜBİTAK ve diğer ilgili kurumlardan çeşitli burslar almıştır. 2021 yılından itibaren İzmir Ekonomi Üniversitesi Elektrik-Elektronik Mühendisliği Bölümü'nde entegre doktora öğrencisi olarak eğitimine devam etmekte olup, aynı bölümde araştırma görevlisi olarak çalışmaktadır ve şu anda TÜBİTAK bursu almaktadır. Mevcut araştırmaları biyomedikal sinyal işleme, makine öğrenmesi ve derin öğrenme üzerine odaklanmaktadır.",
        },
        "Prof. Dr. Gönül Dinç Horasan": {
            name: "Prof Dr. Gönül Dinç Horasan",
            photoUrl: "/images/workshops/",
            subtitle: "Farkındalık",
            description: "İzmir Ekonomi Üniversitesi Tıp Fakültesi’nde Halk Sağlığı Anabilim Dalı’nda çalışmaktadır. Dr Dinç Horasan Ege Üniversitesi Tıp Fakültesinden 1990 yılında mezun olmuş, Akdeniz Üniversitesi’nden Halk Sağlığı uzmanlık eğitimini almıştır. 1996-2017 yılları arasında Celal Bayar Üniversitesi’nde çalışan Dr Horasan, 2006 yılında Bristol Üniversitesi Toplum Hekimliği Bölümü’nde (Bristol University Primary Health Care Unit) fellowship olarak çalışmıştır. Dr Dinç Horasan lisans öncesi, lisans sonrası eğitim programlarında ağırlıklı olarak epidemiyoloji, biyoistatistik, üreme sağlığı, bulaşıcı olmayan hastalıklar konularında dersler vermektedir. Toplum tabanlı hastalık kontrol programları, üreme sağlığı çalışma konularını oluşturmaktadır. Dr Dinç Horasan 2012-2015 yılları arasında MCBÜ Kadın Çalışmaları Araştırma ve Uygulama Merkezinin kurucu müdürlüğünü yapmış, 2012-2017 yılları arasında ise aynı üniversitenin Sosyal Bilimler Enstitüsü Kadın Çalışmaları yüksek lisans programının sorumluluğunu da yürütmüştür. Dr Horasan 2021 yılından beri İzmir Ekonomi Üniversitesi Toplumsal Cinsiyet ve Kadın Çalışmaları Uygulama ve Araştırma Merkezi (EKOKAM) Müdürlüğünü yürütmektedir. Dr Horasan evli ve biri kız diğeri erkek ikiz çocuk annesidir.",
        },
        "Ali Burak Özkaya": {
            name: "Ali Burak Özkaya",
            photoUrl: "/images/workshops/ali_burak_ozkaya.jpg",
            subtitle: "Argüman Analizi",
            description: "Ege Üniversitesi'nde Biyokimya alanında lisans (2002-2006) ve yüksek lisans (2006-2009) eğitimini tamamladıktan sonra, 2010-2015 yılları arasında Ege Üniversitesi Biyokimya Anabilim Dalı'nda Biyokimya alanında doktora yaptı. Eğitim sürecinde pre-klinik çalışmalar, proje yönetimi ve eğitim konularında deneyim kazandı. Profesyonel kariyerine 2015'te Dokuz Eylül Üniversitesi'nde öğretim görevlisi olarak başlamış ve 2017'de İzmir Ekonomi Üniversitesi'nde yardımcı doçent olarak göreve devam etmiştir. Burada, biyokimya ve eleştirel düşünme dersleri vermekte, e-öğrenme platformunun yönetimiyle ilgilenmektedir. Ayrıca, fakültenin araştırma ekibinin bir üyesidir. FEBS (Federation of European Biochemical Societies) ağında Networking ve Entegrasyon Komitesi üyeliği görevini yürütmektedir. Özkaya, çeşitli araştırma projelerinde de yer almış, TUBİTAK destekli projelerde çalışmış ve uluslararası araştırma deneyimi kazanmıştır. Bunlar arasında, MD Anderson Kanser Merkezi'nde, Almanya Ulm Üniversitesi'nde ve Onvivo Diagnostik ve Biyoteknoloji'de gerçekleştirdiği çalışmaları sayılabilir.",
        },
        /* 
        "": {
            name: "",
            photoUrl: "/images/workshops/",
            subtitle: "",
            description: "",
        },
        */
    };

    const handlePersonClick = (person: string) => {
        const details = personDetailsMap[person];
        if (details) {
            setSelectedPerson(details);
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedPerson(null);
    };

    const saturdayEvents = [
        { title: "The Case Files: Diagnosis Edition", people: ["Prof. Dr. İncim Bezircioğlu", "Prof. Dr. Oğuz Kılınç"] },
        { title: "Sütür Atma Atölyesi", people: ["Op. Dr. Barış Zamandar"] },
        { title: "Yeni Sağlık Hizmetleri ve Cinsiyet Kavramı", people: [] },
        { title: "Argüman Analizi ve Otofaji", people: ["Ali Burak Özkaya"] },
        { title: "Da Vinci Cerrahisi", people: ["CordaMed - Okan Ünsal"] },
        { title: "Tanı Dedektifleri: Patolojinin Gizemi", people: ["Özge Ertener"] },
        { title: "Tıpta Girişimcilik: Yapay Zeka", people: ["Doğa Özdengülsün"] },
        { title: "Tıp Eğitiminde Dijital Yöntemler", people: ["Gemini Bilgi - Özlem Aksu"] },
        { title: "Farkındalık", people: ["Prof. Dr. Gönül Dinç Horasan", "Hande Aşıcı"] },
    ];

    const sundayEvents = [
        { title: "Hayat Tıbbı", people: ["Prof. Dr. Özgür Aslan"] },
        { title: "Otofaji", people: ["Ali Burak Özkaya"] },
        { title: "Biyomedikal Perspektiften Zihin ve Duyular",people: ["Sude Pehlivan Akbuğday", "Burak Akbuğday"], },
        { title: "Dijital Kirlilik ve Sağlık", people: ["Lets Do It"] },
        { title: "Kendi İlacını Tasarla: Farmakoloji ve Moleküler Simülasyon", people: ["Prof. Dr. Metiner Tosun", "Dr. Elif Barış"], },
        { title: "Teletıp", people: ["Prof. Dr. Görsel Altınışık Ergür"] },
        { title: "Sağlıklı Yaşam", people: ["Uzm. Dr. Gül Kulan"] },
        { title: "Glukometre Probu", people: ["Dr. Yalın Kılıç"] },
        { title: "Yapay Zeka ve Giyilebilir Teknolojiler", people: ["Psikolog Dr. Işıl Çoklar Okutkan"] },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
            <header className="py-8 text-center">
                <h1 className="text-4xl font-extrabold">15-16 Şubat Kongresi</h1>
                <p className="mt-2 text-gray-300">Atölyeler ve Program Bilgileri</p>
            </header>
            <main className="max-w-5xl mx-auto px-4 py-6">
                <section>
                    <h2 className="text-2xl font-bold mb-4">15 Şubat Cumartesi</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {saturdayEvents.map((event, index) => (
                            <EventCard
                                key={index}
                                title={event.title}
                                people={event.people}
                                onPersonClick={handlePersonClick}
                            />
                        ))}
                    </div>
                </section>
                <section className="mt-10">
                    <h2 className="text-2xl font-bold mb-4">16 Şubat Pazar</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {sundayEvents.map((event, index) => (
                            <EventCard
                                key={index}
                                title={event.title}
                                people={event.people}
                                onPersonClick={handlePersonClick}
                            />
                        ))}
                    </div>
                </section>
            </main>

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal} person={selectedPerson} />
        </div>
    );
}