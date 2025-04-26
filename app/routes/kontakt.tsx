import { MailIcon, PhoneCallIcon, PhoneIcon } from "lucide-react";
import type { Route } from "./+types/kontakt";

export function meta({}: Route.MetaArgs) {
    return [{title: "Kontakt oss" }]
}

export default function kontakt() {
    return (
        <div className="mx-auto bg-gray-200 p-4 rounded-lg max-w-2xl object-center">
            <p className="text-2xl font-bold p-2">Spørsmål? Ta kontakt da vel!</p>
            <div className="flex flex-row items-center p-2">
                <MailIcon className="size-6 text-gray-700"/> 
                <p className="text-xl p-2">e-post: </p> 
                <a className="text-blue-600 text-xl">post@reniew.no</a> 
            </div>


            <div className="flex flex-row items-center p-2">
                <PhoneIcon className="size-6 text-gray-700"/>
                <a className="text-xl p-2"> tlf: +47 32 23 32 23</a> 
            </div>
        </div>
    );
}