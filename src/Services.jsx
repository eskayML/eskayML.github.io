export default function Services() {
  const serviceItems = [
    {
      title: "AI Consulting",
      icon: "fa-calendar-days",
      description: "Feasibility Assessments and UseCase Identifications for businesses to provide customers with the highest value possible."
    },
    {
      title: "Natural Language Processing",
      icon: "fa-language",
      description: "Document categorization, Data mining, Text summarization, Entity identification"
    },
    {
      title: "ChatBot Development",
      icon: "fa-robot",
      description: "Building high performance AI powered Chatbots, RAG pipelines and Information Retrieval. Bots that are optimized for tasks like customer onboarding and leads generation."
    }
  ];

  return (
    <div className="container text-center py-5" id="Services">
      <h3 className="mb-4">Services</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {serviceItems.map((item, index) => (
          <div className="col" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h4 className="card-title">{item.title}</h4>
                <p><i className={`fa-solid ${item.icon} fa-2x my-3`}></i></p>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}