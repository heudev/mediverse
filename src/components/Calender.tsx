"use client"
import { Calendar } from "@nextui-org/react";
import { today, getLocalTimeZone } from "@internationalized/date";

export default function CalenderComponent() {
    return (
        <>
            <Calendar value={today(getLocalTimeZone())} isReadOnly />
        </>
    );
}