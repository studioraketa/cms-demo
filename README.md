## Setup

```bash
yarn install
```

## Run the project locally

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Components File Structure

All the components reside in the `components/widgets` directory.

In order to be available in the visual builder, a component/widget needs to be exported from `components/widgets/index.js`.

## SASS Structure

Here are some highlights:

- base: has the styles for the basic building blocks – typography, colors, form elements and buttons.
- components: folder for the components, ideally each component has its separate SASS file
- layout: the grid lives here, we use CSS Grids
- pages: page specific styles go here