package sTepDefinations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.*;
import org.openqa.selenium.support.ui.*;
import cucumber.api.java.en.*;

public class FaceBookLoginStepDefination {

	public static WebDriver driver = null;

	@Given("^Open Browser and StartApplication \"([^\"]*)\"$")
	public void open_Browser_and_StartApplication(String arg1) throws Throwable {
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\Browsers\\chromedriver.exe");
		ChromeOptions options = new ChromeOptions();
		options.addArguments("--disable-extensions");
		options.addArguments("--disable-notifications");
		options.addArguments("disable-infobars");
		driver = new ChromeDriver(options);
		/* driver = new ChromeDriver(); */
		driver.manage().window().maximize();
		driver.get("https://www.facebook.com/");
	}

	@When("^Enter Login Credentials \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enter_Login_Credentials_and(String username, String password) throws Throwable {
		if (isElementDisplayed("loginbutton")) {
			driver.findElement(By.name("email")).sendKeys(username);
			/*System.out.println(username);
			System.out.println(password);*/
			driver.findElement(By.name("pass")).sendKeys(password);
		} else {
			Thread.sleep(2000);
			driver.findElement(By.name("email")).sendKeys(username);
			driver.findElement(By.name("pass")).sendKeys(password);
		}
	}

	// Wait for Element to load
	public boolean isElementDisplayed(String Element) {
		boolean IsElementDisplayed = false;
		while (IsElementDisplayed == true) {
			WebDriverWait wait = new WebDriverWait(driver, 2000);
			WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id(Element)));
			if (element.isDisplayed()) {
				IsElementDisplayed = true;
			}
		}
		return IsElementDisplayed;
	}

	@Then("^Click on Login Button$")
	public void click_on_Login_Button() throws Throwable {
		driver.findElement(By.id("loginbutton")).click();
	}

	@And("^VerifyName Displayed$")
	public void verifyname_Displayed() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 2000);
		WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("userNavigationLabel")));
		if (element.isDisplayed()) {
			/*String captxt = driver.findElement(By.xpath("//*[@id=\"u_ps_0_7_5\"]/div/div[2]/div/div")).getText();
			Assert.assertEquals(true, captxt.contains("Remember Password"));*/
		} else {
			Thread.sleep(2000);
			/*String captxt = driver.findElement(By.xpath("//*[@id=\"u_ps_0_7_5\"]/div/div[2]/div/div")).
			Assert.assertEquals(true, captxt.contains("Remember Password"));*/
		}
	}

	@And("^Clik on Logout$")
	public void clik_on_Logout() throws Throwable {
		driver.findElement(By.id("userNavigationLabel")).click();

		WebDriverWait wait = new WebDriverWait(driver, 2000);
		WebElement element = wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[text()='Log Out']")));
		// Thread.sleep(2000);
		// Below code working
		// driver.findElement(By.xpath("//span[@class='_54nh'][text()='Log Out']")).click();
		driver.findElement(By.xpath("//span[text()='Log Out']")).click();
	}

	@Then("^Close Browser$")
	public void close_Browser() throws Throwable {
		String captxt = driver.findElement(By.id("loginbutton")).getText();

		/* Assert.assertEquals(true, captxt.contains("Log In")); */
		driver.close();
		driver.quit();
		/*
		 * if (captxt.contains("Log In") ) { driver.close(); driver.quit(); } else {
		 * Assert.assertFalse(true); driver.close(); driver.quit(); }
		 */
	}

	/*
	 * <!-- https://mvnrepository.com/artifact/log4j/log4j --> <dependency>
	 * <groupId>log4j</groupId> <artifactId>log4j</artifactId>
	 * <version>1.2.17</version> </dependency>
	 */
}