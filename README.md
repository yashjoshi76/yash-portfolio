# Resume Hosted on AWS Cloud with CI/CD Pipeline <br />


## Technologies Used <br />
* React JS <br />
* AWS S3 <br />
* AWS Route 53 <br />
* AWS CloudFront <br />
* AWS IAM <br />
* Github Actions <br />

## Getting Started <br />

To get started with this project, follow these steps:

* Clone the repository to your local machine. <br />
* Install the dependencies using npm install or npm i. <br />
* Set up your AWS account and create an S3 bucket to host your application files. <br />
* Configure your AWS IAM credentials to allow access to the S3 bucket. <br />
* Update the src/config.js file with your S3 bucket name and other configuration options. <br />
* Run the application locally using npm start. <br />
* Deploy the application to AWS using Github Actions. <br />

### Configuration
The src/config.js file contains configuration options for the application. You can update this file to customize your application settings, such as the AWS region, S3 bucket name, and CloudFront distribution ID.

## Deployment
This project uses Github Actions for continuous integration and deployment. When you push changes to the main branch, Github Actions will automatically build and deploy your application to AWS S3 and CloudFront (will invalidate the file on each push). You can view the deployment status and logs in the Github Actions dashboard. Note that AWS provides a limited number of 1,000 free invalidation paths per month. 

## Contributing
If you'd like to contribute to this project, please follow these guidelines:

* Fork the repository and create a new branch.
* Make your changes and commit them with descriptive commit messages.
* Push your changes to your forked repository.
* Submit a pull request to merge your changes back into the main repository.


