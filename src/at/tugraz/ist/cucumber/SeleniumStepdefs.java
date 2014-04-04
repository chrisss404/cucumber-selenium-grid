/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

package at.tugraz.ist.cucumber;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.remote.Augmenter;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.remote.UnreachableBrowserException;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.junit.Assert;


public class SeleniumStepdefs {
  private Scenario scenario = null;
  private boolean isDriverReady = false;
  private WebDriver driver = null;
  private String website = "";
  private String hubHost = "";
  private String hubPort = "";


  @Before
  public void before(Scenario scenario) {
    this.scenario = scenario;
    this.website = System.getProperty("website");
    this.hubHost = System.getProperty("hubHost");
    this.hubPort = System.getProperty("hubPort");
  }

  @After
  public void destroySelenium() {
    if(this.scenario.isFailed()) {
      captureScreen();
    }
    
    if(driver != null) {
      driver.quit();
      driver = null;
    }
  }



  @Given("^I use Firefox browser$")
  public void I_use_Firefox_browser() throws Throwable {
    runOnFirefox();
  }

  @Given("^I use Chrome browser$")
  public void I_use_Chrome_browser() throws Throwable {
    runOnChrome();
  }
  
  @Given("^I use Safari browser$")
  public void I_use_Safari_browser() throws Throwable {
    runOnSafari();
  }
  
  @Given("^I use Internet Explorer browser$")
  public void I_use_Internet_Explorer_browser() throws Throwable {
    runOnInternetExplorer();
  }
  
  @Given("^I use Android browser$")
  public void I_use_Android_browser() throws Throwable {
    runOnAndroid();
  }

  @Given("^I am on the startpage$")
  public void I_am_on_the_startpage() throws Throwable {
    driver().get(this.website);
  }

  @Given("^the websites language is \"([^\"]*)\"$")
  public void the_websites_language_is(String language) throws Throwable {
    I_change_the_language_to(language);
    Assert.assertTrue(driver().findElement(By.xpath("//*[@id=\"switchLanguage\"]/option[@selected]")).getText().contains(language));
  }

  @Given("^I am on the details page of the project (\\d+)$")
  public void I_am_on_the_details_page_of_the_project(int projectId) throws Throwable {
    driver().get(this.website + "/details/" + projectId);
  }


  @When("^I visit \"([^\"]*)\"$")
  public void I_visit(String website) throws Throwable {
    driver().get((new URL(website)).toString());
  }

  @When("^I change the language to \"([^\"]*)\"$")
  public void I_change_the_language_to(String language) throws Throwable {
    WebElement select = driver().findElement(By.id("switchLanguage"));
    List<WebElement> options = select.findElements(By.tagName("option"));
    for(WebElement option : options){
        if(option.getText().contains(language)) {
            option.click();
            blur(By.id("switchLanguage"));
            break;
        }
    }
    jqueryWait();
  }

  @When("^I use the top search box to search for a project called \"([^\"]*)\"$")
  public void I_use_the_top_search_box_to_search_for_a_project_called(String projectName) throws Throwable {
    WebElement largeTopSearchBox = driver().findElement(By.xpath("//*[@id='largeMenu']/div[4]/input"));
    WebElement mobileSearchBox = driver().findElement(By.xpath("//*[@id='smallSearchBar']/input"));
    WebElement mobileSearchButton = driver().findElement(By.id("mobileSearchButton"));

    if(largeTopSearchBox.isDisplayed()) {
      largeTopSearchBox.clear();
      largeTopSearchBox.sendKeys(projectName);
      largeTopSearchBox.sendKeys(Keys.RETURN);
      jqueryWait();
    } else if(mobileSearchButton.isDisplayed()) {
      mobileSearchButton.click();
      mobileSearchBox.clear();
      mobileSearchBox.sendKeys(projectName);
      mobileSearchBox.sendKeys(Keys.RETURN);
      jqueryWait();
    } 
  }

  @When("^I press the download button$")
  public void I_press_the_download_button() throws Throwable {
    WebElement downloadButton = driver().findElement(By.xpath("//*[@id='projectDetailsContainer']/div[3]/div/a[1]"));
    downloadButton.click();
  }


  @Then("^the title of the featured section should be \"([^\"]*)\"$")
  public void the_title_of_the_featured_section_should_be(String title) throws Throwable {
    Assert.assertEquals(title, driver().findElement(By.xpath("//*[@id=\"programmOfTheWeek\"]/header")).getText());
  }

