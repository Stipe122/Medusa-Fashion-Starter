export default function Newsletter({ className = "" }: { className?: string }) {

    return (
        <section className={`flex flex-col ${className}`}>
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Join our newsletter
            </h3>

            <p className="mt-2 text-[15px] text-black/70">
                We will also send you our discount coupons!
            </p>

            <div className="mt-4 flex w-full max-w-md gap-2">
                <input
                    type="email"
                    placeholder="Your email"
                    className="h-10 flex-1 rounded-md border border-gray-300 bg-white px-3 text-sm
                     placeholder-black/40 outline-none focus:border-black"
                />
                <button
                    type="button"
                    className="h-10 px-4 rounded-md bg-black text-white text-sm font-medium whitespace-nowrap"
                >
                    Subscribe
                </button>
            </div>

            <p className="mt-3 text-xs leading-relaxed text-black/40 max-w-md">
                By subscribing you agree to with our <a href="#" className="underline">Privacy Policy</a> and
                provide consent to receive updates from our company
            </p>
        </section>
    );
}