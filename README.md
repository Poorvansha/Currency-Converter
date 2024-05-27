# Currency-Converter
Description:
The Currency Converter is a web-based application designed to provide users with real-time exchange rates between various currencies. The application allows users to select their desired currencies and input an amount, and then it calculates and displays the converted amount instantly. This project utilizes modern web development technologies and API integration to deliver accurate and up-to-date currency conversion rates.

Features:
1.User-Friendly Interface:
#Clean and intuitive design with a responsive layout.
#Easy-to-use input fields and dropdowns for selecting currencies.
#Display of flags corresponding to selected currencies for better user experience.

2.Real-Time Exchange Rates:
#Integration with a reliable currency API to fetch the latest exchange rates.
#Automatic conversion of entered amount based on current exchange rates.

3.Interactive Elements:
#Real-time updating of currency exchange rates on form submission and page load.
#Dynamic flag update based on selected currencies.

4.Error Handling:
#Validation to ensure the input amount is positive and non-empty.
#Graceful handling of API errors with user-friendly messages.


Technologies Used:
HTML5: For structuring the web page.
CSS3: For styling the application, ensuring a responsive and visually appealing design.
JavaScript: For handling interactivity, API integration, and dynamic updates.
API: https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies for fetching real-time currency exchange rates.
Font Awesome: For using icons, particularly the arrow icon between the currency selectors.

File Structure:
index.html: The main HTML file that structures the web page.
project.css: The CSS file that styles the web page.
codes.js: Contains the country list mapping currency codes to country codes.
project.js: Contains the JavaScript code for handling currency conversion, fetching exchange rates, and updating the UI dynamically.

How to Use:
Open the index.html file in a web browser.
Enter the amount you wish to convert in the "Enter Amount" field.
Select the currency you are converting from using the "From" dropdown.
Select the currency you are converting to using the "To" dropdown.
Click the "Get Exchange Rate" button to see the converted amount.
The exchange rate and converted amount will be displayed below the form.
