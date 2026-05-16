# Miam Sweets

Miam Sweets is a React and Vite website for displaying cakes, collecting order requests, and deploying to Netlify.

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Build

Create a production build:

```bash
npm run build
```

The built site will be generated in the `dist` directory.

## Deploy On Netlify

1. Push the project to GitHub.
2. Go to Netlify.
3. Add a new site from Git.
4. Select the repository.
5. Set the build command to:

```bash
npm run build
```

6. Set the publish directory to:

```text
dist
```

7. Deploy.

## Netlify Forms Setup

1. After the first deploy, submit a test order from the website.
2. Go to the Netlify dashboard.
3. Open the Forms section.
4. Confirm the `cake-order` form appears.
5. Configure email notifications to send submissions to:

```text
aaxamyan@gmail.com
```

## Edit Cakes

Open:

```text
src/data/cakes.js
```

For each cake, change:

- `name`
- `description`
- `image`
- `pricePerPortion`
- `minQuantity`
- `maxQuantity`

## Replace Photos

Put real cake images into:

```text
public/images/
```

Use matching filenames:

```text
cake-1.jpg
cake-2.jpg
cake-3.jpg
cake-4.jpg
cake-5.jpg
cake-6.jpg
```

The site uses these image paths from `src/data/cakes.js`. If an image is missing, the cake card shows a styled fallback that says `Նկարը շուտով`.

## Replace Logo

Put the logo file inside:

```text
public/logo/
```

Name it:

```text
miamsweets-logo.png
```

Recommended format: transparent PNG or SVG.

Recommended size: at least `512x512` for an icon-style logo.

## Future Pricing Improvement

Current pricing is linear:

```js
quantity * pricePerPortion
```

Later, this can be replaced with `pricesByQuantity` for non-linear pricing. That would allow each quantity to have its own exact price instead of calculating every order from one price per portion.
