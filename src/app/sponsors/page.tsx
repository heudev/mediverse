import React from "react";

interface SponsorCardProps {
    name: string;
    imageSrc: string;
    category: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ name, imageSrc, category }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center p-4 border rounded-lg bg-white shadow-lg">
            <div className="flex items-center justify-center w-full h-40 bg-gray-100">
                <img
                    src={imageSrc}
                    alt={name}
                    className="max-h-full max-w-full object-contain"
                />
            </div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">{category}</p>
        </div >
    );
};

const sponsors = [
    {
        name: "Niki The Cat Coffee",
        imageSrc: "/images/sponsors/niki.jpg",
        category: "Kahve Molası Sponsoru",
    },
    {
        name: "İzmir Büyükşehir Belediyesi",
        imageSrc: "/images/sponsors/izmir.jpg",
        category: "Kahve Molası Sponsoru",
    },
    {
        name: "Cordamed",
        imageSrc: "/images/sponsors/cordamed.png",
        category: "Atölye Sponsoru",
    },
    {
        name: "Erbayraktar Özel Tıp Laboratuvarları",
        imageSrc: "/images/sponsors/erbayraktar.jpg",
        category: "Ürün Sponsoru",
    },
    {
        name: "TusData",
        imageSrc: "/images/sponsors/tusData.jpg",
        category: "Maddi Sponsoru",
    },/*
    {
        name: "Yves Rocher",
        imageSrc: "/images/sponsors/yves.png",
        category: "Çekiliş Sponsoru",
    },
    {
        name: "Dodo Pizza",
        imageSrc: "/images/dodo.png",
        category: "Yemek Sponsoru",
    },*/
    {
        name: "Medical Point",
        imageSrc: "/images/sponsors/medicalpoint.png",
        category: "Maddi Sponsoru",
    },
    {
        name: "Gemini",
        imageSrc: "/images/sponsors/gemini.png",
        category: "Maddi Sponsoru",
    },
    
];

export default function Sponsors() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-800 p-8">
            <h1 className="text-4xl text-white font-bold text-center mb-12">
                Sponsorlarımız
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {sponsors.map((sponsor) => (
                    <SponsorCard
                        key={sponsor.name}
                        name={sponsor.name}
                        imageSrc={sponsor.imageSrc}
                        category={sponsor.category}
                    />
                ))}
            </div>
        </div>
    );
};