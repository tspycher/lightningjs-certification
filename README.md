# My LightningJS Certification

Here is a video showing the solution in action: https://youtu.be/z-6_UKtCJLI

## Summary
This is my little app to finish the LightningJS Training from March 2023. The app 
loads 5 trending Movies. With left/right a movie can get selected and with a hit on
enter a detail pages opens. With Backspace or left you can navigate back to the home screen.

Just start typing any Movie Name and the Search appears. As soon as more than 3 chars are entered
a 750ms delayed search gets performed and the top 5 results are displayed. The Items behave the same 
as with the initial Top Movies.

With Backspace the search-string can get erased. As soon as the search-string is empty 
search gets disables and the box disappears.

I'm not a Designer nor a JavaScript Developer. And I will never be any of these ;) But I'm very
happy to understand LightningJS better to support my Team from an architecture point of view, which is 
my main responsibility as "Head of Technology".

Thanks for the great training! It was FUN especially as this topic, from various aspects, is new to me.

## Things to improve

* Design
* Handling vertical scrolling to support more than 5 items
* Some X/Y placement's are odd
* reduce the amount of calls to the TMDB api (caching)
* the data for the calls are redundant and data could get passed between pages
* use of states for better effect/movie selection handling
* mixed responsibility of pages + router

## com.tspycher.app.lightning.certification

### Getting started

> Before you follow the steps below, make sure you have the
[Lightning-CLI](https://rdkcentral.github.io/Lightning-CLI/#/) installed _globally_ only your system

```
npm install -g @lightningjs/cli
```

finally in the file `settings.json` add your TMDB API key in the field `tmdb_api_key`.

#### Running the App

1. Install the NPM dependencies by running `npm install`

2. Build the App using the _Lightning-CLI_ by running `lng build` inside the root of your project

3. Fire up a local webserver and open the App in a browser by running `lng serve` inside the root of your project

#### Developing the App

During development, you can use the **watcher** functionality of the _Lightning-CLI_.

- use `lng watch` to automatically _rebuild_ your App whenever you make a change in the `src` or  `static` folder
- use `lng dev` to start the watcher and run a local webserver / open the App in a browser _at the same time_

#### Documentation

Use `lng docs` to open up the Lightning-SDK documentation.
