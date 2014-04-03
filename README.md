## Cucumber-driven Selenium Grid Testing

Demonstration of a Cucumber-driven Selenium Grid test setup.

using [Cucumber-JVM](https://github.com/cucumber/cucumber-jvm)


### Quick Run

- `ant download`
- `ant runcukes-standalone`

An example of the resulting output is available in two separated reports, one contains scenarios tagged <a href="https://rawgithub.com/chrisss404/cucumber-selenium-grid/master/example-output/pocket-code/cucumber-html-report-fast/index.html" target="_blank">@fast</a> and the other contains scenarios tagged <a href="https://rawgithub.com/chrisss404/cucumber-selenium-grid/master/example-output/pocket-code/cucumber-html-report-slow/index.html" target="_blank">@slow</a>.

----

### Ant Targets

#### download-devel

Downloads all required libraries to compile and execute tests.

#### download-util

Downloads all required libraries to launch Selenium Grid hub or Selenium nodes.

#### download

Downloads *development* and *utility* libraries.

#### launch-hub

Launches a Selenium Grid hub instance.
- define individual hub port: `-DhubPort=4445`

#### stop-hub

Halts running Selenium Grid hub instances.

#### launch-node-firefox

Launches a Firefox WebDriver instance and connects it to the Selenium Grid hub.
- define individual hub host: `-DhubHost=192.168.1.150`
- define individual hub port: `-DhubPort=4445`


#### launch-node-chrome

Launches a Chrome WebDriver instance and connects it to the Selenium Grid hub, requires to add [Chromedriver](http://chromedriver.storage.googleapis.com/index.html) to the `lib` folder.
- define individual hub host: `-DhubHost=192.168.1.150`
- define individual hub port: `-DhubPort=4445`

#### launch-node-safari

Launches a Safari WebDriver instance and connects it to the Selenium Grid hub.
- define individual hub host: `-DhubHost=192.168.1.150`
- define individual hub port: `-DhubPort=4445`

#### launch-node-ie

Launches a Internet Explorer WebDriver instance and connects it to the Selenium Grid hub, requires to add [IEDriverServer](http://selenium-release.storage.googleapis.com/index.html) to the `lib` folder.
- define individual hub host: `-DhubHost=192.168.1.150`
- define individual hub port: `-DhubPort=4445`

#### launch-node-android

Launches an Android WebDriver instance and connects it to the Selenium Grid hub, requires the [Android SDK](https://developer.android.com/sdk/index.html) and its location (by setting the `androidSDK` property).
- define Android SDK location: `-DandroidSDK=../android-sdks`
- define individual hub host: `-DhubHost=192.168.1.150`
- define individual hub port: `-DhubPort=4445`

#### stop-nodes

Halts running Selenium WebDriver instances.

#### runcukes

Compiles step definitions and executes features.
- define additional options: `-Doptions="--tags @demo"`
- define individual hub host: `-DhubHost=192.168.1.150`
- define individual hub port: `-DhubPort=4445`

#### runcukes-standalone

Launches a Selenium Grid hub, a Firefox webdriver and executes all scenarios tagged *@pocket-code*.

#### clean

Deletes compiled classes and previously generated test reports.

#### clobber

Deletes everything from *clean* and the downloaded libraries.

----

### A Practical Example

#### Host A (192.168.1.150): Hub, Firefox, Chrome

- get requirements: run `ant download-util` and put [Chromedriver](http://chromedriver.storage.googleapis.com/index.html) to the `lib` folder
- start Selenium Grid hub: run `ant launch-hub`
- start Firefox node: run `ant launch-node-firefox`
- start Chrome node: run `ant launch-node-chrome`

#### Host B (192.168.1.106): Safari, Android

- connect an Android device via USB
- get requirements: run `ant download-util` and prepare [Android SDK](https://developer.android.com/sdk/index.html)
- start Safari node: run `ant launch-node-safari -DhubHost=192.168.1.150`
- start Android node: run `ant launch-node-android -DandroidSDK=../android-sdks -DhubHost=192.168.1.150`

#### Host C (192.168.1.110): Internet Explorer

- get requirements: run `ant download-util` and put [IEDriverServer](http://selenium-release.storage.googleapis.com/index.html) to the `lib` folder
- start Internet Explorer node: run `ant launch-node-ie -DhubHost=192.168.1.150`

#### Host D (192.168.1.123): Test Runner

- get requirements: run `ant download-devel`
- execute features: run `ant runcukes -Doptions="--tags @demo" -DhubHost=192.168.1.150`

#### Results

Example of the grid console with connected notes

<a href="https://rawgithub.com/chrisss404/cucumber-selenium-grid/master/example-output/grid-console/index.html" target="_blank">Grid Console</a>

An example of the resulting output is available in two separated reports, one contains scenarios tagged <a href="https://rawgithub.com/chrisss404/cucumber-selenium-grid/master/example-output/demo/cucumber-html-report-fast/index.html" target="_blank">@fast</a> and the other contains scenarios tagged <a href="https://rawgithub.com/chrisss404/cucumber-selenium-grid/master/example-output/demo/cucumber-html-report-slow/index.html" target="_blank">@slow</a>.

