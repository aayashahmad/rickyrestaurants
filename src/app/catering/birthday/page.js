import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
    title: "Birthday Party Catering Services | Ricky's Restaurant",
    description:
        "Birthday party catering services in Dubai by Ricky's Restaurant. Professional catering for kids and adults birthday celebrations.",
};

export default function BirthdayCateringPage() {
    return (
        <>
            {/* Hero Banner */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <h1 className={styles.heroTitle}>Birthday Catering Services</h1>
            </section>

            {/* Intro */}
            <section className={styles.intro}>
                <div className={styles.container}>
                    <span className={styles.label}>CATERING</span>
                    <h2 className={styles.title}>Birthday Catering In Dubai</h2>

                    <p className={styles.text}>
                        A day that comes only once a year deserves to be cherished and
                        celebrated with delicious food and hassle-free catering.
                    </p>

                    <p className={styles.text}>
                        In Dubai, a birthday celebration is a special time for friends,
                        family, and co-workers to come together. Whether you choose a venue
                        or host the party at home, and whether you prefer a detailed buffet
                        or a small, intimate gathering, Ricky&apos;s Restaurant&apos;s
                        birthday catering services will handle all the details. You
                        won&apos;t have to worry about a thing. Whether you&apos;re planning
                        a kids&apos; birthday party or a celebration for your spouse,
                        we&apos;ve got you covered!
                    </p>
                </div>
            </section>

            {/* Feature Section */}
            <section className={styles.feature}>
                <div className={styles.featureContainer}>
                    <div className={styles.featureImageWrapper}>
                        <Image
                            src="/images/birthday-catering.png"
                            alt="Professional Birthday Party Catering"
                            width={380}
                            height={320}
                            className={styles.featureImage}
                        />
                    </div>
                    <div className={styles.featureContent}>
                        <h3 className={styles.featureTitle}>
                            Professional Birthday Party Catering
                        </h3>
                        <p className={styles.featureText}>
                            To make your birthday celebration in Dubai truly memorable,
                            professional birthday party catering is a must. Here are a few
                            benefits of choosing birthday party catering:
                        </p>

                        <h4 className={styles.benefitHeading}>Food for Your Party</h4>
                        <p className={styles.featureText}>
                            Enjoy your birthday without compromising on the food. Professional
                            catering ensures that you can have fun, offer entertainment, give
                            gifts, and indulge in delicious food without any hassle.
                        </p>

                        <h4 className={styles.benefitHeading}>Time Efficiency</h4>
                        <p className={styles.featureText}>
                            Planning a birthday party involves many details. By hiring birthday
                            party catering services, you can save time and avoid the stress of
                            setting up the food yourself, allowing you to manage your time more
                            efficiently.
                        </p>

                        <h4 className={styles.benefitHeading}>Professional Setup</h4>
                        <p className={styles.featureText}>
                            Catering services provide a professional setup with themed décor
                            and appealing food arrangements. The caterers will ensure
                            everything looks and tastes fantastic.
                        </p>

                        <p className={styles.featureText}>
                            Our birthday party catering services cater to everyone, from kids
                            to adults! Whether you prefer grand celebrations or intimate
                            gatherings, Ricky&apos;s Restaurant knows how to make you happy.
                            Whether it&apos;s your birthday or your little one&apos;s, you can
                            count on Ricky&apos;s Restaurant to make the day remarkable.
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
                    <span className={styles.ctaLabel}>Let&apos;s Celebrate</span>
                    <h2 className={styles.ctaTitle}>
                        Make Your Birthday Unforgettable
                    </h2>
                    <p className={styles.ctaText}>
                        Count on Ricky&apos;s Restaurant to handle everything — food,
                        décor, and setup — so you can enjoy your special day to the
                        fullest.
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
