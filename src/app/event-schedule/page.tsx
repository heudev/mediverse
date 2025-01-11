import React from "react";

const scheduleData = [
    {
        day: "15 Şubat 2025",
        events: [
            { time: "09.00-09.20", title: "Açılış Konuşması", speaker: "Dekan Prof. Dr.Makbule İlgi Şemin" },
            { time: "09.20-10.00", title: "Genel Cerrahi Uygulamalarında Yapay Zeka", speaker: "Prof. Dr. Gökhan Akbulut" },
            { time: "", title: "Kahve Molası", speaker: "" },
            { time: "10.15-10.55", title: "Ortopedik Yaklaşımların Dünü, Bugünü ve Geleceği", speaker: "Prof. Dr. Tulgar Toros" },
            { time: "", title: "Kahve Molası", speaker: "" },
            { time: "11.05-11.45", title: "Göğüs Hastalılarında Yenilikçi Uygulamalar", speaker: "Doç. Dr. Özgür Samancılar" },
            { time: "", title: "Kahve Molası", speaker: "" },
            { time: "12.00-12.40", title: "Robotik Cerrahi Uygulamaları", speaker: "Prof. Dr. Emre Divarcı" },
            { time: "", title: "Öğlen Yemeği", speaker: "" },
            { time: "13.20-14.20", title: "ATÖLYELER", speaker: "" },
            { time: "", title: "Kahve Molası", speaker: "" },
            { time: "14.35-15.15", title: "Da Vinci Cerrahisi Geçmişten Günümüze", speaker: "Sponsorluk Sunumu: Okan Ünsal" },
            { time: "", title: "Kahve Molası", speaker: "" },
            { time: "15.30-16.10", title: "Yapay Zekanın Sağlıktaki Uygulamaları ve Acil Tıptaki Gelişmeler", speaker: "Prof. Dr. Gürkan Ersoy" },
            { time: "", title: "Kahve Molası", speaker: "" },
            { time: "16.20-17.00", title: "Yapay Zeka ve Psikoterapi Uygulamaları", speaker: "Uzm. Dr. Özgür Özbebit" },
        ],
    },
    {
        day: "16 Şubat 2025",
        events: [
            { time: "09.00-09.40", title: "Alzheimer Hastalığı Güncel Tedavisi ve Yeni Gelecek İlaçlar", speaker: "Prof. Dr. Özge Yılmaz Küsbeci" },
            { time: "", title: "Kahve Molası", speaker: "" },
            { time: "09.50-10.30", title: "PANEL", speaker: "Prof. Dr. Vildan Mevsim & Dr. Öğr. Üyesi Ecem Saygılı && Borabey Erbay & Can Erdi Kara", },
            { time: "", title: "Kahve Molası", speaker: "" },
            { time: "10.40-11.20", title: "Kişiselleştirilmiş Tedaviler - Radyasyon Onkolojisi", speaker: "Dr. Özlem Ataman" },
            { time: "", title: "Kahve Molası", speaker: "" },
            { time: "11.30-12.10", title: "Hücre Ölümlü ve Geleckteki Tedavi Yaklaşımlarında Önemi", speaker: "Prof. Dr. Ayşe Semra Koçtürk" },
            { time: "12.10-12.25", title: "Gençlik Çalışmaları ve Gönüllülük", speaker: "Genç İzmir" },
            { time: "", title: "Öğlen Yemeği", speaker: "" },
            { time: "13.10-14.10", title: "ATÖLYELER", speaker: "" },
            { time: "", title: "Kahve Molası", speaker: "" },
            { time: "14.20-15.00", title: "Yaşam Zinciri: Organ Naklinin Dünü, Bugünü ve Yarını", speaker: "Prof. Dr. Murat Kılıç" },
            { time: "", title: "Kahve Molası", speaker: "" },
            { time: "15.10-15.50", title: "Nörodejeneratif hastalıklarda VR ile kognitif rehabilitasyon", speaker: "Yağmur Özbek İşbitiren" },
            { time: "", title: "Kahve Molası", speaker: "" },
            { time: "16.00-16.40", title: "Kardiyolojide Yenilikler", speaker: "Doç. Dr. Zehra İlke Akyıldız" },
            { time: "", title: "Kahve Molası", speaker: "" },
            { time: "16.40-17.00", title: "Kapanış", speaker: "" },
        ],
    },
];

export default function EventSchedule() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 p-4">
            <h1 className="text-4xl font-extrabold text-center mb-8 text-purple-800">Kongre Programı</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {scheduleData.map((day, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-purple-500">
                        <h2 className="text-2xl font-bold mb-4 text-purple-700">{day.day}</h2>
                        <div className="space-y-4">
                            {day.events.map((event, idx) => {
                                const nextEvent = day.events[idx + 1];
                                const isNextBreak =
                                    nextEvent?.title === "Kahve Molası" || nextEvent?.title === "Öğlen Yemeği";

                                return (
                                    <div
                                        key={idx}
                                        className={`${
                                            event.title === "Kahve Molası"
                                                ? "bg-purple-500 text-white text-center py-2 rounded-md"
                                                : event.title === "Öğlen Yemeği"
                                                ? "bg-pink-500 text-white text-center py-2 rounded-md"
                                                : "flex justify-between items-center"
                                        } ${!isNextBreak && event.title !== "Kahve Molası" && event.title !== "Öğlen Yemeği" ? "border-b pb-2" : ""}`}
                                    >
                                        {event.title === "Kahve Molası" || event.title === "Öğlen Yemeği" ? (
                                            <span className="text-sm font-semibold">{event.title}</span>
                                        ) : (
                                            <>
                                                <span className="text-lg font-semibold text-purple-500">
                                                    {event.time}
                                                </span>
                                                <div className="flex flex-col text-right">
                                                    <span className="text-gray-800">{event.title}</span>
                                                    {event.speaker && event.speaker.includes('&') ? (
                                                        <div className="flex flex-col text-gray-700 font-bold">
                                                            {event.speaker.split(" && ").map((speaker, index) => (
                                                                <span key={index}>{speaker}</span>
                                                            ))}
                                                        </div>
                                                    ) : (
                                                        event.speaker && (
                                                            <span className="text-gray-700 font-bold">{event.speaker}</span>
                                                        )
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
