import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Card1 from "./vendor/images/t2.jpg";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <div className="container">
        <div className="row mt-3">
          <div className="col-4">
            
              <div class="col">
                <div class="card h-100">
                  <img src={Card1} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Travel card</h5>
                    <p class="card-text">
                    Tourism ministers and secretaries around the world have identified adventure and nature travel as leading segments in the ...
                    </p>
                  </div>
                </div>
              </div>
          </div>
          <div className="col-4">
          <div class="col">
                <div class="card h-100"> 
                  <img src={Card1} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">travel Card</h5>
                    <p class="card-text">
                    Tourism ministers and secretaries around the world have identified adventure and nature travel as leading segments in the ...
                    </p>
                  </div>
                </div>
              </div>
          </div>
          <div className="col-4">
          <div class="col">
                <div class="card h-100">
                  <img src={Card1} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Travel card</h5>
                    <p class="card-text">
                    Tourism ministers and secretaries around the world have identified adventure and nature travel as leading segments in the ...
                    </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
