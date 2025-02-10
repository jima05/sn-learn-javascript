//
// L14S01 - Basic GlideQuery Usage
//

// Use GlideQuery to retrieve active incidents with high priority.
new GlideQuery('incident')
    .where ('active', true)
    .where ('priority', 1)
    .select('number', 'short_description')
    .forEach(function (incident) {
        gs.info('Incident ' + incident.number + ': ' + incident.short_description);
    });

// Fetching incidents and sorting by creation da
new GlideQuery('incident')
	.where('active',true)
	.where('priority', '>', 2)
	.orderBy('sys_created_on')
	.limit(10)
	.select('number','sys_created_on')
	.forEach(function (incident){
		gs.info('Incident: '+ incident.number + ' Was created on: ' + incident.sys_created_on);
	});

// Using GlideQuery to update records.
var update = new global.GlideQuery('sys_user')
	.where('active',false)
	.where('lastname','Wani')
	.updateMultiple({active:true});

	// Using GlideQuery to insert new records.
	var jima = new global.GlideQuery('sys_user')
		.insert({first_name:'Jima',last_name:'Wani'})
		.get();
