import React from "react";
import Me from "../../img/headshot.jpeg";
import "./resume.css";

const Resume = () => {
	return (
		<div id="page-wrap">
			<img src={Me} alt="" id="pic" />
			<div id="contact-info" className="vcard">
				<h1 className="fn">Yash Joshi</h1>
				<p>
					Cell: <span className="tel">+353-894622828</span>
					<br />
					Email:{" "}
					<a className="email" href="mailto:yashhjoshhi@gmail.com">
						yashhjoshhi@gmail.com
					</a>
				</p>
			</div>
			<div id="objective">
				<p>I am an outgoing and energetic (ask anybody) young professional,</p>
			</div>
			<div className="clear"></div>
			<dl>
				<dd className="clear"></dd>
				<dt>Education</dt>
				<dd>
					<h2>National University of Ireland, Cork - Oct. 2022</h2>
					<p>
						<strong>MSc in</strong> Business Information Systems and Analytics
						<br />
					</p>
				</dd>
				<dd>
					<h2>Alliance University - July 2019</h2>
					<p>
						<strong>BS in</strong> Computer Science Engineering
						<br />
					</p>
				</dd>
				<dd className="clear"></dd>
				<dt>Skills</dt>
				<dd>
					<p>
						<h4>Cloud Technologies:</h4> EC2, S3, Lambda, RDS, Amplify,
						CloudFormation, Cognito, CodePipeline Programming: Python,
						JavaScript, React.js, C++ <br />
						<h4>Databases:</h4> PostgreSQL, MongoDB, MySQL <br />
						<h4>Frameworks: </h4>React.js, Spring Boot, Serverless <br />
						<h4>Tools and Technologies:</h4> Docker, Jira, Taiga, Git, Jenkins{" "}
						<br />
					</p>
{/* 
					<h2>Projects</h2>
					<p>
						<h4>Databases:</h4> PostgreSQL, MongoDB, MySQL <br />
						<h4>Frameworks: </h4>React.js, Spring Boot, Serverless <br />
					</p> */}
				</dd>
				<dd className="clear"></dd>
				<dt>Experience</dt>
				<dd>
					<h2>Staqu Technologies </h2>
					<span>
						Software Developer - New Delhi, IN - Oct. 2019 - Oct. 2020
					</span>
					<ul>
						<li>
							<li>
								Designed, developed, and tested production-ready web
								applications at the AI & Analytics startup.
							</li>
						</li>
						<li>
							Prototyped the micro-frontend architecture of flagship video
							analytics software using React.js, Node.js, Gilab CI/CD, and AWS.
						</li>
						<li>
							Delivered 5 commercial web applications developed using MERN
							(MongoDB, Express, React, Node).
						</li>
					</ul>
					<h2>Indshine Drone Enterprise </h2>
					<span>Software Developer, April 2019 - Aug. 2019</span>
					<ul>
						<li>
							Developed project-sharing workflow features using Node.js, and
							React.js.
						</li>
						<li>Designed UI/UX workflows using Figma.</li>
						<li>
							Learned the fundamentals of cloud services such as Amazon Web
							Services (AWS), Heroku Cloud, and Google Firebase.
						</li>
					</ul>
				</dd>
				<dd className="clear"></dd>
				<dt>Hobbies</dt>
				<dd>
					<li>Rubik's Cubes</li>
					<li>Videography</li>
					<li>Swimming</li>
				</dd>
				<dd className="clear"></dd>
				<dt>References</dt>
				<dd>Available on request</dd>

				<dd className="clear"></dd>
			</dl>

			<div className="clear"></div>
		</div>
	);
};

export default Resume;
