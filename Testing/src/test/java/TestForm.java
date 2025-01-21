import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import java.util.List;


public class TestForm {
    WebDriver driver;
    @BeforeMethod
    public void OpenPage(){
        driver=new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("http://localhost:5173/");
    }

    @Test
    public void FormFieldsTest() throws InterruptedException {
        //Test TextBoxes
        WebElement  Button=driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/div/div[3]/div[2]/div[1]/div[3]/button"));
        Button.click();
        Thread.sleep(4000);
        WebElement EnterFullname=driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/div/div[5]/div/div[2]/form/div[1]/div[1]/input"));
        EnterFullname.sendKeys("Ushettige Dona Dinithi Kawaya");
        Thread.sleep(4000);
        WebElement EnterEmail= driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/div/div[5]/div/div[2]/form/div[1]/div[2]/input"));
        EnterEmail.sendKeys("Dinithi@gmailcom");
        Thread.sleep(4000);
        WebElement DatePick=driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/div/div[5]/div/div[2]/form/div[1]/div[3]/input"));
        DatePick.sendKeys("01/09/2001");
        Thread.sleep(4000);
        WebElement EnterAddress=driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/div/div[5]/div/div[2]/form/div[1]/div[4]/input"));
        EnterAddress.sendKeys("No:11/A,GalleRoad,Colombo");
        Thread.sleep(4000);
        //Test DropDown
        WebElement TestDropDown=driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/div/div[5]/div/div[2]/form/div[2]/select"));
        Select select=new Select((TestDropDown));
        select.selectByIndex(2);
        Thread.sleep(4000);
        //Test Radio Buttons
        WebElement TestRadio=driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/div/div[5]/div/div[2]/form/div[3]/div/label[2]/input"));
        TestRadio.click();
        Thread.sleep(4000);
        //Test Checkboxes
        WebElement CheckBox1=driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/div/div[5]/div/div[2]/form/div[4]/div/label[1]/input"));
        WebElement CheckBox2=driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/div/div[5]/div/div[2]/form/div[4]/div/label[6]/input"));
        WebElement CheckBox3=driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/div/div[5]/div/div[2]/form/div[4]/div/label[2]/input"));
        CheckBox1.click();
        Thread.sleep(3000);
        CheckBox2.click();
        Thread.sleep(3000);
        CheckBox3.click();
        Thread.sleep(1000);
        WebElement form = driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/div/div[5]/div/div[2]/form"));
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].scrollBy(0, 200);", form); // Scrolls the form down by 200 pixels
        Thread.sleep(1000);
        //Upload Files
        String data="C:\\Users\\vinushi\\Desktop\\Dinithi.jpg";
        WebElement UploadPicture=driver.findElement(By.xpath("//*[@id=\"profilePicture\"]"));
        UploadPicture.sendKeys(data);
        String data2="C:\\Users\\vinushi\\Desktop\\CV.pdf";
        WebElement UploadCV=driver.findElement(By.xpath("//*[@id=\"resume\"]"));
        UploadCV.sendKeys(data2);
        Thread.sleep(4000);
        //Test Button
        WebElement SubmitButton=driver.findElement(By.xpath("//*[@id=\"root\"]/div/main/div/div[5]/div/div[2]/form/div[6]/button[2]"));
        SubmitButton.click();
        Thread.sleep(2000);
    }
}
