from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from selenium.common.exceptions import TimeoutException
import time

# Initialize the Chrome driver
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
driver.get("https://www.hamropatro.com/date-converter")

# Function to convert Nepali date to Gregorian date
def get_gregorian_date(year, month, day):
    try:
        # Select year
        year_select = driver.find_element(By.ID, "year")
        year_select.click()
        year_option = driver.find_element(By.XPATH, f"//select[@id='year']/option[@value='{year}']")
        year_option.click()

        # Select month
        month_select = driver.find_element(By.ID, "month")
        month_select.click()
        month_option = driver.find_element(By.XPATH, f"//select[@id='month']/option[@value='{month}']")
        month_option.click()

        # Select day
        day_select = driver.find_element(By.ID, "day")
        day_select.click()
        day_option = driver.find_element(By.XPATH, f"//select[@id='day']/option[@value='{day}']")
        day_option.click()

        # Click the convert button
        convert_button = driver.find_element(By.ID, "convertdate")
        convert_button.click()

        # Wait for the result to load
        print(f"Waiting for result for {year}-{month}-{day}...")
        result_element = WebDriverWait(driver, 15).until(
            EC.presence_of_element_located((By.CLASS_NAME, "result-date"))
        )
        result = result_element.text.strip()  # e.g., "15 March , 2025"
        print(f"Result found: {result}")

        # Parse the Gregorian date
        month_names = {
            "January": 0, "February": 1, "March": 2, "April": 3, "May": 4, "June": 5,
            "July": 6, "August": 7, "September": 8, "October": 9, "November": 10, "December": 11
        }
        parts = result.replace(",", "").split()  # Remove comma and split: ["15", "March", "2025"]
        gregorian_day = int(parts[0])
        gregorian_month = month_names[parts[1]]
        gregorian_year = int(parts[2])
        return [gregorian_year, gregorian_month, gregorian_day]

    except TimeoutException:
        print(f"Timeout waiting for result-date for {year}-{month}-{day}. Page source: {driver.page_source[:500]}...")
        return None
    except Exception as e:
        print(f"Error for {year}-{month}-{day}: {str(e)}")
        return None

# Generate the bsadMapping
bsad_mapping = {}
for year in range(2079, 2087):
    bsad_mapping[year] = {}
    for month in range(1, 13):
        gregorian_date = get_gregorian_date(year, month, 1)
        if gregorian_date:
            bsad_mapping[year][month] = gregorian_date
        else:
            print(f"Skipping {year}-{month} due to error.")
        time.sleep(2)  # Delay to avoid overwhelming the server

# Close the driver
driver.quit()

# Format the result as a JavaScript object
def format_js_object(mapping):
    js_string = "const bsadMapping = {\n"
    for year in mapping:
        js_string += f"    {year}: {{\n"
        for month in mapping[year]:
            y, m, d = mapping[year][month]
            month_names = ["Baisakh", "Jestha", "Ashadh", "Shrawan", "Bhadra", "Ashwin",
                           "Kartik", "Mangsir", "Poush", "Magh", "Falgun", "Chaitra"]
            comment = f" // {month_names[month-1]} {year} = {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][m]} {d}, {y}"
            js_string += f"        {month}: [{y}, {m}, {d}],{comment}\n"
        js_string += "    },\n"
    js_string += "};"
    return js_string

# Print and save the result
js_output = format_js_object(bsad_mapping)
print(js_output)
with open("bsadMapping.js", "w") as f:
    f.write(js_output)