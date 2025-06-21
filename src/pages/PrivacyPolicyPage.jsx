import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">Effective Date: [Insert Date]</p>

      <p className="mb-4">
        Toonzkart ("we", "us", or "our") operates the website
        <a href="https://www.toonzkart.com" className="text-blue-600 underline">
          {" "}
          www.toonzkart.com
        </a>
        , an online platform that sells school curriculum books and stationery
        within India. This Privacy Policy describes how we collect, use, store,
        and protect your personal data when you interact with our platform.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        1. Information We Collect
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Full name, email address, phone number, and postal address</li>
        <li>Email and password (stored securely)</li>
        <li>Order and purchase details</li>
        <li>Booklists or images uploaded by users</li>
        <li>Device info like IP address and browser type</li>
        <li>User interaction data (e.g., clicked buttons, pages viewed)</li>
      </ul>
      <p className="mb-4">
        We do not collect online payment details at this time.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        2. Purpose of Data Collection
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li>Order processing and delivery</li>
        <li>Account registration and support</li>
        <li>Communication related to orders and services</li>
        <li>Platform improvement and performance analysis</li>
        <li>Fraud detection and legal compliance</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-4">3. Data Sharing</h2>
      <p className="mb-4">
        We do not sell or share user data with advertisers. Data may be shared
        with logistics and IT partners under confidentiality or when legally
        required.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        4. Cookies and Tracking
      </h2>
      <p className="mb-4">
        We use cookies to manage user sessions and collect traffic statistics.
        No sensitive data is collected through cookies.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">5. Data Retention</h2>
      <p className="mb-4">
        We retain your data as long as necessary for service delivery, legal
        compliance, or technical operation.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">6. Data Security</h2>
      <p className="mb-4">
        All interactions are secured via HTTPS. Passwords are stored using
        encryption. While we implement strict security measures, no system is
        entirely immune to breaches.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">7. Your Rights</h2>
      <p className="mb-4">
        You may request account deletion or data access at:
        <a
          href="https://www.toonzkart.com/delete-account"
          className="text-blue-600 underline"
        >
          {" "}
          toonzkart.com/delete-account
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">8. Children’s Privacy</h2>
      <p className="mb-4">
        We do not knowingly collect data from individuals under the age of 13.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">
        9. Changes to This Policy
      </h2>
      <p className="mb-4">
        We may revise this Privacy Policy. Updates will be posted here with a
        revised effective date.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-4">10. Contact Us</h2>
      <p className="mb-1">Email: support@toonzkart.com</p>
      <p className="mb-1">Phone: +91-XXXXXXXXXX</p>
      <p>Address: [Insert Registered Business Address]</p>
    </div>
  );
};

export default PrivacyPolicy;
