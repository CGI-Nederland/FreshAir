import java.io.File;
import java.io.FilenameFilter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.velocity.exception.VelocityException;
 
import net.masterthought.cucumber.ReportBuilder;

public class MakeReport {

	public static void main(String[] args) throws VelocityException, IOException {
		
		FilenameFilter jsonFilter = new FilenameFilter() {
		    public boolean accept(File file, String name) {
		        if (name.endsWith(".json")) {
		            // filters files whose extension is .json
		            return true;
		        } else {
		            return false;
		        }
		    }
		};
		
		File reportOutputDirectory = new File("target/cucumber-reports");
		File[] files = reportOutputDirectory.listFiles(jsonFilter);
		List<String> list = new ArrayList<String>();
		
		if (files.length == 0) {
		    System.out.println("There is no json files");
		} else {
		    for (File aFile : files) {
		        String fn = aFile.getName();
		        System.out.println(fn);
		        list.add("target/cucumber-reports/" + fn);
		    }
		}
		
    	
    	
  


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
    	
    	System.err.println("Done.");

	}

}
