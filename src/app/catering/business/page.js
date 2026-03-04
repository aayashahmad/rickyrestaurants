import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
    title: "Business Party Catering Services | Ricky's Restaurant",
    description:
        "Business party catering services in Dubai by Ricky's Restaurant. Premium corporate event catering for business meetings, dinners, and celebrations.",
};

export default function BusinessCateringPage() {
    return (
        <>
            {/* Hero Banner */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <h1 className={styles.heroTitle}>
                    Business Party Catering Services
                </h1>
            </section>

            {/* Intro */}
            <section className={styles.intro}>
                <div className={styles.container}>
                    <span className={styles.label}>CATERING</span>
                    <h2 className={styles.title}>Business Party Catering In Dubai</h2>

                    <p className={styles.text}>
                        Corporate events and meetings reflect your work culture and
                        professionalism, so it&apos;s crucial to trust only experienced and
                        reliable business meeting catering service providers.
                    </p>

                    <p className={styles.text}>
                        No matter the requirements of your event, Ricky&apos;s Restaurant
                        Catering can bring a touch of elegance and sophistication to your
                        business gatherings.
                    </p>

                    <p className={styles.text}>
                        Boost productivity at your next business meeting with our delectable
                        food offerings. From early morning meetings to formal lunches and
                        corporate dinners, our diverse range of services ensures your event
                        is both impressive and successful.
                    </p>
                </div>
            </section>

            {/* Feature Section */}
            <section className={styles.feature}>
                <div className={styles.featureContainer}>
                    <div className={styles.featureImageWrapper}>
                        <Image
                            src="/images/business-catering.png"
                            alt="Business Party Catering"
                            width={440}
                            height={340}
                            className={styles.featureImage}
                        />
                    </div>
                    <div className={styles.featureContent}>
                        <h3 className={styles.featureTitle}>Business Party Catering</h3>
                        <p className={styles.featureText}>
                            At Ricky&apos;s Restaurant, our business meeting catering team,
                            composed of skilled chefs and meticulous event planners, is
                            dedicated to elevating the quality of your corporate events with
                            exquisite food and presentation. Whether you seek classic
                            crowd-pleasers, innovative flavors, simple breakfasts, or
                            signature dishes crafted from high-quality ingredients, we
                            guarantee an unforgettable experience.
                        </p>
                        <p className={styles.featureText}>
                            Our experts in business meeting catering understand that precise
                            coordination is essential for quality service. For every corporate
                            event, we aim to exceed client expectations by providing
                            customized services tailored to specific needs. Our commitment
                            extends beyond serving exceptional food; we offer comprehensive
                            catering solutions designed to enhance your event.
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
                    <span className={styles.ctaLabel}>Impress Your Clients</span>
                    <h2 className={styles.ctaTitle}>
                        Elevate Your Corporate Events
                    </h2>
                    <p className={styles.ctaText}>
                        Partner with Ricky&apos;s Restaurant for premium business catering
                        that reflects your brand&apos;s excellence and leaves a lasting
                        impression.
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
