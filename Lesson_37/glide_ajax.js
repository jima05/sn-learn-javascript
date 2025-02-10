//
// L12S01 - Setting up the client side
//

// Client-side script to call a server-side script include named 'MyServerCode'.
var ga = new GlideAjax('MyServerCode');
ga.addParam('sysparm_name', 'getServerTime');
ga.getXML(handleResponse);

function handleResponse(response) {
  var serverTime = response.responseXML.documentElement.getAttribute("answer");
  alert("Server time is: " + serverTime);

//
// L12S02 - Setting up the server side
//

// Server-side Script Include that corresponds to the client call.
var MyServerCode = Class.create();
MyServerCode.prototype = Object.extendsObject(AbstractAjaxProcessor, {

  getServerTime: function() {
    return new GlideDateTime().getDisplayValue();
  },

  type: 'MyServerCode'
});
