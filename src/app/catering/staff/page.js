import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
    title: "Staff Catering Services | Ricky's Restaurant",
    description:
        "Staff catering services in Dubai by Ricky's Restaurant. Healthy, delicious corporate catering for your employees.",
};

export default function StaffCateringPage() {
    return (
        <>
            {/* Hero Banner */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <h1 className={styles.heroTitle}>Staff Catering</h1>
            </section>

            {/* Intro */}
            <section className={styles.intro}>
                <div className={styles.container}>
                    <span className={styles.label}>CATERING</span>
                    <h2 className={styles.title}>Staff Catering</h2>

                    <p className={styles.text}>
                        Ricky&apos;s Restaurant is a leading catering company in Dubai,
                        renowned for providing exceptional staff catering services. We
                        understand that staff catering is crucial for maintaining employee
                        satisfaction, and we offer a variety of menu options tailored to
                        meet diverse dietary requirements and allergies.
                    </p>

                    <p className={styles.text}>
                        By providing nutritionally balanced yet delectable food, our
                        top-notch staff catering services can enhance the well-being of
                        your employees. This, in turn, positively impacts their
                        productivity and the overall work environment. Trust Ricky&apos;s
                        Restaurant to deliver quality and satisfaction with every meal.
                    </p>
                </div>
            </section>

            {/* Feature Section */}
            <section className={styles.feature}>
                <div className={styles.featureContainer}>
                    <div className={styles.featureImageWrapper}>
                        <Image
                            src="/images/staff-catering.png"
                            alt="Staff Catering Services in Dubai"
                            width={440}
                            height={340}
                            className={styles.featureImage}
                        />
                    </div>
                    <div className={styles.featureContent}>
                        <h3 className={styles.featureTitle}>
                            Special Occasion Catering Services in Dubai
                        </h3>
                        <p className={styles.featureText}>
                            At Ricky&apos;s Restaurant, our mission is to provide staff
                            catering services that offer healthy food options without
                            compromising on taste. But our commitment goes beyond just the
                            food. We strive to deliver excellent service by meticulously
                            managing every detail, from meal preparation to delivery and
                            logistics.
                        </p>
                        <p className={styles.featureText}>
                            Our staff catering services are designed to ensure timely delivery
                            and precise adherence to your specifications. For more details
                            about our customizable menu options, feel free to request a quote
                            or contact our team of experts. We will tailor a catering
                            solution that fits your business needs and budget.
                        </p>
                        <p className={styles.featureText}>
                            Whether your office is a small, close-knit team or a large
                            organization with various departments, we can meet all your
                            corporate catering needs in Dubai.
                        </p>
                    </div>
                </div>
            </section>

            {/* Additional Content */}
            <section className={styles.additional}>
                <div className={styles.additionalContainer}>
                    <h4 className={styles.benefitHeading}>
                        We Take Care of Your Staff
                    </h4>
                    <p className={styles.additionalText}>
                        At Ricky&apos;s Restaurant, we prioritize your company&apos;s
                        needs. Our detail-oriented planners and chefs are dedicated to
                        crafting a service that reflects your requirements. Passion and
                        excellence are at the heart of our company&apos;s philosophy,
                        ensuring that you receive unparalleled culinary experiences with
                        beautifully presented foods.
                    </p>
                    <p className={styles.additionalText}>
                        At Ricky&apos;s Restaurant, we understand the importance of keeping
                        your employees healthy and productive. Healthy employees are less
                        likely to get sick and are at a lower risk of developing chronic
                        diseases, which can help reduce health insurance costs for
                        employers. By catering healthy lunches to the office, you can
                        reduce sick days and increase overall productivity.
                    </p>
                    <p className={styles.additionalText}>
                        Catered lunches save employees time and energy, allowing them to
                        stay at the office rather than dining out or taking extended lunch
                        breaks. This not only helps employees manage their time more
                        effectively but also reduces their reliance on eating out,
                        ultimately saving them money.
                    </p>
                    <p className={styles.additionalText}>
                        Additionally, our staff catering services promote social
                        interaction among employees. Providing breakfast or lunch at the
                        office can significantly improve office culture and boost employee
                        morale. These meals offer opportunities for employees to socialize
                        and mingle, which is crucial for building team rapport and
                        enhancing the overall work environment.
                    </p>
                    <p className={styles.additionalText}>
                        Given the substantial amount of time employees spend at work,
                        it&apos;s vital for them to enjoy their workplace culture and build
                        strong relationships with colleagues. As an employer, you
                        don&apos;t need to stress over finding the best office catering
                        services in Dubai — Ricky&apos;s Restaurant has you covered. We
                        are committed to delivering exceptional catering solutions that
                        will enhance your workplace and keep your staff satisfied and
                        motivated.
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
                    <span className={styles.ctaLabel}>Fuel Your Team</span>
                    <h2 className={styles.ctaTitle}>
                        Elevate Your Workplace Experience
                    </h2>
                    <p className={styles.ctaText}>
                        Boost productivity and morale with Ricky&apos;s Restaurant premium
                        staff catering — healthy, delicious meals delivered to your office.
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
