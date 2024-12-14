import React from "react";

const scheduleData = [
    {
        day: "1. Gün",
        events: [
            { time: "08:00", title: "Açılış Konuşması" },
            { time: "09:00", title: "React ile Geliştirme" },
            { time: "10:00", title: "Tailwind CSS Workshop" },
            { time: "11:00", title: "Ara / Kahve Molası" },
            { time: "13:00", title: "TypeScript'e Giriş" },
            { time: "15:00", title: "Proje Sunumları" },
        ],
    },
    {
        day: "2. Gün",
        events: [
            { time: "08:00", title: "Günaydın Buluşması" },
            { time: "09:00", title: "Next.js Konferansı" },
            { time: "10:00", title: "Performans Optimizasyonu" },
            { time: "11:00", title: "Ara / Kahve Molası" },
            { time: "14:00", title: "Panel Tartışması" },
            { time: "17:00", title: "Kapanış ve Teşekkürler" },
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
                            {day.events.map((event, idx) => (
                                <div
                                    key={idx}
                                    className="flex justify-between items-center border-b pb-2"
                                >
                                    <span className="text-lg font-semibold text-purple-600">{event.time}</span>
                                    <span className="text-gray-800">{event.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
