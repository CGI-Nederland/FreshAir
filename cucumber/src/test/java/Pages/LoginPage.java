package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class LoginPage extends BasePage {
	private static final String LOC_TXT_USERNAME = "username";
	private static final String LOC_TXT_PASSWORD = "password";
	private static final String LOC_BTN_CRED_SUBMIT = "submit";
	
	public LoginPage(WebDriver driver) {
		super(driver);
	}

	public void isShown(){
		validateTextPresent("Logon to Fresh");
	}

	public void visit() {
		driver.get(BASE_URL + "/login");
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

	public void enterCredentials(String username, String password) {
		driver.findElement(By.id(LOC_TXT_USERNAME)).sendKeys(username);
		driver.findElement(By.id(LOC_TXT_PASSWORD)).sendKeys(password);
	    
		
	}

	public void submitCredentials() {
		driver.findElement(By.name(LOC_BTN_CRED_SUBMIT)).click();
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
