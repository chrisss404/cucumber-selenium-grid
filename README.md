## Cucumber-driven Selenium Grid Testing

The [Java implementation](https://github.com/cucumber/cucumber-jvm) of Cucumber is used in order to execute Cucumber features, as the most favourable way to create a [Selenium Grid](https://code.google.com/p/selenium/wiki/Grid2) setting is located in an Java environment. Therefore the following prerequisites are required:
- [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
- [Apache Ant](http://ant.apache.org/)

This allows to perform automated acceptance tests on web applications employing a variety of web browsers on different platforms, as demonstrated in the [practical example](#practical-example). Unfortunately, the parallel execution of tests is limited to the creation of groups and to run each group in its own Cucumber instance leading to multiple test reports. This implementation runs two instances in parallel including the groups *@slow* and *@fast*.
Another limitation is that all step definitions are located in a single file. Therefore an implementation for productive use should apply [dependency injection](http://cukes.info/install-cucumber-jvm.html) for a better code organisation.

----

### Quick Run

- `ant download`
- `ant runcukes-standalone`

Running these commands produces two test reports for the aforementioned test groups. An example of the resulting reports containing scenarios tagged <a href="https://rawgithub.com/chrisss404/cucumber-selenium-grid/master/example-output/pocket-code/cucumber-html-report-fast/index.html" target="_blank">@fast</a> and scenarios tagged <a href="https://rawgithub.com/chrisss404/cucumber-selenium-grid/master/example-output/pocket-code/cucumber-html-report-slow/index.html" target="_blank">@slow</a> are available.

----

### Practical Example

#### Host A (192.168.1.150): Hub, Firefox, Chrome

- get required libraries: `ant download-util`
- add [Chromedriver](http://chromedriver.storage.googleapis.com/index.html) to the `lib` folder
- start Selenium Grid hub: `ant launch-hub`
- start Firefox node: `ant launch-node-firefox`
- start Chrome node: `ant launch-node-chrome`

#### Host B (192.168.1.106): Safari, Android

- get required libraries: `ant download-util`
- get [Android SDK](https://developer.android.com/sdk/index.html)
- connect an Android device via USB and make sure `adb` finds it
- start Safari node: `ant launch-node-safari -DhubHost=192.168.1.150`
- start Android node: `ant launch-node-android -DandroidSDK=../android-sdks -DhubHost=192.168.1.150`

#### Host C (192.168.1.110): Internet Explorer

- get required libraries: `ant download-util`
- add [IEDriverServer](http://selenium-release.storage.googleapis.com/index.html) to the `lib` folder
- start Internet Explorer node: `ant launch-node-ie -DhubHost=192.168.1.150`

#### Host D (192.168.1.123): Test Runner

- get required libraries: `ant download-devel`
- execute features: `ant runcukes -Doptions="--tags @demo" -DhubHost=192.168.1.150`

#### Results

An example of the grid hub console with connected nodes, as described above, is illustrated <a href="https://rawgithub.com/chrisss404/cucumber-selenium-grid/master/example-output/grid-console/index.html" target="_blank">here</a> and the produced test reports for scenarios tagged <a href="https://rawgithub.com/chrisss404/cucumber-selenium-grid/master/example-output/demo/cucumber-html-report-fast/index.html" target="_blank">@fast</a> and scenarios tagged <a href="https://rawgithub.com/chrisss404/cucumber-selenium-grid/master/example-output/demo/cucumber-html-report-slow/index.html" target="_blank">@slow</a> are also available.

----

### Ant Targets

**download-devel**
Downloads development libraries to compile and execute tests.

**download-util**
Downloads utility libraries to launch Selenium Grid hub or Selenium WebDriver nodes.

**download**
Downloads *development* and *utility* libraries.

**launch-hub**
Launches a Selenium Grid hub instance.
- define individual hub port: `-DhubPort=4445`

**stop-hub**
Halts running Selenium Grid hub instances.

**launch-node-firefox**
Launches a Firefox WebDriver instance and connects it to the Selenium Grid hub.
- define individual hub host: `-DhubHost=192.168.1.150`
- define individual hub port: `-DhubPort=4445`

**launch-node-chrome**
Launches a Chrome WebDriver instance and connects it to the Selenium Grid hub, requires [Chromedriver](http://chromedriver.storage.googleapis.com/index.html) in the `lib` folder.
- define individual hub host: `-DhubHost=192.168.1.150`
- define individual hub port: `-DhubPort=4445`

**launch-node-safari**
Launches a Safari WebDriver instance and connects it to the Selenium Grid hub.
- define individual hub host: `-DhubHost=192.168.1.150`
- define individual hub port: `-DhubPort=4445`

**launch-node-ie**
Launches a Internet Explorer WebDriver instance and connects it to the Selenium Grid hub, requires [IEDriverServer](http://selenium-release.storage.googleapis.com/index.html) in the `lib` folder.
- define individual hub host: `-DhubHost=192.168.1.150`
- define individual hub port: `-DhubPort=4445`

**launch-node-android**
Launches an Android WebDriver instance and connects it to the Selenium Grid hub, requires the [Android SDK](https://developer.android.com/sdk/index.html) and its location (by setting the `androidSDK` property).
- define Android SDK location: `-DandroidSDK=../android-sdks`
- define individual hub host: `-DhubHost=192.168.1.150`
- define individual hub port: `-DhubPort=4445`

**stop-nodes**
Halts running Selenium WebDriver instances.

**runcukes**
Compiles step definitions and executes features.
- define Cucumber arguments: `-Doptions="--tags @demo"`
- define individual hub host: `-DhubHost=192.168.1.150`
- define individual hub port: `-DhubPort=4445`

**runcukes-standalone**
Launches a Grid hub, a Firefox WebDriver and executes all scenarios tagged *@pocket-code*.

**clean**
Deletes compiled classes and previously generated test reports.

**clobber**
Deletes compiled classes, previously generated test reports, and downloaded libraries.

