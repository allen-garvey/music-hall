# Music Hall

Web app to explore an artist's albums and music tracks, built with Vue, using server side rendering. Based on [https://github.com/allen-garvey/vue-server-side-rendering](https://github.com/allen-garvey/vue-server-side-rendering).

## Dependencies

* node >= 20

### Script dependencies

* elixir
* ffmpeg

## Getting Started

* `npm install`
* `npm run build`
* Generated html and assets are in `public_html`

## Live code reload for development

* Run `npm run watch`
* Run a local webserver with `public_html` as the base directory

## Deployment

* `npm run deploy`

## How to convert master wav files

* Add link to master wav files `ln -s /path/to/wavs music`
* `time elixir scripts/convert-masters.exs` 

## Attribution

Icons are from [Feather Icons](https://feathericons.com/)

## License

Music Hall is released under the MIT License. See license.txt for more details.