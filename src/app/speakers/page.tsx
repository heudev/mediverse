import React from "react";
import Image from "next/image";

interface SpeakerCardProps {
    name: string;
    description: string[];
    imageUrl: string;
    talkTitle: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ name, description, imageUrl, talkTitle }) => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform">
            {/* Speaker Image */}
            <div className="w-full md:w-1/3">
                <Image
                    src={imageUrl}
                    alt={name}
                    width={500}
                    height={500}
                    className="w-full h-60 md:h-auto object-cover"
                />
            </div>

            {/* Speaker Details */}
            <div className="flex flex-col justify-center p-6 w-full md:w-2/3">
                <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
                <p className="text-sm text-gray-500 mt-2 italic">{talkTitle}</p>
                <div className="mt-4 space-y-2">
                    {description.map((paragraph, index) => (
                        <p key={index} className="text-gray-700 leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

const speakers = [
    {
        name: "Doç. Dr. Özgür Samacılar",
        description: [
            "1976 yılında İzmir’de doğdu. 2000 yılında Ege Üniversitesi Tıp Fakültesi’nden mezun olduktan sonra, 2006 yılında aynı üniversitenin Göğüs Cerrahisi Anabilim Dalı’nda uzmanlık eğitimini tamamladı. Aynı yıl İngiltere’de Royal Brompton Hastanesi Göğüs Cerrahisi Kliniği’nde Prof. Dr. Peter Goldstraw’un süpervizörlüğünde bilimsel ve klinik çalışmalar gerçekleştirdi. 2010-2020 yılları arasında SBÜ Dr. Suat Seren Göğüs Hastalıkları ve Cerrahisi SUAM Göğüs Cerrahisi Kliniği’nde eğitim görevlisi olarak çalıştı. Halen Medicana International İzmir Hastanesi ve KTO Karatay Üniversitesi Tıp Fakültesi’nde profesör olarak görev yapmaktadır. İlgi alanları arasında videotorakoskopik (VATS) ve robotik (RATS) akciğer kanseri cerrahisi, kompleks akciğer kanseri ve timoma cerrahisi, trakea cerrahisi, göğüs duvarı tümörleri ve mezotelyoma cerrahi tedavisi yer almaktadır."
        ],
        imageUrl: "/images/speakers/doc_dr_ozgur_samancilar.jpg",
        talkTitle: "MediVerse: Tıbbın Geleceği Kongresi'nde 'Göğüs Hastalıklarında Yenilikçi Uygulamalar' oturumunu gerçekleştirecektir.",
    },
    {
        name: "Assoc. Prof. Dr. Tulgar TOROS",
        description: [
            "1994 yılında Ege Üniversitesi Tıp Fakültesi’nden mezun olmuştur. 1995-2001 yılları arasında Ege Üniversitesi Tıp Fakültesi Ortopedi ve Travmatoloji Anabilim Dalı’nda uzmanlık eğitimini tamamlamış, ardından 2002 yılından itibaren EMOT Hastanesi’nde görev yapmaya başlamıştır.",
            "Tarsus Amerikan Koleji mezunu olan Dr. Toros, Türk Ortopedi ve Travmatoloji Derneği, Türk El ve Üst Ekstremite Cerrahisi Derneği ve Avrupa El Cerrahisi Dernekleri Federasyonu (FESSH) üyesidir.",
            "Akademik çalışmalarında el cerrahisi, periferik sinir yaralanmaları, üst ekstremite travmaları ve kırık tedavileri üzerine yoğunlaşan Dr. Toros’un birçok ulusal ve uluslararası yayını bulunmaktadır. Öne çıkan çalışmaları arasında karpal tünel sendromu ve periferik sinir yaralanmalarının ultrasonografik değerlendirilmesi, distal radius kırıkları için volar plaklama, halk arasında çekiç parmak olarak bilinen tendon yaralanmaları tedavisi, üst ekstremite replante cerrahileri ve dirsek sertliği cerrahisi gibi konular yer almaktadır.",
            "Dr. Toros, halen aktif olarak mesleğini sürdürmekte ve klinik çalışmalarının yanı sıra bilimsel yayınları ile alanına katkı sağlamaktadır.",
        ],
        imageUrl: "/images/speakers/prof_dr_tulgar_toros.webp",
        talkTitle: "MediVerse: Tıbbın Geleceği Kongresi'nde 'Ortopedik Yaklaşımların Dünü , Bugünü ve Geleceği' oturumunu gerçekleştirecektir.",
    },
    {
        name: "Prof. Dr. Gökhan Akbulut",
        description: [
            "Akdeniz Üniversitesi Tıp Fakültesi’nden 1993 yılında mezun olduktan sonra, 1998 yılında SBÜ İstanbul Okmeydanı Eğitim Hastanesi’nde genel cerrahi uzmanlık eğitimini tamamladı. Kariyerine SBÜ Okmeydanı Eğitim Hastanesi’nde genel cerrahi uzmanı olarak başladı. Ardından, Afyon Kocatepe ve Sakarya Üniversitesi Tıp Fakültelerinde öğretim üyeliği yaptı. Sağlık Bilimleri Üniversitesi İzmir Tepecik EAH’de eğitim görevlisi olarak çalışan Prof. Dr. Akbulut, 2019 yılından itibaren Tınaztepe Üniversitesi Tıp Fakültesi’nde öğretim üyesi ve Tınaztepe Galen Bayraklı Hastanesi’nde başhekim olarak görev yapmaktadır.",
        ],
        imageUrl: "/images/speakers/gokhan_akbulut.jpg",
        talkTitle: "MediVerse: Tıbbın Geleceği Kongresi'nde 'Genel Cerrahi Uygulamalarda Yapay Zeka' oturumunu gerçekleştirecektir.",
    },
    {
        name: "Prof. Dr. Emre Divarcı",
        description: [
            "1982 yılında Denizli’de doğmuş, 1999 yılında Denizli Anadolu Lisesi’ni bitirdikten sonra Hacettepe Üniversitesi Tıp Fakültesi’nden 2005 yılında mezun olmuştur. Ege Üniversitesi Tıp Fakültesi Çocuk Cerrahisi Anabilim Dalı’nda uzmanlık eğitimine başlamış, bu süreçte Almanya’da Hannover Tıp Fakültesi ve İngiltere’de Londra’daki Great Ormond Street Çocuk Hastanesi’nde gözlemcilik yapmıştır. 2010 yılında uzmanlık alanında ihtisasını tamamlayarak çocuk cerrahisi uzmanı unvanını kazanmış, Diyarbakır Kadın Doğum ve Çocuk Hastanesi’nde devlet hizmeti yükümlülüğünü yerine getirmiştir.",
            "2013 yılında Ege Üniversitesi’ne geri dönerek uzmanlık alanında çalışmaya devam eden Divarcı, 2018 yılında Çocuk Cerrahisi Doçenti unvanını almıştır. 2018-2023 yılları arasında Ege Üniversitesi’nde öğretim üyeliği yapan Divarcı, ABD’de Nationwide Çocuk Hastanesi’nde gözlemcilik yapmış ve Ege Üniversitesi Çocuk Kolorektal ve Pelvik Taban Merkezi’nin kurulmasına katkı sağlamıştır. 2023 yılında Ege Üniversitesi’ndeki görevinden ayrılarak özel muayenehanesinde çalışmaya başlamış, akademik hayatına İzmir Ekonomi Üniversitesi Tıp Fakültesi’nde devam etmektedir.",
            "Emre Divarcı, çocuklarda sünnet, kasık fıtığı, inmemiş testis, göğüs deformiteleri gibi rutin cerrahi sorunlar ve kolorektal cerrahi, robotik cerrahi, tiroid cerrahisi ve obezite cerrahisi gibi daha ileri düzeydeki konularda uzmanlaşmıştır. Çocuklarda dünyada ilk kez yapılan robotik dalak kisti ameliyatları ve izsiz tiroid cerrahisi ameliyatlarında görev almıştır. Ayrıca, uluslararası kongrelerde ödüller kazanmış ve robotik cerrahi konusunda sertifikaya sahiptir.",
            "Prof. Dr. Emre Divarcı, 50’nin üzerinde uluslararası bilimsel makale yayımlamış, çok sayıda ulusal ve uluslararası bildiride yer almıştır. TÜBİTAK 1001 araştırma projelerinde yer almış ve uluslararası kitaplarda bölümler yazmıştır. Ayrıca, çocuk cerrahisi alanında birçok ödül kazanmış, Türkiye Çocuk Cerrahisi Derneği ve Avrupa Çocuk Cerrahisi Derneği üyesidir.",

        ],
        imageUrl: "/images/speakers/prof_dr_emre_divarci.jpg",
        talkTitle: "MediVerse: Tıbbın Geleceği Kongresi'nde ‘‘Robotik Cerrahi Uygulamaları’’ oturumunu gerçekleştirecektir.",
    },
    {
        name: "Okan Ünsal",
        description: [
            "Cordamed şirketinde Clinical Sales Manager olarak görev yapmakta olup, özellikle Da Vinci Robotik Cerrahisi, Tele-Sağlık ve Tele-Tıp çözümleri, Tele-Cerrahi iş birliği ve Tele-Konsültasyon gibi ileri teknolojilere odaklanmaktadır. Ayrıca LivaNova Kalp-Akciğer Makinesi (CPB) konusunda deneyimlidir. Bahçeşehir Üniversitesi Biyomedikal Mühendisliği mezunu olan Ünsal, robotik cerrahi alanında geniş bir uzmanlığa sahiptir.",

        ],
        imageUrl: "/images/speakers/okan_unsal.jpeg",
        talkTitle: "MediVerse: Tıbbın Geleceği Kongresi’nde “Da Vinci Cerrahisi: Geçmişten Günümüze” başlıklı sponsorluk sunumunu gerçekleştirecektir.",
    },
    {
        name: "Özgür Özbebit",
        description: [
            "1975 yılında Kayseri’de doğmuş, üniversite eğitimini tamamladıktan sonra 2003 yılından itibaren Psikiyatri Uzmanı olarak çalışmaya başlamıştır. Mesleki deneyimini Didim Devlet Hastanesi, İpekyolu Devlet Hastanesi, Yüzüncü Yıl Üniversitesi ve Eskişehir Sağlık Müdürlüğü gibi kurumlarda geliştirmiştir. Eğitim hayatında çok yönlü bir yaklaşım sergileyerek Tıp Fakültesi'nin yanı sıra Sosyoloji, Hastane Kurum İşletmeciliği ve Spor Yönetimi alanlarında da eğitim almıştır. Ayrıca ODTÜ’den aldığı sertifikalarla pazarlama iletişimi, mikrodenetleyiciler ve katı cisim modelleme gibi alanlarda uzmanlaşmıştır.",
            "Dijital teknolojilere olan ilgisiyle tanınan Özbebit, sürekli gelişen teknolojiye ve özellikle Web3 ekosistemine hâkimdir. Bilgisayar ve yazılım becerileriyle hem profesyonel hem de kişisel projelerde aktif rol almaktadır. Kendini “beş kedi babası” olarak tanımlayacak kadar hayvansever olan Özbebit, sanatsal çalışmalar ve müzik terapisi gibi alanlara da ilgi duymaktadır. Kariyerini mesleki uzmanlık, dijital dünyaya uyum ve sürekli öğrenme anlayışıyla şekillendiren Özbebit, yenilikçi bakış açısını her zaman ön planda tutmaktadır."
        ],
        imageUrl: "/images/speakers/ozgur_ozbebit.jpg",
        talkTitle: "MediVerse: Tıbbın Geleceği Kongresi'nde 'Genel Cerrahi Uygulamalarda Yapay Zeka' oturumunu gerçekleştirecektir.",
    },
    {
        name: "Prof. Dr. Gürkan Ersoy",
        description: [
            "Dokuz Eylül Üniversitesi Tıp Fakültesi Acil Tıp Anabilim Dalı öğretim üyesidir. Afet Yönetimi doktora ve yüksek lisans programlarının kurucusu ve aktif eğitmenidir. Akademik Acil Tıp ve Afet Eğitim Araştırma Merkezi'nin yönetim kurulu başkanı ve müdür vekili olarak görev yapmaktadır. Ayrıca Tıp Fakültesi’nin 'Probleme Dayalı Eğitim' programında eğitim yönlendiricisi ve Spor Bilimleri Fakültesi’nde yönetim kurulu üyesidir."
        ],
        imageUrl: "/images/speakers/prof_dr_gurkan_ersoy.jpg",
        talkTitle: "MediVerse: Tıbbın Geleceği Kongresi'nde 'Yapay Zekanın Sağlıktaki Uygulamaları ve Acil Tıptaki Gelişmeler' oturumunu gerçekleştirecektir.",
    },
    {
        name: "Prof. Dr. Özge Yılmaz Küsbeci",
        description: [
            "İzmir Ekonomi Üniversitesi Tıp Fakültesi Nöroloji Anabilim Dalı'nda ve Medicalpoint Hastanesi’nde 2020 yılından bu yana tam zamanlı profesör olarak görev yapmaktadır. Daha önce İzmir Bozyaka Eğitim ve Araştırma Hastanesi’nde 7 yıl boyunca doçent doktor olarak çalışmış, Afyon Kocatepe Üniversitesi’nde ise 8 yıl görev almıştır. 2016 yılında UCSF Memory and Aging Center’da Visiting Scholar olarak bulunmuş, nöroloji ve klinik araştırmalar alanında uzmanlaşmıştır.",
        ],
        imageUrl: "/images/speakers/prof_dr_ozge_yilmaz_kusbeci.jpeg",
        talkTitle: "MediVerse: Tıbbın Geleceği Kongresi’nde ‘‘Alzheimer Hastalığı: Güncel Tedaviler ve Gelecekteki İlaçlar’’ başlıklı oturumunu gerçekleştirecektir.",
    },
    {
        name: "Dr. Özlem Ataman",
        description: [
            "1990 yılında Dokuz Eylül Üniversitesi Tıp Fakültesi’nden mezun oldu. 1997 yılında DEÜ Radyasyon Onkolojisi Anabilim Dalı’nda uzmanlık eğitimini tamamladı ve aynı bölümde iki yıl öğretim görevlisi olarak çalıştı. 1999-2003 yılları arasında Londra University College London’da (UCL) uygulamalı istatistik alanında doktorasını tamamladı. 2006 yılında ilaç sektörüne geçerek yeni ilaç araştırma ve geliştirme alanında büyük başarılar elde etti. Erken faz klinik araştırmalar ve radyasyon-yeni ajan kombinasyonları üzerine yoğunlaşarak birçok yenilikçi çalışmaya imza attı. EMA ve FDA süreçlerinde uzmanlaşarak yeni ilaçların onaylanmasını sağladı. Toplam 26 yayını bulunan Dr. Ataman, şu anda kendi danışmanlık şirketi “Commitment” aracılığıyla çalışmalarını sürdürmektedir."
        ],
        imageUrl: "/images/speakers/dr_ozlem_ataman.jpeg",
        talkTitle: "MediVerse: Tıbbın Geleceği Kongresi’nde ‘‘Kişiselleştirilmiş Tedaviler-Radyasyon Onkolojisi’’ başlıklı oturumunu gerçekleştirecektir.",
    },
    {
        name: "Prof. Dr. Murat Kılıç",
        description: [
            "1969 yılında İzmir’de doğdu. İzmir Bornova Anadolu Lisesi’ni tamamladıktan sonra Ege Üniversitesi Tıp Fakültesi’nden 1993 yılında mezun oldu. Genel cerrahi uzmanlık eğitimini Ege Üniversitesi Genel Cerrahi Kliniği’nde tamamladı ve 1999 yılında genel cerrahi uzmanı oldu. Ardından Amerika Birleşik Devletleri’nde Teksas Üniversitesi ve Baylor Tıp Fakültesi’nde organ nakli alanında üst uzmanlık eğitimi aldı.",
            "2001 yılı sonunda yurda dönen Prof. Dr. Kılıç, Ege Üniversitesi Genel Cerrahi Kliniği’nde karaciğer ve safra yolları cerrahisi ile karaciğer transplantasyonu alanlarında çalıştı. 2004-2009 yılları arasında doçent olarak görev yaptı. Mayıs 2009’dan bu yana İzmir Kent Hastanesi’nde görev yapmaktadır. Türkiye’de ilk defa başarıyla gerçekleştirilen split karaciğer transplantasyonu operasyonunu gerçekleştirdi.",
            "Özellikle canlı vericili karaciğer nakilleri alanındaki çalışmalarıyla uluslararası alanda tanınan Prof. Dr. Kılıç, Chicago (2002), Rio de Janeiro (2007), Valencia (2011) ve San Francisco (2012) gibi şehirlerde düzenlenen Dünya Karaciğer Transplantasyonu Kongreleri’nde ödüller aldı. 100’ü aşkın bilimsel makalesi uluslararası dergilerde yayımlanmıştır."
        ],
        imageUrl: "/images/speakers/prof_dr_murat_kilic.png",
        talkTitle: "MediVerse: Tıbbın Geleceği Kongresi’nde ‘‘Yaşam Zinciri: Organ Naklinin Dünü, Bugünü ve Yarını’’ başlıklı oturumunu gerçekleştirecektir.",
    },
    {
        name: "Prof. Dr. Ayşe Semra Koçtürk",
        description: [
            "Eğitim hayatını biyokimya alanında ilerleterek uluslararası düzeyde akademik ve bilimsel çalışmalarda bulunmuş önemli bir bilim insanıdır. 1981-1985 yılları arasında Ege Üniversitesi Fen Fakültesi Biyokimya Bölümü’nde lisans eğitimini tamamladı. Daha sonra Dokuz Eylül Üniversitesi Sağlık Bilimleri Enstitüsü’nde 1986-1989 yılları arasında biyokimya alanında yüksek lisans yaptı. Doktora eğitimini yine aynı üniversitede, biyokimya dalında 1990-1996 yılları arasında tamamladı. 2004-2005 yılları arasında ise Almanya’da Charite Universitaetsmedizin Berlin ve Max Delbrück Merkezi’nde kanser araştırmaları üzerine post doktora çalışmalarını gerçekleştirdi.",
            "Prof. Dr. Koçtürk, mesleki gelişimine katkı sağlayan birçok ulusal ve uluslararası eğitim, kurs ve sertifika programına katılmıştır. Bunlar arasında European Cell Death Organization (ECDO) tarafından düzenlenen hücresel ölüm mekanizmaları ve genetik yollar üzerine eğitimler, NATO-FEBS-UNESCO işbirliğiyle gerçekleştirilen oksidatif stres ve serbest radikaller üzerine ileri düzey kurslar, Moskova Üniversitesi'nde düzenlenen mitokondri üzerine FEBS eğitimleri gibi alanında çığır açan etkinlikler bulunmaktadır. Ayrıca, protein izolasyonu, membran proteinleri ve biyokimyasal araştırma yöntemleri üzerine çeşitli eğitimler almıştır.",
            "Akademik çalışmaları, biyokimyasal süreçlerin sağlık ve hastalıklarla ilişkisini anlamada önemli katkılar sağlamıştır. Özellikle 'Bakır Depletion’unun Merkezi Sinir Sisteminin Gelişimi Üzerindeki Etkilerinin Biyokimyasal ve Enzimatik Parametrelerle İncelenmesi' başlıklı doktora tezi, biyokimya alanında değerli bir yere sahiptir. Yüksek lisans tezinde ise prostatik asit fosfataz enzimine özgü STMP substratının biyokimyasal yöntemlerdeki önemini incelemiştir.",
            "Prof. Dr. Ayşe Semra Koçtürk’ün ulusal ve uluslararası birçok projede yer alması, biyokimya alanındaki uzmanlığını farklı disiplinlere entegre ederek bilim dünyasına değerli katkılarda bulunmasını sağlamıştır.",
        ],
        imageUrl: "/images/speakers/prof_dr_ayse_semra_kocturk.jpg",
        talkTitle: "MediVerse: Tıbbın Geleceği Kongresi’nde “Hücre Ölümü ve Gelecekteki Tedavi Yaklaşımlarında Önemi” başlıklı oturumunu gerçekleştirecektir.",
    },
    {
        name: "Dr. Yağmur Özbek İşbitiren",
        description: [
            "İzmir Ekonomi Üniversitesi’nde araştırma görevlisi olarak çalışmakta ve sinir bilimi alanında uzmanlaşmıştır. Dokuz Eylül Üniversitesi’nde Sinir Bilimi yüksek lisansını (2016-2018) tamamladıktan sonra aynı alanda doktorasını (2019-2023) tamamlamıştır. 2012-2016 yılları arasında İzmir Ekonomi Üniversitesi Psikoloji bölümünden mezun olmuştur. Akademik yolculuğu boyunca psikoloji ve sinir bilimi disiplinlerini birleştiren çalışmalara odaklanmıştır.",

        ],
        imageUrl: "/images/speakers/yagmur_ozbek_isbitiren.jpeg",
        talkTitle: "MediVerse: Tıbbın Geleceği Kongresi’nde “Nörodejeneratif hastalıklarda VR ile kognitif rehabilitasyon” başlıklı oturumda konuşmacı olarak yer alacaktır.",
    },
    {
        name: "Doç. Dr. Zehra İlke Akyıldız",
        description: [
            "Geniş akademik birikimi ve çok yönlü çalışmalarıyla kardiyoloji ve fitoterapi alanlarında dikkat çeken bir bilim insanıdır. 1993 yılında İzmir Fen Lisesi’nden mezun olduktan sonra, 2000 yılında Hacettepe Üniversitesi İngilizce Tıp Fakültesi’nden Tıp Doktoru unvanını aldı. Tıpta uzmanlık eğitimini 2002-2007 yılları arasında Dokuz Eylül Üniversitesi Kardiyoloji Anabilim Dalı’nda tamamladı ve 'Tip II diabetes mellitus hastalarında endotel disfonksiyonunun ve karotis intima media kalınlığının koroner arter hastalığı için öngördürücü yeri var mıdır?' başlıklı teziyle Kardiyoloji Uzmanı oldu. Bu çalışması, Avrupa Kardiyoloji Cemiyeti'nin 2007 kongresinde poster bildiri olarak sunulmaya değer görüldü.",
            "Kariyerine İzmir Atatürk Eğitim ve Araştırma Hastanesi’nde başlayan Dr. Akyıldız, 2010 yılında Avrupa Kardiyoloji Cemiyeti tarafından 'Future Leaders in Cardiology' grubuna Türk Kardiyoloji Derneği’ni temsilen seçildi. Daha sonra İzmir Katip Çelebi Üniversitesi’nde kardiyoloji alanında hem klinik hem de eğitim faaliyetlerinde bulundu. Bu süreçte ekokardiyografi laboratuvarı sorumluluğunu üstlendi ve organ nakil merkezi ekibinde yer alarak böbrek nakli süreçlerinde aktif görev aldı.",
            "2016 yılında Kardiyoloji dalında Üniversite Doçenti unvanını kazanan Akyıldız, ulusal ve uluslararası birçok projede araştırmacı olarak yer aldı. 'Reality-HF' ve 'EuroAspire-IV' gibi projeler kapsamında kalp yetmezliği ve koroner arter hastalığı üzerine çalışmalarda bulundu. Ayrıca, İzmir Katip Çelebi Üniversitesi Tıp Fakültesi öğrencilerine lisans düzeyinde eğitim verdi.",
            "Bilimsel ilgi alanlarını genişleterek 2020 yılında Ege Üniversitesi Farmakognozi/Fitoterapi programından yüksek lisansını tamamladı ve hiperplidemi tedavisinde fitoterapötiklerin antioksidan ve pro-oksidan özellikleri üzerine çalıştı. Halen Ege Üniversitesi Spor Sağlık Bilimleri alanında doktora eğitimine devam etmektedir.",
            "2019 yılından itibaren İzmir Ekonomi Üniversitesi Tıp Fakültesi’nde yarı zamanlı öğretim elemanı olarak görev yapan Dr. Akyıldız, öğrencilere İngilizce olarak kardiyoloji dersleri vermektedir. Ayrıca 2018 yılından itibaren özel muayenehanesinde kardiyoloji uzmanı ve fitoterapi uzmanı olarak hizmet sunmaktadır. Kendisi aynı zamanda Türkiye Sutopu Federasyonu Eğitim Kurulu’nda görev almakta ve aktif bilimsel çalışmalarını sürdürmektedir.",

        ],
        imageUrl: "/images/speakers/zehra_ilke_akyildiz.jpg",
        talkTitle: "MediVerse: Tıbbın Geleceği Kongresi’nde 'Gerçek Çevre Temelli Sanal Gerçeklik Psikososyal Tedavisi Şizofreni' başlıklı oturumda konuşmacı olarak yer alacaktır. PANEL:Yapay Zekanın Birinci Basamak Sağlık Hizmetlerindeki Rolü ve Geleceği",
    },
    {
        name: "Prof. Dr. Vildan Mevsim",
        description: [
            "1990 yılında Ege Üniversitesi Tıp Fakültesi’nden mezun oldu. 1998 yılında Ege Üniversitesi Sağlık Bilimleri Enstitüsü’nde Halk Sağlığı alanında doktorasını tamamladı. Akademik kariyerine Dokuz Eylül Üniversitesi Tıp Fakültesi’nde başlayan Prof. Dr. Mevsim, 2002-2005 yılları arasında öğretim görevlisi, 2005-2009 yılları arasında yardımcı doçent, 2009-2014 yılları arasında doçent ve 2014 yılından itibaren profesör olarak Dahili Tıp Bilimleri Bölümü’nde görev yapmaktadır. Halk sağlığı alanındaki çalışmalarıyla tanınan Prof. Dr. Mevsim, akademik kariyerine halen devam etmektedir."
        ],
        imageUrl: "/images/speakers/prof_dr_vildan_mevsim.jpg",
        talkTitle: "MediVerse: Tıbbın Geleceği Kongresi'nde 'Yapay Zekanın Sağlıktaki Uygulamaları ve Acil Tıptaki Gelişmeler' oturumunu gerçekleştirecektir.",
    },
    {
        name: "Ecem Saygılı",
        description: [
            "Ege Üniversitesi'nde Biyomühendislik  alanında yüksek lisans ve doktora derecelerini tamamlamış, 2022 yılında doktorasını tamamladıktan sonra İzmir Demokrasi Üniversitesi'nde Yardımcı Doçent olarak akademik kariyerine devam etmektedir. Akademik hayatı boyunca, University of Pittsburgh, Seoul National University, Harvard Medical School, KTH Royal Institute of Technology ve Hamburg University of Technology gibi prestijli kurumlarda araştırma ve staj deneyimleri edinmiştir. Mikroakışkan sistemler, biyomalzeme üretimi ve tıbbi teşhis teknolojileri gibi alanlarda uzmanlaşan Saygılı, uluslararası düzeyde önemli projelerde görev almış ve biyomühendislik alanında dikkat çeken çalışmalara imza atmıştır. Mediverse Kongresinde ''PANEL'' oturumundaki konuklardan biridir."
        ],
        imageUrl: "/images/speakers/ass_prof_ecem_saygili.png",
        talkTitle: "",
    },
    {
        name: "Borabay Erbay",
        description: [
            "Lisans eğitimimi Ege Üniversitesi Sosyoloji Bölümü'nde tamamladıktan sonra, aynı üniversitede Genel Sosyoloji ve Metodoloji Ana Bilim Dalı'nda yüksek lisans eğitimine başladı. Sanat ve daha özelde müzik sosyolojisine ilgim neticesinde Howard S. Becker ve Pierre Bourdieu sosyolojilerinde sanat eylemi üzerine yüksek lisans tezimi savunarak mezun oldu.",
            "Doktora eğitimime Aydın Adnan Menderes Üniversitesi Sosyoloji Anabilim Dalı'nda devam etmekte."
        ],
        imageUrl: "/images/speakers/borabay_erbay.jpg",
        talkTitle: "",
    },
    {
        name: "Can Erdi Kara",
        description: [
            "ODTÜ Havacılık ve Uzay Mühendisliği bölümünden 2009 yılında mezun olmuş, 2001-2005 yılları arasında Bornova Anadolu Lisesi'nde eğitim görmüştür. Kariyerine Roketsan'da sistem mühendisliği yaparak başlamış, 2010-2016 yılları arasında bu pozisyonda çalışmıştır. 2017 yılında CHARA şirketini, 2022 yılında ise Appelier Yazılım ve Danışmanlık Hizmetleri Ltd. Şti.'yi kurarak girişimcilik alanına adım atmıştır. Halen bu şirketlerin kurucusu ve yöneticisi olarak çalışmalarını sürdürmektedir.",
            "Mediverse Kongresinde ''PANEL'' oturumundaki konuklardan biridir."
        ],
        imageUrl: "/images/speakers/can_erdi_kara.jpeg",
        talkTitle: "",
    }, 
    /*     {
            name: "",
            description: [
                ""
            ],
            imageUrl: "/speaker3.jpg",
            talkTitle: "",
        }, */

];

export default function Speakers() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-900 to-blue-700 p-6">
            <h1 className="text-4xl font-bold text-white text-center mb-8">Kongre Konuşmacıları</h1>

            <div className="space-y-6 max-w-4xl mx-auto">
                {speakers.map((speaker, index) => (
                    <SpeakerCard
                        key={index}
                        name={speaker.name}
                        description={speaker.description}
                        imageUrl={speaker.imageUrl}
                        talkTitle={speaker.talkTitle}
                    />
                ))}
            </div>
        </div>
    );
}