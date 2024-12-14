import React from "react";
import Image from "next/image";

interface SponsorCardProps {
    name: string;
    imageSrc: string;
    category: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ name, imageSrc, category }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md text-center">
            <Image
                src={imageSrc}
                alt={name}
                width={96}
                height={96}
                className="object-contain mb-2"
            />
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">{category}</p>
        </div >
    );
};

const sponsors = [
    {
        name: "Niki The Cat Coffee",
        imageSrc: "/images/niki.png",
        category: "Kahve Molası Sponsoru",
    },
    {
        name: "İzmir Büyükşehir Belediyesi",
        imageSrc: "/images/izmir.png",
        category: "Destekçi",
    },
    {
        name: "Cordamed",
        imageSrc: "/images/cordamed.png",
        category: "Atölye Sponsoru",
    },
    {
        name: "Yves Rocher",
        imageSrc: "/images/yves.png",
        category: "Çekiliş Sponsoru",
    },
    {
        name: "Dodo Pizza",
        imageSrc: "/images/dodo.png",
        category: "Yemek Sponsoru",
    },
    {
        name: "Medical Point",
        imageSrc: "/images/medicalpoint.png",
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