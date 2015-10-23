package Pages;

import org.openqa.selenium.WebDriver;

public class DashboardPage extends BasePage {

	public DashboardPage(WebDriver driver) {
		super(driver);
	}

	public void isShown() {
		validateTextPresent("Gold Members");
		validateTextPresent("Available airports");		
	}

}
