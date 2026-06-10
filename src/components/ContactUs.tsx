import hassanAbbasImage from "../assets/Hassan abbas.jpeg";

const NOTION_FORM_URL = "https://spiral-fish-b54.notion.site/ebd//37a17297181e808fabd7febd3eb9d138";

const ContactUs = () => {
  return (
    <section id="contact-us" className="w-full py-16 md:py-24 px-6 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Send your project request through the form below and our team will follow up.
          </p>
        </div>

        <div className="mx-auto mb-16 max-w-4xl overflow-hidden rounded-md border border-border bg-card shadow-lg">
          <iframe
            src={NOTION_FORM_URL}
            title="Precision Media & Signs contact form"
            width="100%"
            height="600"
            frameBorder="0"
            allowFullScreen
            className="block w-full"
          />
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Or Contact Our Team Directly
          </h3>
          <p className="text-muted-foreground">
            Our team is ready to assist you with any questions.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          <div className="text-sm text-muted-foreground w-80 divide-y divide-border border border-border rounded-lg bg-card shadow-lg">
            <div className="flex items-start justify-between p-4">
              <div>
                <h3 className="text-lg text-foreground font-semibold mb-1">Hassan Abbas</h3>
                <p className="text-muted-foreground">Sales & Marketing</p>
              </div>
              <img
                className="h-12 w-12 rounded-full border-2 border-primary/20"
                src={hassanAbbasImage}
                alt="Hassan Abbas profile"
              />
            </div>
            <div className="flex items-center divide-x divide-border">
              <a
                href="mailto:info@precisionsignsmedia.com"
                className="flex items-center justify-center gap-2 w-1/2 py-3 hover:bg-accent transition-colors"
              >
                <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5 2.5c0-.825-.675-1.5-1.5-1.5H3c-.825 0-1.5.675-1.5 1.5m15 0v9c0 .825-.675 1.5-1.5 1.5H3c-.825 0-1.5-.675-1.5-1.5v-9m15 0L9 7.75 1.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Send Email
              </a>
              <a
                href="tel:+18329702805"
                className="flex items-center justify-center gap-2 w-1/2 py-3 hover:bg-accent transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.29 3.75a3.75 3.75 0 0 1 2.962 2.963M11.289.75a6.75 6.75 0 0 1 5.963 5.955m-.75 5.985v2.25a1.5 1.5 0 0 1-1.635 1.5 14.84 14.84 0 0 1-6.472-2.303 14.6 14.6 0 0 1-4.5-4.5 14.84 14.84 0 0 1-2.303-6.502A1.5 1.5 0 0 1 3.085 1.5h2.25a1.5 1.5 0 0 1 1.5 1.29 9.6 9.6 0 0 0 .525 2.108 1.5 1.5 0 0 1-.338 1.582l-.952.952a12 12 0 0 0 4.5 4.5l.952-.952a1.5 1.5 0 0 1 1.582-.338c.681.254 1.388.43 2.108.526a1.5 1.5 0 0 1 1.29 1.522" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
