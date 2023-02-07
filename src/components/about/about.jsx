import "./about.css";
import Me from "../../img/headshot.jpeg";

const About = () => {
	return (
		<div className="a">
			<div style={{ maxWidth: "500px" }}>
				<img src={Me} alt="" className="a-img" />
			</div>
			<div className="a-left-wrapper">
				<h2 className="a-intro">Hello, My name is</h2>
				<h1 className="a-name">Yash Joshi</h1>
				<div className="a-title">
					<div className="a-title-wrapper">
						<div className="a-title-item">Cloud Engineer</div>
						<div className="a-title-item">Web Developer</div>
						<div className="a-title-item">Technical Writer</div>
                        <div className="a-title-item">Photographer</div>
					</div>
				</div>
				<p className="i-desc">
					I design and develop services for customers of all sizes, specializing
					in creating stylish, modern websites, web services and online stores.
				</p>
			</div>
		</div>
	);
};

export default About;