  @Then("^the title of the newest section should be \"([^\"]*)\"$")
  public void the_title_of_the_newest_section_should_be(String title) throws Throwable {
    Assert.assertEquals(title, driver().findElement(By.xpath("/html/body/div/article/header[3]")).getText());
  }

  @Then("^I should see \"([^\"]*)\"$")
  public void I_should_see(String text) throws Throwable {
    Assert.assertTrue("<[" + text + "]> is not present on current page!", isTextPresent(text));
  }

  @Then("^a screenshot should be taken$")
  public void a_screenshot_should_be_taken() throws Throwable {
    captureScreen();
  }

  @Then("^the number of search results should be (\\d+)$")
  public void the_number_of_results_should_be(int numberOfSearchResults) throws Throwable {
    Assert.assertEquals(numberOfSearchResults, Integer.parseInt(driver().findElement(By.id("numberOfSearchResults")).getText()));
  }

  @Then("^the download count should be increased by one$")
  public void the_download_count_should_be_increased_by_one() throws Throwable {
    By downloadCount = By.xpath("//*[@id='projectDetailsContainer']/div[6]/ul/li[4]/div[2]/span");
    int downloads = Integer.parseInt(driver().findElement(downloadCount).getText().split(" ")[0]);

    driver().navigate().refresh();
    Assert.assertEquals(downloads + 1, Integer.parseInt(driver().findElement(downloadCount).getText().split(" ")[0]));
  }



  private WebDriver driver() {
    if(!this.isDriverReady) {
      runOnFirefox();
    }
    return driver;
  }

  private void runOnFirefox() {
    FirefoxProfile profile = new FirefoxProfile();
    DesiredCapabilities capabilities = DesiredCapabilities.firefox();
    capabilities.setCapability("firefox_profile", profile);
    initDriver(capabilities);
  }

  private void runOnChrome() {
    DesiredCapabilities capabilities = DesiredCapabilities.chrome();
    initDriver(capabilities);
  }

  private void runOnSafari() {
    DesiredCapabilities capabilities = DesiredCapabilities.safari();
    initDriver(capabilities);
  }

  private void runOnInternetExplorer() {
    DesiredCapabilities capabilities = DesiredCapabilities.internetExplorer();
    initDriver(capabilities);
  }

  private void runOnAndroid() {
    DesiredCapabilities capabilities = DesiredCapabilities.android();
    initDriver(capabilities);
    driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
  }

  private void initDriver(DesiredCapabilities capabilities) {
    if(this.isDriverReady) {
      return;
    }

    try {
      driver = new RemoteWebDriver(new URL("http://" + this.hubHost + ":" + this.hubPort + "/wd/hub"), capabilities);
    } catch(UnreachableBrowserException e) {
      Assert.fail("UnreachableBrowserException: " + e.getMessage());
    } catch(MalformedURLException e) {
      Assert.fail("MalformedURLException: http://" + this.hubHost + ":" + this.hubPort + "/wd/hub");
    } catch(WebDriverException e) {
      Assert.fail("WebDriverException: " + e.getMessage());
    }
    this.isDriverReady = true;
  }


  private void jqueryWait() throws InterruptedException {
    boolean rdy = false;
    while(!rdy) {
      Thread.sleep(500);
      rdy = ((Boolean) ((JavascriptExecutor) driver).executeScript("return (typeof window.jQuery === 'function' && window.jQuery.active == 0)"));
    }
  }

  private boolean isTextPresent(String text) throws InterruptedException {
    return isTextPresent(text, 50);
  }
  private boolean isTextPresent(String text, int retries) throws InterruptedException {
    boolean ready = false;
    while(!ready && retries-- > 0) {
      Thread.sleep(100);
      ready = driver().getPageSource().contains(text);
    }
    return ready;
  }

  private void blur(By selector) {
    ((JavascriptExecutor) driver).executeScript("return arguments[0].blur();", driver.findElement(selector));
  }

  private void captureScreen() {
    if(this.driver != null) {
      WebDriver augmenter = new Augmenter().augment(driver);
      byte[] imageBytes = ((TakesScreenshot) augmenter).getScreenshotAs(OutputType.BYTES);
      this.scenario.write("");
      this.scenario.embed(imageBytes, "image/png");
    }
  }
}
