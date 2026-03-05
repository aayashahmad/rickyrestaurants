import styles from "./page.module.css";

export const metadata = {
    title: "Privacy Policy | Ember & Oak",
    description:
        "Privacy Policy for Ember & Oak website. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
    return (
        <>
            {/* Hero Banner */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay} />
                <h1 className={styles.heroTitle}>Privacy Policy</h1>
            </section>

            {/* Content */}
            <section className={styles.content}>
                <div className={styles.container}>
                    <h2 className={styles.sectionHeading}>1. Introduction</h2>
                    <p className={styles.text}>
                        Welcome to Ember & Oak! At emberandoak.com, we
                        are committed to protecting your privacy. This Privacy
                        Policy explains how we collect, use, disclose, and
                        safeguard your information when you visit our website.
                        Please read this policy carefully to understand our
                        practices regarding your personal data and how we will
                        treat it.
                    </p>

                    <h2 className={styles.sectionHeading}>
                        2. Information We Collect
                    </h2>
                    <p className={styles.text}>
                        We may collect and process the following data about you:
                    </p>
                    <ul className={styles.list}>
                        <li>
                            <strong>Personal Identification Information:</strong>{" "}
                            Name, email address, phone number, postal address,
                            and other similar contact information.
                        </li>
                        <li>
                            <strong>Technical Data:</strong> IP address, browser
                            type and version, time zone setting, browser plug-in
                            types and versions, operating system and platform,
                            and other technology on the devices you use to access
                            our website.
                        </li>
                        <li>
                            <strong>Usage Data:</strong> Information about how
                            you use our website, products, and services.
                        </li>
                        <li>
                            <strong>
                                Marketing and Communications Data:
                            </strong>{" "}
                            Your preferences in receiving marketing from us and
                            your communication preferences.
                        </li>
                    </ul>

                    <h2 className={styles.sectionHeading}>
                        3. How We Use Your Information
                    </h2>
                    <p className={styles.text}>
                        We use the information we collect in the following ways:
                    </p>
                    <ul className={styles.list}>
                        <li>
                            To provide, operate, and maintain our website.
                        </li>
                        <li>
                            To improve, personalize, and expand our website.
                        </li>
                        <li>
                            To understand and analyze how you use our website.
                        </li>
                        <li>
                            To develop new products, services, features, and
                            functionality.
                        </li>
                        <li>
                            To communicate with you, either directly or through
                            one of our partners, including for customer service,
                            to provide you with updates and other information
                            relating to the website, and for marketing and
                            promotional purposes.
                        </li>
                        <li>
                            To process your transactions and manage your orders.
                        </li>
                        <li>
                            To send you emails and other communications regarding
                            updates, promotions, or news.
                        </li>
                        <li>
                            To comply with legal obligations and protect the
                            rights, property, or safety of Ember & Oak, our
                            users, or others.
                        </li>
                    </ul>

                    <h2 className={styles.sectionHeading}>
                        4. How We Share Your Information
                    </h2>
                    <p className={styles.text}>
                        We do not sell, trade, or otherwise transfer your
                        personal information to outside parties except in the
                        following circumstances:
                    </p>
                    <ul className={styles.list}>
                        <li>
                            <strong>Service Providers:</strong> We may share your
                            information with third-party service providers who
                            perform services on our behalf, such as payment
                            processing, data analysis, email delivery, hosting
                            services, customer service, and marketing assistance.
                        </li>
                        <li>
                            <strong>Business Transfers:</strong> If we are
                            involved in a merger, acquisition, or asset sale,
                            your personal information may be transferred. We will
                            provide notice before your personal information is
                            transferred and becomes subject to a different
                            privacy policy.
                        </li>
                        <li>
                            <strong>Legal Requirements:</strong> We may disclose
                            your information where required to do so by law or in
                            call to respond to valid requests by public authorities
                            (e.g., a court or a government agency).
                        </li>
                    </ul>

                    <h2 className={styles.sectionHeading}>
                        5. Security of Your Information
                    </h2>
                    <p className={styles.text}>
                        We use administrative, technical, and physical security
                        measures to help protect your personal information. While
                        we have taken reasonable steps to secure the personal
                        information you provide to us, please be aware that
                        despite our efforts, no security measures are perfect or
                        impenetrable, and no method of data transmission can be
                        guaranteed against any interception or other type of
                        misuse.
                    </p>

                    <h2 className={styles.sectionHeading}>
                        6. Your Data Protection Rights
                    </h2>
                    <p className={styles.text}>
                        Depending on your location, you may have the following
                        rights regarding your personal data:
                    </p>
                    <ul className={styles.list}>
                        <li>
                            <strong>Access:</strong> You have the right to
                            request copies of your personal data.
                        </li>
                        <li>
                            <strong>Correction:</strong> You have the right to
                            request that we correct any information you believe
                            is inaccurate or complete information you believe is
                            incomplete.
                        </li>
                        <li>
                            <strong>Erasure:</strong> You have the right to
                            request that we erase your personal data, under
                            certain conditions.
                        </li>
                        <li>
                            <strong>Restriction:</strong> You have the right to
                            request that we restrict the processing of your
                            personal data, under certain conditions.
                        </li>
                        <li>
                            <strong>Objection:</strong> You have the right to
                            object to our processing of your personal data,
                            under certain conditions.
                        </li>
                        <li>
                            <strong>Data Portability:</strong> You have the right
                            to request that we transfer the data that we have
                            collected to another organization, or directly to
                            you, under certain conditions.
                        </li>
                    </ul>
                    <p className={styles.text}>
                        If you make a request, we have one month to respond to
                        you. If you would like to exercise any of these rights,
                        please contact us at our provided contact information.
                    </p>

                    <h2 className={styles.sectionHeading}>
                        7. Cookies and Tracking Technologies
                    </h2>
                    <p className={styles.text}>
                        We use cookies and similar tracking technologies to track
                        the activity on our website and store certain
                        information. Cookies are files with a small amount of
                        data that are commonly used as an anonymous unique
                        identifier. You can instruct your browser to refuse all
                        cookies or to indicate when a cookie is being sent.
                        However, if you do not accept cookies, you may not be
                        able to use some portions of our website.
                    </p>

                    <h2 className={styles.sectionHeading}>
                        8. Third-Party Links
                    </h2>
                    <p className={styles.text}>
                        Our website may contain links to third-party websites. We
                        do not control, and are not responsible for, the content
                        or privacy practices of these websites. We encourage you
                        to review the privacy policies of any third-party
                        websites you visit.
                    </p>

                    <h2 className={styles.sectionHeading}>
                        9. Changes to This Privacy Policy
                    </h2>
                    <p className={styles.text}>
                        We may update our Privacy Policy from time to time. We
                        will notify you of any changes by posting the new Privacy
                        Policy on this page and updating the effective date at
                        the top. You are advised to review this Privacy Policy
                        periodically for any changes. Changes to this Privacy
                        Policy are effective when they are posted on this page.
                    </p>

                    <p className={styles.thankYou}>
                        <strong>
                            Thank you for visiting Ember & Oak!
                        </strong>
                    </p>
                </div>
            </section>
        </>
    );
}
