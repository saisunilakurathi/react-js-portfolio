export default function HeroSection(){
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--img">
                <img src="./img/hero_img.jpg" alt="Hero Section"/>
            </div> 
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section-title">Sai Sunil Akurathi1</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Full Stack</span>{ " " }
                        <br/>
                        Developer
                    </h1>
                    <p className="hero--section--description">
                        As a full stack software developer, I am dedicated to producing high-quality code, continuously learning, improving, and collaborating with teams to deliver exceptional software solutions.
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
        </section>
    );
}