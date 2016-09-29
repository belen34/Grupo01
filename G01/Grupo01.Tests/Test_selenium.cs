using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Text;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using System.Diagnostics;
using System.IO;
using System.Threading;
using System.Collections.Generic;
using OpenQA.Selenium.Support.UI;

namespace WebRecetaElectronica.Tests
{
    [TestClass]
    public class SeleniumTestRecipe
    {
        private IWebDriver driver;
        private StringBuilder verificationErrors;
        private string baseURL;
        private bool acceptNextAlert = true;

        private Process _iisProcess;
        private string CurrentPath;
        private string AppLocation = @"\Grupo01";
        private int Port = 12003;

        [TestInitialize]
        public void SetupTest()
        {
            var thread = new Thread(StartIisExpress) { IsBackground = true };

            thread.Start();
            Thread.Sleep(2000);

            driver = new OpenQA.Selenium.Chrome.ChromeDriver();
            baseURL = "http://localhost:" + Port + "/";
            verificationErrors = new StringBuilder();
        }

        [TestCleanup]
        public void TeardownTest()
        {
            try
            {
                driver.Quit();
            }
            catch (Exception)
            {
                // Ignore errors if unable to close the browser
            }
            _iisProcess.Kill();
            Assert.AreEqual("", verificationErrors.ToString());
        }

        [TestMethod]
        public void TestSelenium_dashboard()
        {
            driver.Navigate().GoToUrl(baseURL + "index.html");
            driver.Manage().Timeouts().ImplicitlyWait(TimeSpan.FromSeconds(10));
            driver.FindElement(By.XPath("//a[@id='dashboard']")).Click();
        }
        [TestMethod]
        public void TestSelenium_logicos()
        {
            driver.Navigate().GoToUrl(baseURL + "index.html");
            driver.Manage().Timeouts().ImplicitlyWait(TimeSpan.FromSeconds(10));
            driver.FindElement(By.XPath("//a[@id='logicos']")).Click();
        }
        [TestMethod]
        public void TestSelenium_AddOperadorlogico()
        {
            driver.Navigate().GoToUrl(baseURL + "index.html");
            driver.Manage().Timeouts().ImplicitlyWait(TimeSpan.FromSeconds(10));
            driver.FindElement(By.Id("logicos")).Click();
            new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(ExpectedConditions.ElementExists(By.Id("add"))).Click();
           
            driver.FindElement(By.Id("OperadorName")).Clear();
            driver.FindElement(By.Id("OperadorName")).SendKeys("Nada 2");

            new WebDriverWait(driver, TimeSpan.FromSeconds(30)).Until(ExpectedConditions.ElementExists(By.CssSelector("button"))).Click();
           
        }
        [TestMethod]
        public void TestSelenium_reglas()
        {
            driver.Navigate().GoToUrl(baseURL + "index.html");
            driver.Manage().Timeouts().ImplicitlyWait(TimeSpan.FromSeconds(10));
            driver.FindElement(By.XPath("//a[@id='reglas']")).Click();
        }
        [TestMethod]
        public void TestSelenium_AddRegla()
        {
            driver.Navigate().GoToUrl(baseURL + "index.html");
            driver.Manage().Timeouts().ImplicitlyWait(TimeSpan.FromSeconds(10));
            driver.FindElement(By.Id("reglas")).Click();
            driver.Manage().Timeouts().ImplicitlyWait(TimeSpan.FromSeconds(30));
            driver.FindElement(By.Id("add")).Click();
            driver.FindElement(By.Id("ReglaName")).Clear();
            driver.FindElement(By.Id("ReglaName")).SendKeys("documento");
            driver.FindElement(By.CssSelector("button")).Click();
            driver.FindElement(By.CssSelector("#addRegla > button")).Click();
        }

