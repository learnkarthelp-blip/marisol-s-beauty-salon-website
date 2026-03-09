import { MapPin, Phone, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const businessHours = [
  { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 6:00 PM' },
  { day: 'Sunday', hours: '10:00 AM - 4:00 PM' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[32px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-charcoal mb-4">
            Visit Us
          </h2>
          <p className="text-xl sm:text-2xl text-charcoal/70 leading-relaxed">
            We're here to serve you and make you feel beautiful
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-2 border-cream hover:border-rosegold transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-rosegold/10 p-3 rounded-full min-w-[48px] min-h-[48px] flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-rosegold" />
                  </div>
                  <div>
                    <h3 className="text-[28px] leading-tight sm:text-2xl font-semibold text-charcoal mb-2">Address</h3>
                    <p className="text-lg sm:text-xl text-charcoal/70 leading-relaxed">
                      11430 Laurel Canyon Blvd C<br />
                      San Fernando, CA 91340
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-cream hover:border-rosegold transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-rosegold/10 p-3 rounded-full min-w-[48px] min-h-[48px] flex items-center justify-center">
                    <Phone className="h-6 w-6 text-rosegold" />
                  </div>
                  <div>
                    <h3 className="text-[28px] leading-tight sm:text-2xl font-semibold text-charcoal mb-2">Phone</h3>
                    <a
                      href="tel:7472798532"
                      className="inline-block text-xl sm:text-2xl text-rosegold hover:text-rosegold-dark font-medium transition-colors min-h-[44px] py-2"
                    >
                      (747) 279-8532
                    </a>
                    <p className="text-base sm:text-lg text-charcoal/60 mt-1">Click to call</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-cream hover:border-rosegold transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-rosegold/10 p-3 rounded-full min-w-[48px] min-h-[48px] flex items-center justify-center">
                    <Clock className="h-6 w-6 text-rosegold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[28px] leading-tight sm:text-2xl font-semibold text-charcoal mb-3">Business Hours</h3>
                    <div className="space-y-2">
                      {businessHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center gap-4">
                          <span className="text-lg sm:text-xl text-charcoal/70">{schedule.day}</span>
                          <span className="font-medium text-charcoal text-lg sm:text-xl">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Map */}
          <div className="h-[500px] lg:h-full min-h-[400px]">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-cream">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3298.7!2d-118.4!3d34.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDE4JzAwLjAiTiAxMTjCsDI0JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Marisol's Beauty Salon Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
