import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.velocity.exception.VelocityException;
import org.junit.AfterClass;
import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import net.masterthought.cucumber.ReportBuilder;
import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;

@RunWith(Cucumber.class)
@CucumberOptions(
	plugin={"json:target/cucumber-reports/test-report.json"},
	monochrome=true,
	snippets=SnippetType.CAMELCASE
	)
public class RunCukesTest {
	@AfterClass
    public static void tearDown() throws VelocityException, IOException {



    	System.out.println("tearing down");

    	File reportOutputDirectory = new File("target/cucumber-reports");
    	List<String> list = new ArrayList<String>();
    	list.add("target/cucumber-reports/test-report.json");


    	String pluginUrlPath = "";
    	String buildNumber = "1";
    	String buildProject = "cucumber-jvm";
    	boolean skippedFails = true;
    	boolean pendingFails = true;
    	boolean undefinedFails = true;
    	boolean missingFails = true;
    	boolean flashCharts = true;
    	boolean runWithJenkins = false;
    	boolean artifactsEnabled = false;
    	String artifactConfig = "";
    	boolean highCharts = false;
    	boolean parallelTesting = false;

    	ReportBuilder reportBuilder = new ReportBuilder(
			list, reportOutputDirectory,
			pluginUrlPath, buildNumber,
    	    buildProject, skippedFails, pendingFails, undefinedFails,
    	    missingFails, flashCharts, runWithJenkins, artifactsEnabled,
    	    artifactConfig, highCharts, parallelTesting);
    	reportBuilder.generateReports();

    }
}
