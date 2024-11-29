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
    public void TestTextBox(){
        WebElement EnterName=driver.findElement(By.name("name"));
        EnterName.sendKeys("Ann Perera");
    }







}



