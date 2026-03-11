import { useState } from "react";

import cartImg from "../assets/images/cart.jpeg";
import checkoutImg from "../assets/images/checkout.jpeg";
import helpSupportImg from "../assets/images/help&support.jpeg";
import loginImg from "../assets/images/login.jpeg";
import notificationImg from "../assets/images/notification.jpeg";
import orderImg from "../assets/images/order.jpeg";
import paymentMethodImg from "../assets/images/payment method.jpeg";
import productImg from "../assets/images/product.jpeg";
import profileImg from "../assets/images/profile.jpeg";
import registerImg from "../assets/images/register.jpeg";
import wishlistImg from "../assets/images/wishlist.jpeg";

type ProjectImage = {
  src: string;
  label: string;
};

const projectImages: ProjectImage[] = [
  { src: productImg, label: "Product Screen" },
  { src: loginImg, label: "Login Screen" },
  { src: registerImg, label: "Register Screen" },
  { src: cartImg, label: "Cart Screen" },
  { src: checkoutImg, label: "Checkout Screen" },
  { src: profileImg, label: "Profile Screen" },
  { src: wishlistImg, label: "Wishlist Screen" },
  { src: paymentMethodImg, label: "Payment Method Screen" },
  { src: orderImg, label: "Order Screen" },
  { src: notificationImg, label: "Notification Screen" },
  { src: helpSupportImg, label: "Help & Support Screen" },
];

function ProjectSlide() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? projectImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === projectImages.length - 1 ? 0 : prev + 1
    );
  };

  const currentImage = projectImages[currentImageIndex];

  return (
    <section className="slide">
      <div className="slide-header-row">
        <div>
          <p className="slide-label">FEATURED PROJECT</p>
          <h1>E-commerce App</h1>
          <h2>React Native + Firebase</h2>
        </div>
      </div>

      <div className="project-layout">
        <div className="project-preview">
          <div className="project-slider">
            <button
              className="slider-btn slider-btn-left"
              onClick={handlePrevImage}
              aria-label="Previous image"
              type="button"
            >
              ‹
            </button>

            <img
              src={currentImage.src}
              alt={currentImage.label}
              className="project-real-image"
            />

            <button
              className="slider-btn slider-btn-right"
              onClick={handleNextImage}
              aria-label="Next image"
              type="button"
            >
              ›
            </button>

            <div className="image-caption">
              <span>{currentImage.label}</span>
              <span>
                {currentImageIndex + 1} / {projectImages.length}
              </span>
            </div>
          </div>
        </div>

        <div className="project-details">
          <div className="project-card highlight-card">
            <h3>Overview</h3>
            <p>
              A mobile shopping application designed to provide a simple and
              user-friendly shopping experience, including authentication,
              browsing, cart management, wishlist, checkout, and order tracking.
              APK available for testing
            </p>
          </div>

          <div className="project-card">
            <h3>My Role</h3>
            <p>
              I worked on the app structure, user interface, Firebase
              integration, and the main shopping flow from login to checkout.
            </p>
          </div>

          <div className="project-card">
            <h3>Tech Stack</h3>
            <p>
              React Native, Expo, Firebase, Firestore, JavaScript
            </p>
          </div>

          <div className="project-card">
            <h3>Key Features</h3>
            <ul className="feature-list">
              <li>User authentication</li>
              <li>Product listing and details</li>
              <li>Cart and wishlist</li>
              <li>Address management</li>
              <li>Checkout and order tracking</li>
            </ul>
          </div>

          <div className="project-card">
            <h3>Links</h3>
            <div className="link-group">
              <a
                href="https://github.com/JayChieng/ecommerce-app"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View GitHub
              </a>

              <a
                href="https://ecommerce-app-rho-woad.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Web version
              </a>

              <a
                href="https://expo.dev/accounts/jay_chieng/projects/ecommerce-app/builds/1488deb1-bdad-47aa-b069-d5d260b4cb2f"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link ghost-link"
              >
                Download APK
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSlide;