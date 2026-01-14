import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - ThoughtBites',
  description: 'Privacy policy for ThoughtBites - Learn how we collect, use, and protect your personal information',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen p-6 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-tb-purple-dark mb-2">Privacy Policy for ThoughtBites</h1>
        <p className="text-gray-600 italic mb-8">
          <strong>Last Updated:</strong> January 13, 2026
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-tb-purple-dark mb-4">Introduction</h2>
          <p className="mb-4">
            Welcome to ThoughtBites ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you understand how we collect, use, and safeguard your personal information. This Privacy Policy applies to our mobile application ThoughtBites (the "App").
          </p>
          <p className="mb-4">
            By using ThoughtBites, you agree to the collection and use of information in accordance with this policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-tb-purple-dark mb-4">Information We Collect</h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Information You Provide</h3>
          <p className="mb-2"><strong>Account Information:</strong></p>
          <ul className="list-disc ml-6 mb-4">
            <li>Email address (required for account creation and authentication)</li>
            <li>Password (encrypted and stored securely)</li>
          </ul>

          <p className="mb-2"><strong>User Preferences:</strong></p>
          <ul className="list-disc ml-6 mb-4">
            <li>Selected topic categories (e.g., Psychology, Entrepreneurship, Technology)</li>
            <li>Learning interests selected during onboarding</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Information We Collect Automatically</h3>
          <p className="mb-2"><strong>Usage Data:</strong></p>
          <ul className="list-disc ml-6 mb-4">
            <li>Bites you read and when you read them</li>
            <li>Bites you save to your collection</li>
            <li>Actions you add to your to-do list</li>
            <li>Your votes (thumbs up/down) on bites</li>
            <li>Bites you share with others</li>
            <li>Completion status of daily bites</li>
            <li>App features you use and how often</li>
          </ul>

          <p className="mb-2"><strong>Device Information:</strong></p>
          <ul className="list-disc ml-6 mb-4">
            <li>iOS version</li>
            <li>Device type and model</li>
            <li>App version</li>
            <li>Session duration and frequency</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Information We Do Not Collect</h3>
          <p className="mb-2">We do <strong>not</strong> collect:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Your name (unless voluntarily included in your email)</li>
            <li>Location data</li>
            <li>Contacts or photos</li>
            <li>Payment information (free app with no in-app purchases currently)</li>
            <li>Browsing history outside the app</li>
            <li>Advertising identifiers</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-tb-purple-dark mb-4">How We Use Your Information</h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Provide and Improve the App</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Authenticate your account and maintain your session</li>
            <li>Deliver personalized daily bite recommendations based on your selected topics</li>
            <li>Save your reading progress and preferences</li>
            <li>Enable you to save bites, add actions, and track completions</li>
            <li>Improve content recommendations over time</li>
            <li>Fix bugs and improve app performance</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Communication</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Send password reset emails when requested</li>
            <li>Respond to your support requests</li>
            <li>Notify you of important app updates (if you opt in to notifications in the future)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Analytics and Insights</h3>
          <ul className="list-disc ml-6 mb-4">
            <li>Understand which bites and topics are most engaging</li>
            <li>Identify popular features to prioritize improvements</li>
            <li>Measure overall app usage and retention</li>
            <li>Improve content quality based on user feedback (votes)</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-tb-purple-dark mb-4">How We Store and Protect Your Information</h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Data Storage</h3>
          <p className="mb-2">
            Your data is stored securely using <strong>Supabase</strong>, a third-party backend-as-a-service provider. Supabase hosts data in secure cloud infrastructure with:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>Industry-standard encryption in transit (HTTPS/TLS)</li>
            <li>Encryption at rest</li>
            <li>Regular security audits</li>
            <li>SOC 2 Type II compliance</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Security Measures</h3>
          <p className="mb-2">We implement security measures including:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Encrypted password storage (never stored in plain text)</li>
            <li>Secure authentication tokens</li>
            <li>Row-level security policies to ensure you can only access your own data</li>
            <li>Regular security updates and monitoring</li>
          </ul>
          <p className="mb-4">
            <strong>However, please note:</strong> No method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-tb-purple-dark mb-4">Data Sharing and Third Parties</h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">We Do Not Sell Your Data</h3>
          <p className="mb-4">
            We do not sell, rent, or trade your personal information to third parties for marketing purposes.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Third-Party Services</h3>
          <p className="mb-2">We use the following third-party service to operate the app:</p>
          <p className="mb-2"><strong>Supabase (Backend Infrastructure)</strong></p>
          <ul className="list-disc ml-6 mb-4">
            <li>Purpose: Database, authentication, and API hosting</li>
            <li>Data shared: All data listed in "Information We Collect"</li>
            <li>Privacy Policy: <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-tb-purple-dark underline hover:text-tb-purple-light">https://supabase.com/privacy</a></li>
            <li>Location: Data hosted in secure cloud infrastructure</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Share Feature</h3>
          <p className="mb-2">When you use the share button to share a bite:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>We generate a shareable link (e.g., share.thoughtbites.app/bite/123)</li>
            <li>We log that you shared the bite (for analytics)</li>
            <li>We do not track who you shared it with</li>
            <li>Recipients can view the bite preview without creating an account</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Legal Requirements</h3>
          <p className="mb-4">
            We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., court orders, subpoenas).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-tb-purple-dark mb-4">Your Rights and Choices</h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Access Your Data</h3>
          <p className="mb-2">You can access your data within the app:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>View saved bites in the Saved tab</li>
            <li>View actions in the Actions tab</li>
            <li>View reading history in the Archive tab</li>
            <li>View selected topics in Settings</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Modify Your Data</h3>
          <p className="mb-2">You can:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Change your topic preferences in Settings → Edit Topics</li>
            <li>Update your password in Settings → Change Password</li>
            <li>Delete saved bites and actions at any time (swipe to delete)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Delete Your Account</h3>
          <p className="mb-2">To delete your account and all associated data:</p>
          <ol className="list-decimal ml-6 mb-4">
            <li>Contact us at <a href="mailto:support@thoughtbites.app" className="text-tb-purple-dark underline hover:text-tb-purple-light">support@thoughtbites.app</a></li>
            <li>Request account deletion</li>
            <li>We will permanently delete your account and data within 30 days</li>
          </ol>
          <p className="mb-2">Upon account deletion, we will remove:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Your email address</li>
            <li>All saved bites and actions</li>
            <li>All reading history and votes</li>
            <li>Your topic preferences</li>
            <li>All associated activity data</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Data Portability</h3>
          <p className="mb-4">
            You may request a copy of your data by contacting us at <a href="mailto:support@thoughtbites.app" className="text-tb-purple-dark underline hover:text-tb-purple-light">support@thoughtbites.app</a>. We will provide your data in a machine-readable format (JSON) within 30 days.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-tb-purple-dark mb-4">Children's Privacy</h2>
          <p className="mb-4">
            ThoughtBites is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will delete such information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-tb-purple-dark mb-4">Data Retention</h2>
          <p className="mb-2">
            We retain your personal information for as long as your account is active or as needed to provide you services. Specifically:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li><strong>Account data:</strong> Retained until you delete your account</li>
            <li><strong>Usage data:</strong> Retained indefinitely for analytics and improvement (anonymized after 2 years)</li>
            <li><strong>Deleted data:</strong> Permanently removed from our systems within 30 days of deletion request</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-tb-purple-dark mb-4">International Data Transfers</h2>
          <p className="mb-4">
            Your information may be transferred to and maintained on servers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ.
          </p>
          <p className="mb-4">
            By using ThoughtBites, you consent to the transfer of your information to the United States or other countries where Supabase operates.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-tb-purple-dark mb-4">Changes to This Privacy Policy</h2>
          <p className="mb-2">We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Posting the new Privacy Policy in the app</li>
            <li>Updating the "Last Updated" date at the top</li>
            <li>Sending an email notification for material changes (if you have an active account)</li>
          </ul>
          <p className="mb-4">
            Your continued use of the app after changes are posted constitutes your acceptance of the updated policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-tb-purple-dark mb-4">California Privacy Rights (CCPA)</h2>
          <p className="mb-4">
            If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
          </p>
          <p className="mb-2"><strong>Right to Know:</strong> You can request information about the categories and specific pieces of personal information we collect.</p>
          <p className="mb-2"><strong>Right to Delete:</strong> You can request deletion of your personal information (with certain exceptions).</p>
          <p className="mb-2"><strong>Right to Opt-Out:</strong> We do not sell personal information, so there is nothing to opt out of.</p>
          <p className="mb-4"><strong>Non-Discrimination:</strong> We will not discriminate against you for exercising your CCPA rights.</p>
          <p className="mb-4">
            To exercise these rights, contact us at <a href="mailto:support@thoughtbites.app" className="text-tb-purple-dark underline hover:text-tb-purple-light">support@thoughtbites.app</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-tb-purple-dark mb-4">European Privacy Rights (GDPR)</h2>
          <p className="mb-4">
            If you are located in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR):
          </p>

          <p className="mb-2"><strong>Legal Basis for Processing:</strong></p>
          <ul className="list-disc ml-6 mb-4">
            <li>Contract: To provide the service you signed up for</li>
            <li>Legitimate Interest: To improve the app and analyze usage</li>
            <li>Consent: For optional features (if any)</li>
          </ul>

          <p className="mb-2"><strong>Your Rights:</strong></p>
          <ul className="list-disc ml-6 mb-4">
            <li>Right to access your personal data</li>
            <li>Right to rectification of inaccurate data</li>
            <li>Right to erasure ("right to be forgotten")</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
            <li>Right to withdraw consent</li>
          </ul>
          <p className="mb-4">
            To exercise these rights or if you have questions, contact us at <a href="mailto:support@thoughtbites.app" className="text-tb-purple-dark underline hover:text-tb-purple-light">support@thoughtbites.app</a>.
          </p>
        </section>

        <section className="mb-8 bg-purple-50 p-6 rounded-lg border-l-4 border-tb-purple-dark">
          <h2 className="text-2xl font-bold text-tb-purple-dark mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
          </p>
          <p className="mb-2">
            <strong>Email:</strong> <a href="mailto:support@thoughtbites.app" className="text-tb-purple-dark underline hover:text-tb-purple-light">support@thoughtbites.app</a>
          </p>
          <p className="mb-0">
            <strong>Response Time:</strong> We aim to respond to all inquiries within 5 business days.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-tb-purple-dark mb-4">Consent</h2>
          <p className="mb-4">
            By using ThoughtBites, you consent to this Privacy Policy and agree to its terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-tb-purple-dark mb-4">Additional Information</h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Cookies and Tracking</h3>
          <p className="mb-4">
            ThoughtBites does not use cookies or third-party tracking technologies. We only collect data directly within the app as described above.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Push Notifications (Future)</h3>
          <p className="mb-2">If we implement push notifications in the future, we will:</p>
          <ul className="list-disc ml-6 mb-4">
            <li>Request your explicit permission</li>
            <li>Allow you to opt in/out in Settings</li>
            <li>Only send relevant app-related notifications</li>
            <li>Never use your notification token for advertising</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Do Not Track</h3>
          <p className="mb-4">
            Our app does not respond to Do Not Track (DNT) signals because we do not track users across third-party websites or apps.
          </p>
        </section>

        <section className="text-center pt-8 border-t border-gray-200">
          <p className="mb-4 italic text-gray-600">
            This privacy policy is designed to be transparent about our data practices. We believe in respecting your privacy and giving you control over your information.
          </p>
          <p className="text-sm text-gray-500">
            For the latest version of this Privacy Policy, please visit <a href="https://share.thoughtbites.app/privacy" className="text-tb-purple-dark underline hover:text-tb-purple-light">https://share.thoughtbites.app/privacy</a> or check within the ThoughtBites app.
          </p>
        </section>
      </div>
    </div>
  );
}
