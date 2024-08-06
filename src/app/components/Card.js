import Image from "next/image";

export default function Card() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <div class="card">
            <Image
              src="/assets/img/1.png"
              layout="responsive"
              className="card-img-top"
              width={100}
              height={100}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Chicken ramen</h5>
              <p className="card-text">
                Japanese heaven in a bowl, this clear noodle soup will warm your
                hearts with tender chicken breast and soft boiled egg and
                filling noodles.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="card">
            <Image
              src="/assets/img/2.png"
              layout="responsive"
              className="card-img-top"
              width={100}
              height={100}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Cramy Vegan Mushroom</h5>
              <p className="card-text">
                Ramen has been a go-to comfort dish for me ever since I took my
                first slurp. The savory broth that seems to actually warm your
                soul, and those bouncy, perfectly chewy ramen noodles…simply
                unmatched!
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div class="card">
            <Image
              src="/assets/img/3.png"
              layout="responsive"
              className="card-img-top"
              width={100}
              height={100}
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Smoky Vegan Ramen</h5>
              <p className="card-text">
                This vegan ramen is smoky, spicy, and served with gingery
                mushrooms! Garnished with green onions for freshness, tofu, and
                corn for some crunch!
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
