function Page() {
    return (
        <div className="text-white py-10 text-center">
            <div>
                <h1 className="font-bold text-lg md:text-3xl py-4 text-center">
                    Contact Us
                </h1>
            </div>
            <div className="bg-white text-black p-8 rounded-md md:w-[1000px] mx-auto">
                <p>
                    If you have any questions or suggestions about our Privacy Policy, do
                    not hesitate to contact us{" "}
                    <a
                        href="mailto: contact@sentence-counter.co"
                        className="underline font-bold"
                    >
                        contact@sentence-counter.co
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Page;