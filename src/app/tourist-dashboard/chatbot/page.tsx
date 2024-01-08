'use client';
import dynamic from "next/dynamic";
import Chat from "@/components/chatbot/chat";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { MessageCircle } from "lucide-react";

const DynamicMap = dynamic(() => import('@/components/map/Map'), {
    ssr: false
});


export default function Page() {
    return (
        <div className="aslkdnaslkdna flex bg-gray-50 min-h-screen items-center justify-center">
            <DynamicMap />
            <Popover>
                <PopoverContent className="w-[370px] z-50 mr-3">
                    <Chat />
                </PopoverContent>
                <PopoverTrigger asChild className="fixed bottom-4 right-4">
                    <Button
                        variant="outline"
                        className="rounded-full w-16 h-16 aspect-square mb-28 bg-green-400 hover:bg-gray-700"
                    >
                        <MessageCircle size={40} className="text-white" />
                    </Button>
                </PopoverTrigger>
            </Popover>
        </div>
    );
}