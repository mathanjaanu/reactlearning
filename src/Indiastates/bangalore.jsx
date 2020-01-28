import React, { Component } from "react";

export default class Bangalore extends Component {
    render() {
        return (
            <div>
                <p>Bangalore</p>
                <ul className="nav nav-tabs">
  <li className="active"><a data-toggle="tab" href="#home">Home</a></li>
  <li><a data-toggle="tab" href="#menu1">Menu 1</a></li>
  <li><a data-toggle="tab" href="#menu2">Menu 2</a></li>
</ul>

<div className="tab-content">
  <div id="home" className="tab-pane fade in active">
    <h3>HOME</h3>
    <p>Some content.</p>
  </div>
  <div id="menu1" className="tab-pane fade">
    <h3>Menu 1</h3>
    <p>Some content in menu 1.</p>
  </div>
  <div id="menu2" className="tab-pane fade">
    <h3>Menu 2</h3>
    <p>Some content in menu 2.</p>
  </div>
</div>




<div className="container-fluid bg-3 text-center">    

  <h3>Some of my Work</h3>
  <div className="row">
    <div className="col-sm-3">
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"  alt="Imageh" />
    </div>
    <div className="col-sm-3"> 
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"  alt="Imagea" />
    </div>
    <div className="col-sm-3"> 
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"  alt="Imageaa" />
    </div>
    <div className="col-sm-3">
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"  alt="Imageg" />
    </div>
    <div className="col-sm-3">
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"  alt="Imagef" />
    </div>
    <div className="col-sm-3"> 
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"  alt="Imagea" />
    </div>
    <div className="col-sm-3"> 
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"  alt="Imageaa" />
    </div>
    <div className="col-sm-3">
      <p>Some text..</p>
      <img src="https://placehold.it/150x80?text=IMAGE" className="img-responsive"  alt="Imaged" />
    </div>
  </div>
</div>

            </div>
        )
    }
}