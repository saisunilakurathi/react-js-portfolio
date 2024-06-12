export default function HeroSection(){
    return (
        <section id="heroSection" className="hero--section">
        <div className="hero--section--img">
            <img src="./img/hero_img.jpg" alt="Hero Section"/>
        </div>
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section-title">Sai Sunil Akurathi</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Full Stack</span>{ " " }
                        <br/>
                        Developer
                    </h1>
                    <p className="hero--section--description">
                        Java, Node.js, Python, PHP
                        <br/> HTML5, CSS3, JavaScript, jQuery, Ajax, React, Next.js
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
        </section>
    );
}