package Pages;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;

public class BasePage {
	protected String BASE_URL = "http://localhost/#";
	// private String BASE_URL = "https://ng-freshair.herokuapp.com/#";
	
	protected WebDriver driver;
	
	public BasePage(WebDriver driver) {
		this.driver = driver;
	}
	
	protected void switchToFrame(String frame) {
		driver.switchTo().defaultContent();
		driver.switchTo().frame(frame);
	}
	public void validateTextPresent(String string) {
		String source = driver.getPageSource();
		assertTrue(source.contains(string));

	}
}
