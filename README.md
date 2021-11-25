<div id="top"></div>

<br />
<div align="center">

<h3 align="center">Mugisha's Data Grid</h3>

</div>


<!-- ABOUT THE PROJECT -->
## About The Project
Mugisha's attempt at making a re-usable data grid component.

### Requirements

- Handles 100,000s of rows.
- Generic, re-usable API that abstracts away the underlying implementation.
- Light backend that serves up the data.
- Allow sorting by clicking on columns.
- Please don't use a 3rd party data grid library.


### Built With

* [Typescript](https://www.typescriptlang.org/)
* [React.js](https://reactjs.org/)
* [Express](https://expressjs.com/)
* [Redux](https://redux.js.org/)
* [Material](https://mui.com/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites


* npm
  ```sh
  npm install npm@latest -g
  ```
* Typescript
  ```sh
   npm install typescript --save-dev
  ```
 

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:MelaninedUnicorn/MyDataGrid.git
   ```
2. Enter the setup command
   ```sh
   npm run setup
   ```
4. Enter the start command
   ```sh
   npm run start
   ```
5. Head on to localhost:3000

<p align="right">(<a href="#top">back to top</a>)</p>





<!-- ROADMAP -->
## Roadmap

- [x] The data grid component accepts an array of objects and displays them in a sortable table. 
- [x] If no header prop is passed on,the object keys are used as column title. 

See the [open issues](https://github.com/MelaninedUnicorn/MyDataGrid/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Full implementation
This implementation is not complete. Here are a few things I would add to this project.

- withLoading HOC
- withInventory HOC : If I wanted to display the data in different ways this would be a good addition.
- fully implement redux to add Products to the inventory
- The delete function would no only be in the state but would call the deleteProductRequest() prop that would be passed on as a "deleteEntry" function in the Data Grid component

See the [open issues](https://github.com/MelaninedUnicorn/MyDataGrid/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>




<!-- CONTACT -->
## Contact

Mugisha Kakou - mugisha.kakou@gmail.com - [LinkedIn](https://www.linkedin.com/in/joycava/)


Project Link: [Mugisha's Data Grid](https://github.com/MelaninedUnicorn/MyDataGrid)

<p align="right">(<a href="#top">back to top</a>)</p>





