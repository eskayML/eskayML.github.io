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
              <p><i class="fa-solid fa-calendar-days"></i></p>
              <p className="card-text">
                Feasibility Assessments and UseCase Identifications for
                businesses
              </p>
            </div>
          </div>
          <div className="card col-md-3 shadow-sm mt-3  mx-auto">
            <div className="card-body text-center">
              <h4 className="card-title">Natural Language Processing</h4>
              <p><i class="fa-solid fa-language"></i></p>
              <p className="card-text">
                Document categorization , Data mining, Text summarization,
                Entity identification
              </p>
            </div>
          </div>
          <div className="card col-md-3 shadow-sm mt-3  mx-auto ">
            <div className="card-body text-center">
              <h4 className="card-title">ChatBot Development</h4>
              <p><i class="fa-solid fa-robot"></i> </p>
              <p className="card-text">
                Building high performance AI powered Chatbots for customer
                onboarding
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
