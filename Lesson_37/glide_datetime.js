//Date
var gd= new GlideDate();
gs.info(gd); // Returns Date

//Time
var gt= new GlideTime();
gs.info(gt); // Returns Date and Time

//DateTime
var gdt= new GlideDateTime();
gs.info(gdt); // Returns Date and Time

//Adding Days
gdt.addDaysLocalTime(5);
gs.info(gdt); // Returns Date and Time
gs.info(gdt.getLocalDate().getByFormat('dd-MM-yyyy')); // Returns Only Date in a different format;
gs.info(gdt.getLocalTime().getByFormat('HH:mm:ss')); // Returns Time in my specific format


//Adding time // Time is added by milliseconds
gt.add(5000000);
gs.info(gt); // Returns Date and Added-Time

gt.add(-50000000);
gs.info(gt); // Returns Date and Reduced-Time


//Comparing Date
var gdtStart = new GlideDateTime('2025-01-31T08:30:00');
var gdtEnd = new GlideDateTime('2025-01-31T09:30:00');

if(gdtStart.before(gdtEnd)){
	gs.info('The Start is before the End');
}

// TimeZone Conversion
var gdtEA = new GlideDateTime();
gs.info(gdtEA); // Returns Date and Time

gdtEA.convertTimeZone('GMT+3','GMT');

gs.info(gdtEA.getDisplayValue());






