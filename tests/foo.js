module.exports = {
  'Demo test Google' : function (client) {
	  
	const google = client.page.google();
    google
      .navigate()
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]', () => client.pause(1000))
      .assert.containsText('#main', 'Night Watch', () => client.end());
  }
};