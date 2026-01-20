export default function Marquee() {
    const items = [
        "FRONTEND", "INTERACTION", "ACCESSIBILITY", "PERFORMANCE", "ARCHITECTURE",
        "FRONTEND", "INTERACTION", "ACCESSIBILITY", "PERFORMANCE"
    ];

    return (
        <div className="w-full bg-accent py-3 overflow-hidden flex border-y border-black">
            <div className="flex animate-marquee whitespace-nowrap">
                {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                        <span className="text-black font-display font-black text-2xl mx-8">{item}</span>
                        <span className="text-black font-display font-black text-2xl mx-8">•</span>
                    </div>
                ))}
                {items.map((item, index) => (
                    <div key={`dup-${index}`} className="flex items-center">
                        <span className="text-black font-display font-black text-2xl mx-8">{item}</span>
                        <span className="text-black font-display font-black text-2xl mx-8">•</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
