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

### Built With

- [Typescript](https://www.typescriptlang.org/)
- [React.js](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [PostGres](https://node-postgres.com/)
- [Redux](https://redux.js.org/)
- [Material](https://mui.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```
- Typescript
  If you do not want to install typescript globally, install it as a dev dependency
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
3. Enter the start command
   ```sh
   npm run start
   ```
4. Wait until it loads onto your default browser or head on to localhost:3000

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [x] the data grid component handles 100,000 of rows
- [x] Light backend that serves the inventory (implemented with express)
- [x] Product "api" that allows the implementation of different types of items to be added to an inventory
- [x] The data grid component accepts an array of objects and displays them in a sortable table.
- [x] The data grid component can be used dynamically or statically.
- [x] If no header prop is passed on,the object keys of the first entry are used as column headers.
- [x] A row can be deleted (on the local state if no delete entry function is not passed as a prop)
- [x] Columns adapt to the size of the content (the first column is fixed for better readability)

See the [open issues](https://github.com/MelaninedUnicorn/MyDataGrid/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Full implementation

This implementation is not complete. Here are a few things I would add to this project.

- The data grid component should accept a renderEditRow prop in which a method that renders an edit row function along with the "saving" process is passed
- withInventory HOC : If I wanted to display the data in different ways this would be a good addition.
- fully implement redux to add Products to the inventory

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
