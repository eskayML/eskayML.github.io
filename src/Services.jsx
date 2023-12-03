export default function Services() {
  return (
    <div className="container mx-auto text-center" id="Services">
      <div className=" mt-5 mb-3">
        <h3>Services</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="card col-md-3 shadow-sm  mt-3 mx-auto ">
            <div className="card-body text-center">
              <h4 className="card-title">AI Consulting</h4>
              <p><i className="fa-solid fa-calendar-days"></i></p>
              <p className="card-text">
                Feasibility Assessments and UseCase Identifications for
                businesses to provide customers with the highest value possible.
              </p>
            </div>
          </div>
          <div className="card col-md-3 shadow-sm mt-3  mx-auto">
            <div className="card-body text-center">
              <h4 className="card-title">Natural Language Processing</h4>
              <p><i className="fa-solid fa-language"></i></p>
              <p className="card-text">
                Document categorization , Data mining, Text summarization,
                Entity identification
              </p>
            </div>
          </div>
          <div className="card col-md-3 shadow-sm mt-3  mx-auto ">
            <div className="card-body text-center">
              <h4 className="card-title">ChatBot Development</h4>
              <p><i className="fa-solid fa-robot"></i> </p>
              <p className="card-text">
                Building high performance AI powered Chatbots , RAG pipelines and Information Retrieval.
                <br/>Bots that are optimized for tasks like customer onboarding and leads generation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
