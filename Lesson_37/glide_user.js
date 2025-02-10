//
// L11S01 - User information
//

// Obtain an instance of the current user.
var user = gs.getUser();

// Display some basic information.
gs.info('Display Name: ' + user.getDisplayName());
gs.info('First Name: ' + user.getFirstName());
gs.info('Last Name: ' + user.getLastName());
gs.info('Username: ' + user.getName());
gs.info('User ID: ' + user.getID());

gs.info('Has ITIL Role: ' + user.hasRole('itil'));
gs.info('Company ID: ' + user.getCompanyID());
gs.info('Email: ' + user.getEmail());
gs.info('My group IDs: ' + user.getMyGroups());
gs.info('My roles: ' + user.getRoles());
gs.info('My explicitly assigned roles: ' + user.getUserRoles());
gs.info('Is in Help Desk group: ' + user.isMemberOf('Help Desk'));

// Exercise Check if user has admin role
if(user.hasRole('admin')){
	gs.info('Yes')
}
