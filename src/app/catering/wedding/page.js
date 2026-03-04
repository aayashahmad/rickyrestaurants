import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
    title: "Wedding Catering Services | Ricky's Restaurant",
    description:
        "Wedding catering services in Dubai by Ricky's Restaurant. Professional catering for intimate gatherings and grand celebrations.",
};

export default function WeddingCateringPage() {
    return (
        <>
            {/* Hero Banner */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <h1 className={styles.heroTitle}>Wedding Catering Services</h1>
            </section>

            {/* Intro */}
            <section className={styles.intro}>
                <div className={styles.container}>
                    <span className={styles.label}>CATERING</span>
                    <h2 className={styles.title}>Wedding Catering In Dubai</h2>

                    <p className={styles.text}>
                        Wedding catering services in Dubai by Ricky&apos;s Restaurant ensure
                        your big day is unforgettable. We understand that your dream
                        celebration demands unsurpassed service with the highest quality and
                        meticulous attention to detail. That&apos;s why our wedding catering
                        services leave no stone unturned.
                    </p>

                    <p className={styles.text}>
                        Our offerings include a wide range of elements, from interactive live
                        cooking stations to barbecue stations, beverage bars, salad stations,
                        cold and hot appetizers, and more. Additionally, we provide a variety
                        of setup options tailored to the type of event you are planning.
                    </p>
                </div>
            </section>

            {/* Feature Section */}
            <section className={styles.feature}>
                <div className={styles.featureContainer}>
                    <div className={styles.featureImageWrapper}>
                        <Image
                            src="/images/wedding-catering.png"
                            alt="Professional Wedding Party Catering"
                            width={380}
                            height={320}
                            className={styles.featureImage}
                        />
                    </div>
                    <div className={styles.featureContent}>
                        <h3 className={styles.featureTitle}>
                            Professional Wedding Party Catering
                        </h3>
                        <p className={styles.featureText}>
                            With Ricky&apos;s Restaurant, you&apos;ll experience the best
                            wedding catering Dubai has to offer. Simply give us a call, and
                            rest assured that we&apos;ll handle everything. From planning and
                            managing to executing an unforgettable event, we provide delicious
                            food, classy décor, and a hassle-free experience.
                        </p>
                        <p className={styles.featureText}>
                            Our wedding catering services are versatile, capable of
                            accommodating both intimate gatherings and grand celebrations.
                            Flexibility and the highest standard of service are among our
                            greatest strengths.
                        </p>

                        <p className={styles.benefitsIntro}>
                            Here are some benefits of choosing our professional wedding
                            catering services:
                        </p>

                        <ul className={styles.benefitsList}>
                            <li className={styles.benefitItem}>
                                <span className={styles.bulletDot} />
                                <span>
                                    <strong>High-Quality Food:</strong> Prepared by experienced
                                    chefs.
                                </span>
                            </li>
                            <li className={styles.benefitItem}>
                                <span className={styles.bulletDot} />
                                <span>
                                    <strong>Variety:</strong> A wide selection of dishes and
                                    cuisines.
                                </span>
                            </li>
                            <li className={styles.benefitItem}>
                                <span className={styles.bulletDot} />
                                <span>
                                    <strong>Serving Options:</strong> Various meal styles and
                                    service options.
                                </span>
                            </li>
                            <li className={styles.benefitItem}>
                                <span className={styles.bulletDot} />
                                <span>
                                    <strong>Impressive Presentation:</strong> Beautifully presented
                                    dishes.
                                </span>
                            </li>
                            <li className={styles.benefitItem}>
                                <span className={styles.bulletDot} />
                                <span>
                                    <strong>Well-Trained Staff:</strong> Professional and courteous
                                    waitstaff.
                                </span>
                            </li>
                            <li className={styles.benefitItem}>
                                <span className={styles.bulletDot} />
                                <span>
                                    <strong>Meal Planning Assistance:</strong> Expert help in
                                    planning and selecting meals.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.cta}>
                <div className={styles.ctaContainer}>
                    <p className={styles.ctaText}>
                        Experience the finest wedding catering Dubai has to offer with
                        Ricky&apos;s Restaurant.
                    </p>
                    <p className={styles.ctaText}>
                        Many people underestimate the importance of reliable wedding catering
                        services. Misconceptions and experiences with unprofessional caterers
                        might lead one to think that hiring wedding catering services is a
                        hassle. In reality, it is quite the opposite.
                    </p>
                    <p className={styles.ctaText}>
                        When we say we make your wedding special, we mean that your wedding
                        day will be remembered as the best day of your life.
                    </p>
                    <p className={styles.ctaText}>
                        A wedding involves many details, and Ricky&apos;s Restaurant ensures
                        you can focus on other aspects while we handle the biggest elements:
                        food arrangements, theme, décor, and more. Let us take care of the
                        details so you can enjoy your special day to the fullest.
                    </p>

                    <Link href="/contact" className={styles.ctaBtn}>
                        Contact Us
                    </Link>
                </div>
            </section>
        </>
    );
}
