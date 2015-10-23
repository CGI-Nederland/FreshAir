package Steps;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.chrome.ChromeDriver;

import Pages.DashboardPage;
import Pages.LoginPage;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FreshAir {

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

	@Given("^login page is shown$")
	public void login_page_is_shown() throws Throwable {
		LoginPage page = new LoginPage(driver);
		page.visit();
		page.isShown();
	}

	@Given("^a user with name \"([^\"]*)\" and password \"([^\"]*)\" is entered$")
	public void a_user_with_name_and_password_is_entered(String username, String password) throws Throwable {
		LoginPage page = new LoginPage(driver);
		page.enterCredentials(username, password);
	}

	@When("^user submits credentials$")
	public void user_submits_credentials() throws Throwable {
		(new LoginPage(driver)).submitCredentials();

	}

	@Then("^the dashboard page is shown$")
	public void the_dashboard_page_is_shown() throws Throwable {
		(new DashboardPage(driver)).isShown();

	}

	@Then("^the alert \"([^\"]*)\" is shown$")
	public void the_alert_is_shown(String message) throws Throwable {
		String txt = driver.switchTo().alert().getText();
		driver.switchTo().alert().accept();
		assertTrue(txt.contains(message));
	}

}
