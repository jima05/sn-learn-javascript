//
// L13S01 - Manipulating field values
//

// Set the value of a field.
g_form.setValue('short_description', 'This is a dynamic description');

// Get the value from a field.
var urgency = 'The urgency is ' + g_form.getValue('urgency');
g_form.setValue('short_description', urgency);

// Combining into one so that you don't lose the original short_description
g_form.setValue('short_description', g_form.getValue('short_description') + urgency);

//
// L13S02 - Field attributes
//

// Make a field read-only.
g_form.setReadOnly('assignment_group', true);

// Hide a field.
g_form.setDisplay('impact', false);
