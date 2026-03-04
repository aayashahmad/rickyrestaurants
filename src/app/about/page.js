import styles from "./page.module.css";

export const metadata = {
    title: "About Us | Ricky's Restaurant",
    description:
        "Welcome to Ricky's Restaurant, where culinary excellence meets unparalleled service in the heart of Dubai.",
};

export default function AboutPage() {
    return (
        <>
            {/* Hero Banner */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <h1 className={styles.heroTitle}>ABOUT US</h1>
            </section>

            {/* Content */}
            <section className={styles.content}>
                <div className={styles.container}>
                    <span className={styles.label}>ABOUT US</span>
                    <h2 className={styles.title}>RICKYS RESTAURANT</h2>

                    <p className={styles.text}>
                        Welcome to Ricky&apos;s Restaurant, where culinary excellence meets
                        unparalleled service. Situated in the vibrant heart of Dubai,
                        Ricky&apos;s Restaurant is renowned for its exquisite dining
                        experiences, offering a diverse menu that caters to both local and
                        international palates. Our commitment to quality and passion for food
                        is reflected in every dish we serve.
                    </p>

                    <h3 className={styles.subtitle}>Our Culinary Philosophy</h3>
                    <p className={styles.text}>
                        At Ricky&apos;s Restaurant, we believe that great food starts with
                        the finest ingredients. Our chefs are dedicated to sourcing the best
                        produce, meats, and seafood from trusted suppliers. This commitment
                        to quality ensures that every dish is prepared with care and
                        precision. Whether you&apos;re indulging in our signature dishes or
                        exploring new flavors, you can expect a meal that is both delicious
                        and nourishing.
                    </p>

                    <h3 className={styles.subtitle}>Diverse Menu</h3>
                    <p className={styles.text}>
                        Our menu is a celebration of culinary diversity, offering a wide
                        range of options to suit every taste. From rich, aromatic Asian
                        delicacies and vibrant Middle Eastern specialties to classic
                        Mediterranean fare and innovative international cuisine, we have
                        something for everyone. Each dish is crafted to perfection, ensuring
                        that your dining experience is nothing short of extraordinary.
                    </p>

                    <h3 className={styles.subtitle}>Exceptional Catering Services</h3>
                    <p className={styles.text}>
                        In addition to our restaurant dining, Ricky&apos;s Restaurant is
                        proud to offer comprehensive catering services for all occasions.
                        Whether you&apos;re planning a corporate event, a wedding, or a
                        private party, our catering team is here to make your event special.
                        With tailored menus, impeccable service, and a focus on every detail,
                        we bring the same level of excellence to our catered events as we do
                        in our restaurant.
                    </p>

                    <h3 className={styles.subtitle}>Our Team</h3>
                    <p className={styles.text}>
                        Our team at Ricky&apos;s Restaurant is our greatest asset. From our
                        talented chefs to our friendly and professional staff, everyone is
                        dedicated to making your visit enjoyable. We take pride in our warm
                        hospitality and strive to create a welcoming environment where you
                        can relax and savor every moment.
                    </p>

                    <h3 className={styles.subtitle}>Commitment to Excellence</h3>
                    <p className={styles.text}>
                        At Ricky&apos;s Restaurant, we are committed to maintaining the
                        highest standards in everything we do. From the freshness of our
                        ingredients to the elegance of our presentation and the attentiveness
                        of our service, we aim to exceed your expectations every time you
                        visit.
                    </p>

                    <h3 className={styles.subtitle}>Visit Us</h3>
                    <p className={styles.text}>
                        Join us at Ricky&apos;s Restaurant and discover why we are a favorite
                        among Dubai&apos;s dining enthusiasts. Whether you&apos;re looking
                        for a casual meal with friends, a romantic dinner, or a place to
                        celebrate a special occasion, Ricky&apos;s Restaurant is the perfect
                        choice. Come and experience the best of culinary artistry and
                        hospitality in a setting that feels like home.
                    </p>

                    <p className={styles.closing}>
                        Thank you for choosing Ricky&apos;s Restaurant. We look forward to
                        serving you soon!
                    </p>
                </div>
            </section>
        </>
    );
}
