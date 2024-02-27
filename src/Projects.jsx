import React from 'react'
import StartupGenImg from './images/project__startup_generator.jpg'
import SkyHighImg from './images/project__skyhigh_recommender.jpg'
import SegMentImg from './images/project__image_segmentation.jpg'
import SentiImg from './images/project__naija_senti.jpg'
import RentImg from './images/project__nigerian_houses_prediction.jpg'
import NkiruImg from './images/project__nurse_nkiru.jpg'
import SearchyImg from './images/searchy_logo.png'



function Projects() {
  return (
        <div className="container  text-center" id="Projects">
          <div className="mt-5 mb-3">
            <h3>Projects</h3>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              
              <div className="col-md-3 mb-3 col-sm-9 shadow-sm m-3 p-2 card">
                <img className="card-img-top" src={NkiruImg} alt=" nurse nkiru" />
                <div className="card-body">
                    <h4 className="card-title">Nurse Nkiru</h4>
                    <p className="card-text">A smart AI powered  Chatbot that helps with health related issues.</p>
                    <a href="https://hf.co/chat/assistant/65c71c79c7849c5d76d01f6c" className="btn  btn-outline-dark" target='_blank'>View Live</a>
                </div>
              </div>

              <div className="col-md-3 mb-3 col-sm-9 shadow-sm m-3 p-2 card">
                <img className="card-img-top" src={SearchyImg} alt=" searchy img" />
                <div className="card-body">
                    <h4 className="card-title">Searchy</h4>
                    <p className="card-text">A E-commerce based search engine that uses a combination of images + text powered recommendations to filter listed products</p>
                    <a href="https://searchy.streamlit.app" className="btn  btn-outline-dark" target='_blank'>View Live</a>
                </div>
              </div>


              <div className="col-md-3 mb-3 col-sm-9 shadow-sm  m-3 p-2 card  ">
                <img className="card-img-top" src={StartupGenImg} alt=" startup generator" />
                <div className="card-body">
                    <h4 className="card-title">Startup Idea Generator</h4>
                    <p className="card-text">Generates Startup Ideas Using AI.</p>
                    <a href="https://sk-startup-idea-generator.streamlit.app/" className="btn  btn-outline-dark" target='_blank'>View Live</a>
                </div>
              </div>

              <div className="col-md-3 mb-3 col-sm-9 shadow-sm  m-3 p-2 card">
                <img className="card-img-top" src={SkyHighImg} alt = 'skyhigh project'/>
                <div className="card-body">
                    <h4 className="card-title">SkyHigh Recommender</h4>
                    <p className="card-text">A VSCode Extension that recommends very useful code snippets in python </p>
                    <a href="https://github.com/eskayML/skyHigh" className="btn  btn-outline-dark" target='_blank'>View Source</a>
                </div>
              </div>

              <div className="col-md-3 mb-3 col-sm-9 shadow-sm  m-3 p-2 card  ">
                <img className="card-img-top" src={SegMentImg} alt = 'mask segmentation' />
                <div className="card-body">
                    <h4 className="card-title">Automatic Image Segmentation</h4>
                    <p className="card-text">A model that automatically segments identified objects in an image</p>
                    <a href="https://eskayml-mask-segmentation.hf.space/" className="btn  btn-outline-dark" target='_blank'>View Live</a>
                </div>
              </div>

              <div className="col-md-3 mb-3 col-sm-9 shadow-sm  m-3 p-2 card  ">
                <img className="card-img-top" src={SentiImg} alt = 'naijasenti' />
                <div className="card-body">
                    <h4 className="card-title">Naija Senti</h4>
                    <p className="card-text">A Sentiment analysis model that recognizes nigerian languages (e.g Pidgin, Igbo, Yoruba, Hausa) in a given text and returns their sentiments.</p>
                    <a href="https://huggingface.co/spaces/eskayML/naija_senti" className="btn  btn-outline-dark" target='_blank'>View Live</a>
                </div>
              </div>

              <div className="col-md-3 mb-3 col-sm-9 shadow-sm  m-3 p-2 card  ">
                <img className="card-img-top" src = {RentImg} alt='rent image of houses' />
                <div className="card-body">
                    <h4 className="card-title">Nigerian House Rent Predicton </h4>
                    <p className="card-text">A real world machine learning project that tends to the need for predicting the ever changing rent prices of houses in different parts of Nigeria.</p>
                    <a href="https://propertycentreprediction.streamlit.app/" className="btn  btn-outline-dark" target='_blank'>View Live</a>
                </div>
              </div>


            </div>
          </div>
        </div>
      );
}

export default Projects