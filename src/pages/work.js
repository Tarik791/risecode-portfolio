export default function Work() {
  const projects = [
    {
      title: "CRM System",
      desc: "Multi-tenant business management platform for B2B companies.",
    },
    {
      title: "E-commerce Platform",
      desc: "Scalable store with custom backend and GraphQL API.",
    },
    {
      title: "IoT Dashboard",
      desc: "Real-time analytics and visualization for smart devices.",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto p-10">
      <h2 className="text-3xl font-bold mb-6">Our Work</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="p-6 border rounded-lg hover:shadow-md transition duration-300"
          >
            <h3 className="font-semibold text-xl mb-2">{p.title}</h3>
            <p className="text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
