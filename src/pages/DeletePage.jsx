import React from "react";

export default function DeleteAccountPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-2xl w-full">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Account Deletion Request – Toonzkart
        </h1>
        <p className="text-gray-700 mb-4">
          If you wish to delete your account from <strong>Toonzkart</strong>,
          please follow the steps below. This process ensures that your personal
          data is securely handled and permanently removed as per our policy.
        </p>

        <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
          How to Request Account Deletion:
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            Send an email to{" "}
            <a
              href="mailto:toonzkart2@gmail.com"
              className="text-blue-600 underline"
            >
              toonzkart2@gmail.com
            </a>
          </li>
          <li>
            Use the subject line: <strong>“Delete My Account”</strong>
          </li>
          <li>
            Include your registered email address in the email body for
            verification
          </li>
        </ul>

        <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
          What Will Be Deleted:
        </h2>
        <p className="text-gray-700">
          Upon successful verification, we will permanently delete the following
          data:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
          <li>Full Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Shipping Address</li>
        </ul>

        <h2 className="text-lg font-semibold text-gray-800 mt-6 mb-2">
          Data That May Be Retained:
        </h2>
        <p className="text-gray-700">
          Order history and transaction records may be retained for up to 6
          years to comply with applicable tax and legal requirements in India.
          This data will be anonymized and unlinked from your personal
          information.
        </p>

        <p className="text-sm text-gray-500 mt-6">
          For any other queries, please contact us at{" "}
          <a
            href="mailto:toonzkart2@gmail.com"
            className="text-blue-600 underline"
          >
            toonzkart2@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
