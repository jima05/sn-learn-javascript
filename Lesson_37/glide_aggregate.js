//Counting in Glide Record

var gr= new GlideRecord('incident');
gr.addQuery('priority',1);
gr.query();

gs.info('Count of High Priority Incidents : '+ gr.getRowCount());

//Counting in GlideAggregate
var ga= new GlideAggregate('incident');
ga.addAggregate('COUNT');
ga.addQuery('priority',1);
ga.query();

if(ga.next()){
gs.info('Count of High Priority Incidents : '+ ga.getAggregate('COUNT'));
}

//Sum in GlideAggregate
var ga= new GlideAggregate('incident');
ga.addAggregate('SUM','reassignment_count');
ga.addQuery('reassignment_count','!=','0');
ga.query();

if(ga.next()){
gs.info('Total reassignments on Incidents : '+ ga.getAggregate('SUM','reassignment_count'));
}

//Counting in GlideAggregate by categories
var ga= new GlideAggregate('incident');
ga.groupBy('category');
ga.addAggregate('COUNT');
ga.query();

while(ga.next()){
gs.info('Category: '+ga.category + '- count: ' + ga.getAggregate('COUNT'));
}

//exercise
var ga= new GlideAggregate('incident');
ga.groupBy('assignment_group');
ga.addAggregate('AVG','priority');
ga.query();

while(ga.next()){
gs.info('Average Priority for : '+ ga.getDisplayValue('assignment_group') + ' : ' + ga.getAggregate('AVG','priority');
}
