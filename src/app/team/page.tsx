
"use client";
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import '@/components/Hero.css';
import './teamCard.css';
import { teamData } from '@/constants/members';
import Contact from "@/components/Contact"
import Image from 'next/image';

interface TeamProps {
    name: string;
    imageUrl: string;
}

export default function Team() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-gradient-to-r from-blue-950 to-purple-950">

            <div className="absolute inset-0 z-0">
                <div className="animation-bg"></div>
            </div>

            <Navbar />
            <Menu />
            <Contact />
        </main>
    );
}

export function Menu() {
    const [activeTeam, setActiveTeam] = useState<string | null>(null);

    const teamTitles = {
        Organization: "Organizasyon Komitesi Yönetim Kurulu",
        Participant: "Katılımcılardan Sorumlu Organizayon Komitesi Üyeleri",
        Speaker: "Konuşmacılardan Sorumlu Organizayon Komitesi Üyeleri",
        Press: "Basın ve Tasarım Organizayon Komitesi Üyeleri",
        WorkShops: "Atölyelerden Sorumlu Organizayon Komitesi Üyeleri",
        Sessions: "Oturum ve Salon Organizayon Komitesi Üyeleri",
        Finance: "Mali İşler ve Sponsorluk Organizayon Komitesi Üyeleri",
        Poster: "Poster Sunumlarından Sorumlu Organizayon Komitesi Üyeleri",
        Website: "Websitesi",
        Activity: "Sosyal Etkinlikten Sorumlu Organizayon Komitesi Üyeleri",
      };
      

    return (
        <div className="relative flex flex-col items-center">
            {/* Team Selection Menu */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 p-4 w-full mb-12 mt-12">
                {["Organization", "Participant", "Speaker", "Press", "WorkShops", "Sessions", "Finance", "Poster", "Website", "Activity"].map(
                    (team) => (
                        <li key={team} className="flex justify-center">
                            <button
                                onClick={() => setActiveTeam(team)}
                                className="w-full h-32 flex flex-row items-center justify-center space-x-4 text-lg transition-transform duration-200 rounded-lg hover:scale-105"
                            >
                                <Image
                                    src={`/images/commitees/${team.toLowerCase()}.svg`}
                                    alt={`${team} team`}
                                    width={250}
                                    height={250}
                                />
                            </button>
                        </li>
                    )
                )}
            </ul>

            {/* Modal */}
            {activeTeam && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Background Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                    {/* Modal Content */}
                    <div className="relative bg-violet-600 rounded-lg shadow-lg w-3/4 max-w-4xl p-6 z-10">
                        {/* Close Button */}
                        <button
                            onClick={() => setActiveTeam(null)}
                            className="absolute top-4 right-12 text-gray-100 hover:text-black"
                        >
                            <span className="text-2xl font-bold">&times;</span>
                        </button>

                        {/* Modal Content */}
                        <div className="overflow-y-auto text-gray-100 h-full p-6">

                            <div>
                                <h2 className="text-2xl font-bold text-center mb-6">
                                    {teamTitles[activeTeam as keyof typeof teamTitles]}
                                </h2>
                            </div>

                            <div
                                className={`grid gap-12 ${
                                    teamData[activeTeam]?.length <= 2
                                        ? "grid-cols-1 sm:grid-cols-2"
                                        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                                }`}
                            >
                                {teamData[activeTeam]?.map((member, index) => (
                                    <HexagonCard key={index} name={member.name} imageUrl={member.imageUrl} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}


export function HexagonCard({ name, imageUrl }: TeamProps) {
    return (
        <div className="flex justify-center items-center perspective">
            <div className="relative w-60 h-60 group">
                {/* Hexagon Shape */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className="absolute w-full h-full hexagon front-face"
                        style={{
                            backgroundImage: `url(${imageUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    ></div>
                </div>
                {/* Name Below Hexagon */}
                <div className="absolute top-[260px] left-0 w-full text-center">
                    <p className="text-sky-50 text-lg font-bold">{name}</p>
                </div>
            </div>
        </div>
    );
}