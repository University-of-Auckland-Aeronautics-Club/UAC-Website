const HomePage = () => (
    <div className="min-h-screen bg-base-200 font-sans">
        <header className="bg-primary text-primary-content py-12 text-center">
            <h1 className="text-4xl font-bold mb-2">University Aeronautics Club</h1>
            <p className="text-lg">Build. Design. Fly.</p>
        </header>
        <main className="max-w-3xl mx-auto my-8 px-4">
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Welcome!</h2>
                <p>
                    The University Aeronautics Club (UAC) is dedicated to fostering a passion for aviation,
                    aerospace engineering, and flight technology among students. Whether you're an aspiring pilot,
                    engineer, or simply fascinated by flight, our club offers opportunities to learn, build, and soar.
                </p>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
                <ul className="list-disc list-inside space-y-1">
                    <li>HPA</li>
                    <li>Restoration</li>
                    <li>Hackathon</li>
                    <li>Industry Nights</li>
                    <li>Highschool Outreach</li>
                </ul>
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-2">Join Us</h2>
                <p>
                    Ready to take off?{" "}
                    <a href="/join" className="link link-primary">Become a member</a> or{" "}
                    <a href="/contact" className="link link-primary">contact us</a> to learn more!
                </p>
            </section>
        </main>
    </div>
);

export default HomePage;