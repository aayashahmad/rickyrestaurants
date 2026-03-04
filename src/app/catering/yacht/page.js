import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
    title: "Yacht Party Catering Services | Ricky's Restaurant",
    description:
        "Luxury yacht catering services in Dubai by Ricky's Restaurant. Gourmet dining on the serene waters of Dubai.",
};

export default function YachtCateringPage() {
    return (
        <>
            {/* Hero Banner */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <h1 className={styles.heroTitle}>Yacht Catering Services</h1>
            </section>

            {/* Intro */}
            <section className={styles.intro}>
                <div className={styles.container}>
                    <span className={styles.label}>CATERING</span>
                    <h2 className={styles.title}>Yacht Catering In Dubai</h2>

                    <p className={styles.text}>
                        Welcome to Ricky&apos;s Restaurant Catering, where we redefine
                        luxury catering services in Dubai. At Ricky&apos;s Restaurant
                        Catering, we are passionate about the culinary arts and committed to
                        delivering the finest catering experiences, especially when it comes
                        to yacht catering for Dubai clients.
                    </p>

                    <p className={styles.text}>
                        As specialists in yacht catering, we take pride in curating tailored
                        menus that perfectly blend gourmet excellence with the vibrant
                        flavors of the sea. Our dedication to culinary excellence is matched
                        only by our meticulous planning. From crafting bespoke menus to
                        managing the finest supplies, coordinating with top-tier vendors, and
                        organizing a professional waitstaff, we ensure every detail is
                        seamlessly orchestrated to create an unforgettable dining experience
                        on the high seas.
                    </p>

                    <p className={styles.text}>
                        When you choose Ricky&apos;s Restaurant Catering for your yacht
                        catering needs, you&apos;re not just hiring a catering service;
                        you&apos;re embarking on a culinary journey that will leave your
                        guests astounded. Whether it&apos;s an intimate gathering or a grand
                        celebration, our team is here to make your yacht event truly
                        exceptional.
                    </p>
                </div>
            </section>

            {/* Feature Section */}
            <section className={styles.feature}>
                <div className={styles.featureContainer}>
                    <div className={styles.featureImageWrapper}>
                        <Image
                            src="/images/yacht-catering.png"
                            alt="Luxury Yacht Catering Services in Dubai"
                            width={440}
                            height={340}
                            className={styles.featureImage}
                        />
                    </div>
                    <div className={styles.featureContent}>
                        <h3 className={styles.featureTitle}>
                            Luxury Yacht Catering Services in Dubai
                        </h3>
                        <p className={styles.featureText}>
                            Indulge in the epitome of opulence with luxury yacht catering
                            services in Dubai. Hosting a memorable event on the serene waters
                            of Dubai offers an unmatched level of extravagance. Whether
                            you&apos;re celebrating a milestone birthday or craving an
                            unparalleled aquatic experience, yacht catering in Dubai sets the
                            stage for an unforgettable voyage.
                        </p>

                        <h4 className={styles.benefitHeading}>Luxury Yacht Parties</h4>
                        <p className={styles.featureText}>
                            Elevate your celebrations to new heights with a luxury yacht party
                            in Dubai. Imagine you and your guests aboard a gleaming vessel,
                            surrounded by the mesmerizing Dubai skyline. Our yacht birthday
                            party services promise an exclusive and intimate ambiance, ensuring
                            your special day is nothing short of magical.
                        </p>

                        <h4 className={styles.benefitHeading}>Yacht Catering Excellence</h4>
                        <p className={styles.featureText}>
                            When it comes to catering for yacht parties, every detail matters.
                            Our yacht catering company in Dubai prides itself on crafting
                            exquisite menus that tantalize your taste buds while you cruise the
                            azure waters. From delectable seafood platters to gourmet
                            delicacies, we ensure that the food for your yacht party is
                            exceptional.
                        </p>
                    </div>
                </div>
            </section>

            {/* Additional Content */}
            <section className={styles.additional}>
                <div className={styles.additionalContainer}>
                    <h4 className={styles.benefitHeading}>Bespoke Menus</h4>
                    <p className={styles.additionalText}>
                        Our yacht catering services go beyond standard fare. We offer a wide
                        array of menu options, all designed to complement your yacht
                        experience perfectly. Whether you envision a romantic yacht dinner or
                        a lively boat party, our private culinary team will tailor the menu
                        to your desires.
                    </p>

                    <h4 className={styles.benefitHeading}>Impeccable Service</h4>
                    <p className={styles.additionalText}>
                        At the heart of our yacht catering services is a commitment to
                        excellence. We ensure that every aspect of your yacht charter is
                        seamless, from planning the event to managing supplies and organizing
                        the waitstaff. Your yacht party deserves nothing less than the best,
                        and we guarantee an unmatched level of service.
                    </p>

                    <p className={styles.additionalText}>
                        Experience the best yacht party in Dubai with Ricky&apos;s
                        Restaurant Catering, where luxury meets the sea, creating moments
                        that will be cherished forever. Our yacht catering services set the
                        stage for an unparalleled culinary journey, ensuring your yacht event
                        is a masterpiece in every sense. Embark on this extraordinary voyage
                        and let us make it truly unforgettable.
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.cta}>
                <div className={styles.ctaOverlay} />
                <div className={styles.ctaParticles}>
                    <span className={styles.particle} />
                    <span className={styles.particle} />
                    <span className={styles.particle} />
                    <span className={styles.particle} />
                    <span className={styles.particle} />
                    <span className={styles.particle} />
                    <span className={styles.particle} />
                    <span className={styles.particle} />
                </div>
                <div className={styles.ctaContainer}>
                    <span className={styles.ctaLabel}>Set Sail in Style</span>
                    <h2 className={styles.ctaTitle}>
                        Your Luxury Yacht Experience Awaits
                    </h2>
                    <p className={styles.ctaText}>
                        Let Ricky&apos;s Restaurant transform your yacht event into an
                        extraordinary culinary voyage on Dubai&apos;s azure waters.
                    </p>
                    <Link href="/contact" className={styles.ctaBtn}>
                        Contact Us
                        <span className={styles.ctaBtnIcon}>→</span>
                    </Link>
                </div>
            </section>
        </>
    );
}
