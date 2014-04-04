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

package io.selendroid.grid;

import java.io.DataOutputStream;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.Inet4Address;
import java.net.InetAddress;
import java.net.MalformedURLException;
import java.net.NetworkInterface;
import java.net.SocketException;
import java.net.URL;
import java.util.Enumeration;


class Register {
  private static String hubHost = "127.0.0.1"; 
  private static String hubPort = "4444";
  private static String host = "localhost";
  private static String port = "5559";
  private static String browserName = "android";
  private static String browserVersion = "4.1";
  private static String nodeTimeout = "30";

  public static void main(String[] args) {
    findHost();
    setArguments(args);

    System.out.println("   hub: http://" + hubHost + ":" + hubPort + "/grid/console");
    System.out.println("client: http://" + host + ":" + port + "/wd/hub/status");

    if(!register()) {
      System.exit(-1);
    }
  }

  private static void setArguments(String[] args) {
    try {
      for(int i = 0; i < args.length; i++) {
        if(args[i].equals("-hubHost")) {
          hubHost = args[i + 1];
        } else if(args[i].equals("-hubPort")) {
          hubPort = args[i + 1];
        } else if(args[i].equals("-host")) {
          host = args[i + 1];
        } else if(args[i].equals("-port")) {
          port = args[i + 1];
        } else if(args[i].equals("-browserName")) {
          browserName = args[i + 1];
        } else if(args[i].equals("-browserVersion")) {
          browserVersion = args[i + 1];
        } else if(args[i].equals("-nodeTimeout")) {
          nodeTimeout = args[i + 1];
        }
      }
    } catch(ArrayIndexOutOfBoundsException ignore) {
    }
  }

  private static void findHost() {
    try {
      InetAddress address = null;
      Enumeration<NetworkInterface> interfaces = NetworkInterface.getNetworkInterfaces();
      while(interfaces.hasMoreElements()) {
        Enumeration<InetAddress> addresses = interfaces.nextElement().getInetAddresses();
        while(addresses.hasMoreElements()) {
          address = addresses.nextElement();
          if(!address.isLoopbackAddress() && address instanceof Inet4Address) {
            host = address.getHostAddress().toString();
          }
        }
      }
    } catch(SocketException ignore) {
    }  
  }

  private static boolean register() {
    String config = "{" +
      "\"capabilities\": [{" + 
        "\"browserName\": \"" + browserName + "\"," +
        "\"version\": \"" + browserVersion + "\"," +
        "\"platform\": \"ANDROID\"," +
        "\"maxInstances\": 1" +
      "}]," +
      "\"configuration\": {" +
        "\"port\": " + port + "," +
        "\"host\": \"" + host + "\"," +
        "\"hubHost\": \"" + hubHost + "\"," +
        "\"registerCycle\": 5000," +
        "\"hub\": \"http://" + hubHost + ":" + hubPort + "/grid/register\"," +
        "\"url\": \"http://" + host + ":" + port + "\"," +
        "\"remoteHost\": \"http://" + host + ":" + port + "\"," +
        "\"register\": true," +
        "\"proxy\": \"io.selendroid.grid.SelendroidSessionProxy\"," +
        "\"browser\": \"browserName=" + browserName + ",version=" + browserVersion + ",maxInstances=1\"," +
        "\"maxSession\": 1," +
        "\"role\": \"webdriver\"," +
        "\"nodeTimeout\": " + nodeTimeout + "," +
        "\"hubPort\": " + hubPort + "" +
      "}" +
    "}";

    try {
      URL url = new URL("http://" + hubHost + ":" + hubPort + "/grid/register");
      HttpURLConnection connection = (HttpURLConnection) url.openConnection();

      connection.setRequestMethod("POST");
      connection.setRequestProperty("Content-Type", "application/json");
      connection.setDoOutput(true);

      DataOutputStream outputStream = new DataOutputStream(connection.getOutputStream());
      outputStream.writeBytes(config);
      outputStream.flush();
      outputStream.close();

      return (connection.getResponseCode() == 200);
    } catch(MalformedURLException e) {
      e.printStackTrace();
    } catch(IOException e) {
      e.printStackTrace();
    }
    return false;
  }
}