        [TestMethod]
        public void TestSelenium_AddCondicion()
        {
            driver.Navigate().GoToUrl(baseURL + "index.html");
            driver.Manage().Timeouts().ImplicitlyWait(TimeSpan.FromSeconds(10));
            driver.FindElement(By.Id("condiciones")).Click();
            driver.Manage().Timeouts().ImplicitlyWait(TimeSpan.FromSeconds(30));
            driver.FindElement(By.Id("add")).Click();
            driver.FindElement(By.Id("test1")).Clear();
            driver.FindElement(By.Id("test1")).SendKeys("fecha");
            driver.FindElement(By.Id("test2")).Clear();
            driver.FindElement(By.Id("test2")).SendKeys("2");
            driver.FindElement(By.CssSelector("#addCondicion > #addCondicion")).Click();
        }
        [TestMethod]
        public void TestSelenium_UpdateCondicion()
        {
            driver.Navigate().GoToUrl(baseURL + "index.html");
            driver.Manage().Timeouts().ImplicitlyWait(TimeSpan.FromSeconds(10));
            driver.FindElement(By.Id("condiciones")).Click();
            driver.Manage().Timeouts().ImplicitlyWait(TimeSpan.FromSeconds(10));
            driver.FindElement(By.CssSelector("td")).Click();
            driver.FindElement(By.Id("edit")).Click();
            driver.FindElement(By.Id("test1")).Clear();
            driver.FindElement(By.Id("test1")).SendKeys("azul22");
            driver.FindElement(By.Id("SaveCondicion")).Click();
        }
        [TestMethod]
        public void TestSelenium_DeleteCondicion()
        {
            driver.Navigate().GoToUrl(baseURL + "index.html");
            driver.Manage().Timeouts().ImplicitlyWait(TimeSpan.FromSeconds(10));
            driver.FindElement(By.XPath("//table[@id='Condicions']/tbody/tr[10]/td")).Click();
            driver.Manage().Timeouts().ImplicitlyWait(TimeSpan.FromSeconds(30));
            driver.FindElement(By.Id("delete")).Click();
            driver.FindElement(By.CssSelector("button")).Click();
        }
        private void StartIisExpress()
        {
            CurrentPath = Directory.GetCurrentDirectory();
            CurrentPath = CurrentPath.Substring(0, CurrentPath.LastIndexOf("\\"));
            CurrentPath = CurrentPath.Substring(0, CurrentPath.LastIndexOf("\\"));
            CurrentPath = CurrentPath.Substring(0, CurrentPath.LastIndexOf("\\"));
            var startInfo = new ProcessStartInfo
            {
                WindowStyle = ProcessWindowStyle.Normal,
                ErrorDialog = true,
                LoadUserProfile = true,
                CreateNoWindow = false,
                UseShellExecute = false,
                RedirectStandardInput = true,
                Arguments = string.Format("/path:\"{0}\" /port:{1}", CurrentPath + AppLocation, Port)
            };

            var programfiles = string.IsNullOrEmpty(startInfo.EnvironmentVariables["programfiles"])
                                ? startInfo.EnvironmentVariables["programfiles(x86)"]
                                : startInfo.EnvironmentVariables["programfiles"];

            startInfo.FileName = programfiles + "\\IIS Express\\iisexpress.exe";

            try
            {
                _iisProcess = new Process { StartInfo = startInfo };
                _iisProcess.Start();

                _iisProcess.WaitForExit();
                return;
            }
            catch (Exception e)
            {
                //_iisProcess.CloseMainWindow();
                //_iisProcess.Dispose();
            }
        }

        private bool IsElementPresent(By by)
        {
            try
            {
                driver.FindElement(by);
                return true;
            }
            catch (NoSuchElementException)
            {
                return false;
            }
        }

        private bool IsAlertPresent()
        {
            try
            {
                driver.SwitchTo().Alert();
                return true;
            }
            catch (NoAlertPresentException)
            {
                return false;
            }
        }

        private string CloseAlertAndGetItsText()
        {
            try
            {
                IAlert alert = driver.SwitchTo().Alert();
                string alertText = alert.Text;
                if (acceptNextAlert)
                {
                    alert.Accept();
                }
                else
                {
                    alert.Dismiss();
                }
                return alertText;
            }
            finally
            {
                acceptNextAlert = true;
            }
        }

    }
}
