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
        # Refresh the page to reset the form
        driver.refresh()
        WebDriverWait(driver, 15).until(
            EC.presence_of_element_located((By.ID, "year"))
        )

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
            "January": 1, "February": 2, "March": 3, "April": 4, "May": 5, "June": 6,
            "July": 7, "August": 8, "September": 9, "October": 10, "November": 11, "December": 12
        }
        parts = result.replace(",", "").split()  # ["15", "March", "2025"]
        gregorian_day = int(parts[0])
        return gregorian_day  # Return only the day

    except TimeoutException:
        print(f"Timeout waiting for result-date for {year}-{month}-{day}.")
        return None
    except Exception as e:
        print(f"Error for {year}-{month}-{day}: {str(e)}")
        return None

# Generate the bsadMapping
bsad_mapping = {}
for year in range(2000, 2089):
    days = []
    for month in range(1, 13):
        gregorian_day = get_gregorian_date(year, month, 1)
        if gregorian_day is not None:
            days.append(gregorian_day)
        else:
            print(f"Skipping {year}-{month} due to error.")
            days.append(None)  # Placeholder for missing data
        time.sleep(2)  # Delay to avoid overwhelming the server
    bsad_mapping[year] = days

# Close the driver
driver.quit()

# Format the result as a JavaScript object in the simplified format
def format_js_object(mapping):
    js_string = "const bsadMapping = {\n"
    for year in mapping:
        days = mapping[year]
        days_str = ", ".join(str(day) if day is not None else "null" for day in days)
        js_string += f"    {year}: [{days_str}],\n"
    js_string += "};"
    return js_string

# Print and save the result
js_output = format_js_object(bsad_mapping)
print(js_output)
with open("bsadMapping.js", "w") as f:
    f.write(js_output)