import { Button } from "@medusajs/ui";
import { SimpleButton } from "./SimpleButton";

export default function Newsletter({ className = "" }: { className?: string }) {

    return (
        <section className={`flex flex-col ${className}`}>
            <h3 className="h4">
                Join our newsletter
            </h3>

            <p className="body">
                We will also send you our discount coupons!
            </p>

            <div className="mt-4 flex w-full max-w-md gap-2">
                <input
                    type="email"
                    placeholder="Your email"
                    className="h-10 flex-1 rounded-md border border-gray-300 bg-white px-3 body-small
                     placeholder-gray-500 outline-none focus:border-black"
                />
                
                <SimpleButton text={"Subscribe"} />
            </div>

            <p className="mt-3 body-small text-gray-500 max-w-md">
                By subscribing you agree to with our <a href="#" className="underline">Privacy Policy</a> and
                provide consent to receive updates from our company
            </p>
        </section>
    );
}