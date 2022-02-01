import React from "react";
import "./styles.css";

function Home() {
  return (
    <>
      <header>
        <section className="header">
          <div className="logo">
            <a href="#">cube-green</a>
          </div>
          <nav className="nav">
            <a href="#">Funcionalidades</a>
            <a href="#">Soluções</a>
            <a href="#">Recursos</a>
            <a href="#">Preços ✨</a>
          </nav>
          <div className="buttons">
            <button className="ghost-button">Entrar</button>
            <button>Cadastrar-se</button>
          </div>
        </section>
      </header>
      <main>
        <section className="main">
          <section className="img">
            <picture className="img_site">
              <img
                src="https://i.ibb.co/RjP0GPb/Frame-2.jpg"
                alt="img-cube-green"
              />
            </picture>
          </section>
          <section className="texts">
            <h1 className="title">Find a skilled individual to do the job.</h1>
            <p className="paragraph">
              Cube-green lets you find the right individual for any challenge
              from development to a marketing promotion.
            </p>
            <div className="cta">
              <button>Get started</button>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default Home;
