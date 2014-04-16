// http://emberjs.com/guides/models/using-the-store/

App.ApplicationAdapter = DS.RESTAdapter.extend({
  	host: 'http://0.0.0.0:3000',
  	namespace: 'api/v1'
});


//App.ApplicationAdapter = DS.RESTAdapter;
