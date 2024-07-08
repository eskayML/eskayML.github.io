import React from 'react'
import ProjectCard from './ProjectCard'  // Import the new component
import StartupGenImg from './images/project__startup_generator.jpg'
import SkyHighImg from './images/project__skyhigh_recommender.jpg'
import SegMentImg from './images/project__image_segmentation.jpg'
import SentiImg from './images/project__naija_senti.jpg'
import RentImg from './images/project__nigerian_houses_prediction.jpg'
import NkiruImg from './images/project__nurse_nkiru.jpg'
import SearchyImg from './images/searchy_logo.png'
import DiagnosysImg from './images/diagnosys_logo.png'


function Projects() {
  const projectsData = [
    {
      image: DiagnosysImg,
      alt: "diagnosys",
      title: "Automated AI Diagnostics & Feedback using Machine Learning",
      description: "My most recent project where , I'm making using of deep learning to detect symptoms of diseases , through Q&A *(other modalities incoming)",
      link: "https://diagnosys.streamlit.app/"
    },

    {
      image: NkiruImg,
      alt: "nurse nkiru",
      title: "Nurse Nkiru",
      description: "A smart AI powered Chatbot that helps with health related issues.",
      link: "https://hf.co/chat/assistant/65c71c79c7849c5d76d01f6c"
    },
    {
      image: SearchyImg,
      alt: "searchy img",
      title: "Searchy",
      description: "A E-commerce based search engine that uses a combination of images + text powered recommendations to filter listed products",
      link: "https://searchy.streamlit.app"
    },
    {
      image: StartupGenImg,
      alt: "startup generator",
      title: "Startup Idea Generator",
      description: "Generates Startup Ideas Using AI.",
      link: "https://sk-startup-idea-generator.streamlit.app/"
    },
    {
      image: SkyHighImg,
      alt: "skyhigh project",
      title: "SkyHigh Recommender",
      description: "A VSCode Extension that recommends very useful code snippets in python",
      link: "https://github.com/eskayML/skyHigh",
      linkText: "View Source"
    },
    {
      image: SegMentImg,
      alt: "mask segmentation",
      title: "Automatic Image Segmentation",
      description: "A model that automatically segments identified objects in an image",
      link: "https://eskayml-mask-segmentation.hf.space/"
    },
    {
      image: SentiImg,
      alt: "naijasenti",
      title: "Naija Senti",
      description: "A Sentiment analysis model that recognizes nigerian languages (e.g Pidgin, Igbo, Yoruba, Hausa) in a given text and returns their sentiments.",
      link: "https://huggingface.co/spaces/eskayML/naija_senti"
    },
    {
      image: RentImg,
      alt: "rent image of houses",
      title: "Nigerian House Rent Predicton",
      description: "A real world machine learning project that tends to the need for predicting the ever changing rent prices of houses in different parts of Nigeria.",
      link: "https://propertycentreprediction.streamlit.app/"
    }
    
  ];

  return (
    <div className="container text-center" id="Projects">
      <div className="mt-5 mb-3">
        <h3>Projects</h3>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects