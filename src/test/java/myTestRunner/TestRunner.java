package myTestRunner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "features", 
glue = { "sTepDefinations" }, 
plugin = {"pretty","html:Report/cucumbar-html-report" },
//format= {"pretty","html:Report/test-output"},
//dryRun = false,
monochrome = false)

//format= {"pretty","html:Report/test-output","Report:jason_output/cucumber.json","Report:junit_xml_output/cucumber.xml"},

public class TestRunner {
}