import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
    title: "Get Together Catering Services | Ricky's Restaurant",
    description:
        "Get together catering services in Dubai by Ricky's Restaurant. Perfect catering for casual gatherings and social events.",
};

export default function GetTogetherCateringPage() {
    return (
        <>
            {/* Hero Banner */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <h1 className={styles.heroTitle}>Get Together Catering Services</h1>
            </section>

            {/* Intro */}
            <section className={styles.intro}>
                <div className={styles.container}>
                    <span className={styles.label}>CATERING</span>
                    <h2 className={styles.title}>Get Together</h2>

                    <p className={styles.text}>
                        Looking to elevate your next social gathering into a memorable
                        occasion? Whether it&apos;s a casual meet-up with family or a
                        gathering of friends, hiring the right catering professionals can
                        make all the difference. At Ricky&apos;s Restaurant Catering, we
                        offer top-notch services with a comprehensive approach.
                    </p>

                    <p className={styles.text}>
                        Our mission is to deliver a seamless experience characterized by
                        excellence in service and delightful cuisine. Let us know your
                        requirements, and we&apos;ll craft a plan tailored to your budget
                        and party theme. We believe in offering more than just food
                        delivery; our company provides a range of customizable services to
                        meet your preferences. Plus, rest assured, no event size is too
                        large for us to handle.
                    </p>
                </div>
            </section>

            {/* Feature Section */}
            <section className={styles.feature}>
                <div className={styles.featureContainer}>
                    <div className={styles.featureImageWrapper}>
                        <Image
                            src="/images/get-together.png"
                            alt="Get Together Catering Services"
                            width={440}
                            height={340}
                            className={styles.featureImage}
                        />
                    </div>
                    <div className={styles.featureContent}>
                        <h3 className={styles.featureTitle}>
                            Get Together Catering Services
                        </h3>
                        <p className={styles.featureText}>
                            Whether it&apos;s a large gathering or an intimate affair, our
                            attention to detail remains consistent. A get-together presents a
                            wonderful opportunity to express gratitude to friends and family,
                            and we excel at enhancing these moments with our exquisite menus.
                            With a diverse selection of dishes available, you can mix and match
                            to create a spread that delights every guest, whether it&apos;s
                            snack box catering or a lavish feast.
                        </p>
                        <p className={styles.featureText}>
                            Our committed team of professionals ensures seamless execution and
                            assists with all organizational aspects. We recognize that each
                            client is unique and deserves a tailored experience that reflects
                            their individuality. Whether you prefer a laid-back buffet,
                            tempting finger foods, or an elegant sit-down dinner, Ricky&apos;s
                            Restaurant Catering offers solutions tailored to suit your event
                            perfectly.
                        </p>

                        <h4 className={styles.benefitHeading}>
                            Elevate Your Get Together Party Experience!
                        </h4>
                        <p className={styles.featureText}>
                            Treat yourself and your guests to an exquisite culinary journey,
                            where delectable flavors and captivating aromas await. Our
                            talented chefs are masters at crafting a sensory experience that
                            will leave everyone dazzled. The key to our success lies in using
                            only the finest ingredients sourced sustainably from certified
                            suppliers. Allow us to join you at your next gathering, where
                            we&apos;ll orchestrate an unforgettable event, perfectly balancing
                            sumptuous cuisine with unparalleled service.
                        </p>
                    </div>
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
                    <span className={styles.ctaLabel}>Gather & Celebrate</span>
                    <h2 className={styles.ctaTitle}>
                        Your Perfect Get Together Awaits
                    </h2>
                    <p className={styles.ctaText}>
                        Let Ricky&apos;s Restaurant bring the finest food and service to
                        your next social gathering — making every moment unforgettable.
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
