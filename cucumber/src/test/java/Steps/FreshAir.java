package Steps;

import cucumber.api.java.*;
import cucumber.api.java.en.*;

import org.junit.Assert;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;

public class FreshAir {
	private ChromeDriver driver;
	private String BASE_URL = "https://ng-freshair.herokuapp.com/#";
	
	@Before
	public void startBrowser() {
		driver = new ChromeDriver();
		
	}

	@After
	public void stopBrowsers() {
		driver.quit();
	}
	
	@Given("^login page is shown$")
	public void login_page_is_shown() throws Throwable {
		driver.get(BASE_URL + "/login");
		
	}

	@Given("^an user with name \"([^\"]*)\" and password \"([^\"]*)\" is entered$")
	public void an_user_with_name_and_password_is_entered(String username, String password) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^user submits credentials$")
	public void user_submits_credentials() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^the dashboard page is shown$")
	public void the_dashboard_page_is_shown() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^the alert \"([^\"]*)\" is shown$")
	public void the_alert_is_shown(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}


}
