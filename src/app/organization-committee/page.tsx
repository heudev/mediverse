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
            { name: "Aysu Buse ZAMANDAR ", photoUrl: "/images/organization-committee/useravatar.png" },
            { name: "Mine Özgün Barış", photoUrl: "/images/organization-committee/mine_ozgun_baris.jpeg" },
            { name: "Şevval Kıvrak", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
        ],
    },
    {
        name: "Katılımcılardan Sorumlu Organizasyon Komitesi Üyeleri",
        members: [
            { name: "Hande Aşçı", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
            { name: "Aslı Ela Akkaplan", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
            { name: "İlayda Özbebit", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
        ],
    },
    {
        name: "Konuşmacılardan Sorumlu Organizasyon Komitesi Üyeleri",
        members: [
            { name: "Hande Aşçı", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
            { name: "Aslı Ela Akkaplan", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
            { name: "İlayda Özbebit", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
        ],
    },
    {
        name: "Basın ve Tasarım Organizasyon Komitesi Üyeleri",
        members: [
            { name: "Hande Aşçı", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
            { name: "Aslı Ela Akkaplan", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
            { name: "İlayda Özbebit", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
        ],
    },
    {
        name: "Atölyelerden Sorumlu Organizasyon Komitesi Üyeleri",
        members: [
            { name: "Hande Aşçı", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
            { name: "Aslı Ela Akkaplan", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
            { name: "İlayda Özbebit", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
        ],
    },
    {
        name: "Oturum ve Salon Organizasyon Komitesi Üyeleri",
        members: [
            { name: "Hande Aşçı", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
            { name: "Aslı Ela Akkaplan", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
            { name: "İlayda Özbebit", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
        ],
    },
    {
        name: "Mali İşler ve Sponsorluk Organizasyon Komitesi Üyeleri",
        members: [
            { name: "Hande Aşçı", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
            { name: "Aslı Ela Akkaplan", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
            { name: "İlayda Özbebit", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
        ],
    },
    {
        name: "Poster Sunumlarından Sorumlu Organizasyon Komitesi Üyeleri",
        members: [
            { name: "Hande Aşçı", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
            { name: "Aslı Ela Akkaplan", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
            { name: "İlayda Özbebit", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
        ],
    },
    {
        name: "Websitesi",
        members: [
            { name: "Hande Aşçı", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
            { name: "Aslı Ela Akkaplan", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
            { name: "İlayda Özbebit", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
        ],
    },
    {
        name: "Sosyal Etkinlikten Sorumlu Organizasyon Komitesi Üyeleri",
        members: [
            { name: "Hande Aşçı", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
            { name: "Aslı Ela Akkaplan", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
            { name: "İlayda Özbebit", photoUrl: "/images/organization-committee/alara_rodoplu.jpeg" },
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