# Currency Converter

This is a simple and user-friendly **Currency Converter** web app that runs directly in the browser. It uses the **ExchangeRate-API** to convert amounts between different currencies in real-time.

---

## 🔗 Live Demo

You can view the live demo here:  

👉 [https://currency-converter-demo.netlify.app](https://itssonam-0.github.io/CURRENCY_CONVERTER/)

---

## 🛠️ How It Works

1. **Select Currencies:**
   - Use the dropdown menus to select the **From** and **To** currencies.
   - The corresponding country flags will update automatically.

2. **Enter Amount:**
   - Type the amount you want to convert in the input box.  
   - By default, the amount is `1`.

3. **Get Exchange Rate:**
   - Click the **"Get Exchange Rate"** button.  
   - The app fetches the latest exchange rate from **ExchangeRate-API** and displays the converted amount below.

4. **Real-Time Conversion:**
   - The app calculates `Amount × Conversion Rate` and shows the result immediately.
   - Example: `10 USD = 820 INR`

---

## 🛠️ Setup Instructions

1. **Get an API Key:**

   - Go to [ExchangeRate-API](https://www.exchangerate-api.com/)  
   - Click **Get Free Key** and sign up for an account.  
   - Copy your API key.

2. **Update app.js:**
   
   ```js
   
