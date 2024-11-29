import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;


public class OpenPage {
    WebDriver driver;
    @BeforeMethod
    public void TestPage() {
        driver = new ChromeDriver();
        driver.get("http://localhost:3000");
    }
    @Test
    public void TestTextBox() throws InterruptedException {
        WebElement EnterName=driver.findElement(By.name("name"));
        EnterName.sendKeys("Ann Perera");
        Thread.sleep(3000);
        WebElement EnterEmail=driver.findElement(By.name("email"));
        EnterEmail.sendKeys("Ann@gmail.com");
        Thread.sleep(3000);
        WebElement DatePicker=driver.findElement(By.name("date"));
        DatePicker.sendKeys("02/02/2023");
        Thread.sleep(3000);
        WebElement EnterAddress=driver.findElement(By.name("address"));
        EnterAddress.sendKeys("No:12/B,Thammita,Makevita");
        Thread.sleep(3000);
        WebElement ButtonSubmit=driver.findElement(By.tagName("button"));
        ButtonSubmit .click();



    }







}



