import { Link } from "react-router-dom";
import styles from "../home/home.module.css";

const Home = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1>LAYERUP.</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias totam
          ratione aperiam ducimus corrupti. Id libero voluptatibus, modi ex
          minus dolore nemo natus distinctio eos rerum unde, perspiciatis odit
          similique.
        </p>

        <h3>Under Construction</h3>
        <span>
          Meanwhile you can go to the 👉{" "}
          <Link className={styles.redirect} to={`shop`}>
            Shop
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Home;
