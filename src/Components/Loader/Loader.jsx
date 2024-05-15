import { React } from "react";
import "./Loader.css";

function Loader() {
  return (
    <div class="wrapper">
      <main class="main">
        <h1 class="title">
          C<span>---</span>ffee
        </h1>
        <div class="cup">
          <img
            class="cup__img"
            src="https://blog.joypixels.com/content/images/2019/06/hot_beverage_1024.gif"
            alt="cup of coffee"
          />
        </div>
        <div class="progress">
          <div class="progress__area">
            <div class="progress__line"></div>
          </div>
          <div class="progress__sub">loading...</div>
        </div>
      </main>
    </div>
  );
}

export default Loader;
