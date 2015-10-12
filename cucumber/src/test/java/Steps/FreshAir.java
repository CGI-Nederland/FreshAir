package Steps;

import cucumber.api.java.*;
import cucumber.api.java.en.*;

import org.openqa.selenium.chrome.ChromeDriver;


import static org.junit.Assert.*;

import cucumber.api.PendingException;


public class FreshAir {

	private static final String LOC_TXT_USERNAME = "username";
	private static final String LOC_TXT_PASSWORD = "password";
	private static final String LOC_BTN_CRED_SUBMIT = "submit";
	private String BASE_URL = "https://ng-freshair.herokuapp.com/#";
	private ChromeDriver driver;
	
	@Before
	public void startBrowser() {
		driver = new ChromeDriver();
		driver.get("about:blank");
	}
	
	@After
	public void stopAllBrowsers() {
		driver.quit();
	}
	
	private void inputText(String locator, String string) {
		driver
			.findElementById(locator)
			.sendKeys(string);
	}

	private void clickButton(String locator) throws Throwable {
		driver
			.findElementByName(locator).click();
		Thread.sleep(1000);
		
	}

	
	private void validateTextPresent(String string) {
		String source = driver.getPageSource();
		assertTrue(source.contains(string));

	}

	
	@Given("^login page is shown$")
	public void login_page_is_shown() throws Throwable {
		driver.get(BASE_URL + "/login");
		Thread.sleep(2000);
		validateTextPresent("Logon to Fresh");
	}


	@Given("^a user with name \"([^\"]*)\" and password \"([^\"]*)\" is entered$")
	public void a_user_with_name_and_password_is_entered(String username, String password) throws Throwable {
	    inputText(LOC_TXT_USERNAME, username);
	    inputText(LOC_TXT_PASSWORD, password);
	}

	

	@When("^user submits credentials$")
	public void user_submits_credentials() throws Throwable {
		clickButton(LOC_BTN_CRED_SUBMIT);
	    
	}


	@Then("^the dashboard page is shown$")
	public void the_dashboard_page_is_shown() throws Throwable {
	    validateTextPresent("Gold Members");
		validateTextPresent("Available airports");
	}

	@Then("^the alert \"([^\"]*)\" is shown$")
	public void the_alert_is_shown(String message) throws Throwable {
		String txt = driver.switchTo().alert().getText();
		driver.switchTo().alert().accept();
		assertTrue(txt.contains(message));
	}


}
