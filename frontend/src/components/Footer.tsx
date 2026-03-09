export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white py-6">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-white/80">
            © {currentYear} Marisol's Beauty Salon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
