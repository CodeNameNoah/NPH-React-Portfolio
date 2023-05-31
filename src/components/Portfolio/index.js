import React from 'react';

import PlaceHolder4 from "../../assets/images/placeholder-4.jpg";
import PlaceHolder5 from "../../assets/images/Placeholder-5.jpg";
import PlaceHolder6 from "../../assets/images/Placeholder-6.jpg";
import Horiseon from "../../assets/images/Horiseon.png";
import HopsHaven from "../../assets/images/HopsHaven.png";
import ByteBlogger from "../../assets/images/ByteBlogger.png";

function Portfolio() {
  return (
    <section class="portfolio">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img
              src={Horiseon}
              alt="Horiseon"
              class="card-img-top"
            />
            <div class="card-body">

              <a href="https://codenamenoah.github.io/Site-Refactor/" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://codenamenoah.github.io/Movie-Indexer/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={HopsHaven}
              alt="HopsHaven"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/CodeNameNoah/Hops-Haven" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://hops-haven.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={ByteBlogger}
              alt="ByteBlogger"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/CodeNameNoah/ByteBlogger-MVC" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://byteblogger.herokuapp.com/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={PlaceHolder4}
              alt="Coming Soon"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/CodeNameNoah/Movie-Indexer" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://codenamenoah.github.io/Movie-Indexer/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={PlaceHolder5}
              alt="Coming Soon"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/CodeNameNoah" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://github.com/CodeNameNoah" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <img
              src={PlaceHolder6}
              alt="Coming Soon"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/CodeNameNoah" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://github.com/CodeNameNoah" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


      </div>
    </section>


  );
}

export default Portfolio;
