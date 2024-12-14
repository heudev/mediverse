import React from "react";

interface EventCardProps {
    title: string;
    people: string[];
}

const EventCard: React.FC<EventCardProps> = ({ title, people }) => {
    return (
        <div className="p-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">{title}</h3>
            <ul className="mt-2 space-y-1">
                {people.map((person, index) => (
                    <li key={index} className="text-sm">
                        {person}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default function Workshops() {
    const saturdayEvents = [
        { title: "The Case Files: Diagnosis Edition", people: ["Prof. Dr. İncin Bezircioğlu", "Prof. Dr. Oğuz Kılınç"] },
        { title: "Sütür Atma Atölyesi", people: ["Op. Dr. Barış Zamandar"] },
        { title: "Yeni Sağlık Hizmetleri ve Cinsiyet Kavramı", people: [] },
        { title: "Argüman Analizi", people: ["Ali Burak Özkaya"] },
        { title: "Da Vinci Uygulama Atölyesi", people: ["CordaMed"] },
        { title: "Tanı Dedektifleri: Patolojinin Gizemi", people: ["Özge Ertener"] },
        { title: "Tıpta Girişimcilik", people: ["Doğa Özdengülsün"] },
        { title: "Tıp Eğitiminde Yeni Yöntemler", people: ["Gemini Bilgi"] },
    ];

    const sundayEvents = [
        { title: "Hayat Tıbbı", people: ["Prof. Dr. Kamer Mutafoğlu"] },
        { title: "Otofaji", people: ["Ali Burak Özkaya"] },
        {
            title: "Biyomedikal Perspektiften Zihin ve Duyular",
            people: ["Sude Pehlivan Akbuday", "Burak Akküdag"],
        },
        { title: "Dijital Kirlilik ve Sağlık", people: ["Lets Do It"] },
        {
            title: "Kendi İlacını Tasarla: Farmakoloji ve Moleküler Simülasyon",
            people: ["Prof. Dr. Mehmet Tosun", "Elif Barış"],
        },
        { title: "Teletıp", people: ["Prof. Dr. Görsel Altınışık Ergür"] },
        { title: "Sağlıklı Yaşam", people: ["Dr. Gül Kulan"] },
        { title: "Glukometre Probu", people: ["Yalın Kılıç"] },
        {
            title: "Sosyal Medya İçerikleri ile Tıp Eğitimi",
            people: ["Onur Gülel"],
        },
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
                            <EventCard key={index} title={event.title} people={event.people} />
                        ))}
                    </div>
                </section>
                <section className="mt-10">
                    <h2 className="text-2xl font-bold mb-4">16 Şubat Pazar</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {sundayEvents.map((event, index) => (
                            <EventCard key={index} title={event.title} people={event.people} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}