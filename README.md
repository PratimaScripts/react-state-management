# State-management with Context API 

Learning about the state management in React

Taught by Dev Ed (Youtuber) -> https://www.youtube.com/watch?v=35lXWvCuM8o


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Gist

Learned context api with react hooks which is a new modern way of writing react code. The context api provides with useful hook called useContext
that lets us use a state in any of our componetns we want!!!

Also, I was interested in building a continous integration pipeline for the React App using AWS thus, I have tested React Continuous Deployments with the AWS CodePipeline following the medium article by https://medium.com/@jeffreyrussom/react-continuous-deployments-with-aws-codepipeline-f5034129ff0e


The article describes all the deployment requiremnets to start implementing our pipeline and what we will need to do. 

Attached in the project root structure is the cloudformation.yml file which consists of everything to put together. We need to create a stack on CloudFormation, upload the cloudformation.yml template, provide the stack name, pass the parameters such as GithubOAuthToken and build the stack.

Once the stack get builded, all the resources specified in the template will be deployed if everything works fine.