Feature: MyAccount-Login 

Scenario Outline: Login with Valid Username and Password 
	Given Open Browser and StartApplication "https://www.facebook.com/" 
	When Enter Login Credentials "<Username>" and "<password>" 
	Then Click on Login Button 
	And VerifyName Displayed 
	And Clik on Logout 
	Then Close Browser 
	
	Examples: 
		|Username				|password|
		|inampudivenki@gmail.com|Virama#123|
		|vcinampudi@gmail.com	|Virama#123|