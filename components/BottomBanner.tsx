export default function BottomBanner() {
    return (
        <div className="absolute bottom-0 left-0 w-full z-20 bg-[#16A34A] py-4 px-6 md:px-[5%] flex items-center justify-center">
            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-2 md:gap-4 text-center md:text-left flex-wrap max-w-[1400px]">
                <strong className="text-white font-extrabold text-[18px]">
                    Partner With Us Today!
                </strong>
                <span className="text-white/90 font-medium text-[15px]">
                    Join our growing global network for seamless foodstuff import and export.
                </span>
                <a href="#" className="text-white font-extrabold text-[15px] border-b-2 border-white pb-[2px] ml-0 md:ml-2 hover:opacity-70 transition-opacity whitespace-nowrap">
                    Get in Touch ➔
                </a>
            </div>
        </div>
    );
}
