import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { z } from 'zod';

const deletionRequestSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  reason: z.string().trim().max(1000, "Reason must be less than 1000 characters").optional(),
});

const PrivacyPolicy = () => {
  const [deletionForm, setDeletionForm] = useState({ name: '', email: '', reason: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleDeletionSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    
    const result = deletionRequestSchema.safeParse(deletionForm);
    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate submission - in production, this would send to your backend
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Data deletion request submitted', {
        description: 'We will process your request within 30 days and contact you at the provided email.',
      });
      setDeletionForm({ name: '', email: '', reason: '' });
    } catch (error) {
      toast.error('Failed to submit request', {
        description: 'Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Privacy Policy | ZaidiStudio</title>
        <meta name="description" content="ZaidiStudio Privacy Policy - Learn how we collect, use, and protect your personal information." />
      </Helmet>
      
      <Header />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          
          <div className="prose prose-lg max-w-none text-foreground/90 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                ZaidiStudio ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our AI automation services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-medium text-foreground mb-3">Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Register for our services or create an account</li>
                <li>Subscribe to our newsletter or AI Starter Kit</li>
                <li>Request a consultation or demo</li>
                <li>Contact us through our website or live chat</li>
                <li>Participate in our AI Dojo community</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This information may include your name, email address, phone number, company name, and any other information you choose to provide.
              </p>
              
              <h3 className="text-xl font-medium text-foreground mb-3 mt-6">Automatically Collected Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                When you visit our website, we may automatically collect certain information about your device, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide, operate, and maintain our services</li>
                <li>Process and complete transactions</li>
                <li>Send you technical notices, updates, and administrative messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Communicate with you about products, services, and events</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions</li>
                <li>Personalize and improve your experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following situations:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li><strong>Service Providers:</strong> We may share information with third-party vendors who perform services on our behalf</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid requests by public authorities</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition of all or a portion of our assets</li>
                <li><strong>With Your Consent:</strong> We may share information for any other purpose with your consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>The right to access the personal information we hold about you</li>
                <li>The right to request correction of inaccurate information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to opt-out of marketing communications</li>
                <li>The right to withdraw consent where applicable</li>
              </ul>
            </section>

            <section id="data-deletion" className="scroll-mt-24">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Data Deletion Request</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to request deletion of your personal data from our systems. To exercise this right, please submit a data deletion request using the form below. We will process your request within 30 days and notify you once complete.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Upon receiving your request, we will:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-8">
                <li>Verify your identity to ensure the security of your data</li>
                <li>Delete all personal information associated with your account</li>
                <li>Remove your data from our marketing lists and databases</li>
                <li>Notify any third parties with whom we shared your data</li>
                <li>Send you a confirmation email once the deletion is complete</li>
              </ul>
              
              <div className="bg-muted/30 rounded-lg p-6 md:p-8">
                <h3 className="text-xl font-medium text-foreground mb-6">Request Data Deletion</h3>
                <form onSubmit={handleDeletionSubmit} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="deletion-name" className="text-foreground">Full Name *</Label>
                    <Input
                      id="deletion-name"
                      type="text"
                      placeholder="Enter your full name"
                      value={deletionForm.name}
                      onChange={(e) => setDeletionForm({ ...deletionForm, name: e.target.value })}
                      className={errors.name ? 'border-destructive' : ''}
                    />
                    {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="deletion-email" className="text-foreground">Email Address *</Label>
                    <Input
                      id="deletion-email"
                      type="email"
                      placeholder="Enter the email associated with your account"
                      value={deletionForm.email}
                      onChange={(e) => setDeletionForm({ ...deletionForm, email: e.target.value })}
                      className={errors.email ? 'border-destructive' : ''}
                    />
                    {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="deletion-reason" className="text-foreground">Reason for Deletion (Optional)</Label>
                    <Textarea
                      id="deletion-reason"
                      placeholder="Let us know why you want your data deleted (optional)"
                      value={deletionForm.reason}
                      onChange={(e) => setDeletionForm({ ...deletionForm, reason: e.target.value })}
                      rows={4}
                      className={errors.reason ? 'border-destructive' : ''}
                    />
                    {errors.reason && <p className="text-sm text-destructive">{errors.reason}</p>}
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                    {isSubmitting ? 'Submitting...' : 'Submit Deletion Request'}
                  </Button>
                </form>
                
                <p className="text-sm text-muted-foreground mt-6">
                  Alternatively, you can send your data deletion request directly to{' '}
                  <a href="mailto:info@zaidistudio.co.ke?subject=Data%20Deletion%20Request" className="text-primary hover:underline">
                    info@zaidistudio.co.ke
                  </a>{' '}
                  with the subject line "Data Deletion Request".
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites and services. We are not responsible for the privacy practices of these third parties. We encourage you to read the privacy policies of any third-party websites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">11. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-muted/30 rounded-lg">
                <p className="text-foreground font-medium">ZaidiStudio</p>
                <p className="text-muted-foreground">Email: info@zaidistudio.co.ke</p>
                <p className="text-muted-foreground">Phone: +254 722 135 913</p>
                <p className="text-muted-foreground">Location: Nairobi, Kenya</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
