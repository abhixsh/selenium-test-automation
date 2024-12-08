import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import java.time.Duration;

public class OpenPage {
    WebDriver driver;

    @BeforeMethod
    public void setUp() {
        // Set up Chrome options to run in headless mode
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless"); // Run Chrome in headless mode
        options.addArguments("--no-sandbox"); // Bypass security restrictions

        // Initialize the WebDriver with the ChromeDriver and options
        driver = new ChromeDriver(options);
        driver.get("http://localhost:3000"); // Open the local React app
    }

    @Test
    public void TestTextBox() {
        // Using WebDriverWait instead of Thread.sleep() for better synchronization
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));

        // Locate and interact with the form elements
        WebElement enterName = wait.until(ExpectedConditions.visibilityOfElementLocated(By.name("name")));
        enterName.sendKeys("Ann Perera");

        WebElement enterEmail = driver.findElement(By.name("email"));
        enterEmail.sendKeys("Ann@gmail.com");

        WebElement datePicker = driver.findElement(By.name("date"));
        datePicker.sendKeys("02/02/2023");

        WebElement enterAddress = driver.findElement(By.name("address"));
        enterAddress.sendKeys("No:12/B, Thammita, Makevita");

        // Click the submit button
        WebElement submitButton = driver.findElement(By.tagName("button"));
        submitButton.click();

        // Optionally, check for a success message (if needed)
        WebElement responseMessage = wait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(".mt-4")));
        System.out.println("Response Message: " + responseMessage.getText());
    }

    @AfterMethod
    public void tearDown() {
        // Close the browser after the test
        driver.quit();
    }
}
