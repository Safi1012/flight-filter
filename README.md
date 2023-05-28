# ✈️ Flight Filter

This repository contains a simple flight search app that allows users to filter flights by departure and arrival.
The goal of this project was to experiment with Next.js 13. Below you'll find detailed information
on how to get started, run tests, and suggestions for future improvements.


## 🌐 Demo

To see the project in action, please visit the [live demo](https://flight-filter.vercel.app).

<img src="https://github.com/Safi1012/flight-filter/assets/3514796/cc79f9dd-b645-49eb-8521-73f60f5c556a" alt="mobile screenshot" width="320px" height="auto"><br/>


## 🚀 Getting Started

To get started with this Next.js project, follow the steps below:

1. Download repository to your local machine.

2. Navigate to the project directory.

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Start the development server:

   ```shell
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the project running locally.


## ✅ Testing

This project incorporates a comprehensive testing suite, including multiple unit tests (e.g. `date.test.tsx`, `useFormatLocalizePrice.test.tsx`) and integration tests (`FlightSearch.test.tsx`), to ensure code quality and reliability. To run the tests, execute the following command:

```shell
npm run test
```


## 🎯 Focus

The key areas of focus for this project include:

### Accessibility

Ensuring the web application is accessible to all users, regardless of their abilities, is a fundamental aspect of this project. The app scores 97 points on the Lighthouse accessibility tests and can be fully used with a keyboard or screen reader, providing an inclusive experience for all users.

### Internationalization (i18n)

Internationalization plays a significant role in this project to ensure a seamless user experience for users from different linguistic backgrounds.
The project currently supports English (default) and German as language, but more importantly it can be easily extended with additional languages and locales. This can be done by adding language files to the `messages/[language].json` directory.

To switch the app language simply append `/en` or `/de` to the end of the URL.

- English (default): https://flight-filter.vercel.app/en
- German: https://flight-filter.vercel.app/de

### User Experience (UX)

The Flight filter was designed with a mobile-first approach, ensuring seamless functionality on devices of all sizes.


## 🔮 Future Improvements

- Playing around with additional Next.js 13 features, such as `OpenTelemetry`, `Analytics`, and `Lazy Loading`
- Adding a sort feature (e.g. sort by price or date).
- Adding support for additional languages and locales.
