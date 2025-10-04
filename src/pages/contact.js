export default function Contact() {
  return (
    <section className="max-w-xl mx-auto p-10 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-600 mb-6">
        Have a project or idea in mind? Let’s build something great together.
      </p>
      <a
        href="mailto:info@risecode.dev"
        className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
      >
        info@risecode.dev
      </a>
    </section>
  );
}
