import Image from "next/image";
import styles from './Navbar.module.css'; // สมมติว่าไฟล์ CSS ของคุณชื่อ Navbar.module.css

export default function Navbar() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className={`carousel slide ${styles.carouselContainer}`}
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <Image
              src="/assets/img/cr1.png"
              layout="responsive"
              width={1920}
              height={960}
              alt="Carousel Image 1"
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <Image
              src="/assets/img/cr2.png"
              layout="responsive"
              width={1920}
              height={960}
              alt="Carousel Image 2"
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <Image
              src="/assets/img/cr3.png"
              layout="responsive"
              width={1920}
              height={960}
              alt="Carousel Image 3"
              className="d-block w-100"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
