"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export interface Committee {
    name: string;
    members: { name: string; photoUrl: string }[];
}

const committees: Committee[] = [
    {
        name: " Organizasyon Komitesi Yönetim Kurulu",
        members: [
            { name: "Alara Rodoplu", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
            { name: "Aysu Buse Zamandar", photoUrl: "/images/organization-committee/aysu_buse_zamandar.jpeg" },
            { name: "EchoBot", photoUrl: "/images/logo/echoBot.svg" },
            { name: "Mine Özgün Barış", photoUrl: "/images/organization-committee/mine_ozgun_baris.jpeg" },
            { name: "Ceren Ayık", photoUrl: "/images/organization-committee/ceren_ayik.jpeg" },
            { name: "Duru Tunca", photoUrl: "/images/organization-committee/duru_tunca.jpg" },
        ],
    },
    {
        name: "Katılımcılardan Sorumlu Organizasyon Komitesi Üyeleri",
        members: [
            { name: "Meltem Yalçın", photoUrl: "/images/organization-committee/meltem_yalcin.jpeg" },
            { name: "Ceren Sertkaya", photoUrl: "/images/organization-committee/ceren_sertkaya.jpeg" },
            { name: "Atena Pashapourkhoei Lorp", photoUrl: "/images/organization-committee/atena_pashapourkhoei.jpeg" },
            { name: "Mahshad Shahmohammadi", photoUrl: "/images/organization-committee/mahshad_shahmohammadi.jpeg" },
            { name: "Mohaddeseh Abeshtani", photoUrl: "/images/organization-committee/mohaddeseh_abeshtani.jpeg" },
        ],
    },
    {
        name: "Konuşmacılardan Sorumlu Organizasyon Komitesi Üyeleri",
        members: [
            { name: "İrem Özdemir", photoUrl: "/images/organization-committee/irem_ozdemir.jpeg" },
            { name: "Sıla Başdaş", photoUrl: "/images/organization-committee/sila_basdas.jpeg" },
            { name: "Şeva Alişer", photoUrl: "/images/organization-committee/seva_aliser.jpeg" },
            { name: "Şevval Kıvrak", photoUrl: "/images/organization-committee/sevval_kivrak.jpeg" },
        ],
    },
    {
        name: "Basın ve Tasarım Organizasyon Komitesi Üyeleri",
        members: [
            { name: "Hande Aşıcı", photoUrl: "/images/organization-committee/hande_asici.jpg" },
            { name: "Aslı Ela Akkaplan", photoUrl: "/images/organization-committee/asli_ela_akkaplan.jpg" },
            { name: "İlayda Özbebit", photoUrl: "/images/organization-committee/ilayda_ozbebit.jpeg" },
        ],
    },
    {
        name: "Atölyelerden Sorumlu Organizasyon Komitesi Üyeleri",
        members: [
            { name: "Berfin Bahar Türkdoğan", photoUrl: "/images/organization-committee/berfin_bahar_turkdogan.jpg" },
            { name: "Övünç Güney", photoUrl: "/images/organization-committee/ovunc_guney.jpeg" },
            { name: "Rana Omar", photoUrl: "/images/organization-committee/rana_omar.jpeg" },
        ],
    },
    {
        name: "Oturum ve Salon Organizasyon Komitesi Üyeleri",
        members: [
            { name: "Iraz Çelikbaş", photoUrl: "/images/organization-committee/iraz_celikbas.jpeg" },
            { name: "Bağdat Goncasu Kobak", photoUrl: "/images/organization-committee/bagdat_goncasu_kobak.jpg" },
        ],
    },
    {
        name: "Organizasyon Komitesi Danışmanı",
        members: [
            { name: "Arda Can Akyüz", photoUrl: "/images/organization-committee/arda_can_akyuz.jpeg" },
        ],
    },
    {
        name: "Poster Sunumlarından Sorumlu Organizasyon Komitesi Üyeleri",
        members: [
            { name: "Alara Rodoplu", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
            { name: "Ceren Ayık", photoUrl: "/images/organization-committee/ceren_ayik.jpeg" },
            { name: "Duru Tunca", photoUrl: "/images/organization-committee/duru_tunca.jpg" },
        ],
    },
    {
        name: "Websitesi",
        members: [
            { name: "Enes Uysal", photoUrl: "/images/organization-committee/enes_uysal.jpeg" },
            { name: "Sezen Çetinkaya", photoUrl: "/images/organization-committee/sezen_cetinkaya.jpg" },
        ],
    },
    {
        name: "Sosyal Etkinlikten Sorumlu Organizasyon Komitesi Üyeleri",
        members: [
            { name: "Buse Eraslan", photoUrl: "/images/organization-committee/buse_eraslan.jpg" },
        ],
    },
];

export default function OrganizationCommittee() {
    const [selectedCommittee, setSelectedCommittee] = useState<Committee | null>(null);
    const photosSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (selectedCommittee) {
            photosSectionRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [selectedCommittee]);

    const handleCommitteeClick = (committee: Committee) => {
        setSelectedCommittee(committee);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-700 p-10 text-white">
            <h1 className="text-3xl font-bold mb-8">Organizasyon Komiteleri</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {committees.map((committee, index) => (
                    <div
                        key={index}
                        onClick={() => handleCommitteeClick(committee)}
                        className="bg-white text-blue-900 p-6 rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-all hover:scale-105"
                    >
                        <h2 className="text-xl font-semibold">{committee.name}</h2>
                    </div>
                ))}
            </div>

            {selectedCommittee && (
                <div ref={photosSectionRef} className="mt-10">
                    <h2 className="text-2xl font-bold">{selectedCommittee.name}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                        {selectedCommittee.members.map((member, index) => (
                            <div
                                key={index}
                                className="bg-blue-800 p-4 rounded-lg text-center shadow-lg"
                            >
                                <Image
                                    src={member.photoUrl}
                                    alt={member.name}
                                    width={96}
                                    height={96}
                                    className="rounded-full mx-auto mb-2 object-cover w-32 h-32"
                                />
                                {member.name}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};