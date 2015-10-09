import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(plugin="pretty", snippets=SnippetType.CAMELCASE)
public class RunCukesTest {

}
