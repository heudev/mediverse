"use client";
import { useState, useEffect } from "react";

export default function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date("2025-02-15T09:00:00");

        const calculateTimeLeft = () => {
            const currentDate = new Date();
            const difference = targetDate.getTime() - currentDate.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();

        const interval = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-base-200 rounded-box text-black border border-black">
                <span className="countdown font-mono text-4xl md:text-4xl">
                    {
                        timeLeft.days <= 99 ? (
                            <span style={{ "--value": timeLeft.days.toString().padStart(2, '0') } as React.CSSProperties}></span>
                        ) : (
                            String(timeLeft.days).padStart(2, '0')
                        )
                    }
                </span>
                gün
            </div>
            <div className="flex flex-col p-2 bg-base-200 rounded-box text-black  border border-black">
                <span className="countdown font-mono text-4xl md:text-4xl">
                    <span style={{ "--value": timeLeft.hours } as React.CSSProperties}></span>
                </span>
                saat
            </div>
            <div className="flex flex-col p-2 bg-base-200 rounded-box text-black  border border-black">
                <span className="countdown font-mono text-4xl md:text-4xl">
                    <span style={{ "--value": timeLeft.minutes } as React.CSSProperties}></span>
                </span>
                dk
            </div>
            <div className="flex flex-col p-2 bg-base-200 rounded-box text-black  border border-black">
                <span className="countdown font-mono text-4xl md:text-4xl">
                    <span style={{ "--value": timeLeft.seconds } as React.CSSProperties}></span>
                </span>
                sn
            </div>
        </div>
    );
};